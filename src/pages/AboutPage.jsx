import { businessData } from '../data/businessData';
import HeartDivider from '../components/HeartDivider';
import AboutFounders from '../sections/AboutFounders';
import AboutPromise from '../sections/AboutPromise';
import AboutGratitude from '../sections/AboutGratitude';
import aboutImage from '../assets/images/about/image.png';
import { MapPin, Award, Sparkles, Heart } from 'lucide-react';

/**
 * Dedicated Luxury About Page for Vikash Mehndi Art
 * Contains the complete editorial narrative:
 * 1. Illustrated Hero & Heritage Introduction
 * 2. Our Story Narrative & Artisanal Values
 * 3. The Guiding Hands (Co-Founders Section)
 * 4. Brand Promise (Full-Width Burgundy Section)
 * 5. Special Thanks (Gratitude Badges & Interactive CTAs)
 */
export default function AboutPage({ onNavigateHome, onBookConsultation }) {
  return (
    <div className="min-h-screen bg-[#FBF5EA] text-[#382329] pt-20 sm:pt-24 pb-0">
      {/* =========================================================================
          HERO & OUR STORY INTRODUCTION
         ========================================================================= */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-6 sm:pt-10 pb-12 sm:pb-16 text-center">
        {/* Eyebrow */}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#D0AC6B] font-sans inline-flex items-center justify-center gap-2">
          <span>—</span>
          <span>OUR HERITAGE & VISION</span>
          <span>—</span>
        </span>

        {/* Main Heading */}
        <h1 className="font-serif font-normal text-[#4A101A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-3 leading-[1.12]">
          The Story Behind <span className="italic font-serif text-[#70212D]">Vikash Mehndi Art</span>
        </h1>

        {/* Decorative Gold Heart Divider */}
        <HeartDivider />

        {/* Supporting Description */}
        <p className="font-sans text-sm sm:text-base text-[#77706C] mt-4 max-w-2xl mx-auto leading-relaxed">
          Rooted in the royal traditions of Jaipur, Rajasthan, we craft bespoke bridal henna woven with sacred blessings, natural purity, and timeless elegance for life’s most cherished celebrations.
        </p>
      </header>

      {/* =========================================================================
          STORY SPOTLIGHT: ILLUSTRATION + ARTISANAL STORY CARD
         ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-[#FFFCF8] rounded-2xl border border-[#E9D8B8] shadow-[0_6px_24px_rgba(74,16,26,0.04)] p-6 sm:p-10 lg:p-12">
          {/* Devotional / Artisanal Illustrated Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/5] rounded-xl overflow-hidden border border-[#E9D8B8] shadow-md bg-[#F5EEE6]">
              <img
                src={aboutImage}
                alt="Vikash Mehndi Art team receiving a certificate"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
          </div>

          {/* Story Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider text-[#D0AC6B] uppercase">
              <Sparkles className="w-4 h-4 text-[#D0AC6B]" />
              <span>Timeless Craftsmanship</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#4A101A] font-normal leading-snug">
              "Preserving centuries of Rajasthani henna traditions while curating contemporary, bespoke designs for the modern bride."
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#77706C] leading-relaxed">
              Based in Style-in Shop No. 390, Gali No. 1, Raja Park, Jaipur, Vikash Mehndi Art brings passion, precision, and heartfelt dedication to every client. From traditional Marwadi jali and Rajasthani peacocks to delicate Arabian negative space and miniature portraiture, every pattern is drawn freehand with freshly ground natural henna.
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#77706C] leading-relaxed">
              Our henna cones are lovingly prepared with pure organic henna leaves, botanical essential oils, and the blessed dust (raj) of Barsana and Vrindavan, bringing auspiciousness and deep mahogany stains to brides celebrating across Rajasthan and destination weddings worldwide.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs font-sans text-[#4A101A]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF5EA] border border-[#E9D8B8] text-[11px] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D0AC6B]" />
                Raja Park, Jaipur
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF5EA] border border-[#E9D8B8] text-[11px] font-medium">
                <Award className="w-3.5 h-3.5 text-[#D0AC6B]" />
                100% Organic Henna
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF5EA] border border-[#E9D8B8] text-[11px] font-medium">
                <Heart className="w-3.5 h-3.5 text-[#D0AC6B]" />
                Bespoke Bridal Motifs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION ONE: THE GUIDING HANDS (CO-FOUNDERS)
         ========================================================================= */}
      <AboutFounders />

      {/* =========================================================================
          SECTION TWO: BRAND PROMISE (FULL-WIDTH DEEP BURGUNDY)
         ========================================================================= */}
      <AboutPromise />

      {/* =========================================================================
          SECTION THREE: SPECIAL THANKS & WORKING CTAS
         ========================================================================= */}
      <AboutGratitude onBookConsultation={onBookConsultation} />
    </div>
  );
}
