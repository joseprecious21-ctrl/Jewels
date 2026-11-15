import React from 'react';

export type BrandType = 
  | 'email' 
  | 'whatsapp' 
  | 'instagram' 
  | 'linkedin' 
  | 'tiktok' 
  | 'fiverr' 
  | 'upwork' 
  | 'osdire'
  | 'clutch'
  | 'sortlist';

interface BrandIconProps {
  brand: BrandType;
  size?: number;
  className?: string;
  variant?: 'gold-hover' | 'brand' | 'white' | 'currentColor';
}

/**
 * Official Brand Icons & Logos Component
 * Inline SVGs for all official Jewels SEO contact channels and platforms.
 */
export const BrandIcon: React.FC<BrandIconProps> = ({
  brand,
  size = 24,
  className = '',
  variant = 'currentColor',
}) => {
  // Determine variant-specific classes
  let colorClasses = '';

  if (variant === 'gold-hover') {
    switch (brand) {
      case 'whatsapp':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#25D366] group-focus-visible:text-[#25D366] motion-reduce:transition-none';
        break;
      case 'instagram':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#E4405F] group-focus-visible:text-[#E4405F] motion-reduce:transition-none';
        break;
      case 'linkedin':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#0A66C2] group-focus-visible:text-[#0A66C2] motion-reduce:transition-none';
        break;
      case 'tiktok':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-white group-focus-visible:text-white group-hover:[filter:drop-shadow(-1.5px_-1px_0_#25F4EE)_drop-shadow(1.5px_1px_0_#FE2C55)] group-focus-visible:[filter:drop-shadow(-1.5px_-1px_0_#25F4EE)_drop-shadow(1.5px_1px_0_#FE2C55)] motion-reduce:transition-none';
        break;
      case 'fiverr':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#1DBF73] group-focus-visible:text-[#1DBF73] motion-reduce:transition-none';
        break;
      case 'upwork':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#14A800] group-focus-visible:text-[#14A800] motion-reduce:transition-none';
        break;
      case 'email':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#E2C25A] group-focus-visible:text-[#E2C25A] motion-reduce:transition-none';
        break;
      case 'osdire':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#0052FF] group-focus-visible:text-[#0052FF] motion-reduce:transition-none';
        break;
      case 'clutch':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#E2C25A] group-focus-visible:text-[#E2C25A] motion-reduce:transition-none';
        break;
      case 'sortlist':
        colorClasses = 'text-[#C9A227] transition-all duration-200 group-hover:text-[#E2C25A] group-focus-visible:text-[#E2C25A] motion-reduce:transition-none';
        break;
    }
  } else if (variant === 'brand') {
    switch (brand) {
      case 'whatsapp':
        colorClasses = 'text-[#25D366]';
        break;
      case 'instagram':
        colorClasses = 'text-[#E4405F]';
        break;
      case 'linkedin':
        colorClasses = 'text-[#0A66C2]';
        break;
      case 'tiktok':
        colorClasses = 'text-black [filter:drop-shadow(-1px_-0.8px_0_#25F4EE)_drop-shadow(1px_0.8px_0_#FE2C55)]';
        break;
      case 'fiverr':
        colorClasses = 'text-[#1DBF73]';
        break;
      case 'upwork':
        colorClasses = 'text-[#14A800]';
        break;
      case 'email':
        colorClasses = 'text-[#C9A227]';
        break;
      case 'osdire':
        colorClasses = 'text-[#0052FF]';
        break;
      case 'clutch':
        colorClasses = 'text-[#142F48]';
        break;
      case 'sortlist':
        colorClasses = 'text-[#1F3DFA]';
        break;
    }
  } else if (variant === 'white') {
    colorClasses = 'text-white';
  }

  const combinedClass = `${colorClasses} ${className}`.trim();

  switch (brand) {
    case 'email':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      );

    case 'whatsapp':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      );

    case 'instagram':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );

    case 'tiktok':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.76 1.23-.04 2.37-.73 2.89-1.84.34-.73.4-1.57.41-2.38.03-4.57.01-9.14.02-13.71z" />
        </svg>
      );

    case 'fiverr':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M23.004 13.889c0 4.542-2.92 7.744-7.534 7.744h-5.068v-4.048h4.747c2.148 0 3.498-1.286 3.498-3.411 0-2.072-1.35-3.335-3.498-3.335h-4.747v-4.048h5.068c4.614 0 7.534 3.202 7.534 7.744zM4.996 2.367c1.378 0 2.498 1.12 2.498 2.498s-1.12 2.498-2.498 2.498-2.498-1.12-2.498-2.498 1.12-2.498 2.498-2.498zm-2.498 6.474h4.996v12.792H2.498V8.841z" />
        </svg>
      );

    case 'upwork':
      return (
        <svg
          viewBox="0 0 24 24"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.229l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06c1.492 0 2.703 1.212 2.703 2.703c-.001 1.489-1.212 2.704-2.704 2.704zm0-8.14c-3.133 0-5.32 2.015-6.02 4.417c-1.396-2.065-2.449-4.546-2.738-5.435H6.26v6.866c0 1.956-1.59 3.546-3.546 3.546c-1.956 0-3.546-1.59-3.546-3.546V4h-2.714v6.866c0 3.452 2.808 6.26 6.26 6.26c3.452 0 6.26-2.808 6.26-6.26v-1.748c.328.784.808 1.815 1.48 2.898l-2.023 9.544h2.793l1.378-6.502c1.077.839 2.378 1.348 3.713 1.348c3.926 0 7.119-3.193 7.119-7.119c0-3.926-3.193-7.119-7.119-7.119z" />
        </svg>
      );

    case 'osdire':
      return (
        /* Replace with the official Osdire logo */
        <svg
          viewBox="0 0 32 32"
          width={size}
          height={size}
          fill="currentColor"
          className={combinedClass}
          aria-hidden="true"
        >
          {/* Official Osdire glyph from /public/logos/osdire.svg */}
          <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm0 18.5c-3.59 0-6.5-2.91-6.5-6.5s2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5z" />
          <circle cx="16" cy="16" r="2.8" />
        </svg>
      );

    case 'clutch':
      if (variant === 'gold-hover') {
        return (
          /* Replace with the official logo */
          <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            className={combinedClass}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9.5" strokeWidth="1.8" />
            <path
              d="M14.5 8.8a4 4 0 1 0 0 6.4"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        );
      }
      return (
        /* Replace with the official logo */
        <img
          src="/logos/clutch.svg"
          alt="Clutch logo"
          width={size}
          height={size}
          className={`${combinedClass} object-contain rounded-full`}
        />
      );

    case 'sortlist':
      if (variant === 'gold-hover') {
        return (
          /* Replace with the official logo */
          <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="currentColor"
            className={combinedClass}
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9.5" strokeWidth="1.8" />
            <path
              d="M14 9.2a2.2 2.2 0 0 0-4 0c0 2.2 4 1.8 4 4a2.2 2.2 0 0 1-4 0"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      }
      return (
        /* Replace with the official logo */
        <img
          src="/logos/sortlist.svg"
          alt="Sortlist logo"
          width={size}
          height={size}
          className={`${combinedClass} object-contain rounded-full`}
        />
      );

    default:
      return null;
  }
};

interface BrandBadgeProps {
  brand: BrandType;
  iconSize?: number;
  badgeSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Light circular or rounded badge showing the official brand color icon
 * Used on Contact page cards and Freelance Profiles page to ensure clear visibility on black backgrounds
 */
export const BrandBadge: React.FC<BrandBadgeProps> = ({
  brand,
  iconSize,
  badgeSize = 'md',
  className = '',
}) => {
  // Dimension mappings
  let sizeClasses = 'w-11 h-11'; // default ~44px
  let defaultIconSize = 22;

  if (badgeSize === 'sm') {
    sizeClasses = 'w-10 h-10'; // 40px
    defaultIconSize = 20;
  } else if (badgeSize === 'lg') {
    sizeClasses = 'w-12 h-12'; // 48px
    defaultIconSize = 24;
  }

  const effectiveIconSize = iconSize ?? defaultIconSize;

  if (brand === 'clutch' || brand === 'sortlist') {
    const isClutch = brand === 'clutch';
    const logoSrc = isClutch ? '/logos/clutch.svg' : '/logos/sortlist.svg';
    const altText = isClutch ? 'Clutch logo' : 'Sortlist logo';

    return (
      <div
        className={`inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm border border-neutral-200/80 shrink-0 group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none overflow-hidden ${sizeClasses} ${className}`}
        aria-hidden="true"
      >
        {/* Replace with the official logo */}
        <img
          src={logoSrc}
          alt={altText}
          width={effectiveIconSize + 8}
          height={effectiveIconSize + 8}
          className="w-full h-full p-1.5 object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 shadow-sm border border-neutral-200/80 shrink-0 group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none ${sizeClasses} ${className}`}
      aria-hidden="true"
    >
      <BrandIcon brand={brand} size={effectiveIconSize} variant="brand" />
    </div>
  );
};
