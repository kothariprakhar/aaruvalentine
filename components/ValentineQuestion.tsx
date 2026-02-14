import React, { useState, useRef } from 'react';

interface ValentineQuestionProps {
  onYes: () => void;
}

export const ValentineQuestion: React.FC<ValentineQuestionProps> = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ top: '50%', left: '60%' });
  const [isMoved, setIsMoved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoInteraction = () => {
    if (!containerRef.current) return;
    
    // Jump distance increased and randomized across a wider area
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;
    
    setNoBtnPosition({ top: `${newTop}%`, left: `${newLeft}%` });
    setIsMoved(true);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-rose-50/98 backdrop-blur-xl transition-opacity duration-1000"
    >
      <div className="text-center p-8 max-w-2xl w-full relative h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-marker text-6xl md:text-8xl text-rose-800 mb-8 animate-fade-in drop-shadow-sm">
          Aarushi Asawa,
        </h1>
        <p className="font-marker text-2xl md:text-3xl text-rose-600 mb-12 animate-fade-in delay-100">
          Will you do me the honor of being my Valentine?
        </p>

        <div className="flex gap-12 items-center justify-center w-full relative h-24">
          <button
            onClick={onYes}
            className="px-10 py-4 bg-rose-600 text-white font-marker text-3xl rounded-full shadow-xl hover:bg-rose-700 hover:scale-110 transition-all duration-300 z-20"
          >
            Yes, Absolutely!
          </button>

          <button
            onMouseEnter={handleNoInteraction}
            onPointerOver={handleNoInteraction}
            onClick={handleNoInteraction}
            style={{
              position: isMoved ? 'absolute' : 'relative',
              top: isMoved ? noBtnPosition.top : 'auto',
              left: isMoved ? noBtnPosition.left : 'auto',
              transition: 'all 0.05s ease-out' // Even faster jump
            }}
            className="px-8 py-3 bg-white text-rose-400 font-marker text-2xl rounded-full border-2 border-rose-100 shadow-sm z-10 whitespace-nowrap"
          >
            No
          </button>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-40">
        <div className="absolute top-20 left-20 w-80 h-80 bg-rose-200 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
    </div>
  );
};