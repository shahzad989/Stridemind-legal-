// Pings IndexNow (Bing, Yandex, Naver, Seznam, Yep) with every URL in the live sitemap.
//
// WHY (2026-11-13): Bing Webmaster Tools was already set up for stridemind.app (data
// since August, 19 Copilot citations in 3 months) but listed "Set up IndexNow" as its
// top recommendation. IndexNow tells Bing about a changed page right away instead of
// waiting for a crawl, which matters because Bing also flags this site as having
// limited crawl capacity. ChatGPT search, Copilot and DuckDuckGo are widely observed to
// draw on Bing's index (OpenAI does not name its provider, so treat that as likely, not
// fact). Google ignores IndexNow; Search Console is the Google-side counterpart.
//
// The key file public/d75dcdee6bc35b51dd8d86d7688dcdb5.txt proves we own the domain. Do not delete or rename
// it: the key is only valid while that file is served at the site root.
//
// Run after any deploy that adds or meaningfully changes a page:
//   node scripts/indexnow.mjs
const HOST = 'stridemind.app';
const KEY = 'd75dcdee6bc35b51dd8d86d7688dcdb5';

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error('Sitemap returned no URLs, nothing submitted.');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
// 200 = accepted, 202 = accepted but key not yet verified (normal on the first ping).
console.log(`IndexNow: HTTP ${res.status} for ${urlList.length} URLs`);
if (res.status >= 400) console.log(await res.text());
