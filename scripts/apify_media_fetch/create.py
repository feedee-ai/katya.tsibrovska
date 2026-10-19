"""Создаёт (или пересобирает) приватный актор media-fetch в текущем аккаунте Apify ($APIFY_TOKEN).
Актор качает список URL в свой KV store — так обходим закрытые сетью среды CDN (Instagram, Google Drive).
python3 -I scripts/apify_media_fetch/create.py  -> печатает id актора"""
import json, os, urllib.request
TOK = os.environ['APIFY_TOKEN']
def api(path, data=None, method=None):
    req = urllib.request.Request('https://api.apify.com/v2' + path, method=method,
        data=json.dumps(data).encode() if data is not None else None,
        headers={'Authorization': 'Bearer ' + TOK, 'Content-Type': 'application/json'})
    return json.loads(urllib.request.urlopen(req, timeout=300).read())
main = r"""
import { Actor } from 'apify';
await Actor.init();
const { files = [], concurrency = 16 } = (await Actor.getInput()) || {};
const kv = await Actor.openKeyValueStore();
let i = 0, ok = 0, fail = 0;
async function worker() {
  while (i < files.length) {
    const { url, key } = files[i++];
    for (let a = 0; a < 3; a++) {
      try {
        const r = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' } });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const buf = Buffer.from(await r.arrayBuffer());
        await kv.setValue(key, buf, { contentType: r.headers.get('content-type') || 'application/octet-stream' });
        ok++; break;
      } catch (e) { if (a === 2) { fail++; await Actor.pushData({ key, error: String(e) }); } }
    }
  }
}
await Promise.all(Array.from({ length: concurrency }, worker));
await Actor.pushData({ summary: true, ok, fail });
await Actor.exit();
"""
files = [
 {"name": "package.json", "format": "TEXT", "content": json.dumps({"name": "media-fetch", "version": "0.0.1", "type": "module", "dependencies": {"apify": "^3.2.0"}, "scripts": {"start": "node main.js"}})},
 {"name": "main.js", "format": "TEXT", "content": main},
 {"name": "Dockerfile", "format": "TEXT", "content": "FROM apify/actor-node:20\nCOPY package*.json ./\nRUN npm install --omit=dev --no-audit --no-fund\nCOPY . ./\nCMD npm start\n"},
 {"name": ".actor/actor.json", "format": "TEXT", "content": json.dumps({"actorSpecification": 1, "name": "media-fetch", "version": "0.0", "buildTag": "latest"})},
]
mine = api('/acts?my=1&limit=100')['data']['items']
act = next((a for a in mine if a['name'] == 'media-fetch'), None)
ver = {"versionNumber": "0.0", "sourceType": "SOURCE_FILES", "buildTag": "latest", "sourceFiles": files}
if act: api(f"/acts/{act['id']}/versions/0.0", ver, 'PUT'); aid = act['id']
else: aid = api('/acts', {"name": "media-fetch", "isPublic": False, "versions": [ver]})['data']['id']
b = api(f'/acts/{aid}/builds?version=0.0&tag=latest&waitForFinish=240', {}, 'POST')['data']
print(aid, b['status'])
