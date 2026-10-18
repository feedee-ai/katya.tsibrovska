import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
const [,, url, out, mode='full'] = process.argv;
const b = await chromium.launch();
const logs = [];
for (const [name, vp] of [['d', {width:1440,height:900}], ['m', {width:390,height:844}]]) {
  const p = await b.newPage({ viewport: vp, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
  p.on('console', m => { if (['error','warning'].includes(m.type())) logs.push(`${name} ${m.type()}: ${m.text()}`); });
  p.on('pageerror', e => logs.push(`${name} pageerror: ${e.message}`));
  await p.goto(url, { waitUntil: 'networkidle' });
  await p.waitForTimeout(2600);
  // trigger reveals
  const h = await p.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.waitForTimeout(1500);
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(400);
  const ow = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
  logs.push(`${name} scrollWidth ${ow}`);
  if (mode === 'full') await p.screenshot({ path: `${out}-${name}.png`, fullPage: true });
  else {
    // section screenshots
    const secs = await p.$$('header.nav, main > section, footer');
    let i = 0;
    for (const s of await p.$$('main > section, footer')) { await s.scrollIntoViewIfNeeded(); await p.waitForTimeout(300); await s.screenshot({ path: `${out}-${name}-${String(i++).padStart(2,'0')}.png` }); }
  }
  await p.close();
}
await b.close();
console.log(logs.join('\n'));
