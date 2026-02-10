export default function TipsList({ tips }: { tips: string[] }) {
  return (
    <ol className="space-y-3">
      {tips.map((tip, i) => (
        <li key={i} className="flex gap-3">
          <span className="shrink-0 w-7 h-7 bg-accent/20 text-accent-dark rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
          <span className="text-gray-700 pt-0.5">{tip}</span>
        </li>
      ))}
    </ol>
  );
}
