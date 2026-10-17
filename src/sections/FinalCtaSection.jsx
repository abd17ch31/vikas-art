import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { finalCtaData } from '../data/finalCtaData';

/**
 * Section 10 - Part 1: Cinematic Final Call-To-Action
 * Full-width bridal background image with deep burgundy overlay,
 * editorial typography, and dual gold-accented actions.
 */
export default function FinalCtaSection({ onNavigateContact }) {
  return (
    <section
      id="contact"
      aria-label="Book Bridal Consultation"
      className="relative w-full overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-12 py-24 sm:py-28"
    >
      {/* Background Bridal Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={finalCtaData.bgImage}
          alt="Royal Indian bride adorned in traditional wedding lehenga and intricate bridal mehndi"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="lazy"
        />
        {/* Deep Burgundy & Atmospheric Gradients */}
        <div
          className="absolute inset-0 bg-[#491018]/85 mix-blend-multiply transition-colors"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-radial-[at_center_center] from-[#49121B]/40 via-[#3D0E16]/80 to-[#2A080E]/95"
          aria-hidden="true"
        />
        {/* Subtle decorative gold sparkle ambient glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Editorial Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow Label with Delicate Gold Lines */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/60" aria-hidden="true" />
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.28em] font-sans font-medium text-[#E5C988]">
            {finalCtaData.eyebrow}
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-[#D4AF37]/60" aria-hidden="true" />
        </div>

        {/* Cinematic Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFF8F0] tracking-tight leading-[1.18] sm:leading-[1.15] max-w-3xl font-light">
          {finalCtaData.headingPrimary}{' '}
          <span className="italic font-normal block sm:inline text-[#F5E6CC] underline decoration-[#D4AF37]/40 decoration-1 underline-offset-8">
            {finalCtaData.headingItalic}
          </span>
        </h2>

        {/* Refined Description */}
        <p className="mt-6 text-sm sm:text-base lg:text-lg text-[#E3D3C8] font-sans font-light leading-relaxed max-w-2xl px-2">
          {finalCtaData.description}
        </p>

        {/* Dual Primary Call-To-Action Buttons */}
        <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          {/* Appointment Booking Button */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigateContact) {
                e.preventDefault();
                onNavigateContact();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded bg-[#D4AF37] text-[#2A080E] font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold hover:bg-[#E5C988] transition-all duration-300 shadow-[0_8px_24px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C988] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3D0E16]"
          >
            <Calendar className="w-4 h-4 text-[#2A080E]" aria-hidden="true" />
            <span>{finalCtaData.bookButtonText}</span>
          </a>

          {/* WhatsApp Direct Enquiry Button */}
          <a
            href={finalCtaData.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded border border-[#E5C988]/80 text-[#FFF8F0] bg-white/5 backdrop-blur-sm font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-medium hover:bg-white/15 hover:border-[#FFF8F0] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C988] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3D0E16]"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
            <span>{finalCtaData.whatsappButtonText}</span>
          </a>
        </div>

        {/* Ambient Reassurance Footnote */}
        <div className="mt-8 sm:mt-10 inline-flex items-center gap-2 text-xs text-[#D8C7BA]/80 font-sans tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]/90" aria-hidden="true" />
          <span>{finalCtaData.consultationNote}</span>
        </div>
      </div>
    </section>
  );
}
