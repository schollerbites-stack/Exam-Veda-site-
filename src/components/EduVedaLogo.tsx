import React from 'react';

interface EduVedaLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  variant?: 'app-icon' | 'badge' | 'glyph';
}

export const EduVedaLogo: React.FC<EduVedaLogoProps> = ({
  className = '',
  size = 48,
  variant = 'app-icon',
}) => {
  return (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
    >
      <defs>
        {/* Background subtle gradient */}
        <linearGradient id="eduBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F4F7FB" />
        </linearGradient>

        {/* Navy Graduation Cap Gradient */}
        <linearGradient id="eduCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#12357A" />
          <stop offset="50%" stopColor="#0B2559" />
          <stop offset="100%" stopColor="#07183D" />
        </linearGradient>

        {/* Orange Figure Gradient */}
        <linearGradient id="eduOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA000" />
          <stop offset="60%" stopColor="#FF6D00" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>

        {/* Book Left Pages Gradient */}
        <linearGradient id="eduBookLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066D6" />
          <stop offset="50%" stopColor="#004BA8" />
          <stop offset="100%" stopColor="#0A2D6C" />
        </linearGradient>

        {/* Book Right Pages Gradient */}
        <linearGradient id="eduBookRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0080FF" />
          <stop offset="60%" stopColor="#0057B8" />
          <stop offset="100%" stopColor="#0A3078" />
        </linearGradient>

        {/* Book Highlight Glow */}
        <linearGradient id="eduBookHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Edu Text Navy */}
        <linearGradient id="eduNavyText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0C2556" />
          <stop offset="100%" stopColor="#07183D" />
        </linearGradient>

        {/* Veda Text Orange */}
        <linearGradient id="eduOrangeText" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8500" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>

        <filter id="eduSoftShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* Squircle Base Canvas */}
      {variant !== 'glyph' && (
        <>
          <rect width="512" height="512" rx="112" fill="url(#eduBgGrad)" filter="url(#eduSoftShadow)" />
          <rect width="508" height="508" x="2" y="2" rx="110" stroke="#E2E8F0" strokeWidth="3" fill="none" opacity="0.8" />
        </>
      )}

      {/* MAIN LOGO ARTWORK */}
      <g transform="translate(0, -6)">
        {/* GRADUATION CAP (TOP) */}
        <polygon points="256,76 388,126 256,176 124,126" fill="url(#eduCapGrad)" />
        <path d="M184 150 L184 184 C184 208 328 208 328 184 L328 150 C306 168 282 176 256 176 C230 176 206 168 184 150 Z" fill="#091E47" />
        
        {/* Cap Tassel */}
        <circle cx="256" cy="126" r="6" fill="#1E40AF" />
        <path d="M256 126 Q340 134 350 170" stroke="#0B2559" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M344 168 L354 168 L358 198 L340 198 Z" fill="#0A2454" />
        <circle cx="349" cy="168" r="4" fill="#0F3375" />

        {/* ORANGE LEARNER / RISING STUDENT */}
        <circle cx="256" cy="180" r="24" fill="url(#eduOrangeGrad)" />
        <path d="M256 280 C242 245 196 205 152 172 C178 198 220 236 248 274 Z" fill="url(#eduOrangeGrad)" />
        <path d="M256 280 C270 245 316 205 360 172 C334 198 292 236 264 274 Z" fill="url(#eduOrangeGrad)" />
        <path d="M228 262 L256 220 L284 262 Z" fill="#FFA000" opacity="0.9" />

        {/* OPEN BOOK (LAYERED BLUE & CYAN PAGES) */}
        <path d="M124 222 C168 244 212 254 252 260 L252 308 C208 300 162 284 118 258 Z" fill="url(#eduBookHighlight)" />
        <path d="M96 268 C144 274 198 286 252 314 L252 334 C194 300 138 290 88 284 Z" fill="url(#eduBookLeftGrad)" />
        
        <path d="M388 222 C344 244 300 254 260 260 L260 308 C304 300 350 284 394 258 Z" fill="url(#eduBookHighlight)" />
        <path d="M416 268 C368 274 314 286 260 314 L260 334 C318 300 374 290 424 284 Z" fill="url(#eduBookRightGrad)" />

        <path d="M254 262 L258 262 L258 338 L254 338 Z" fill="#0B2559" />
        <path d="M102 278 C152 284 204 298 256 322 C308 298 360 284 410 278 L416 288 C362 296 310 312 256 338 C202 312 150 296 96 288 Z" fill="#08204D" />
      </g>

      {/* TYPOGRAPHY BRANDING: "Edu Veda" */}
      <g transform="translate(0, 420)">
        <text
          x="144"
          y="0"
          textAnchor="middle"
          fill="url(#eduNavyText)"
          fontFamily="system-ui, -apple-system, 'Inter', 'Segoe UI', Roboto, sans-serif"
          fontSize="76"
          fontWeight="900"
          letterSpacing="-2"
        >
          Edu
        </text>

        <text
          x="328"
          y="0"
          textAnchor="middle"
          fill="url(#eduOrangeText)"
          fontFamily="system-ui, -apple-system, 'Inter', 'Segoe UI', Roboto, sans-serif"
          fontSize="76"
          fontWeight="900"
          letterSpacing="-2"
        >
          Veda
        </text>
      </g>
    </svg>
  );
};

// Export backward compatible alias
export const ExamVedaLogo = EduVedaLogo;
