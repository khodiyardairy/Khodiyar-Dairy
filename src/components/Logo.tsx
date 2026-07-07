import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
}

export default function Logo({ size, className = '' }: LogoProps) {
  const style = size ? { 
    width: typeof size === 'number' ? `${size}px` : size, 
    height: typeof size === 'number' ? `${size}px` : size,
    minWidth: typeof size === 'number' ? `${size}px` : size,
    minHeight: typeof size === 'number' ? `${size}px` : size
  } : undefined;

  return (
    <div 
      className={`inline-block bg-white rounded-full p-0.5 shadow-xs shrink-0 select-none overflow-hidden ${className}`}
      style={style}
    >
      <img
        src="/images/khodiyar-dairy-logo.jpeg"
        alt="Shree Khodiyar Dairy & Products"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

