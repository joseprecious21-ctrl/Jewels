import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface PlaceholderFrameProps {
  label?: string;
  hint?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  className?: string;
  tag?: string;
}

export const PlaceholderFrame: React.FC<PlaceholderFrameProps> = ({
  label = 'Add screenshot here',
  hint = 'Verified screenshot placeholder — replace with actual client data or GSC/GBP report',
  aspectRatio = 'video',
  className = '',
  tag,
}) => {
  const aspectClass = 
    aspectRatio === 'video' ? 'aspect-video' :
    aspectRatio === 'square' ? 'aspect-square' :
    aspectRatio === 'portrait' ? 'aspect-4/3' :
    aspectRatio === 'wide' ? 'aspect-21/9' : '';

  const isBefore = tag?.toLowerCase().includes('before');
  const isAfter = tag?.toLowerCase().includes('after');

  const tagStyle = isBefore
    ? 'bg-[var(--alert)]/10 text-[var(--alert)] border-[var(--alert)]/40'
    : isAfter
    ? 'bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/40'
    : 'bg-[var(--card)] text-[var(--gold)] border-[var(--line)]';

  return (
    <div 
      className={`relative w-full ${aspectClass} rounded-xl border border-dashed border-[var(--line)] bg-[var(--card)]/60 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[var(--gold)]/50 group overflow-hidden ${className}`}
      role="region"
      aria-label={label}
    >
      {/* Background subtle mesh grid pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(201, 162, 39, 0.25) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {tag && (
        <div className={`absolute top-3 left-3 text-sm font-sans tracking-wider uppercase px-2.5 py-1 rounded border ${tagStyle}`}>
          {tag}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center max-w-md px-4">
        <div className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--line)] flex items-center justify-center text-[var(--gold)] mb-3 group-hover:scale-105 group-hover:border-[var(--gold)]/40 transition-transform">
          <ImageIcon className="w-5 h-5 stroke-[1.5]" />
        </div>
        
        <p className="text-sm font-medium text-[var(--white)] group-hover:text-[var(--gold-hover)] transition-colors">
          {label}
        </p>
        
        {hint && (
          <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
            {hint}
          </p>
        )}

        <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-sans text-[var(--muted)] bg-[var(--ink)] px-2.5 py-0.5 rounded border border-[var(--line)]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
          <span>[SCREENSHOT PLACEHOLDER]</span>
        </div>
      </div>
    </div>
  );
};
