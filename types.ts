export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
}