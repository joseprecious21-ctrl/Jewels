import React, { useState } from 'react';

interface BlogProfileImageProps {
  src?: string;
  alt: string;
  fallbackInitial: string;
  size?: 'card' | 'article';
  lazy?: boolean;
  className?: string;
}

/**
 * Profile-style circular image for blog posts with 2px gold ring and 4px dark gap.
 * Includes fallback to letter initial if image fails to load.
 * Respects prefers-reduced-motion on hover lift and glow.
 */
export const BlogProfileImage: React.FC<BlogProfileImageProps> = ({
  src,
  alt,
  fallbackInitial,
  size = 'card',
  lazy = true,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isArticle = size === 'article';
  const sizeClasses = isArticle ? 'w-[72px] h-[72px]' : 'w-[88px] h-[88px]';
  const intrinsicSize = isArticle ? 144 : 176;

  // Base ring styling: 4px #0A0A0A dark gap + 2px #C9A227 gold ring
  // Hover adds subtle gold glow around the ring
  const baseShadow = '0 0 0 4px #0A0A0A, 0 0 0 6px #C9A227';
  const hoverShadow = '0 0 0 4px #0A0A0A, 0 0 0 6px #C9A227, 0 0 20px rgba(201,162,39,0.45)';

  if (!src || hasError) {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${sizeClasses} rounded-full bg-[#0A0A0A] aspect-square shrink-0 flex items-center justify-center transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:group-hover:-translate-y-1 ${className}`}
        style={{
          boxShadow: isHovered ? hoverShadow : baseShadow,
        }}
        aria-label={alt}
        role="img"
      >
        <span
          className={`font-heading font-bold text-[var(--gold)] select-none ${
            isArticle ? 'text-2xl' : 'text-3xl'
          }`}
        >
          {fallbackInitial}
        </span>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${sizeClasses} rounded-full aspect-square shrink-0 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:group-hover:-translate-y-1 ${className}`}
      style={{
        boxShadow: isHovered ? hoverShadow : baseShadow,
      }}
    >
      <img
        src={src}
        alt={alt}
        width={intrinsicSize}
        height={intrinsicSize}
        loading={lazy ? 'lazy' : 'eager'}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover object-center rounded-full aspect-square block select-none pointer-events-none"
      />
    </div>
  );
};
