import { useEffect } from 'react';

function setMeta(property: string, content: string, attr = 'property') {
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, property); document.head.appendChild(el); }
  el.content = content;
}

export default function SEO({ title, description, schema, image, url }: { title: string; description: string; schema?: object; image?: string; url?: string }) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description, 'name');

    // Open Graph
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    setMeta('og:site_name', 'DialHelper');
    if (url) setMeta('og:url', url);
    else setMeta('og:url', window.location.href);
    setMeta('og:image', image || 'https://dialhelper.com/og-default.png');

    // Twitter
    setMeta('twitter:card', 'summary_large_image', 'name');
    setMeta('twitter:title', title, 'name');
    setMeta('twitter:description', description, 'name');
    setMeta('twitter:image', image || 'https://dialhelper.com/og-default.png', 'name');

    // JSON-LD
    if (schema) {
      let s = document.querySelector('#schema-ld') as HTMLScriptElement;
      if (!s) { s = document.createElement('script'); s.id = 'schema-ld'; s.type = 'application/ld+json'; document.head.appendChild(s); }
      s.textContent = JSON.stringify(schema);
    }
    return () => { const s = document.querySelector('#schema-ld'); if (s) s.remove(); };
  }, [title, description, schema, image, url]);
  return null;
}
