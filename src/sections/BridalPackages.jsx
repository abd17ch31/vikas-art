import { useState, useRef, useEffect } from 'react';
import { businessData } from '../data/businessData';

export default function BridalPackages() {
  const [favorites, setFavorites] = useState({});
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const mobileCarouselRef = useRef(null);

  const packages = businessData.bridalPackages;

  const toggleFavorite = (pkgId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [pkgId]: !prev[pkgId],
    }));
  };

  // Track active mobile slide on scroll
  const handleMobileScroll = () => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / packages.length;
    const active = Math.round(el.scrollLeft / cardWidth);
    setMobileActiveIndex(Math.min(Math.max(active, 0), packages.length - 1));
  };

  const scrollToMobileSlide = (index) => {
    const el = mobileCarouselRef.current;
    if (!el) return;
    const cards = el.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      setMobileActiveIndex(index);
    }
  };

  return (
    <section
      id="bridal-packages"
      aria-labelledby="bridal-packages-heading"
      className="bg-[#F8F2E7] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            SECTION HEADER & INTRODUCTION
            Centred eyebrow, elegant editorial serif heading with floral icon, and divider
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow Label */}
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A15A] font-sans block mb-3">
            ✧ PREMIUM COLLECTION ✧
          </span>

          {/* Main Heading with Floral Icon */}
          <h2
            id="bridal-packages-heading"
            className="font-serif font-normal text-[#3A1017] text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] leading-tight tracking-tight flex items-center justify-center gap-3"
          >
            <span className="text-2xl sm:text-3xl lg:text-4xl" role="img" aria-label="flower">
              🌸
            </span>
            <span>Bridal Premium Packages</span>
          </h2>

          {/* Thin Champagne Divider */}
          <div className="w-16 h-[1.5px] bg-[#E9D8B8] mx-auto mt-4" aria-hidden="true" />

          {/* Supporting Description */}
          <p className="mt-4 text-sm sm:text-base md:text-[17px] text-[#8A817E] leading-relaxed font-sans max-w-[540px] mx-auto">
            Choose the package that matches your dream bridal look.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (768px & above)
            Three large, equally aligned cards in a single row with consistent heights.
           ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {packages.map((pkg) => {
            const isFav = !!favorites[pkg.id];
            return (
              <div
                key={pkg.id}
                className={`bg-[#FFFDF9] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_32px_rgba(58,16,23,0.09)] ${
                  pkg.featured
                    ? 'border-2 border-[#C5A15A] shadow-[0_8px_28px_rgba(58,16,23,0.08)] relative ring-1 ring-[#C5A15A]/40'
                    : 'border border-[#E9D8B8]/75 shadow-[0_4px_20px_rgba(58,16,23,0.04)]'
                }`}
              >
                {/* Image Area with Favorite Button & Featured Badge */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Favorite Button (Top-Left) */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(pkg.id, e)}
                    aria-label={isFav ? `Remove ${pkg.name} from favorites` : `Save ${pkg.name} to favorites`}
                    className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#541820] hover:text-[#C5A15A] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${isFav ? 'scale-110 text-red-700 fill-current' : 'fill-none'}`}
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>

                  {/* Featured Badge (Top-Center for Signature Package) */}
                  {pkg.featured && pkg.badge && (
                    <div className="absolute top-4 right-4 z-10 bg-[#541820] text-[#F8F2E7] text-[10px] font-semibold tracking-[0.18em] uppercase py-1.5 px-3 rounded-full shadow-md border border-[#E9D8B8]/40 font-sans">
                      {pkg.badge}
                    </div>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-6 lg:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Package Title */}
                    <h3 className="font-serif font-bold text-xl lg:text-2xl text-[#3A1017]">
                      {pkg.name}
                    </h3>

                    {/* Price / Enquiry Notice */}
                    <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#C5A15A] font-sans">
                      {pkg.displayPrice}
                    </div>

                    {/* Short Description */}
                    <p className="mt-3.5 text-sm text-[#8A817E] leading-relaxed font-sans">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Action Button: View Details (with WhatsApp option) */}
                  <div className="mt-7 pt-4 border-t border-[#E9D8B8]/30">
                    <a
                      href={pkg.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full h-11 flex items-center justify-center gap-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                        pkg.featured
                          ? 'bg-[#541820] text-[#F8F2E7] hover:bg-[#3A1017] shadow-sm hover:shadow'
                          : 'border border-[#541820] text-[#541820] hover:bg-[#541820] hover:text-[#F8F2E7]'
                      }`}
                    >
                      <span>View Details</span>
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (Below 768px)
            Single prominent package card at a time with horizontal swipe & dot indicators
           ========================================================================= */}
        <div className="md:hidden">
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none px-4 py-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {packages.map((pkg) => {
              const isFav = !!favorites[pkg.id];
              return (
                <div
                  key={pkg.id}
                  className={`w-[85vw] max-w-[360px] shrink-0 snap-center bg-[#FFFDF9] rounded-2xl overflow-hidden flex flex-col justify-between ${
                    pkg.featured
                      ? 'border-2 border-[#C5A15A] shadow-md ring-1 ring-[#C5A15A]/30'
                      : 'border border-[#E9D8B8]/80 shadow-sm'
                  }`}
                >
                  {/* Mobile Image Area */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={pkg.image}
                      alt={pkg.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />

                    {/* Favorite Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(pkg.id, e)}
                      aria-label={isFav ? `Remove ${pkg.name} from favorites` : `Save ${pkg.name} to favorites`}
                      className="absolute top-3.5 left-3.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#541820] shadow-sm"
                    >
                      <svg
                        className={`w-4 h-4 ${isFav ? 'text-red-700 fill-current' : 'fill-none'}`}
                        stroke="currentColor"
                        strokeWidth="1.75"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>

                    {/* Featured Badge */}
                    {pkg.featured && pkg.badge && (
                      <div className="absolute top-3.5 right-3.5 z-10 bg-[#541820] text-[#F8F2E7] text-[9.5px] font-semibold tracking-[0.16em] uppercase py-1 px-2.5 rounded-full shadow-sm font-sans">
                        {pkg.badge}
                      </div>
                    )}
                  </div>

                  {/* Mobile Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#3A1017]">
                        {pkg.name}
                      </h3>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#C5A15A] font-sans">
                        {pkg.displayPrice}
                      </div>
                      <p className="mt-2.5 text-xs text-[#8A817E] leading-relaxed font-sans">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#E9D8B8]/30">
                      <a
                        href={pkg.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-11 flex items-center justify-center gap-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all ${
                          pkg.featured
                            ? 'bg-[#541820] text-[#F8F2E7] active:bg-[#3A1017]'
                            : 'border border-[#541820] text-[#541820] active:bg-[#541820] active:text-[#F8F2E7]'
                        }`}
                      >
                        <span>View Details</span>
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-4" aria-hidden="true">
            {packages.map((pkg, idx) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() => scrollToMobileSlide(idx)}
                aria-label={`Go to ${pkg.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  mobileActiveIndex === idx ? 'w-6 bg-[#541820]' : 'w-1.5 bg-[#E9D8B8]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM LINK: “Explore all bridal experiences →”
            Centered beneath the cards on both desktop and mobile
           ========================================================================= */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#3A1017] hover:text-[#541820] border-b border-[#E9D8B8] pb-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded px-1"
          >
            <span>Explore all bridal experiences</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
