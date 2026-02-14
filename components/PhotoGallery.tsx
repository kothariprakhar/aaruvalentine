import React from 'react';
import { Photo } from '../types';
import { CoupleHoldingHands, CoupleCuddling, CoupleDancing, CoupleSitting } from './Illustrations';

const GALLERY_PHOTOS: Photo[] = [
  { id: '1', url: new URL('../Aaru/745e3eac-b9aa-41a4-933f-187d53418076.JPG', import.meta.url).href, caption: 'Your beautiful smile lights up my world', aspectRatio: 'portrait' },
  { id: '2', url: new URL('../Aaru/IMG_0855.jpg', import.meta.url).href, caption: 'Sunlit days with you', aspectRatio: 'portrait' },
  { id: '3', url: new URL('../Aaru/IMG_1641.jpg', import.meta.url).href, caption: 'Caught in a quiet moment', aspectRatio: 'landscape' },
  { id: '4', url: new URL('../Aaru/IMG_1884.jpg', import.meta.url).href, caption: 'That timeless look', aspectRatio: 'portrait' },
  { id: '5', url: new URL('../Aaru/IMG_2196.jpg', import.meta.url).href, caption: 'Roads we wandered', aspectRatio: 'landscape' },
  { id: '6', url: new URL('../Aaru/IMG_2308.jpg', import.meta.url).href, caption: 'Playful moments', aspectRatio: 'square' },
  { id: '7', url: new URL('../Aaru/IMG_2350.PNG', import.meta.url).href, caption: 'Adventures are better with you', aspectRatio: 'landscape' },
  { id: '8', url: new URL('../Aaru/IMG_2676.JPG', import.meta.url).href, caption: 'Quiet moments of pure joy', aspectRatio: 'square' },
  { id: '9', url: new URL('../Aaru/IMG_2690.jpg', import.meta.url).href, caption: 'Warm evenings together', aspectRatio: 'landscape' },
  { id: '10', url: new URL('../Aaru/IMG_2740.jpg', import.meta.url).href, caption: 'Little rebellions of laughter', aspectRatio: 'portrait' },
  { id: '11', url: new URL('../Aaru/IMG_2742.JPG', import.meta.url).href, caption: 'The elegance you carry', aspectRatio: 'portrait' },
  { id: '12', url: new URL('../Aaru/IMG_3658.jpg', import.meta.url).href, caption: 'Moments that matter', aspectRatio: 'landscape' },
  { id: '13', url: new URL('../Aaru/IMG_3688.jpg', import.meta.url).href, caption: 'A laugh forever etched', aspectRatio: 'portrait' },
  { id: '14', url: new URL('../Aaru/IMG_4027.jpg', import.meta.url).href, caption: 'Tiny stolen dances', aspectRatio: 'landscape' },
  { id: '15', url: new URL('../Aaru/IMG_4319.jpg', import.meta.url).href, caption: 'Quiet mornings', aspectRatio: 'portrait' },
  { id: '16', url: new URL('../Aaru/IMG_4381.jpg', import.meta.url).href, caption: 'Laughter that heals', aspectRatio: 'square' },
  { id: '17', url: new URL('../Aaru/IMG_4946.jpg', import.meta.url).href, caption: 'Midnight confessions', aspectRatio: 'landscape' },
  { id: '18', url: new URL('../Aaru/IMG_5085.jpg', import.meta.url).href, caption: 'Sunsets and coffee', aspectRatio: 'portrait' },
  { id: '19', url: new URL('../Aaru/IMG_7229.jpg', import.meta.url).href, caption: 'Forever starts now', aspectRatio: 'landscape' },
  { id: '20', url: new URL('../Aaru/ce1f4c65-90ab-49a2-a3b1-df2bb7155e5d.JPG', import.meta.url).href, caption: 'A quiet smile', aspectRatio: 'square' },
];

export const PhotoGallery: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-rose-50/50">
      <div className="text-center mb-16">
        <h2 className="font-serif text-5xl text-rose-900 mb-4">Muse & Memories</h2>
        <div className="w-24 h-1 bg-rose-300 mx-auto rounded-full"></div>
        <p className="mt-6 text-rose-700 font-marker text-2xl max-w-2xl mx-auto">
          "In every photo, I see the reasons why I love you."
        </p>
      </div>

      {/* Illustration strip: romantic caricatures */}
      <div className="max-w-4xl mx-auto flex gap-6 justify-center items-end mb-10">
        <div className="w-28 h-28 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
          <CoupleHoldingHands />
        </div>
        <div className="w-28 h-28 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
          <CoupleCuddling />
        </div>
        <div className="w-28 h-28 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
          <CoupleDancing />
        </div>
        <div className="w-28 h-28 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
          <CoupleSitting />
        </div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {GALLERY_PHOTOS.map((photo) => (
          <div key={photo.id} className="break-inside-avoid relative group">
            <div className="bg-white p-3 rounded-sm shadow-md rotate-0 group-hover:rotate-1 transition-transform duration-300 border border-rose-100">
                <div className="relative overflow-hidden rounded-sm">
                    <img 
                    src={photo.url} 
                    alt={photo.caption} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1] group-hover:sepia-0"
                    />
                      {/* captions removed: keep images only */}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};