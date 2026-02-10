import { useState } from 'react';

// Simple markdown to HTML converter
function md2html(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-4 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-4 mb-2">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>')
    .replace(/^\- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline">$1</a>')
    .replace(/^---$/gm, '<hr class="my-4 border-gray-300" />')
    .replace(/\n/g, '<br />');
}

export default function MarkdownPreview() {
  const [md, setMd] = useState('# Hello World\n\nThis is **bold** and *italic*.\n\n- Item 1\n- Item 2\n\n`inline code`\n\n[Link](https://example.com)');
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Markdown</h3>
        <textarea value={md} onChange={e => setMd(e.target.value)} rows={15} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono text-sm" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Preview</h3>
        <div className="bg-white border border-gray-200 rounded-lg p-4 min-h-[300px] prose" dangerouslySetInnerHTML={{ __html: md2html(md) }} />
      </div>
    </div>
  );
}
