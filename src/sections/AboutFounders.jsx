import { aboutContent } from '../data/aboutContent';
import HeartDivider from '../components/HeartDivider';

/**
 * Section One: The Guiding Hands (Co-Founders Section)
 * Features two balanced profile cards with circular burgundy avatars and role titles.
 */
export default function AboutFounders() {
  const { eyebrow, heading, intro, coFounders } = aboutContent.foundersSection;

  return (
    <section
      id="about-founders"
      aria-labelledby="guiding-hands-heading"
      className="bg-[#FBF5EA] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-[#E9D8B8]/40"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D0AC6B] font-sans inline-block">
            — {eyebrow} —
          </span>

          {/* Main Heading */}
          <h2
            id="guiding-hands-heading"
            className="font-serif font-normal text-[#4A101A] text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.18] tracking-tight mt-2.5"
          >
            {heading}
          </h2>

          {/* Decorative Gold Heart Divider */}
          <HeartDivider />

          {/* Introductory Paragraph */}
          <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] text-[#77706C] leading-relaxed max-w-[680px] mx-auto mt-2">
            {intro}
          </p>
        </div>

        {/* Co-Founders Profile Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[760px] mx-auto items-stretch">
          {coFounders.map((founder) => (
            <article
              key={founder.id}
              className="bg-[#FFFCF8] rounded-xl sm:rounded-2xl border border-[#E9D8B8] shadow-[0_4px_16px_rgba(74,16,26,0.03)] hover:shadow-[0_8px_24px_rgba(74,16,26,0.08)] transition-all duration-300 hover:-translate-y-1 p-7 sm:p-9 flex flex-col items-center text-center group"
            >
              {/* Circular Burgundy Avatar with Serif Initial or Photo */}
              <div className="relative mb-4 sm:mb-5">
                {founder.image ? (
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#D0AC6B] shadow-sm"
                  />
                ) : (
                  <div
                    aria-label={`Avatar for ${founder.name}`}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4A101A] text-[#FBF5EA] flex items-center justify-center font-serif text-2xl sm:text-3xl font-normal border border-[#D0AC6B]/50 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  >
                    <span>{founder.initials}</span>
                  </div>
                )}
              </div>

              {/* Founder Name */}
              <h3 className="font-serif font-normal text-[#4A101A] text-lg sm:text-[20px] leading-snug">
                {founder.name}
              </h3>

              {/* Role Label */}
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#D0AC6B] mt-1">
                {founder.role}
              </span>

              {/* Tiny Gold Heart Accent Beneath Role */}
              <div className="flex items-center justify-center gap-2 text-[#D0AC6B] my-2.5" aria-hidden="true">
                <div className="w-6 h-[1px] bg-[#E9D8B8]" />
                <svg className="w-2.5 h-2.5 text-[#D0AC6B]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <div className="w-6 h-[1px] bg-[#E9D8B8]" />
              </div>

              {/* Optional brief bio if supplied */}
              {founder.bio && (
                <p className="font-sans text-xs text-[#77706C] leading-relaxed max-w-[280px] mt-1 opacity-90">
                  {founder.bio}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
