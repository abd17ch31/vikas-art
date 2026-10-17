import { useRef, useState, useEffect } from 'react';
import { businessData } from '../data/businessData';

export default function CelebrationCategories() {
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
    // Scroll approximately 1.5 item widths for smooth category browsing
    const scrollDistance = el.clientWidth * 0.65;
    el.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth',
    });
  };

  const categories = businessData.celebrationCategories;

  return (
    <section
      id="services"
      aria-labelledby="celebration-categories-heading"
      className="bg-[#F5EEE6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            SECTION HEADING
            Elegant editorial italic serif typography matching the reference
           ========================================================================= */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            id="celebration-categories-heading"
            className="font-serif italic font-normal text-[#3A1017] text-[26px] sm:text-3xl md:text-[44px] lg:text-[48px] leading-tight tracking-tight px-2"
          >
            Mehndi For Every Celebration
          </h2>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (768px & above)
            All five categories displayed in a single, balanced horizontal row.
            CRITICAL: Navigation arrows are strictly hidden on desktop.
           ========================================================================= */}
        <div className="hidden md:flex justify-center items-start gap-4 lg:gap-8 xl:gap-12 w-full">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.url}
              aria-label={`${cat.title} - View mehndi designs`}
              className="group flex flex-col items-center flex-1 max-w-[210px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5EEE6] rounded-2xl p-1 transition-transform duration-300"
            >
              {/* Perfectly Circular Category Image Container */}
              <div className="w-32 h-32 lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] rounded-full overflow-hidden aspect-square border border-[#E9D8B8] shadow-[0_6px_20px_rgba(58,16,23,0.06)] group-hover:shadow-[0_8px_24px_rgba(58,16,23,0.12)] transition-all duration-300 bg-white/40">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ objectPosition: cat.focalPoint }}
                />
              </div>

              {/* Minimal Uppercase Category Label */}
              <span className="mt-4 sm:mt-5 text-[10px] lg:text-[11.5px] font-semibold tracking-[0.18em] uppercase text-[#3A1017] group-hover:text-[#541820] font-sans leading-snug px-1 text-center transition-colors">
                {cat.title}
              </span>
            </a>
          ))}
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (Below 768px)
            Horizontal carousel with native touch swipe and compact circular arrows.
            Arrows appear on mobile only.
           ========================================================================= */}
        <div className="md:hidden relative px-7 sm:px-10">
          {/* Mobile Previous Button */}
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`absolute left-0 top-[45px] -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-[#541820]/30 shadow-md flex items-center justify-center text-[#541820] transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              canScrollLeft ? 'opacity-100 hover:bg-white active:scale-95' : 'opacity-25 pointer-events-none'
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Horizontally Scrollable Track */}
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
              <a
                key={cat.id}
                href={cat.url}
                aria-label={`${cat.title} - View mehndi designs`}
                className="group shrink-0 snap-start flex flex-col items-center w-[92px] sm:w-[110px] text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded-xl p-1"
              >
                {/* Mobile Circular Image */}
                <div className="w-[84px] h-[84px] sm:w-[98px] sm:h-[98px] rounded-full overflow-hidden aspect-square border border-[#E9D8B8] shadow-sm bg-white/40">
                  <img
                    src={cat.image}
                    alt={cat.alt}
                    loading="lazy"
                    className="w-full h-full object-cover select-none"
                    style={{ objectPosition: cat.focalPoint }}
                  />
                </div>

                {/* Mobile Uppercase Category Label */}
                <span className="mt-2.5 text-[8.5px] sm:text-[9.5px] font-semibold tracking-[0.15em] uppercase text-[#3A1017] font-sans leading-tight px-0.5">
                  {cat.title}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            disabled={!canScrollRight}
            aria-label="Next categories"
            className={`absolute right-0 top-[45px] -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-[#541820]/30 shadow-md flex items-center justify-center text-[#541820] transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              canScrollRight ? 'opacity-100 hover:bg-white active:scale-95' : 'opacity-25 pointer-events-none'
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
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
