import { useEffect, useRef, useState } from 'react';
import { businessData } from '../data/businessData';

export default function SacredMehndiJourney() {
  const { sacredJourneyData } = businessData;
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState({});

  // Scroll-linked progress line calculation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!timelineRef.current) {
            ticking = false;
            return;
          }

          const rect = timelineRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Start line drawing when the top of the timeline reaches the middle of the viewport
          const startTrigger = windowHeight * 0.65;
          // Finish drawing when the bottom reaches 70% of the viewport
          const endTrigger = windowHeight * 0.45;

          const timelineTop = rect.top;
          const timelineHeight = rect.height;

          if (timelineTop > startTrigger) {
            // Above the timeline: 0% progress
            setScrollProgress(0);
          } else {
            // Distance scrolled through the timeline
            const scrolledDistance = startTrigger - timelineTop;
            const totalScrollableDistance = timelineHeight - (startTrigger - endTrigger);

            const progress = Math.min(Math.max(scrolledDistance / (totalScrollableDistance || 1), 0), 1);
            setScrollProgress(progress);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // IntersectionObserver for gentle card reveals
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step-id');
            if (stepId) {
              setVisibleSteps((prev) => ({ ...prev, [stepId]: true }));
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    const cards = document.querySelectorAll('.journey-card-item');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sacred-journey"
      aria-labelledby="sacred-journey-heading"
      className="bg-[#F8F0E0] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#D5B16B]/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* =========================================================================
            1. HERO ILLUSTRATION & HEADLINE COMPOSITION
            Devotional artwork fading softly into the cream background with floral details
           ========================================================================= */}
        <div className="relative mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Artwork Container (Left / Center on desktop) */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(30,59,43,0.08)] border border-[#D5B16B]/40 bg-[#FFF9EF]">
                <img
                  src={sacredJourneyData.heroIllustration}
                  alt={sacredJourneyData.heroAlt}
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[460px] sm:max-h-[520px]"
                />

                {/* Soft Gradient Fade into Section Background at the bottom and right */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 65%, rgba(248, 240, 224, 0.95) 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Delicate Botanical Vine Accent in background */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 text-[#54745A]/25 pointer-events-none hidden sm:block"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M10,80 Q30,40 70,20 Q50,60 10,80 Z M40,30 Q60,10 90,20 Q70,40 40,30 Z" />
                </svg>
              </div>
            </div>

            {/* Hero Text Block (Right on desktop) */}
            <div className="lg:col-span-5 text-center lg:text-left">
              {/* Eyebrow Label */}
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#C7A15D] font-sans block mb-3">
                {sacredJourneyData.eyebrow}
              </span>

              {/* Main Heading */}
              <h2
                id="sacred-journey-heading"
                className="font-serif font-normal text-[#1E3B2B] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] tracking-tight"
              >
                Our Sacred <br className="hidden sm:inline" />
                Mehndi Journey
              </h2>

              {/* Gold Floral Ornamental Divider */}
              <div className="flex items-center justify-center lg:justify-start gap-3 my-5 text-[#C7A15D]" aria-hidden="true">
                <div className="w-12 h-[1px] bg-[#D5B16B]" />
                <span className="text-sm">❦</span>
                <div className="w-12 h-[1px] bg-[#D5B16B]" />
              </div>

              {/* Devotional Subtitle */}
              <p className="font-serif italic text-lg sm:text-xl text-[#54745A] leading-relaxed">
                Blessed by Vrindavan,
                <br />
                Inspired by Barsana
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#786D5D] font-sans leading-relaxed max-w-md mx-auto lg:mx-0">
                A reverent ritual of handcrafted henna preparation rooted in centuries of devotional heritage and pure botanical craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. THE FIVE-STEP VERTICAL TIMELINE
            With scroll-driven animated green progress line running behind number markers
           ========================================================================= */}
        <div className="max-w-[760px] mx-auto relative pt-4 pb-8">
          <div ref={timelineRef} className="relative">
            {/* Base Dotted Track (Guide Rail) - Strictly in background */}
            <div
              className="absolute left-[20px] sm:left-[22px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-[#54745A]/30 z-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Scroll-Driven Animated Green Progress Line - Strictly in background z-0 */}
            <div
              className="absolute left-[20px] sm:left-[22px] top-6 w-[2.5px] bg-[#1E3B2B] z-0 pointer-events-none transition-all duration-150 ease-out rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
                maxHeight: 'calc(100% - 48px)',
              }}
              aria-hidden="true"
            />

            {/* The 5 Timeline Steps - Raised to z-10 so all step markers render strictly in front of the line */}
            <div className="relative z-10 space-y-6 sm:space-y-8">
              {sacredJourneyData.steps.map((step) => {
                const isVisible = !!visibleSteps[step.id];
                return (
                  <div
                    key={step.id}
                    data-step-id={step.id}
                    className={`journey-card-item relative flex items-start gap-4 sm:gap-6 transition-all duration-600 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-85 translate-y-2'
                    }`}
                  >
                    {/* Numbered Circular Marker (Z-20 to sit firmly above the animated green line) */}
                    <div
                      className="relative z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1E3B2B] text-[#FFF9EF] font-serif font-bold text-base sm:text-lg flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(30,59,43,0.18)] border-2 border-[#D5B16B]/60 mt-4 select-none"
                      aria-label={`Step ${step.number}`}
                    >
                      {step.number}
                    </div>

                    {/* Step Content Card */}
                    <div className="flex-1 bg-[#FFF9EF] rounded-2xl sm:rounded-3xl p-4 sm:p-5 sm:px-6 border border-[#D5B16B]/45 shadow-[0_4px_22px_rgba(30,59,43,0.04)] hover:shadow-[0_8px_28px_rgba(30,59,43,0.08)] transition-all duration-300 relative overflow-hidden group">
                      <div className="flex items-center gap-4 sm:gap-5">
                        {/* Circular Process Illustration */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden aspect-square border border-[#D5B16B]/60 shadow-sm shrink-0 bg-neutral-100">
                          <img
                            src={step.image}
                            alt={step.imageAlt}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 pr-6 sm:pr-8">
                          <h3 className="font-serif font-bold text-base sm:text-lg text-[#1E3B2B] tracking-tight">
                            {step.title}
                          </h3>

                          {/* Small Gold Divider with Floral Leaf Motif */}
                          <div className="flex items-center gap-1.5 my-1.5 text-[#C7A15D]" aria-hidden="true">
                            <div className="w-8 h-[1px] bg-[#D5B16B]" />
                            <span className="text-[10px]">✤</span>
                            <div className="w-4 h-[1px] bg-[#D5B16B]" />
                          </div>

                          <p className="text-xs sm:text-[13px] text-[#786D5D] leading-relaxed font-sans">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Subtle Botanical Sprig Accent on Far Right Edge */}
                      <div
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-12 text-[#C7A15D]/20 pointer-events-none select-none"
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 40" fill="currentColor">
                          <path d="M12,2 Q18,12 12,20 Q6,28 12,38 M12,10 Q20,6 22,12 Q14,14 12,10 M12,20 Q4,16 2,22 Q10,24 12,20 M12,30 Q20,26 22,32 Q14,34 12,30" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. CLOSING DECORATIVE STATEMENT
            Centered message with decorative gold dividers
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 lg:mt-22 text-center max-w-xl mx-auto px-4">
          {/* Top Divider */}
          <div className="flex items-center justify-center gap-3 mb-4 text-[#C7A15D]" aria-hidden="true">
            <div className="w-16 sm:w-24 h-[1px] bg-[#D5B16B]" />
            <span className="text-xs">❦</span>
            <div className="w-16 sm:w-24 h-[1px] bg-[#D5B16B]" />
          </div>

          <p className="text-xs sm:text-[13px] font-serif uppercase tracking-[0.22em] text-[#786D5D] font-medium leading-relaxed">
            {sacredJourneyData.closingStatement}
          </p>

          {/* Bottom Divider */}
          <div className="flex items-center justify-center gap-3 mt-4 text-[#C7A15D]" aria-hidden="true">
            <div className="w-16 sm:w-24 h-[1px] bg-[#D5B16B]" />
            <span className="text-xs">❦</span>
            <div className="w-16 sm:w-24 h-[1px] bg-[#D5B16B]" />
          </div>
        </div>
      </div>
    </section>
  );
}
