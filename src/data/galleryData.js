const localImages = import.meta.glob(
  '../assets/images/{bridal,Portrait,Traditional}/*.jpeg',
  { eager: true, import: 'default' },
);

const categories = [
  { name: 'Bridal', folder: 'bridal' },
  { name: 'Portrait', folder: 'Portrait' },
  { name: 'Traditional', folder: 'Traditional' },
];

function chooseRandomImages(category) {
  const categoryImages = Object.entries(localImages).filter(([path]) =>
    path.startsWith(`../assets/images/${category.folder}/`),
  );

  if (categoryImages.length < 2) {
    throw new Error(`The ${category.name} homepage gallery requires at least two images.`);
  }

  for (let index = categoryImages.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [categoryImages[index], categoryImages[randomIndex]] = [
      categoryImages[randomIndex],
      categoryImages[index],
    ];
  }

  return categoryImages.slice(0, 2).map(([path, image], index) => ({
    id: `home-${category.folder}-${path.split('/').pop()}`,
    title: `${category.name} Mehndi Design ${index + 1}`,
    image,
    alt: `${category.name} mehndi design`,
    category: `${category.name} Mehndi`,
    objectPosition: 'center center',
  }));
}

export const galleryData = categories.flatMap(chooseRandomImages);

export default galleryData;
