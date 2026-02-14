import React from 'react';
import { Memory } from '../types';
import { CoupleHoldingHands, CoupleDancing } from './Illustrations';

const MEMORIES: Memory[] = [
  {
    id: '1',
    date: 'The Beginning',
    title: 'When We First Met',
    description: 'The moment our paths crossed. I knew there was something special about you from the very first smile.',
    imageUrl: new URL('../Aaru/745e3eac-b9aa-41a4-933f-187d53418076.JPG', import.meta.url).href
  },
  {
    id: '2',
    date: 'Growing Closer',
    title: 'Falling in Love',
    description: 'A quiet dinner, nervous laughter, and the realization that I never wanted to be apart from you.',
    imageUrl: new URL('../Aaru/IMG_2350.PNG', import.meta.url).href
  },
  {
    id: '3',
    date: 'A Key Milestone',
    title: 'She Said Yes',
    description: 'Under the stars, asking the most important question of my life. A moment frozen in time.',
    imageUrl: new URL('../Aaru/IMG_2676.JPG', import.meta.url).href
  },
  {
    id: '4',
    date: 'The Big Day',
    title: 'Our Wedding',
    description: 'Vows exchanged, two families joined, and the beautiful start of our forever.',
    imageUrl: new URL('../Aaru/IMG_2742.JPG', import.meta.url).href
  },
  {
    id: '5',
    date: 'Today',
    title: 'My Valentine',
    description: 'Every day with you is a new favorite memory. Here is to a lifetime more.',
    imageUrl: new URL('../Aaru/IMG_4381.jpg', import.meta.url).href
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto overflow-hidden relative">
      <div className="absolute top-20 left-10 opacity-10 pointer-events-none hidden md:block">
         <CoupleHoldingHands className="w-64 h-64" />
      </div>

       <div className="text-center mb-20 relative z-10">
        <h2 className="font-serif text-5xl text-rose-900 mb-6">Our Journey</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 mx-auto rounded-full"></div>
        <p className="mt-4 text-rose-700 font-marker text-2xl">Every step has led me to you.</p>
      </div>

      <div className="relative z-10">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-200 transform md:-translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-24">
          {MEMORIES.map((memory, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={memory.id} className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-0`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-rose-500 rounded-full transform -translate-x-1/2 z-10 shadow-md"></div>
                <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="group relative bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-lg transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                      {memory.date}
                    </span>
                    <h3 className="text-2xl font-serif text-rose-900 mb-3 group-hover:text-rose-600 transition-colors">
                      {memory.title}
                    </h3>
                    <div className={`mb-4 overflow-hidden rounded-lg h-48 w-full relative`}>
                         <img 
                            src={memory.imageUrl} 
                            alt={memory.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                         />
                    </div>
                    <p className="text-slate-600 leading-relaxed font-marker text-xl">
                      {memory.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-20 right-10 opacity-10 pointer-events-none hidden md:block">
         <CoupleDancing className="w-64 h-64" />
      </div>
    </section>
  );
};