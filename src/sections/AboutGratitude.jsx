import { useState } from 'react';
import { Heart, Sparkles, X, ChevronDown } from 'lucide-react';
import { aboutContent } from '../data/aboutContent';
import HeartDivider from '../components/HeartDivider';

/**
 * Section Three: Special Thanks & Call to Action
 * Displays heartfelt gratitude acknowledgements, configurable pill badges,
 * and working "Book a Consultation" & "Read FAQs" CTA buttons.
 */
export default function AboutGratitude({ onBookConsultation }) {
  const { eyebrow, heading, text, gratitudeBadges, ctas, faqs } = aboutContent.gratitudeSection;
  const [showFaqModal, setShowFaqModal] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handlePrimaryClick = (e) => {
    if (onBookConsultation) {
      e.preventDefault();
      onBookConsultation();
    }
  };

  const handleSecondaryClick = (e) => {
    e.preventDefault();
    setShowFaqModal(true);
  };

  return (
    <section
      id="about-gratitude"
      aria-labelledby="special-thanks-heading"
      className="bg-[#FBF5EA] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#E9D8B8]/40"
    >
      <div className="max-w-[720px] mx-auto text-center">
        {/* Decorative Circular Gold Heart Badge */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FFFCF8] border border-[#D0AC6B]/60 shadow-[0_2px_8px_rgba(74,16,26,0.06)] flex items-center justify-center text-[#D0AC6B]">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" aria-hidden="true" />
          </div>
        </div>

        {/* Eyebrow */}
        <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D0AC6B] font-sans inline-block">
          — {eyebrow} —
        </span>

        {/* Main Heading */}
        <h2
          id="special-thanks-heading"
          className="font-serif font-normal text-[#4A101A] text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] leading-[1.2] tracking-tight mt-2.5"
        >
          {heading}
        </h2>

        {/* Decorative Gold Heart Divider */}
        <HeartDivider />

        {/* Gratitude Paragraph */}
        <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] text-[#77706C] leading-relaxed max-w-[620px] mx-auto mt-2">
          {text}
        </p>

        {/* Gratitude Badges (Configurable Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-7 sm:mt-8">
          {gratitudeBadges.map((badge) => (
            <div
              key={badge.id}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#F7EFE1] border border-[#E9D8B8] shadow-[0_1px_4px_rgba(0,0,0,0.02)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D0AC6B] fill-current" aria-hidden="true" />
              <span className="font-serif text-xs sm:text-[13px] text-[#4A101A] font-medium tracking-wide">
                {badge.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
          {/* Primary CTA */}
          <a
            href={ctas.primary.target}
            onClick={handlePrimaryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full bg-[#4A101A] text-[#FBF5EA] hover:bg-[#350A12] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-[0_4px_14px_rgba(74,16,26,0.18)] hover:shadow-[0_6px_20px_rgba(74,16,26,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0AC6B]"
          >
            {ctas.primary.label}
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={handleSecondaryClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 sm:px-8 py-3 rounded-full bg-[#FFFCF8] text-[#4A101A] border border-[#D0AC6B] hover:bg-[#F5EEE6] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.03)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D0AC6B]"
          >
            {ctas.secondary.label}
          </button>
        </div>
      </div>

      {/* Accessible FAQ Modal triggered by "Read FAQs" */}
      {showFaqModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="faq-modal-heading"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg bg-[#FFFCF8] rounded-2xl border border-[#E9D8B8] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E9D8B8]/60">
              <div className="flex items-center gap-2 text-[#4A101A]">
                <Sparkles className="w-4 h-4 text-[#D0AC6B]" />
                <h3 id="faq-modal-heading" className="font-serif text-xl sm:text-2xl font-bold">
                  Frequently Asked Questions
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFaqModal(false)}
                aria-label="Close FAQs"
                className="p-1 rounded-full text-[#77706C] hover:text-[#4A101A] hover:bg-[#F5EEE6] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Accordion Questions */}
            <div className="mt-4 space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-[#E9D8B8]/80 rounded-xl overflow-hidden bg-[#FBF5EA]/50"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 font-serif text-sm sm:text-base font-semibold text-[#4A101A] hover:text-[#70212D] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#D0AC6B] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-3.5 sm:px-4 pb-3.5 pt-1 text-xs sm:text-[13px] font-sans text-[#77706C] leading-relaxed border-t border-[#E9D8B8]/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-6 pt-4 border-t border-[#E9D8B8]/60 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowFaqModal(false)}
                className="px-5 py-2 rounded-full border border-[#E9D8B8] text-xs font-semibold text-[#77706C] hover:bg-[#F5EEE6]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  setShowFaqModal(false);
                  handlePrimaryClick(e);
                }}
                className="px-5 py-2 rounded-full bg-[#4A101A] text-[#FBF5EA] text-xs font-semibold uppercase tracking-wider hover:bg-[#350A12]"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
