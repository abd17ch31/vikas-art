import { useState, useCallback } from 'react';
import { ShoppingBag } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/galleryImages';
import GalleryCard from '../components/GalleryCard';
import GalleryLightbox from '../components/GalleryLightbox';
import SelectionCart from '../components/SelectionCart';

export default function GalleryPage() {
  const [selectedItems, setSelectedItems] = useState(new Map());
  const [lightboxData, setLightboxData] = useState({ isOpen: false, currentIndex: 0 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Designs');

  const toggleSelect = useCallback((item) => {
    setSelectedItems((prev) => {
      const next = new Map(prev);
      if (next.has(item.id)) {
        next.delete(item.id);
      } else {
        next.set(item.id, item);
      }
      return next;
    });
  }, []);

  const filteredImages = activeCategory === 'All Designs'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (item) => {
    const index = filteredImages.findIndex((img) => img.id === item.id);
    setLightboxData({ isOpen: true, currentIndex: index });
  };

  const closeLightbox = () => setLightboxData({ ...lightboxData, isOpen: false });

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#382329] pt-20 sm:pt-24 pb-20">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8 sm:pt-12 pb-10 sm:pb-14">
        <h1 className="font-serif font-normal text-[#541820] text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Our Gallery
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#847976] mt-4 leading-relaxed">
          Select designs to enquire via WhatsApp.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === category
                  ? 'bg-[#541820] text-[#E9D8B8]'
                  : 'bg-[#E7D5B6]/50 text-[#541820] hover:bg-[#E7D5B6]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <GalleryCard
              key={image.id}
              item={image}
              isSelected={selectedItems.has(image.id)}
              onToggleSelect={toggleSelect}
              onOpenLightbox={openLightbox}
              isPriority={index < 8}
            />
          ))}
        </div>
      </main>

      {/* Cart Float Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#541820] text-[#E9D8B8] rounded-full shadow-lg hover:bg-[#3A1017] transition-all"
        aria-label="View selection cart"
      >
        <ShoppingBag className="w-6 h-6" />
        {selectedItems.size > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-[#C5A15A] text-white text-xs font-bold rounded-full">
            {selectedItems.size}
          </span>
        )}
      </button>

      <GalleryLightbox
        isOpen={lightboxData.isOpen}
        images={filteredImages}
        currentIndex={lightboxData.currentIndex}
        onClose={closeLightbox}
        onNavigate={(idx) => setLightboxData({ ...lightboxData, currentIndex: idx })}
        selectedIds={new Set(selectedItems.keys())}
        onToggleSelect={toggleSelect}
      />

      <SelectionCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        selectedItems={Array.from(selectedItems.values())}
        onRemoveItem={(id) => setSelectedItems((prev) => {
          const next = new Map(prev);
          next.delete(id);
          return next;
        })}
        onClearAll={() => setSelectedItems(new Map())}
        onOpenItemInLightbox={openLightbox}
      />
    </div>
  );
}
