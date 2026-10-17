import ContactInformationCard from '../components/ContactInformationCard';
import BookingEnquiryForm from '../components/BookingEnquiryForm';
import HeartDivider from '../components/HeartDivider';

/**
 * Dedicated Contact & Bookings / Enquiries Page for Vikash Mehndi Art
 * Contains:
 * - Editorial Centred Header
 * - Main Contact Information Card (WhatsApp Banner + 2-Column Info Grid)
 * - Booking Enquiry Form with Dual Actions (Enquire via Email & Enquire via WhatsApp)
 */
export default function ContactPage({ onNavigateHome }) {
  return (
    <div className="min-h-screen bg-[#FFFCF8] text-[#382329] pt-20 sm:pt-24 pb-20">
      {/* =========================================================================
          SECTION 4: CONTACT PAGE INTRODUCTION
         ========================================================================= */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-6 sm:pt-10 pb-8 sm:pb-10 text-center">
        {/* Eyebrow */}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#C5A15A] font-sans inline-flex items-center justify-center gap-2">
          <span>—</span>
          <span>GET IN TOUCH</span>
          <span>—</span>
        </span>

        {/* Main Heading */}
        <h1 className="font-serif font-normal text-[#421019] text-3xl sm:text-4xl md:text-[38px] tracking-tight mt-2.5 leading-[1.15]">
          Bookings & Enquiries
        </h1>

        {/* Decorative Gold Heart Divider */}
        <HeartDivider />

        {/* Supporting Description (max-width ~450px as per spec) */}
        <p className="font-sans text-xs sm:text-sm text-[#716A67] mt-3 max-w-[450px] mx-auto leading-relaxed">
          Connect directly with Vikash Mehndi Art for bridal bookings, event dates, and availability in Jaipur.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION 5, 6, 7: MAIN CONTACT INFORMATION CARD
           ========================================================================= */}
        <ContactInformationCard />

        {/* =========================================================================
            SECTION 8 & 9: MAIN ENQUIRY FORM WITH DUAL SUBMISSION BUTTONS
           ========================================================================= */}
        <BookingEnquiryForm />
      </main>
    </div>
  );
}
