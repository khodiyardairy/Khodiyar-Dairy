import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
}

export default function Logo({ size = 180, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      className={`select-none shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Core Shiny Golden Gradient for base badge */}
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="20%" stopColor="#F9D461" />
          <stop offset="45%" stopColor="#E6B422" />
          <stop offset="70%" stopColor="#F9D461" />
          <stop offset="100%" stopColor="#A67B10" />
        </linearGradient>

        {/* High Contrast Gradient for Ribbon Banner */}
        <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="40%" stopColor="#F1C40F" />
          <stop offset="100%" stopColor="#B38600" />
        </linearGradient>

        {/* Deep Shade Gradient for Ribbon under-folds */}
        <linearGradient id="ribbon-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7E5D02" />
          <stop offset="100%" stopColor="#4A3601" />
        </linearGradient>

        {/* Drop Shadow filter for authentic 3D depth */}
        <filter id="logo-drop-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#3E2723" floodOpacity="0.18" />
        </filter>
        
        {/* Curved Path for Gujarati Text along the top arc */}
        <path id="gujarati-text-path" d="M 105,225 A 145,145 0 0,1 395,225" fill="none" />
      </defs>

      {/* Main Gold Disc with Drop Shadow */}
      <circle
        cx="250"
        cy="225"
        r="170"
        fill="url(#gold-grad)"
        filter="url(#logo-drop-shadow)"
        stroke="#8C6A0D"
        strokeWidth="3"
      />

      {/* Dashed Stitched Border */}
      <circle
        cx="250"
        cy="225"
        r="156"
        fill="none"
        stroke="#735505"
        strokeWidth="2.5"
        strokeDasharray="6,6"
        opacity="0.75"
      />

      {/* Gujarati Header Curved Text: "બાબરા નું ગૌરવ" */}
      <text
        fontFamily="'Inter', 'Shruti', 'Arial', sans-serif"
        fontWeight="900"
        fontSize="34"
        fill="#261803"
        letterSpacing="2"
      >
        <textPath href="#gujarati-text-path" startOffset="50%" textAnchor="middle">
          બાબરા નું ગૌરવ
        </textPath>
      </text>

      {/* Styled white "KD" letters with subtle 3D shadow */}
      <text
        x="250"
        y="250"
        fontFamily="'Montserrat', 'Inter', 'Arial Black', sans-serif"
        fontWeight="900"
        fontSize="145"
        fill="#FFFFFF"
        textAnchor="middle"
        letterSpacing="-6"
        filter="drop-shadow(0px 4px 5px rgba(62,39,35,0.25))"
      >
        KD
      </text>

      {/* Stylish dynamic wave swoosh cutting horizontally across KD */}
      <path
        d="M 115,225 Q 215,170 305,235 T 410,215 Q 295,255 190,215 Z"
        fill="#FFFFFF"
        filter="drop-shadow(0px 3px 2px rgba(62,39,35,0.18))"
      />
      <path
        d="M 185,228 Q 250,210 315,245 Q 250,228 185,228 Z"
        fill="#E6B422"
        opacity="0.85"
      />

      {/* Five Gold Stars Arranged in an Arc underneath KD */}
      <g filter="drop-shadow(0px 2px 2px rgba(62,39,35,0.15))">
        {/* Star Polygon Helper definition */}
        {/* Leftmost Star */}
        <polygon
          points="190,288 193,295 200,295 195,299 197,306 190,302 183,306 185,299 180,295 187,295"
          fill="#FFF4C2"
          stroke="#94710C"
          strokeWidth="1"
        />
        {/* Mid-Left Star */}
        <polygon
          points="220,281 223.5,289 231,289 225,294 227.5,301 220,297 212.5,301 215,294 209,289 216.5,289"
          fill="#FFF4C2"
          stroke="#94710C"
          strokeWidth="1.2"
        />
        {/* Central Star (Largest) */}
        <polygon
          points="250,270 254.5,280 264.5,280 256.5,286 259.5,296 250,290 240.5,296 243.5,286 235.5,280 245.5,280"
          fill="#FFFFFF"
          stroke="#94710C"
          strokeWidth="1.5"
        />
        {/* Mid-Right Star */}
        <polygon
          points="280,281 283.5,289 291,289 285,294 287.5,301 280,297 272.5,301 275,294 269,289 276.5,289"
          fill="#FFF4C2"
          stroke="#94710C"
          strokeWidth="1.2"
        />
        {/* Rightmost Star */}
        <polygon
          points="310,288 313,295 320,295 315,299 317,306 310,302 303,306 305,299 300,295 307,295"
          fill="#FFF4C2"
          stroke="#94710C"
          strokeWidth="1"
        />
      </g>

      {/* 3D Gold Ribbon Banner at the bottom */}
      <g filter="drop-shadow(0px 4px 4px rgba(62,39,35,0.22))">
        {/* Left tail folds & shadow */}
        <path d="M 125,375 L 75,395 L 75,425 L 115,395 Z" fill="url(#ribbon-dark)" />
        <path d="M 75,395 L 45,410 L 75,425 L 60,410 Z" fill="url(#ribbon-grad)" stroke="#8C6A0D" strokeWidth="1" />

        {/* Right tail folds & shadow */}
        <path d="M 375,375 L 425,395 L 425,425 L 385,395 Z" fill="url(#ribbon-dark)" />
        <path d="M 425,395 L 455,410 L 425,425 L 440,410 Z" fill="url(#ribbon-grad)" stroke="#8C6A0D" strokeWidth="1" />

        {/* Small transition dark folds under the banner corners */}
        <path d="M 125,395 L 140,370 L 140,395 Z" fill="#594002" />
        <path d="M 375,395 L 360,370 L 360,395 Z" fill="#594002" />

        {/* Main curved ribbon banner body */}
        <path
          d="M 115,350 C 205,390 295,390 385,350 L 375,395 C 295,435 205,435 125,395 Z"
          fill="url(#ribbon-grad)"
          stroke="#735505"
          strokeWidth="2"
        />

        {/* "SINCE 1996" Bold text aligned perfectly in ribbon curve */}
        <text
          x="250"
          y="403"
          fontFamily="'Montserrat', 'Inter', 'Helvetica Neue', sans-serif"
          fontWeight="900"
          fontSize="23"
          fill="#211301"
          textAnchor="middle"
          letterSpacing="2"
        >
          SINCE 1996
        </text>
      </g>
    </svg>
  );
}
