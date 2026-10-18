// Рендер карточки для мессенджеров: node scripts/og/render.mjs
import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import path from 'path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.goto('file://' + root + '/scripts/og/card.html');
await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
await p.screenshot({ path: root + '/site/assets/og.jpg', type: 'jpeg', quality: 88 });
await b.close();
