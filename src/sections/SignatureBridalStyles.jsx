import { useState, useRef, useEffect, useCallback } from 'react';
import { signatureStylesData } from '../data/signatureBridalStyles';

export default function SignatureBridalStyles() {
  const styles = signatureStylesData;
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll position to update arrow disabled states and active indicator
  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const firstCard = el.firstElementChild;
    if (firstCard) {
      const cardWidth = firstCard.clientWidth + 24; // width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), styles.length - 1));
    }
  }, [styles.length]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToCard = (index) => {
    const el = carouselRef.current;
    if (!el || !el.children[index]) return;
    el.children[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
    setActiveIndex(index);
  };

  const handlePrev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const scrollAmount = firstCard ? firstCard.clientWidth + 28 : 340;
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const handleNext = () => {
    const el = carouselRef.current;
    if (!el) return;
    const firstCard = el.firstElementChild;
    const scrollAmount = firstCard ? firstCard.clientWidth + 28 : 340;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      id="signature-styles"
      aria-labelledby="signature-styles-heading"
      className="bg-[#FFFCF7] py-20 sm:py-24 lg:py-28 border-b border-[#DCC58F]/35 overflow-hidden"
    >
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* =========================================================================
            SECTION HEADING & INTRODUCTION
            Centred eyebrow with fine lines, italic serif title, and supporting text
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Eyebrow Label */}
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-[#D6B777] font-sans inline-flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#DCC58F] inline-block" aria-hidden="true" />
            <span>— THE COLLECTION —</span>
            <span className="w-4 h-[1px] bg-[#DCC58F] inline-block" aria-hidden="true" />
          </span>

          {/* Main Heading */}
          <h2
            id="signature-styles-heading"
            className="font-serif italic font-normal text-[#762631] text-3xl sm:text-5xl lg:text-[60px] leading-[1.08] tracking-tight mt-3.5 mb-3"
          >
            Signature Bridal Styles
          </h2>

          {/* Supporting Description */}
          <p className="text-sm sm:text-base md:text-[17px] text-[#88817E] font-sans leading-relaxed max-w-lg mx-auto">
            Curated designs inspired by tradition and contemporary elegance.
          </p>
        </div>

        {/* =========================================================================
            CAROUSEL SHOWCASE (Desktop, Tablet & Mobile)
            Horizontally smooth sliding carousel with Prev/Next buttons, touch swipe,
            and interactive pagination pills
           ========================================================================= */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous bridal style"
            className={`absolute left-0 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#DCC58F] shadow-[0_4px_16px_rgba(118,38,49,0.12)] flex items-center justify-center text-[#762631] hover:bg-[#762631] hover:text-[#FFFCF7] hover:border-[#762631] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B777] ${
              canScrollLeft
                ? 'opacity-100 cursor-pointer active:scale-95'
                : 'opacity-20 cursor-not-allowed pointer-events-none'
            }`}
          >
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next bridal style"
            className={`absolute right-0 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-[#DCC58F] shadow-[0_4px_16px_rgba(118,38,49,0.12)] flex items-center justify-center text-[#762631] hover:bg-[#762631] hover:text-[#FFFCF7] hover:border-[#762631] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B777] ${
              canScrollRight
                ? 'opacity-100 cursor-pointer active:scale-95'
                : 'opacity-20 cursor-not-allowed pointer-events-none'
            }`}
          >
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-6 sm:gap-7 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-4 px-2 sm:px-6 lg:px-8 touch-pan-y"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
            tabIndex={0}
            role="region"
            aria-label="Signature bridal styles carousel"
          >
            {styles.map((style, idx) => (
              <div
                key={style.id}
                className="group flex flex-col w-[82vw] sm:w-[320px] md:w-[330px] lg:w-[340px] xl:w-[360px] shrink-0 snap-start bg-white/60 rounded-[4px] p-3 sm:p-3.5 border border-[#DCC58F]/40 shadow-[0_6px_22px_rgba(118,38,49,0.05)] hover:shadow-[0_12px_32px_rgba(118,38,49,0.12)] hover:border-[#DCC58F] transition-all duration-300"
              >
                {/* Tall Portrait Image Container with Thin Gold Border */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-[3px] border-2 border-[#DCC58F] bg-neutral-100 shadow-xs">
                  <img
                    src={style.image}
                    alt={style.alt}
                    loading={idx <= 2 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ objectPosition: style.objectPosition }}
                  />
                  {/* Subtle category badge overlay */}
                  <div className="absolute top-3 left-3 bg-[#3A1017]/85 backdrop-blur-xs text-[#E9D8B8] text-[9.5px] font-sans font-medium uppercase tracking-[0.18em] px-2.5 py-1 rounded-xs border border-[#DCC58F]/40">
                    {style.category}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="flex-1 flex flex-col justify-between pt-4 px-1">
                  <div>
                    {/* Number Indicator */}
                    <span className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#D6B777] font-sans block">
                      {style.number}
                    </span>

                    {/* Card Title */}
                    <h3 className="mt-1 font-serif italic text-2xl lg:text-[27px] text-[#762631] font-normal leading-snug group-hover:text-[#541820] transition-colors">
                      {style.title}
                    </h3>

                    {/* Card Description */}
                    <p className="mt-2 text-xs sm:text-[13px] text-[#88817E] font-sans leading-relaxed">
                      {style.description}
                    </p>
                  </div>

                  {/* Direct WhatsApp Enquiry Link */}
                  <div className="mt-5 pt-3 border-t border-[#DCC58F]/25 flex items-center justify-between">
                    <a
                      href={style.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${style.title} on WhatsApp`}
                      className="inline-flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.16em] text-[#762631] group-hover:text-[#9A3543] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B777]"
                    >
                      <span>Enquire Design</span>
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>

                    <span className="text-[11px] text-[#D6B777] font-serif italic">
                      Jaipur Studio
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =========================================================================
              BOTTOM CONTROLS & PAGINATION
              Interactive indicator pills allowing direct navigation to any slide
             ========================================================================= */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 sm:mt-10">
            {/* Clickable Pagination Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Carousel pagination">
              {styles.map((style, idx) => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`Go to slide ${idx + 1}: ${style.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B777] ${
                    idx === activeIndex
                      ? 'w-8 bg-[#762631]'
                      : 'w-2 bg-[#DCC58F]/70 hover:bg-[#D6B777]'
                  }`}
                />
              ))}
            </div>

            {/* Slide Position Counter */}
            <span className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#88817E]">
              <strong className="text-[#762631] font-semibold">0{activeIndex + 1}</strong> / 0{styles.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
