import { useEffect } from 'react';

export default function SEO({ title, description, schema }: { title: string; description: string; schema?: object }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (meta) meta.content = description;
    else { meta = document.createElement('meta'); meta.name = 'description'; meta.content = description; document.head.appendChild(meta); }
    if (schema) {
      let s = document.querySelector('#schema-ld') as HTMLScriptElement;
      if (!s) { s = document.createElement('script'); s.id = 'schema-ld'; s.type = 'application/ld+json'; document.head.appendChild(s); }
      s.textContent = JSON.stringify(schema);
    }
    return () => { const s = document.querySelector('#schema-ld'); if (s) s.remove(); };
  }, [title, description, schema]);
  return null;
}
