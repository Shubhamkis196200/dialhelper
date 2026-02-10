import { useState } from 'react';

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace('#', '').match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  return m ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)] : null;
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export default function ColorPickerConverter() {
  const [hex, setHex] = useState('#2563EB');
  const rgb = hexToRgb(hex);
  const hsl = rgb ? rgbToHsl(...rgb) : null;

  return (
    <div className="space-y-6">
      <div className="flex gap-4 items-center flex-wrap">
        <input type="color" value={hex} onChange={e => setHex(e.target.value)} className="w-16 h-16 rounded-lg cursor-pointer border-0" />
        <input type="text" value={hex} onChange={e => setHex(e.target.value)} className="px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none font-mono w-32" />
      </div>
      <div className="w-full h-24 rounded-xl border" style={{ backgroundColor: hex }} />
      {rgb && hsl && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border"><div className="text-xs text-gray-400 uppercase mb-1">HEX</div><div className="font-mono font-bold">{hex.toUpperCase()}</div><button onClick={() => navigator.clipboard.writeText(hex)} className="text-xs text-primary mt-1">Copy</button></div>
          <div className="bg-gray-50 rounded-lg p-4 border"><div className="text-xs text-gray-400 uppercase mb-1">RGB</div><div className="font-mono font-bold">rgb({rgb.join(', ')})</div><button onClick={() => navigator.clipboard.writeText(`rgb(${rgb.join(', ')})`)} className="text-xs text-primary mt-1">Copy</button></div>
          <div className="bg-gray-50 rounded-lg p-4 border"><div className="text-xs text-gray-400 uppercase mb-1">HSL</div><div className="font-mono font-bold">hsl({hsl[0]}, {hsl[1]}%, {hsl[2]}%)</div><button onClick={() => navigator.clipboard.writeText(`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`)} className="text-xs text-primary mt-1">Copy</button></div>
        </div>
      )}
    </div>
  );
}
