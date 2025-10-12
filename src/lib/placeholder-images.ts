import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

// Use the images directly from the JSON without any path manipulation
// Next.js will handle the base path automatically for static files
export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
