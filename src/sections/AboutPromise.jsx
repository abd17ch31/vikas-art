import { ShieldCheck } from 'lucide-react';
import { aboutContent } from '../data/aboutContent';
import HeartDivider from '../components/HeartDivider';

/**
 * Section Two: Brand Promise
 * Full-width deep burgundy section featuring delicate gold dot pattern,
 * circular shield badge, and core promise copy.
 */
export default function AboutPromise() {
  const { eyebrow, heading, text } = aboutContent.promiseSection;

  return (
    <section
      id="about-promise"
      aria-labelledby="brand-promise-heading"
      className="relative w-full bg-[#4A101A] text-[#FBF5EA] py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Dotted Decorative Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: 'radial-gradient(#D0AC6B 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Decorative Circular Burgundy-Gold Shield Badge */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#350A12] border border-[#D0AC6B]/60 shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center text-[#D0AC6B]">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" aria-hidden="true" />
          </div>
        </div>

        {/* Eyebrow */}
        <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D0AC6B] font-sans inline-block">
          — {eyebrow} —
        </span>

        {/* Main Heading */}
        <h2
          id="brand-promise-heading"
          className="font-serif font-normal text-[#FBF5EA] text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.2] tracking-tight mt-2.5"
        >
          {heading}
        </h2>

        {/* Decorative Gold Heart Divider */}
        <HeartDivider isDark={true} />

        {/* Promise Paragraph */}
        <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] text-[#E7D6CF] leading-relaxed max-w-[580px] mx-auto mt-2">
          {text}
        </p>
      </div>
    </section>
  );
}
