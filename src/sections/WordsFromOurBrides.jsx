import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { testimonialsData, getShareExperienceUrl } from '../data/testimonialsData';

export default function WordsFromOurBrides() {
  const testimonials = testimonialsData;
  const total = testimonials.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Touch swipe handling
  const touchStartXRef = useRef(0);
  const touchCurrentXRef = useRef(0);
  const isSwipingRef = useRef(false);

  // Measure container width for responsive carousel math
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchCurrentXRef.current = e.touches[0].clientX;
    isSwipingRef.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwipingRef.current) return;
    touchCurrentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwipingRef.current) return;
    isSwipingRef.current = false;
    const diff = touchCurrentXRef.current - touchStartXRef.current;
    const threshold = 40; // minimum swipe distance in px

    if (diff < -threshold) {
      handleNext();
    } else if (diff > threshold) {
      handlePrev();
    }
  };

  // Dynamic card widths based on viewport
  const isDesktop = containerWidth >= 1024;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;

  const cardWidth = isDesktop
    ? Math.min(Math.max(containerWidth * 0.55, 680), 780)
    : isTablet
    ? Math.min(containerWidth * 0.72, 540)
    : Math.min(containerWidth * 0.82, 300);

  const cardGap = isDesktop ? 32 : isTablet ? 24 : 16;

  // On desktop/tablet, center the active card in the carousel container.
  // On mobile, show active card with comfortable left margin (~20px) and peek of next card on right.
  const trackOffset = isDesktop || isTablet
    ? (containerWidth - cardWidth) / 2 - activeIndex * (cardWidth + cardGap)
    : 20 - activeIndex * (cardWidth + cardGap);

  const shareUrl = getShareExperienceUrl();

  return (
    <section
      id="testimonials"
      aria-labelledby="words-from-our-brides-heading"
      className="bg-[#FFFCF7] text-[#70212D] pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-36 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B9]/60 relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* =========================================================================
            1. SECTION HEADER
            Eyebrow label, italic serif heading, ornamental diamond divider, and button
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 text-[#D2AD6C] mb-3 sm:mb-4">
            <span className="w-5 sm:w-8 h-[1px] bg-[#D2AD6C]/70" aria-hidden="true" />
            <span className="text-[8.5px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
              — LOVE LETTERS —
            </span>
            <span className="w-5 sm:w-8 h-[1px] bg-[#D2AD6C]/70" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2
            id="words-from-our-brides-heading"
            className="font-serif italic font-normal text-[#70212D] text-[27px] sm:text-4xl md:text-5xl lg:text-[60px] leading-[1.14] tracking-tight mb-4 px-2"
          >
            Words From Our Brides
          </h2>

          {/* Decorative Divider with Central Diamond */}
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 text-[#D2AD6C] mb-7 sm:mb-8"
            aria-hidden="true"
          >
            <div className="w-12 sm:w-20 h-[1px] bg-[#E9D8B9]" />
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D2AD6C]"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <div className="w-12 sm:w-20 h-[1px] bg-[#E9D8B9]" />
          </div>

          {/* "Share your experience" Functional Button */}
          <div className="mb-10 sm:mb-16 lg:mb-20">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-[#70212D] text-[#FFFCF7] hover:bg-[#581822] text-[11px] sm:text-xs md:text-[13px] font-sans font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2AD6C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFCF7]"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#D2AD6C]" aria-hidden="true" />
              <span>Share your experience</span>
            </a>
          </div>
        </div>

        {/* =========================================================================
            2. CAROUSEL CONTAINER WITH DESKTOP ARROWS & MOBILE PEEK
           ========================================================================= */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-4 outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
          aria-label="Client testimonials from our brides"
        >
          {/* Horizontal Track with Smooth CSS Transform */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(${trackOffset}px)`,
              gap: `${cardGap}px`,
            }}
          >
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  style={{ width: `${cardWidth}px` }}
                  className={`shrink-0 cursor-pointer transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  aria-hidden={!isActive}
                >
                  {/* Testimonial Card Container */}
                  <div
                    className={`relative bg-[#FFFCF7] border border-[#E9D8B9] rounded-sm p-6 sm:p-9 lg:p-12 transition-all duration-300 min-h-[260px] sm:min-h-[300px] lg:min-h-[320px] flex flex-col justify-between ${
                      isActive ? 'shadow-[0_8px_30px_rgba(112,33,45,0.06)]' : ''
                    }`}
                  >
                    {/* Delicate Architectural Gold Corner Details */}
                    <span
                      className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-[#D2AD6C] pointer-events-none"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-[#D2AD6C] pointer-events-none"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b-2 border-l-2 border-[#D2AD6C] pointer-events-none"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-[#D2AD6C] pointer-events-none"
                      aria-hidden="true"
                    />

                    <div>
                      {/* Quotation Mark */}
                      <span
                        className="block font-serif text-[#D2AD6C] text-2xl sm:text-3xl lg:text-4xl leading-none mb-3 sm:mb-4 select-none"
                        aria-hidden="true"
                      >
                        “
                      </span>

                      {/* Review Text */}
                      <blockquote className="font-serif italic text-[#70212D] text-sm sm:text-lg lg:text-[20px] leading-relaxed mb-6 font-normal">
                        "{item.quote}"
                      </blockquote>
                    </div>

                    <div>
                      {/* Decorative Separator */}
                      <div
                        className="w-10 sm:w-14 h-[1px] bg-[#D2AD6C]/70 mb-4"
                        aria-hidden="true"
                      />

                      {/* Customer Name */}
                      <p className="font-serif text-[#70212D] text-base sm:text-lg lg:text-xl font-medium tracking-tight mb-1">
                        {item.name}
                      </p>

                      {/* Customer Label */}
                      <span className="block text-[8.5px] sm:text-[9.5px] font-sans tracking-[0.2em] uppercase text-[#A66D70] font-medium">
                        {item.roleLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Navigation Chevrons (Positioned at vertical center outside central text) */}
          <div className="hidden lg:flex pointer-events-none absolute inset-y-0 left-0 right-0 items-center justify-between px-2 xl:px-4">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#FFFCF7] border border-[#E9D8B9] text-[#70212D] hover:bg-[#F6EFE5] hover:border-[#D2AD6C] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2AD6C]"
            >
              <ChevronLeft className="w-5 h-5 text-[#70212D]" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#FFFCF7] border border-[#E9D8B9] text-[#70212D] hover:bg-[#F6EFE5] hover:border-[#D2AD6C] transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2AD6C]"
            >
              <ChevronRight className="w-5 h-5 text-[#70212D]" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators / Pagination Tracker */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D2AD6C] ${
                idx === activeIndex
                  ? 'w-7 bg-[#70212D]'
                  : 'w-2 bg-[#E9D8B9] hover:bg-[#D2AD6C]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
