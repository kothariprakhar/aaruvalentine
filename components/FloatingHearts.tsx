import React, { useMemo } from 'react';

export const FloatingHearts: React.FC = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 8 + 12, // 12s to 20s
      delay: Math.random() * 10,
      size: Math.random() * 20 + 10, // 10px to 30px
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart, index) => (
        <div
          key={heart.id}
          className="absolute text-rose-300 opacity-40 animate-float-up"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            bottom: '-10%',
          }}
        >
          {index % 2 === 0 ? '❤' : '♥'}
        </div>
      ))}
    </div>
  );
};