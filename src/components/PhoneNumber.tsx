import { Phone } from 'lucide-react';

export default function PhoneNumber({ number, large = false }: { number: string; large?: boolean }) {
  const tel = `tel:+1${number.replace(/\D/g, '')}`;
  return (
    <a href={tel} className={`inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors ${large ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
      <Phone className={large ? 'w-8 h-8' : 'w-5 h-5'} /> {number}
    </a>
  );
}
