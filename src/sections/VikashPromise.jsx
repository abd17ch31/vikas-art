import { Sparkles, Leaf, Award, Flame, ShieldCheck, Clock } from 'lucide-react';
import { vikashPromiseData } from '../data/vikashPromiseData';

const iconMap = {
  sparkles: Sparkles,
  leaf: Leaf,
  award: Award,
  flame: Flame,
  'shield-check': ShieldCheck,
  clock: Clock,
};

export default function VikashPromise() {
  const benefits = vikashPromiseData.filter((item) => item.enabled !== false);

  return (
    <section
      id="vikash-promise"
      aria-labelledby="vikash-promise-heading"
      className="bg-[#F5EFE3] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E8DCC4] overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto">
        {/* =========================================================================
            SECTION HEADER
            Centered eyebrow with fine lines, italic serif heading, and gold divider
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Eyebrow Label */}
          <span className="text-[8.5px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D1A653] font-sans inline-flex items-center gap-2 sm:gap-2.5">
            <span className="w-4 sm:w-6 h-[1px] bg-[#D1A653]/60 inline-block" aria-hidden="true" />
            <span>— THE VIKASH PROMISE —</span>
            <span className="w-4 sm:w-6 h-[1px] bg-[#D1A653]/60 inline-block" aria-hidden="true" />
          </span>

          {/* Main Heading with intentional desktop line break */}
          <h2
            id="vikash-promise-heading"
            className="font-serif italic font-normal text-[#702632] text-[26px] sm:text-4xl md:text-5xl lg:text-[60px] leading-[1.12] tracking-tight mt-3.5 sm:mt-4 mb-4 sm:mb-5 px-2"
          >
            Crafted For Your
            <br className="hidden sm:inline" /> Most Important Day
          </h2>

          {/* Delicate Ornamental Gold Divider */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#D1A653]" aria-hidden="true">
            <div className="w-12 sm:w-20 h-[1px] bg-[#E8DCC4]" />
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D1A653]"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" />
            </svg>
            <div className="w-12 sm:w-20 h-[1px] bg-[#E8DCC4]" />
          </div>
        </div>

        {/* =========================================================================
            BENEFITS GRID
            Desktop: 3 columns x 2 rows
            Mobile: 2 columns x 3 rows
            Clean internal divider lines without outer box borders or card backgrounds
           ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-[1220px] mx-auto">
          {benefits.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;

            // Border logic:
            // Mobile (2 columns):
            // - Col 0 (left): border-r
            // - Rows 0, 1: border-b
            // Desktop (3 columns):
            // - Cols 0, 1: md:border-r; Col 2: md:border-r-0
            // - Row 0: md:border-b; Row 1: md:border-b-0
            const mobileBorderR = idx % 2 === 0 ? 'border-r border-[#E8DCC4]' : 'border-r-0';
            const desktopBorderR = idx % 3 === 2 ? 'md:border-r-0' : 'md:border-r md:border-[#E8DCC4]';
            const mobileBorderB = idx < 4 ? 'border-b border-[#E8DCC4]' : 'border-b-0';
            const desktopBorderB = idx < 3 ? 'md:border-b md:border-[#E8DCC4]' : 'md:border-b-0';

            return (
              <div
                key={item.id}
                className={`flex flex-col text-left p-4 sm:p-7 md:p-8 lg:p-10 transition-colors duration-200 ${mobileBorderR} ${desktopBorderR} ${mobileBorderB} ${desktopBorderB}`}
              >
                {/* Thin Line Icon */}
                <div className="text-[#D1A653] mb-2 sm:mb-3">
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                {/* Benefit Title */}
                <h3 className="font-serif italic text-base sm:text-lg md:text-xl lg:text-[22px] text-[#702632] font-normal leading-snug">
                  {item.title}
                </h3>

                {/* Benefit Description */}
                <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-[13px] lg:text-[13.5px] text-[#827E79] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
