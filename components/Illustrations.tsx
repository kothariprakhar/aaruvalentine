import React from 'react';

/**
 * Enhanced Caricature Components
 * Childlike proportions (chibi style) with sophisticated SVG detailing.
 */

const Gradients = () => (
  <defs>
    <linearGradient id="skinBoy" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#ffe4e6', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#fecdd3', stopOpacity: 1 }} />
    </linearGradient>
    <linearGradient id="skinGirl" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#fff1f2', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#ffe4e6', stopOpacity: 1 }} />
    </linearGradient>
    <linearGradient id="hairBoy" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
    </linearGradient>
    <linearGradient id="hairGirl" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#881337', stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: '#4c0519', stopOpacity: 1 }} />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
      <feOffset dx="0.5" dy="1" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.2" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const BoyCaricature: React.FC<{ animationClass?: string }> = ({ animationClass = "" }) => (
  <g className={animationClass} filter="url(#shadow)">
    {/* Body */}
    <path d="M12 35 q8 -5 16 0 v12 q-8 3 -16 0 z" fill="#3b82f6" />
    <path d="M15 35 v10 h10 v-10 z" fill="#2563eb" opacity="0.5" />
    {/* Arms */}
    <path d="M12 37 l-4 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
    <path d="M28 37 l(4 8" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
    {/* Head */}
    <circle cx="20" cy="22" r="13" fill="url(#skinBoy)" />
    {/* Hair */}
    <path d="M7 20 q0 -12 13 -12 t13 12 q0 -3 -5 -3 t-10 2 t-11 1" fill="url(#hairBoy)" />
    {/* Eyes */}
    <g>
      <circle cx="15" cy="22" r="1.5" fill="#1e293b" />
      <circle cx="15.5" cy="21.5" r="0.5" fill="white" />
      <circle cx="25" cy="22" r="1.5" fill="#1e293b" />
      <circle cx="25.5" cy="21.5" r="0.5" fill="white" />
    </g>
    {/* Blush */}
    <circle cx="11" cy="25" r="2" fill="#fb7185" opacity="0.3" />
    <circle cx="29" cy="25" r="2" fill="#fb7185" opacity="0.3" />
    {/* Smile */}
    <path d="M17 28 q3 2 6 0" fill="none" stroke="#be123c" strokeWidth="1" strokeLinecap="round" />
  </g>
);

const GirlCaricature: React.FC<{ animationClass?: string }> = ({ animationClass = "" }) => (
  <g className={animationClass} filter="url(#shadow)">
    {/* Hair Background (Back portion) */}
    <path d="M5 25 q0 15 5 20 h20 q5 -5 5 -20 z" fill="url(#hairGirl)" />
    {/* Dress */}
    <path d="M10 35 l-3 15 h26 l-3 -15 z" fill="#f43f5e" />
    <path d="M10 50 h20 v2 h-20 z" fill="#e11d48" />
    {/* Head */}
    <circle cx="20" cy="22" r="13" fill="url(#skinGirl)" />
    {/* Hair Front */}
    <path d="M7 20 q0 -13 13 -13 t13 13 q-5 -5 -13 -2 t-13 2" fill="url(#hairGirl)" />
    {/* Hair Bows */}
    <circle cx="9" cy="12" r="3" fill="#fb7185" />
    <circle cx="31" cy="12" r="3" fill="#fb7185" />
    {/* Eyes */}
    <g>
      <circle cx="15" cy="22" r="1.5" fill="#1e293b" />
      <circle cx="15.5" cy="21.5" r="0.5" fill="white" />
      <circle cx="25" cy="22" r="1.5" fill="#1e293b" />
      <circle cx="25.5" cy="21.5" r="0.5" fill="white" />
    </g>
    {/* Blush */}
    <circle cx="11" cy="25" r="2.5" fill="#fb7185" opacity="0.4" />
    <circle cx="29" cy="25" r="2.5" fill="#fb7185" opacity="0.4" />
    {/* Smile */}
    <path d="M17 28 q3 2 6 0" fill="none" stroke="#be123c" strokeWidth="1" strokeLinecap="round" />
  </g>
);

const IceCreamCone: React.FC<{ x: number; y: number; delay?: string }> = ({ x, y, delay = "0s" }) => (
  <g transform={`translate(${x}, ${y}) scale(0.6)`} className="animate-bounce" style={{ animationDelay: delay }}>
    <path d="M0 0 l-5 -12 h10 z" fill="#d97706" />
    <circle cx="0" cy="-14" r="6" fill="#fecdd3" />
    <circle cx="1" cy="-16" r="2" fill="#be123c" opacity="0.6" />
  </g>
);

interface IllustrationProps {
  className?: string;
}

/**
 * Scene: Couple Kissing
 */
export const CoupleDancing: React.FC<IllustrationProps> = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <Gradients />
      <style>{`
        @keyframes kissBoy { 0%, 100% { transform: translateX(0) rotate(0); } 40%, 60% { transform: translateX(12px) rotate(8deg); } }
        @keyframes kissGirl { 0%, 100% { transform: translateX(0) rotate(0); } 40%, 60% { transform: translateX(-12px) rotate(-8deg); } }
        .kiss-boy { animation: kissBoy 3s ease-in-out infinite; transform-origin: 20px 50px; }
        .kiss-girl { animation: kissGirl 3s ease-in-out infinite; transform-origin: 20px 50px; }
      `}</style>
      <g transform="translate(15, 20)">
        <BoyCaricature animationClass="kiss-boy" />
      </g>
      <g transform="translate(45, 20)">
        <GirlCaricature animationClass="kiss-girl" />
      </g>
      <text x="44" y="25" className="text-3xl animate-pulse" style={{ fontSize: '12px' }}>❤️</text>
    </svg>
  </div>
);

/**
 * Scene: Couple Sitting together in a park eating ice cream
 */
export const CoupleSitting: React.FC<IllustrationProps> = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 120 100" className="w-full h-full overflow-visible">
      <Gradients />
      {/* Bench */}
      <rect x="10" y="70" width="100" height="4" rx="2" fill="#64748b" />
      <rect x="25" y="74" width="3" height="15" fill="#475569" />
      <rect x="92" y="74" width="3" height="15" fill="#475569" />
      
      {/* Boy */}
      <g transform="translate(20, 25)">
        <BoyCaricature animationClass="animate-sway" />
        <IceCreamCone x="30" y="38" />
      </g>
      
      {/* Girl */}
      <g transform="translate(60, 25)">
        <GirlCaricature animationClass="animate-sway" />
        <IceCreamCone x="10" y="38" delay="1s" />
      </g>
      
      <text x="50" y="20" style={{ fontSize: '10px' }} className="animate-bounce">🍦</text>
    </svg>
  </div>
);

/**
 * Scene: Couple Holding Hands and Walking
 */
export const CoupleHoldingHands: React.FC<IllustrationProps> = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <Gradients />
      <style>{`
        @keyframes walkCycle { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-4px) rotate(1deg); } }
        .walk { animation: walkCycle 0.6s ease-in-out infinite; transform-origin: center bottom; }
      `}</style>
      
      {/* Hand Link */}
      <path d="M42 55 Q50 58 58 55" fill="none" stroke="#fecdd3" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
      
      <g transform="translate(10, 15)">
        <BoyCaricature animationClass="walk" />
      </g>
      <g transform="translate(50, 15)">
        <GirlCaricature animationClass="walk" />
      </g>
    </svg>
  </div>
);

/**
 * Scene: Couple Cuddling
 */
export const CoupleCuddling: React.FC<IllustrationProps> = ({ className = "" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      <Gradients />
      <style>{`
        @keyframes cuddle { 0%, 100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .cuddle-girl { animation: cuddle 4s ease-in-out infinite; transform-origin: 20px 40px; }
      `}</style>
      
      <g transform="translate(20, 20)">
        <BoyCaricature />
      </g>
      <g transform="translate(35, 20)">
        <GirlCaricature animationClass="cuddle-girl" />
      </g>
      
      <text x="70" y="30" className="animate-bounce" style={{ fontSize: '10px' }}>💖</text>
    </svg>
  </div>
);
