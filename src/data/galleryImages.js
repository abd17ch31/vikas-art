const localImages = import.meta.glob(
  '../assets/images/{bridal,Traditional,Portrait,Engagement,Festival,Guest,Custom}/*.jpeg',
  { eager: true, import: 'default' },
);

const categoryFolders = [
  { category: 'Bridal', folders: ['bridal'] },
  { category: 'Portrait', folders: ['Portrait'] },
  { category: 'Engagement', folders: ['Engagement'] },
  { category: 'Traditional', folders: ['Traditional'] },
  { category: 'Festival', folders: ['Festival'] },
  { category: 'Guest', folders: ['Guest'] },
  { category: 'Custom', folders: ['Custom'] },
];

export const galleryCategories = [
  'All Designs',
  'Bridal',
  'Portrait',
  'Engagement',
  'Traditional',
  'Festival',
  'Guest',
  'Custom',
];

export const galleryImages = categoryFolders.flatMap(({ category, folders }) => {
  const categoryImages = folders.flatMap((folder) =>
    Object.entries(localImages)
      .filter(([path]) => path.startsWith(`../assets/images/${folder}/`))
      .sort(([left], [right]) => (left < right ? -1 : left > right ? 1 : 0)),
  );

  return categoryImages.map(([path, src], index) => {
    const filename = path.split('/').pop() || '';
    const filenameId = filename
      .replace(/\.[^.]+$/, '')
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase();
    const categoryId = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

    return {
      id: `gallery-${categoryId}-${filenameId}`,
      title: `${category} Design ${index + 1}`,
      src,
      thumbnail: src,
      alt: `${category} mehndi design, image ${index + 1}`,
      category,
    };
  });
});
export default galleryImages;
