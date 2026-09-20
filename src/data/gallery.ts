export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  description: string;
  category: string;
  location?: string;
  date: string;
  cover?: string;
  photos: GalleryPhoto[];
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: 'summer-in-the-uk-2026',
    title: 'Summer in the UK, 2026',
    description: 'A seven-city visual journal through the United Kingdom.',
    category: 'Travel · Photography',
    location: 'Manchester · Liverpool · York · London · Cambridge · Oxford · Brighton',
    date: '2026',
    photos: [],
  },
];
