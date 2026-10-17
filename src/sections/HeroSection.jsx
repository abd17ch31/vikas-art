import { useState, useEffect, useRef } from 'react';
import { businessData } from '../data/businessData';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = businessData.heroSlides.length;
  const autoplayTimerRef = useRef(null);

  // Auto-sliding interval (6 seconds) with document visibility detection
  useEffect(() => {
    // Check user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const startTimer = () => {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 6000);
    };

    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(autoplayTimerRef.current);
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(autoplayTimerRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [totalSlides]);

  const handleSlideSelect = (index) => {
    setCurrentSlide(index);
    // Restart interval on manual interaction
    clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Welcome to Vikash Mehndi Art"
      className="relative min-h-[100svh] w-full flex items-center justify-start overflow-hidden bg-[#3A1017]"
    >
      {/* =========================================================================
          FOUR-IMAGE HORIZONTAL SLIDING BACKGROUND CAROUSEL
          Text, navbar, and overlays remain stable while the slide track transforms
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div
          className="flex h-full w-[400%] transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentSlide * 25}%)` }}
        >
          {businessData.heroSlides.map((slide, index) => (
            <div key={slide.id} className="relative h-full w-1/4 shrink-0 overflow-hidden">
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className="h-full w-full object-cover select-none"
                style={{
                  objectPosition:
                    typeof window !== 'undefined' && window.innerWidth < 768
                      ? slide.focalPointMobile
                      : slide.focalPointDesktop,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          CINEMATIC OVERLAY (Rich Burgundy Horizontal + Vertical Atmospheric Scrim)
         ========================================================================= */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(58,16,23,0.92) 0%, rgba(84,24,32,0.72) 42%, rgba(58,16,23,0.32) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(58,16,23,0.82) 0%, rgba(58,16,23,0.15) 35%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* =========================================================================
          SUBTLE DECORATIVE FLOATING GOLD LEAF PARTICLES (Low contrast, non-interfering)
         ========================================================================= */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden" aria-hidden="true">
        <span
          className="absolute top-[28%] left-[12%] w-2.5 h-3.5 rounded-full bg-[#C5A15A]/40 rotate-12 blur-[0.5px] animate-gold-particle"
          style={{ animationDelay: '0s', animationDuration: '8.5s' }}
        />
        <span
          className="absolute top-[65%] left-[22%] w-2 h-2.5 rounded-full bg-[#E9D8B8]/35 -rotate-45 blur-[0.5px] animate-gold-particle"
          style={{ animationDelay: '2.5s', animationDuration: '10s' }}
        />
        <span
          className="absolute top-[35%] left-[48%] w-3 h-2 rounded-full bg-[#C5A15A]/30 rotate-30 blur-[0.6px] animate-gold-particle"
          style={{ animationDelay: '4.5s', animationDuration: '9.2s' }}
        />
        <span
          className="absolute top-[75%] left-[68%] w-2 h-3 rounded-full bg-[#E9D8B8]/30 -rotate-12 blur-[0.5px] animate-gold-particle"
          style={{ animationDelay: '1.2s', animationDuration: '11s' }}
        />
        <span
          className="absolute top-[20%] left-[82%] w-2.5 h-2.5 rounded-full bg-[#C5A15A]/25 rotate-45 blur-[0.6px] animate-gold-particle"
          style={{ animationDelay: '3.8s', animationDuration: '10.5s' }}
        />
      </div>

      {/* =========================================================================
          HERO COPY AND PRIMARY CONVERSION CONTENT (Max width ~650px on left side)
         ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-[650px]">
          {/* Eyebrow Label */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#E9D8B8] font-sans">
              {businessData.eyebrow}
            </span>
          </div>

          {/* Main Editorial Serif Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.04] sm:leading-[1.02] tracking-tight font-serif text-[#F5EEE6]">
            Tradition Woven With{' '}
            <span className="italic font-serif text-[#C5A15A] block sm:inline">
              Elegance
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#F5EEE6]/90 leading-relaxed font-sans max-w-[540px]">
            {businessData.heroDescription}
          </p>
        </div>
      </div>

      {/* =========================================================================
          CAROUSEL SLIDE POSITION INDICATORS (Accessible bottom-right controls)
         ========================================================================= */}
      <div
        className="absolute bottom-10 right-6 sm:right-10 z-20 hidden sm:flex items-center space-x-3"
        role="tablist"
        aria-label="Slide indicators"
      >
        {businessData.heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={currentSlide === idx}
            aria-label={`View background slide ${idx + 1}`}
            onClick={() => handleSlideSelect(idx)}
            className={`h-1.5 transition-all duration-400 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
              currentSlide === idx ? 'w-8 bg-[#C5A15A]' : 'w-2 bg-[#F5EEE6]/40 hover:bg-[#F5EEE6]/70'
            }`}
          />
        ))}
      </div>

      {/* =========================================================================
          SCROLL INDICATOR (Lower centre with downward animated line)
         ========================================================================= */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={scrollToServices}
          aria-label="Scroll down to services"
          className="flex flex-col items-center text-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] rounded p-1"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] font-sans text-[#E9D8B8]/80 group-hover:text-[#E9D8B8] transition-colors">
            SCROLL
          </span>
          <div className="w-[1.5px] h-6 sm:h-8 bg-[#E9D8B8]/60 mt-2 relative overflow-hidden rounded-full">
            <div className="w-full h-full bg-[#E9D8B8] animate-scroll-pulse" />
          </div>
        </button>
      </div>
    </section>
  );
}
