import React, { useState } from 'react';
import { ValentineQuestion } from './components/ValentineQuestion';
import { PhotoGallery } from './components/PhotoGallery';
import { FloatingHearts } from './components/FloatingHearts';
import { CoupleHoldingHands } from './components/Illustrations';
import { HeartBalloons } from './components/HeartBalloons';
import { LoveMessage } from './components/LoveMessage';

const App: React.FC = () => {
  const [hasSaidYes, setHasSaidYes] = useState(false);

  return (
    <main className="min-h-screen bg-rose-50 selection:bg-rose-200 selection:text-rose-900 relative">
      <FloatingHearts />

      {!hasSaidYes && (
        <ValentineQuestion onYes={() => setHasSaidYes(true)} />
      )}

      {hasSaidYes && (
        <div className="animate-fade-in relative z-10">
          {/* Hero Section */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 z-0">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Heart Balloons Layer */}
            <HeartBalloons />

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
              <span className="block text-rose-500 font-marker tracking-[0.3em] uppercase mb-6 text-sm md:text-base animate-fade-in">
                Happy Valentine's Day
              </span>
              <h1 className="font-handwriting text-7xl md:text-9xl text-rose-900 mb-8 leading-tight animate-fade-in delay-100">
                My BooBoo
              </h1>
              <p className="font-light text-xl md:text-2xl text-rose-700 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200 italic">
                You are the poetry in my quiet moments and the melody in my busy days.
              </p>
              
              <div className="mt-8 flex justify-center opacity-90 animate-fade-in delay-200">
                  <CoupleHoldingHands className="w-48 h-48 md:w-72 md:h-72" />
              </div>

            </div>
          </header>

          <LoveMessage />

          <div id="gallery" className="bg-white rounded-t-[4rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)] relative z-20 -mt-20">
             <PhotoGallery />
             
             <div className="flex justify-center py-10">
                <span className="text-4xl text-rose-300">❦</span>
             </div>

            
             

             <footer className="py-16 bg-rose-900 text-rose-100 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <p className="font-handwriting text-5xl mb-4">Forever & Always</p>
                    <p className="font-sans text-sm opacity-70 tracking-widest uppercase">Made with love for My BooBoo</p>
                </div>
             </footer>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;