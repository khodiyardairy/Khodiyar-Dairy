import React, { useState } from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
}

export default function Logo({ size, className = '' }: LogoProps) {
  const [imgSrc, setImgSrc] = useState('/images/khodiyar-dairy-logo.png');
  const [hasFailed, setHasFailed] = useState(false);

  const style = size ? { 
    width: typeof size === 'number' ? `${size}px` : size, 
    height: typeof size === 'number' ? `${size}px` : size,
    minWidth: typeof size === 'number' ? `${size}px` : size,
    minHeight: typeof size === 'number' ? `${size}px` : size
  } : undefined;

  const handleImageError = () => {
    if (imgSrc === '/images/khodiyar-dairy-logo.png') {
      // Try .jpg extension as a secondary candidate
      setImgSrc('/images/khodiyar-dairy-logo.png');
    } else {
      // Both failed, fallback to elegant brand vector
      setHasFailed(true);
    }
  };

  return (
    <div 
      className={`inline-block bg-white rounded-full p-0.5 shadow-xs shrink-0 select-none overflow-hidden ${className}`}
      style={style}
    >
      {!hasFailed ? (
        <img
          src={imgSrc}
          alt="Khodiyar Dairy & Products"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-full"
          onError={handleImageError}
        />
      ) : (
        /* Gorgeous vector emblem backup */
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF9933] to-[#E65100] flex items-center justify-center text-white font-serif font-black shadow-inner">
          <span className="text-[55%] tracking-tighter leading-none select-none">KD</span>
        </div>
      )}
    </div>
  );
}

