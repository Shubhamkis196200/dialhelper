import { useState, useRef } from 'react';

const DTMF_FREQS: Record<string, [number, number]> = {
  '1': [697, 1209], '2': [697, 1336], '3': [697, 1477], 'A': [697, 1633],
  '4': [770, 1209], '5': [770, 1336], '6': [770, 1477], 'B': [770, 1633],
  '7': [852, 1209], '8': [852, 1336], '9': [852, 1477], 'C': [852, 1633],
  '*': [941, 1209], '0': [941, 1336], '#': [941, 1477], 'D': [941, 1633],
};

const keys = [['1','2','3'],['4','5','6'],['7','8','9'],['*','0','#']];

export default function DtmfToneGenerator() {
  const [active, setActive] = useState<string | null>(null);
  const [sequence, setSequence] = useState('');
  const ctxRef = useRef<AudioContext | null>(null);

  const playTone = (key: string) => {
    const freqs = DTMF_FREQS[key];
    if (!freqs) return;
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    const ctx = ctxRef.current;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();
    osc1.frequency.value = freqs[0];
    osc2.frequency.value = freqs[1];
    gain.gain.value = 0.3;
    osc1.connect(gain); osc2.connect(gain); gain.connect(ctx.destination);
    osc1.start(); osc2.start();
    setActive(key);
    setSequence(s => s + key);
    setTimeout(() => { osc1.stop(); osc2.stop(); setActive(null); }, 200);
  };

  return (
    <div className="space-y-6 max-w-sm mx-auto">
      <div className="bg-gray-900 rounded-xl p-4 text-center">
        <div className="font-mono text-2xl text-green-400 min-h-[2rem] tracking-widest">{sequence || '—'}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {keys.flat().map(k => (
          <button key={k} onClick={() => playTone(k)} className={`h-16 rounded-xl text-xl font-bold transition-all ${active === k ? 'bg-primary text-white scale-95' : 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:scale-95'}`}>{k}</button>
        ))}
      </div>
      <button onClick={() => setSequence('')} className="w-full py-2 text-sm text-gray-500 hover:text-gray-700">Clear Sequence</button>
    </div>
  );
}
