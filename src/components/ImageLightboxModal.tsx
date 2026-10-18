import React, { useEffect, useRef, useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
  title: string;
  triggerElement?: HTMLElement | null;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageAlt,
  title,
  triggerElement,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [imageError, setImageError] = useState(false);

  // Focus management: focus close button when modal opens, return focus to trigger on close
  useEffect(() => {
    if (isOpen) {
      setImageError(false);
      // Lock background scrolling
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Auto-focus close button
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      // Keyboard Esc listener
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
        // Return focus to triggering card or link
        if (triggerElement && typeof triggerElement.focus === 'function') {
          setTimeout(() => {
            triggerElement.focus();
          }, 30);
        }
      };
    }
  }, [isOpen, onClose, triggerElement]);

  if (!isOpen) return null;

  // Click outside to close (clicking the overlay container)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image lightbox: ${title}`}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A0A0A]/90 backdrop-blur-sm transition-opacity duration-200 motion-reduce:transition-none"
    >
      {/* Lightbox Inner Container */}
      <div 
        className="relative max-w-5xl w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-200 motion-reduce:animate-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Title & Gold Close Button */}
        <div className="w-full flex items-center justify-between pb-3 px-1 text-xs font-mono">
          <div className="flex items-center gap-2 text-[var(--muted)] truncate pr-4">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--gold)] shrink-0" />
            <span className="text-[var(--white)] font-medium truncate">{title}</span>
            <span className="hidden sm:inline text-[var(--muted)]">· Press Esc to close</span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--card)] border border-[var(--gold)] text-[var(--gold)] hover:text-[var(--gold-hover)] hover:border-[var(--gold-hover)] hover:bg-[#1E1E1E] transition-colors cursor-pointer shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scaled Image Display Frame without cropping */}
        <div className="relative w-full rounded-2xl border border-[var(--line)] bg-[var(--card)] p-2 sm:p-3 overflow-hidden shadow-2xl flex items-center justify-center max-h-[82vh]">
          {imageError ? (
            <div className="w-full py-20 px-6 flex flex-col items-center justify-center bg-[var(--ink)] rounded-xl border border-[var(--gold)]/30 text-center">
              <ImageIcon className="w-12 h-12 text-[var(--gold)]/60 mb-3" />
              <p className="text-sm font-mono text-[var(--gold)] font-medium">Add screenshot here</p>
              <p className="text-xs text-[var(--muted)] mt-1 font-mono">Image could not be loaded</p>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={imageAlt}
              width={901}
              height={352}
              onError={() => setImageError(true)}
              className="max-h-[76vh] max-w-full w-auto h-auto object-contain rounded-lg shadow-inner select-none"
            />
          )}
        </div>

        {/* Bottom Helper Bar */}
        <div className="w-full pt-3 px-2 flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
          <span>Click outside or press Esc to return</span>
          <span className="text-[var(--gold)]">Jewels SEO Deliverables</span>
        </div>
      </div>
    </div>
  );
};
