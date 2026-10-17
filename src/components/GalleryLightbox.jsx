import { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Plus, Check } from 'lucide-react';

/**
 * Cinematic Full-Screen Lightbox with Navigation and Bottom Thumbnail Strip
 */
export default function GalleryLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNavigate,
  selectedIds = new Set(),
  onToggleSelect,
}) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const activeThumbRef = useRef(null);

  const currentItem = images[currentIndex];
  const isCurrentSelected = currentItem ? selectedIds.has(currentItem.id) : false;

  const goToPrev = useCallback(() => {
    if (images.length === 0) return;
    const nextIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  const goToNext = useCallback(() => {
    if (images.length === 0) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard controls: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, goToPrev, goToNext, onClose]);

  // Prevent background scrolling while lightbox is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Auto-scroll the active thumbnail in the bottom strip
  useEffect(() => {
    if (isOpen && activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex, isOpen]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45; // px threshold
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        goToNext(); // Swiped left -> next
      } else {
        goToPrev(); // Swiped right -> prev
      }
    }
  };

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentItem.title} full size viewer`}
      className="fixed inset-0 z-50 flex flex-col bg-[#140608]/96 backdrop-blur-md text-[#FFFDF9] select-none animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar: Counter, Title, Selection Status, and Close Button */}
      <div className="relative z-20 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-black/30 backdrop-blur-sm">
        {/* Counter and Category */}
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-sans tracking-widest text-[#E9D8B8] font-semibold bg-[#3A1017] px-2.5 py-1 rounded border border-[#E9D8B8]/30">
            {currentIndex + 1} / {images.length}
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-white/70 font-sans">
            {currentItem.category}
          </span>
        </div>

        {/* Center Title (Desktop) */}
        <div className="hidden md:block max-w-md text-center">
          <h2 className="font-serif text-base sm:text-lg text-[#F5EEE6] truncate">
            {currentItem.title}
          </h2>
        </div>

        {/* Actions: Add to Selection & Close Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick WhatsApp selection button inside lightbox */}
          <button
            type="button"
            onClick={() => onToggleSelect(currentItem)}
            aria-label={
              isCurrentSelected
                ? `Remove ${currentItem.title} from selection`
                : `Add ${currentItem.title} to selection`
            }
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              isCurrentSelected
                ? 'bg-[#541820] text-[#E9D8B8] ring-2 ring-[#C5A15A]'
                : 'bg-white/10 hover:bg-white/20 text-[#FFFDF9] border border-[#E9D8B8]/40'
            }`}
          >
            {isCurrentSelected ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Select Design</span>
              </>
            )}
          </button>

          {/* Prominent Cross / Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close full size viewer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Main Full-Size Image Viewing Area with Prev/Next Controls */}
      <div className="relative flex-1 flex items-center justify-center px-2 sm:px-12 py-2 overflow-hidden">
        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label="Previous mehndi design"
          className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/40 hover:bg-[#541820] text-white/90 hover:text-[#E9D8B8] border border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
        </button>

        {/* Central Image Presentation */}
        <div className="relative max-w-5xl max-h-full flex flex-col items-center justify-center p-1 sm:p-3">
          <img
            key={currentItem.id}
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[62vh] sm:max-h-[68vh] md:max-h-[72vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-[2px] shadow-[0_12px_40px_rgba(0,0,0,0.7)] border border-[#E9D8B8]/30 transition-all duration-300 animate-in fade-in zoom-in-95"
          />

          {/* Caption Below Image */}
          <div className="mt-2 text-center max-w-xl px-4">
            <p className="font-serif text-sm sm:text-base text-[#E9D8B8] font-normal leading-tight">
              {currentItem.title}
            </p>
            <p className="text-[11px] text-white/60 font-sans mt-0.5 line-clamp-1">
              {currentItem.alt}
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={goToNext}
          aria-label="Next mehndi design"
          className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/40 hover:bg-[#541820] text-white/90 hover:text-[#E9D8B8] border border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom Compact Thumbnail Strip (Section 11) */}
      <div className="relative z-20 w-full py-2 sm:py-3 px-4 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-start gap-2 sm:gap-2.5 overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 pb-1">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            const isSelected = selectedIds.has(img.id);

            return (
              <button
                key={img.id}
                ref={isActive ? activeThumbRef : null}
                type="button"
                onClick={() => onNavigate(idx)}
                aria-label={`Jump to design ${idx + 1}: ${img.title}`}
                className={`relative flex-shrink-0 w-12 h-14 sm:w-14 sm:h-16 rounded-[2px] overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                  isActive
                    ? 'ring-2 ring-[#C5A15A] scale-105 shadow-md opacity-100'
                    : 'opacity-50 hover:opacity-90'
                }`}
              >
                <img
                  src={img.thumbnail || img.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {isSelected && (
                  <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-[#541820] text-[#E9D8B8] rounded-full flex items-center justify-center ring-1 ring-[#C5A15A]">
                    <Check className="w-2 h-2 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
