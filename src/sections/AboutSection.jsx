import { businessData } from '../data/businessData';
import HeartDivider from '../components/HeartDivider';
import AboutFounders from './AboutFounders';
import AboutPromise from './AboutPromise';
import AboutGratitude from './AboutGratitude';

/**
 * About Section: Combines the existing Our Story introduction with the
 * continuation sections: Co-Founders (The Guiding Hands), Brand Promise (Purity. Quality. Honesty),
 * and Special Thanks with working CTAs.
 */
export default function AboutSection({ onBookConsultation }) {
  return (
    <section id="about" className="bg-[#FBF5EA] border-b border-[#E9D8B8]/30 overflow-hidden">
      {/* =========================================================================
          EXISTING OUR STORY INTRODUCTION & NARRATIVE
         ========================================================================= */}
      <div className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D0AC6B] font-sans inline-block">
            — OUR STORY —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#4A101A] mt-2">
            About Vikash Mehndi Art
          </h2>
          <HeartDivider />
        </div>

        <div className="p-7 sm:p-10 rounded-2xl bg-[#FFFCF8] border border-[#E9D8B8] shadow-[0_4px_20px_rgba(74,16,26,0.04)] space-y-4 text-center sm:text-left">
          <p className="font-serif text-lg sm:text-xl md:text-[22px] text-[#4A101A] leading-relaxed italic">
            "Preserving centuries of Rajasthani henna traditions while curating contemporary, bespoke designs for the modern bride."
          </p>
          <p className="text-xs sm:text-sm text-[#77706C] leading-relaxed font-sans">
            Based in {businessData.contact.address}, Vikash Mehndi Art delivers intricate hand-drawn mehndi artistry across Rajasthan and destination weddings worldwide. Specialising in fine Marwadi jali, bridal portraiture, intricate wrist cuffs, and sacred motifs.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs font-sans text-[#4A101A] font-medium border-t border-[#E9D8B8]/40">
            <span>📍 Raja Park, Jaipur</span>
            <span className="text-[#D0AC6B]">·</span>
            <span>🌿 100% Organic Henna Stains</span>
            <span className="text-[#D0AC6B]">·</span>
            <span>💍 Bridal & Destination Weddings</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION ONE: THE GUIDING HANDS (CO-FOUNDERS)
         ========================================================================= */}
      <AboutFounders />

      {/* =========================================================================
          SECTION TWO: BRAND PROMISE (DEEP BURGUNDY FULL-WIDTH SECTION)
         ========================================================================= */}
      <AboutPromise />

      {/* =========================================================================
          SECTION THREE: SPECIAL THANKS & WORKING CTAs
         ========================================================================= */}
      <AboutGratitude
        onBookConsultation={
          onBookConsultation ||
          (() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          })
        }
      />
    </section>
  );
}
