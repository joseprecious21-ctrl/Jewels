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

  return (
    <div 
      className={`relative w-full ${aspectClass} rounded-xl border border-dashed border-neutral-800 bg-neutral-950/60 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#D4AF37]/50 group overflow-hidden ${className}`}
      role="region"
      aria-label={label}
    >
      {/* Background subtle mesh grid pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(rgba(212, 175, 55, 0.25) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />

      {tag && (
        <div className="absolute top-3 left-3 text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[#D4AF37]">
          {tag}
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center max-w-md px-4">
        <div className="w-12 h-12 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:scale-105 group-hover:border-[#D4AF37]/40 transition-transform">
          <ImageIcon className="w-5 h-5 stroke-[1.5]" />
        </div>
        
        <p className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
          {label}
        </p>
        
        {hint && (
          <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
            {hint}
          </p>
        )}

        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 bg-neutral-900/60 px-2.5 py-0.5 rounded border border-neutral-800/80">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span>[SCREENSHOT PLACEHOLDER]</span>
        </div>
      </div>
    </div>
  );
};
