// Pings IndexNow (Bing, Yandex, Naver, Seznam, Yep) with every URL in the live sitemap.
//
// WHY (2026-11-13): Google indexing was fixed in August, but Bing had ZERO pages of
// stridemind.app indexed ("There are no results" for site:stridemind.app). ChatGPT
// search, Copilot and DuckDuckGo are widely observed to draw on Bing's index (OpenAI
// does not name its provider, so treat that as a strong working assumption, not fact).
// Google ignores IndexNow, so this is the Bing-side counterpart to Search Console.
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
