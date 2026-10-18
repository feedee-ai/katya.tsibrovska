import json,sys,os,urllib.request,concurrent.futures as cf
src,outmd,mediadir=sys.argv[1:4]
posts=json.load(open(src))
posts.sort(key=lambda p:p.get('timestamp') or '',reverse=True)
jobs=[];lines=[]
for p in posts:
    sc=p['shortCode'];files=[]
    items=[]
    if p.get('childPosts'):
        for c in p['childPosts']:
            items.append((c.get('videoUrl'),c.get('displayUrl')))
    elif p.get('images'):
        for u in p['images']: items.append((None,u))
    else: items.append((p.get('videoUrl'),p.get('displayUrl')))
    if p.get('videoUrl') and not p.get('childPosts'): items=[(p['videoUrl'],p.get('displayUrl'))]
    for i,(v,d) in enumerate(items):
        if d: f=f"{sc}-{i}.jpg";jobs.append((d,f));files.append(f)
        if v: f=f"{sc}-{i}.mp4";jobs.append((v,f));files.append(f)
    lines.append(f"## {p.get('timestamp','')[:10]} · {p.get('type')} · {p.get('productType')} · ♥{p.get('likesCount')} 💬{p.get('commentsCount')} ▶{p.get('videoViewCount')}\n{p.get('url')}\n\n{(p.get('caption') or '').strip()}\n\nfiles: {', '.join(files)}\n")
    for c in (p.get('latestComments') or [])[:8]:
        lines.append(f"> @{c.get('ownerUsername')}: {c.get('text')}")
    lines.append('')
open(outmd,'w').write('\n'.join(lines))
os.makedirs(mediadir,exist_ok=True)
def dl(j):
    u,f=j;path=os.path.join(mediadir,f)
    if os.path.exists(path):return
    try:
        req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0'})
        open(path,'wb').write(urllib.request.urlopen(req,timeout=60).read())
    except Exception as e: print('fail',f,e)
with cf.ThreadPoolExecutor(16) as ex: list(ex.map(dl,jobs))
print(len(jobs),'jobs')
