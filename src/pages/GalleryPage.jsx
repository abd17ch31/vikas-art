import { useState, useEffect, useCallback } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/galleryImages';
import GalleryCard from '../components/GalleryCard';
import GalleryLightbox from '../components/GalleryLightbox';
import SelectionCart from '../components/SelectionCart';

export default function GalleryPage({ defaultCategory = 'All Designs', onNavigateHome }) {
  const [selectedItems, setSelectedItems] = useState(new Map());
  const [lightboxData, setLightboxData] = useState({ isOpen: false, currentIndex: 0 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  // Sync activeCategory whenever defaultCategory changes (e.g. user clicked a circular card)
  useEffect(() => {
    if (defaultCategory) {
      setActiveCategory(defaultCategory);
    }
  }, [defaultCategory]);

  const matchCategory = (catA, catB) => {
    if (!catA || !catB) return false;
    const a = catA.toLowerCase().trim();
    const b = catB.toLowerCase().trim();
    if (a === b) return true;
    if ((a === 'custom' || a === 'custom designs') && (b === 'custom' || b === 'custom designs')) return true;
    return false;
  };

  const isAll = !activeCategory || activeCategory === 'All Designs' || activeCategory.toLowerCase() === 'all';

  const filteredImages = isAll
    ? galleryImages
    : galleryImages.filter((img) => matchCategory(img.category, activeCategory));

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

  const openLightbox = (item) => {
    const index = filteredImages.findIndex((img) => img.id === item.id);
    setLightboxData({ isOpen: true, currentIndex: index >= 0 ? index : 0 });
  };

  const closeLightbox = () => setLightboxData((prev) => ({ ...prev, isOpen: false }));

  return (
    <div className="min-h-screen bg-[#FBF6EE] text-[#382329] pt-20 sm:pt-24 pb-20">
      <header className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-6 sm:pt-10 pb-8 sm:pb-12">
        {onNavigateHome && (
          <div className="mb-4 sm:mb-6 flex justify-center">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#762631] hover:text-[#541820] bg-white/70 hover:bg-white px-4 py-2 rounded-full border border-[#E7D5B6] transition-all duration-200 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>
        )}

        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-[#C5A15A] font-sans block mb-2">
          CURATED MASTERPIECES ({filteredImages.length} DESIGNS)
        </span>

        <h1 className="font-serif font-normal text-[#541820] text-4xl sm:text-5xl md:text-6xl tracking-tight">
          Vikash Mehndi Art Gallery
        </h1>
        <p className="font-sans text-sm sm:text-base text-[#847976] mt-3.5 max-w-lg mx-auto leading-relaxed">
          Browse our extensive collection. Click any photo to view in large size, or tap the plus button (+) to add designs to your enquiry cart.
        </p>

        {/* Category Filters matching reference layout */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-9">
          {galleryCategories.map((category) => {
            const isSelected = isAll
              ? category === 'All Designs' || category.toLowerCase() === 'all'
              : matchCategory(category, activeCategory);

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                  isSelected
                    ? 'bg-[#3A1017] text-[#E9D8B8] shadow-md ring-1 ring-[#C5A15A]'
                    : 'bg-[#F0E4D3] text-[#4A262D] hover:bg-[#E5D2BC]'
                }`}
              >
                {category === 'All Designs' ? 'ALL' : category.toUpperCase()}
              </button>
            );
          })}
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
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

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-[#847976]">
            <p className="font-serif text-lg">No designs found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All Designs')}
              className="mt-3 text-xs uppercase tracking-wider text-[#762631] underline font-semibold"
            >
              Show all designs
            </button>
          </div>
        )}
      </main>

      {/* Cart Float Button */}
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-[#541820] text-[#E9D8B8] rounded-full shadow-lg hover:bg-[#3A1017] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] cursor-pointer"
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
        onNavigate={(idx) => setLightboxData((prev) => ({ ...prev, currentIndex: idx }))}
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
