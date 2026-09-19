import React from 'react';

interface ExamVedaLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  variant?: 'app-icon' | 'badge' | 'glyph';
}

export const ExamVedaLogo: React.FC<ExamVedaLogoProps> = ({
  className = '',
  size = 48,
  showText = false,
  variant = 'app-icon',
}) => {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
    >
      <defs>
        {/* Navy background gradient */}
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0B1A3F" />
          <stop offset="100%" stopColor="#07132F" />
        </linearGradient>

        {/* Book Left Page Blue Gradient */}
        <linearGradient id="bookPageLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#0099FF" />
        </linearGradient>

        {/* Book Right Page Blue Gradient */}
        <linearGradient id="bookPageRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077FF" />
          <stop offset="100%" stopColor="#25A0FF" />
        </linearGradient>

        {/* Subtle drop shadow */}
        <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* App Icon Squircle Background */}
      {variant !== 'glyph' && (
        <rect
          width="400"
          height="400"
          rx="88"
          fill="url(#bgGrad)"
        />
      )}

      <g transform="translate(0, -10)">
        {/* GRADUATION CAP (MORTARBOARD) */}
        {/* Cap Diamond Top */}
        <polygon
          points="200,68 316,118 200,168 84,118"
          fill="#FFFFFF"
        />

        {/* Cap Under-Brim / Skullcap */}
        <path
          d="M138 142 L138 174 C138 198 262 198 262 174 L262 142 C243 158 222 166 200 166 C178 166 157 158 138 142 Z"
          fill="#E2E8F0"
        />

        {/* Tassel Button and String */}
        <circle cx="200" cy="118" r="5" fill="#CBD5E1" />
        <path
          d="M200 118 Q270 126 276 172"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Tassel Brush */}
        <polygon
          points="272,170 280,170 283,196 269,196"
          fill="#FFFFFF"
        />

        {/* OPEN BOOK GRAPHIC */}
        {/* Outer White Frame / Cover Wings */}
        <path
          d="M74 168 L104 228 L170 252 L200 274 L230 252 L296 228 L326 168 L308 172 L288 214 L230 236 L200 252 L170 236 L112 214 L92 172 Z"
          fill="#FFFFFF"
        />

        {/* Left Book Page (Vibrant Blue with white contour) */}
        <path
          d="M102 160 C130 180 162 190 192 198 L192 266 C162 254 130 240 102 216 Z"
          fill="url(#bookPageLeft)"
        />

        {/* Right Book Page (Vibrant Blue with white contour) */}
        <path
          d="M298 160 C270 180 238 190 208 198 L208 266 C238 254 270 240 298 216 Z"
          fill="url(#bookPageRight)"
        />

        {/* Center Spine Crease Line */}
        <line
          x1="200"
          y1="198"
          x2="200"
          y2="268"
          stroke="#0B1A3F"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>

      {/* TYPOGRAPHY: "Exam" & "Veda" */}
      <g style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        {/* "Exam" Text in Crisp White */}
        <text
          x="200"
          y="312"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="56"
          fontWeight="900"
          letterSpacing="-1.5"
        >
          Exam
        </text>

        {/* "Veda" Text in Electric Blue */}
        <text
          x="200"
          y="370"
          textAnchor="middle"
          fill="#2997FF"
          fontSize="60"
          fontWeight="900"
          letterSpacing="-1.5"
        >
          Veda
        </text>
      </g>
    </svg>
  );
};
