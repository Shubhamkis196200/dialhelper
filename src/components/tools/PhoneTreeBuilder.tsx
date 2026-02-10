import { useState } from 'react';

interface Node { id: string; label: string; action: string; children: string[]; }

export default function PhoneTreeBuilder() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: '1', label: 'Welcome', action: 'Press 1 for Sales, Press 2 for Support', children: ['2', '3'] },
    { id: '2', label: 'Sales', action: 'Transfer to Sales Team', children: [] },
    { id: '3', label: 'Support', action: 'Press 1 for Billing, Press 2 for Technical', children: ['4', '5'] },
    { id: '4', label: 'Billing', action: 'Transfer to Billing Dept', children: [] },
    { id: '5', label: 'Technical', action: 'Transfer to Tech Support', children: [] },
  ]);
  const [sel, setSel] = useState<string | null>(null);
  const [newLabel, setNewLabel] = useState('');
  const [newAction, setNewAction] = useState('');

  const addChild = (parentId: string) => {
    const id = String(Date.now());
    setNodes([...nodes.map(n => n.id === parentId ? { ...n, children: [...n.children, id] } : n), { id, label: newLabel || 'New Node', action: newAction || 'Action', children: [] }]);
    setNewLabel(''); setNewAction('');
  };

  const removeNode = (id: string) => {
    setNodes(nodes.filter(n => n.id !== id).map(n => ({ ...n, children: n.children.filter(c => c !== id) })));
    if (sel === id) setSel(null);
  };

  const renderNode = (id: string, depth: number): any => {
    const node = nodes.find(n => n.id === id);
    if (!node) return null;
    return (
      <div key={id} className={`ml-${Math.min(depth * 4, 16)}`} style={{ marginLeft: depth * 24 }}>
        <div onClick={() => setSel(id)} className={`border rounded-lg p-3 mb-2 cursor-pointer transition-all ${sel === id ? 'border-primary bg-blue-50 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-semibold text-gray-900">{node.label}</span>
              <span className="text-xs text-gray-400 ml-2">#{node.id.slice(-4)}</span>
            </div>
            {depth > 0 && <button onClick={e => { e.stopPropagation(); removeNode(id); }} className="text-red-400 hover:text-red-600 text-sm">✕</button>}
          </div>
          <p className="text-sm text-gray-500 mt-1">{node.action}</p>
        </div>
        {node.children.map(cid => renderNode(cid, depth + 1))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-4 min-h-[200px]">
        {nodes.length > 0 ? renderNode(nodes[0].id, 0) : <p className="text-gray-400 text-center py-8">Start building your phone tree</p>}
      </div>
      {sel && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Add Child to "{nodes.find(n => n.id === sel)?.label}"</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input type="text" value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="Label (e.g., Billing)" className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            <input type="text" value={newAction} onChange={e => setNewAction(e.target.value)} placeholder="Action (e.g., Transfer to...)" className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <button onClick={() => addChild(sel)} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm">Add Node</button>
        </div>
      )}
    </div>
  );
}
