import React, { useMemo } from 'react';

interface BalloonProps {
  id: number;
  left: number;
  bottom: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  swayDelay: number;
  entranceDelay: number;
}

export const HeartBalloons: React.FC = () => {
  const balloons = useMemo(() => {
    const colors = ['#fb7185', '#f43f5e', '#e11d48', '#fda4af', '#fecdd3'];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      bottom: Math.random() * 100, // Positioned throughout the page
      size: Math.random() * 40 + 30, // 30px to 70px
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15, // Slow float
      swayDelay: Math.random() * 2,
      entranceDelay: Math.random() * 2, // Stagger the pop-in effect
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="absolute opacity-0 animate-pop-in"
          style={{
            left: `${b.left}%`,
            top: `${b.bottom}%`,
            animationDelay: `${b.entranceDelay}s`,
          }}
        >
          <div
            className="animate-float"
            style={{
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          >
            <div 
              className="relative animate-sway" 
              style={{ 
                animationDelay: `${b.swayDelay}s`,
                width: b.size,
                height: b.size 
              }}
            >
              {/* Heart Shape */}
              <svg 
                viewBox="0 0 32 32" 
                fill={b.color} 
                className="w-full h-full drop-shadow-sm"
              >
                <path d="M16 28.5L14.1 26.6C7.33 20.39 3 16.21 3 11.25C3 7.24 6.24 4 10.25 4C12.52 4 14.71 5.05 16 6.71C17.29 5.05 19.48 4 21.75 4C25.76 4 29 7.24 29 11.25C29 16.21 24.67 20.39 17.9 26.6L16 28.5Z" />
              </svg>
              {/* Balloon String */}
              <div 
                className="absolute top-[90%] left-1/2 w-0.5 h-24 bg-rose-200/50 origin-top transform -translate-x-1/2"
                style={{ height: b.size * 2 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};