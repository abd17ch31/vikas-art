import { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { coneToCelebrationData } from '../data/coneToCelebrationData';
import { businessData } from '../data/businessData';

export default function FromConeToCelebration() {
  const { occasions, cta } = coneToCelebrationData;
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

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

          // Start line drawing when top of timeline enters middle-lower viewport
          const startTrigger = windowHeight * 0.7;
          // Finish drawing when bottom of timeline reaches upper-middle viewport
          const endTrigger = windowHeight * 0.35;

          const timelineTop = rect.top;
          const timelineHeight = rect.height;

          if (timelineTop > startTrigger) {
            setScrollProgress(0);
            setActiveStepIndex(-1);
          } else {
            const scrolledDistance = startTrigger - timelineTop;
            const totalScrollableDistance = timelineHeight - (startTrigger - endTrigger);
            const progress = Math.min(Math.max(scrolledDistance / (totalScrollableDistance || 1), 0), 1);
            setScrollProgress(progress);

            // Determine which step is currently active (0 to 4)
            const activeIdx = Math.min(
              Math.floor(progress * occasions.length * 1.05),
              occasions.length - 1
            );
            setActiveStepIndex(activeIdx);
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
  }, [occasions.length]);

  return (
    <section
      id="from-cone-to-celebration"
      aria-labelledby="cone-to-celebration-heading"
      className="bg-[#49121B] text-[#F7E9D8] py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#C6A05C]/25 relative overflow-hidden"
    >
      {/* Background Decorative Ambient Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 20%, #681C28 0%, #3D0E16 75%, #2A080E 100%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* =========================================================================
            1. SECTION HEADER
            Centered uppercase gold eyebrow, italic serif heading, poetic subtitle
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3 text-[#C6A05C] mb-3.5">
            <span className="w-5 sm:w-8 h-[1px] bg-[#C6A05C]/60" aria-hidden="true" />
            <span className="text-[9px] sm:text-[10.5px] font-semibold tracking-[0.28em] uppercase font-sans">
              {coneToCelebrationData.eyebrow}
            </span>
            <span className="w-5 sm:w-8 h-[1px] bg-[#C6A05C]/60" aria-hidden="true" />
          </div>

          {/* Main Title */}
          <h2
            id="cone-to-celebration-heading"
            className="font-serif italic font-normal text-[#F7E9D8] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tight mb-5 px-2"
          >
            {coneToCelebrationData.heading}
          </h2>

          {/* Subtitle */}
          <p className="text-[#B9A09A] text-xs sm:text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto font-light">
            {coneToCelebrationData.subtitle}
          </p>

          {/* Decorative Gold Motif Divider */}
          <div className="flex items-center justify-center gap-3 text-[#C6A05C] mt-6" aria-hidden="true">
            <div className="w-12 sm:w-20 h-[1px] bg-[#C6A05C]/30" />
            <span className="text-xs">✦</span>
            <div className="w-12 sm:w-20 h-[1px] bg-[#C6A05C]/30" />
          </div>
        </div>

        {/* =========================================================================
            2. SCROLL TIMELINE WITH 5 NUMBERED CELEBRATION CATEGORIES
           ========================================================================= */}
        <div ref={timelineRef} className="relative mb-20 sm:mb-28">
          {/* Desktop Center Timeline Line / Mobile Left Timeline Line */}
          <div
            className="absolute top-8 bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-[#8B6A43]/40 z-0"
            aria-hidden="true"
          >
            {/* Scroll-driven Glowing Progress Line */}
            <div
              className="w-full bg-gradient-to-b from-[#E5D1A4] via-[#C6A05C] to-[#E5D1A4] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(198,160,92,0.6)]"
              style={{
                height: `${Math.max(scrollProgress * 100, 0)}%`,
              }}
            />
          </div>

          {/* Celebration Items */}
          <div className="space-y-12 sm:space-y-20 lg:space-y-24">
            {occasions.map((occasion, index) => {
              // Item is active when the scroll progress reaches its proportional section
              const itemThreshold = index / occasions.length;
              const isPassed = scrollProgress >= itemThreshold;
              const isCurrent = activeStepIndex === index;
              const isOdd = index % 2 !== 0;

              return (
                <div
                  key={occasion.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center"
                >
                  {/* Marker Node (Mobile: aligned left / Desktop: centered on timeline) */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Expanding Circular Wave pulse emitted by marker when active */}
                      {(isCurrent || isPassed) && (
                        <>
                          <span className="absolute w-12 h-12 rounded-full border border-[#C6A05C]/40 animate-marker-wave pointer-events-none" />
                          <span className="absolute w-8 h-8 rounded-full bg-[#C6A05C]/20 animate-ping pointer-events-none" />
                        </>
                      )}

                      {/* Circular Marker Badge */}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-serif text-xs sm:text-sm font-semibold transition-all duration-500 border-2 ${
                          isPassed || isCurrent
                            ? 'bg-[#3D0E16] border-[#C6A05C] text-[#F7E9D8] shadow-[0_0_18px_rgba(198,160,92,0.45)]'
                            : 'bg-[#3D0E16]/90 border-[#79503E] text-[#B9A09A]'
                        }`}
                      >
                        {occasion.number}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Alternating Layout */}
                  {/* Left Column (Desktop) */}
                  <div
                    className={`pl-16 md:pl-0 md:col-span-5 ${
                      isOdd ? 'md:order-2 md:col-start-8' : 'md:order-1 md:text-right'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 rounded-2xl bg-[#3D0E16]/80 border transition-all duration-500 backdrop-blur-sm ${
                        isCurrent || isPassed
                          ? 'border-[#C6A05C]/60 shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                          : 'border-[#79503E]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 justify-start md:justify-start">
                        <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C6A05C] inline-flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-[#C6A05C]" />
                          CATEGORY {occasion.number}
                        </span>
                      </div>

                      <h3 className="font-serif italic text-2xl sm:text-3xl text-[#F7E9D8] mb-1.5 leading-snug">
                        {occasion.title}
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-[#C6A05C]/90 font-medium mb-3">
                        {occasion.subtitle}
                      </p>

                      <p className="font-sans text-xs sm:text-[13px] text-[#B9A09A] leading-relaxed mb-5 font-light">
                        {occasion.description}
                      </p>

                      {/* Occasion Highlights Tags */}
                      <div
                        className={`flex flex-wrap gap-1.5 sm:gap-2 mb-5 ${
                          isOdd ? 'justify-start' : 'justify-start md:justify-end'
                        }`}
                      >
                        {occasion.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] sm:text-[11px] font-sans tracking-wide px-2.5 py-1 rounded-full bg-[#49121B] text-[#F7E9D8] border border-[#8B6A43]/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Direct WhatsApp Enquiry Link */}
                      <div className={`pt-2 ${isOdd ? 'text-left' : 'text-left md:text-right'}`}>
                        <a
                          href={`https://wa.me/919351260318?text=${encodeURIComponent(occasion.whatsappEnquiryText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6A05C] hover:text-[#F7E9D8] transition-colors group"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#C6A05C] group-hover:scale-110 transition-transform" />
                          <span>Enquire on WhatsApp</span>
                          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Center Line */}
                  <div className="hidden md:block md:col-span-2 md:order-2" aria-hidden="true" />

                  {/* Right Column / Image Card (Desktop) */}
                  <div
                    className={`pl-16 md:pl-0 md:col-span-5 ${
                      isOdd ? 'md:order-1 md:col-start-1' : 'md:order-3'
                    }`}
                  >
                    <div className="relative group overflow-hidden rounded-2xl border-2 border-[#8B6A43]/50 hover:border-[#C6A05C] transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                      <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#3D0E16]">
                        <img
                          src={occasion.image}
                          alt={occasion.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3D0E16] via-transparent to-transparent opacity-60 pointer-events-none" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#F7E9D8] font-sans">
                        <span className="tracking-widest uppercase font-medium text-[#C6A05C]">
                          Vikash Mehndi Art
                        </span>
                        <span className="text-[#B9A09A]">Jaipur, Rajasthan</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. PROMINENT LUXURY BOOKING CALL-TO-ACTION PANEL
            Dark green/emerald luxury background #102F28 with fine champagne-gold border #A68A55
           ========================================================================= */}
        <div className="mt-16 sm:mt-24">
          <div className="relative rounded-3xl overflow-hidden bg-[#102F28] border-2 border-[#A68A55] shadow-[0_20px_50px_rgba(0,0,0,0.45)] p-8 sm:p-12 lg:p-14 text-center">
            {/* Soft Ambient Radial Glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: 'radial-gradient(circle at 50% 50%, #1A473E 0%, #102F28 80%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Eyebrow */}
              <span className="inline-block text-[9px] sm:text-[10px] font-semibold tracking-[0.28em] uppercase text-[#C6A05C] font-sans mb-3">
                {cta.eyebrow}
              </span>

              {/* Title */}
              <h3 className="font-serif italic font-normal text-[#F7E9D8] text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                {cta.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm lg:text-base text-[#F7E9D8]/80 leading-relaxed max-w-2xl mx-auto mb-6 font-light">
                {cta.description}
              </p>

              {/* Policy & Assurance Badge */}
              <div className="inline-block px-4 py-2 rounded-xl bg-black/25 border border-[#A68A55]/40 text-[#F7E9D8]/90 text-[11px] sm:text-xs font-sans mb-8">
                <span className="font-semibold text-[#C6A05C]">Important Policy:</span> {cta.policyNote}
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Primary WhatsApp Action */}
                <a
                  href={`https://wa.me/919351260318?text=${encodeURIComponent(cta.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C6A05C] text-[#102F28] font-sans font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#F7E9D8] transition-colors shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Call Studio Action */}
                <a
                  href={`tel:${cta.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#F7E9D8] border border-[#A68A55] font-sans font-medium text-xs sm:text-sm tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C6A05C]" />
                  <span>Call {cta.primaryPhone}</span>
                </a>
              </div>

              {/* Secondary Details */}
              <div className="mt-8 pt-6 border-t border-[#A68A55]/30 flex flex-wrap items-center justify-center gap-6 text-[11px] text-[#F7E9D8]/70 font-sans">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C6A05C]" />
                  Advance Booking Essential
                </span>
                <span>•</span>
                <span>Raja Park Studio & On-Location Travel</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C6A05C]" />
                  Alt: {cta.secondaryPhone}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
