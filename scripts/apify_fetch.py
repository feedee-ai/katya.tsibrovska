"""Скачивание медиа Instagram через Apify (приватный актор media-fetch кладёт файлы в KV store),
когда CDN Instagram закрыт сетью среды.
python3 -I scripts/apify_fetch.py <posts-raw.json> <media-dir> [jpg|mp4|all] [shortcode,shortcode...]"""
import json, sys, os, time, urllib.request, urllib.parse
src, out, kind = sys.argv[1], sys.argv[2], (sys.argv[3] if len(sys.argv) > 3 else 'jpg')
only = set(sys.argv[4].split(',')) if len(sys.argv) > 4 and sys.argv[4] else None
TOK = os.environ['APIFY_TOKEN']
def api(path, data=None, method=None, raw=False):
    req = urllib.request.Request('https://api.apify.com/v2' + path, method=method,
        data=json.dumps(data).encode() if data is not None else None,
        headers={'Authorization': 'Bearer ' + TOK, 'Content-Type': 'application/json'})
    r = urllib.request.urlopen(req, timeout=120).read()
    return r if raw else json.loads(r)
posts = json.load(open(src))
jobs = []
for p in posts:
    sc = p['shortCode']
    if only and sc not in only: continue
    items = [(c.get('videoUrl'), c.get('displayUrl')) for c in p.get('childPosts') or []]
    if not items: items = [(p.get('videoUrl'), p.get('displayUrl'))]
    for i, (v, d) in enumerate(items):
        if d and kind in ('jpg', 'all'): jobs.append((d, f'{sc}-{i}.jpg'))
        if v and kind in ('mp4', 'all'): jobs.append((v, f'{sc}-{i}.mp4'))
os.makedirs(out, exist_ok=True)
jobs = [j for j in jobs if not os.path.exists(os.path.join(out, j[1]))]
print(len(jobs), 'files to fetch'); sys.stdout.flush()
if not jobs: sys.exit()
ACTOR = os.environ.get('MEDIA_ACTOR', 'xkhmFMkC9t2f9cL3o')  # после смены аккаунта: id из scripts/apify_media_fetch/create.py  # приватный актор media-fetch в аккаунте Apify
run = api(f'/acts/{ACTOR}/runs?memory=1024&timeout=1800', {'files': [{'url': u, 'key': k} for u, k in jobs], 'concurrency': 16})['data']
rid, kv = run['id'], run['defaultKeyValueStoreId']
print('run', rid); sys.stdout.flush()
while True:
    st = api(f'/actor-runs/{rid}')['data']['status']
    if st not in ('READY', 'RUNNING'): break
    time.sleep(10)
print('status', st)
ok = 0
for u, k in jobs:
    try:
        b = api(f'/key-value-stores/{kv}/records/{urllib.parse.quote(k)}', raw=True)
        if len(b) > 1000: open(os.path.join(out, k), 'wb').write(b); ok += 1
    except Exception as e: pass
print('saved', ok, 'of', len(jobs))
