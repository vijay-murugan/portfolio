import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Add base path for local images when in production build
const isProduction = typeof window === 'undefined' ? 
  process.env.NODE_ENV === 'production' : 
  window.location.pathname.startsWith('/portfolio');

const basePath = isProduction ? '/portfolio' : '';

const processedImages = data.placeholderImages.map(image => ({
  ...image,
  imageUrl: image.imageUrl.startsWith('/') ? `${basePath}${image.imageUrl}` : image.imageUrl
}));

export const PlaceHolderImages: ImagePlaceholder[] = processedImages;
