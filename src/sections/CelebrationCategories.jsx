import { useRef, useState, useEffect } from 'react';
import { businessData } from '../data/businessData';

export default function CelebrationCategories({ onNavigateGallery }) {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitor mobile carousel scroll position to toggle arrow disabled states
  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  const scrollByAmount = (direction) => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollDistance = el.clientWidth * 0.65;
    el.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  };

  const categories = businessData.celebrationCategories;

  const handleCategoryClick = (categoryTitle) => {
    if (onNavigateGallery) {
      onNavigateGallery(categoryTitle);
    }
  };

  return (
    <section
      id="celebration-categories"
      aria-labelledby="celebration-categories-heading"
      className="bg-[#F5EEE6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-[#C5A15A] font-sans block mb-2">
            — DISCOVER BY OCCASION —
          </span>
          <h2
            id="celebration-categories-heading"
            className="font-serif italic font-normal text-[#3A1017] text-[28px] sm:text-3xl md:text-[44px] lg:text-[48px] leading-tight tracking-tight px-2"
          >
            Mehndi For Every Celebration
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#847976] max-w-md mx-auto font-sans">
            Click any celebration style to explore matching designs in our gallery
          </p>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (768px & above)
            7 circular cards displayed in a balanced row with hover elevation
           ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-7 gap-3 lg:gap-5 xl:gap-6 w-full max-w-6xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategoryClick(cat.title)}
              aria-label={`View ${cat.title} mehndi designs in gallery`}
              className="group flex flex-col items-center text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5EEE6] rounded-2xl p-1.5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Perfectly Circular Category Image Container */}
              <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full overflow-hidden aspect-square border-2 border-[#E9D8B8] shadow-[0_6px_20px_rgba(58,16,23,0.08)] group-hover:shadow-[0_10px_28px_rgba(84,24,32,0.18)] group-hover:border-[#C5A15A] transition-all duration-300 bg-white/40">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className="w-full h-full object-cover select-none group-hover:scale-108 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Minimal Uppercase Category Label */}
              <span className="mt-3.5 text-[11px] lg:text-xs font-semibold tracking-[0.16em] uppercase text-[#3A1017] group-hover:text-[#762631] font-sans leading-snug px-1 text-center transition-colors">
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (Below 768px)
            Horizontal carousel with swipe & navigation buttons
           ========================================================================= */}
        <div className="md:hidden relative px-7 sm:px-10">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`absolute left-0 top-[45px] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/95 border border-[#541820]/30 shadow-md flex items-center justify-center text-[#541820] transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              canScrollLeft ? 'opacity-100 hover:bg-white active:scale-95' : 'opacity-25 pointer-events-none'
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-2 px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryClick(cat.title)}
                aria-label={`View ${cat.title} mehndi designs in gallery`}
                className="group shrink-0 snap-start flex flex-col items-center w-[92px] sm:w-[105px] text-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded-xl p-1"
              >
                <div className="w-[84px] h-[84px] sm:w-[94px] sm:h-[94px] rounded-full overflow-hidden aspect-square border-2 border-[#E9D8B8] shadow-sm group-hover:border-[#C5A15A] bg-white/40 transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <span className="mt-2.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase text-[#3A1017] group-hover:text-[#762631] font-sans leading-tight px-0.5">
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            aria-label="Next categories"
            className={`absolute right-0 top-[45px] -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/95 border border-[#541820]/30 shadow-md flex items-center justify-center text-[#541820] transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              canScrollRight ? 'opacity-100 hover:bg-white active:scale-95' : 'opacity-25 pointer-events-none'
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
