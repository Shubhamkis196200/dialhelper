import { writeFileSync } from 'fs';
const BASE = 'https://dialhelper.com';
const companies = ['amazon','walmart','att','verizon','t-mobile','comcast-xfinity','bank-of-america','chase','wells-fargo','capital-one','delta-airlines','united-airlines','american-airlines','southwest-airlines','apple','microsoft','google','netflix','spectrum','cox-communications','target','usps','ups','fedex','state-farm','geico','progressive','american-express','best-buy'];
const cats = ['telecom','banking','airlines','retail','insurance','tech','utilities','government','shipping','streaming'];
const blogs = ['how-to-reach-human-amazon','best-time-to-call-customer-service','10-tricks-reduce-hold-time','how-to-bypass-phone-menu-comcast','social-media-customer-service'];
const pages = ['', '/about', '/contact', '/blog', '/search', ...companies.map(s => `/company/${s}`), ...cats.map(s => `/category/${s}`), ...blogs.map(s => `/blog/${s}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>${BASE}${p}</loc><changefreq>weekly</changefreq></url>`).join('\n')}\n</urlset>`;
writeFileSync('public/sitemap.xml', sitemap);
console.log(`Generated sitemap with ${pages.length} URLs`);
