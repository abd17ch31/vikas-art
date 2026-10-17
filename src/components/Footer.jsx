import { Phone, Instagram, MapPin, Clock, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { footerData } from '../data/finalCtaData';
import logo from '../assets/images/Logo/c39ad922-2908-43a4-bbb7-47d652f847cd-removebg-preview.png';

/**
 * Section 10 - Part 2: Premium Dark Burgundy Website Footer
 * Editorial branding, atelier insignia, navigational columns, policies,
 * direct contact access, and subtle copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#2D0911] text-[#E5D7D0] border-t border-[#D4AF37]/25 relative overflow-hidden font-sans"
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* Decorative ambient background subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#D4AF37]/15">
          {/* Column 1: Monogram Brand & Atelier Story (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-5">
            {/* Brand Logo */}
            <a
              href="#home"
              className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1 -m-1"
              aria-label="Vikash Mehndi Art - Return to top"
            >
              <img
                src={logo}
                alt="Vikash Bridal Mehndi logo"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
                loading="lazy"
              />
            </a>

            {/* Brand Philosophy Narrative */}
            <p className="text-sm text-[#D8C7BA]/80 font-light leading-relaxed max-w-md pt-1">
              {footerData.description}
            </p>

            {/* Quick trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3D0E16] border border-[#D4AF37]/30 text-xs text-[#E5C988]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>100% Organic Henna · Chemical-Free Guarantee</span>
            </div>
          </div>

          {/* Column 2: Atelier Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#E5C988] font-sans">
              Atelier
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#D8C7BA]/80 hover:text-[#FFF8F0] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37] rounded"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D4AF37]/60" aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Booking & Policies (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#E5C988] font-sans">
              Client Care
            </h3>
            <ul className="space-y-3 text-xs">
              {footerData.policies.map((policy) => (
                <li key={policy.label} className="flex flex-col space-y-1">
                  <span className="text-[#FFF8F0] font-medium tracking-wide">
                    {policy.label}
                  </span>
                  <span className="text-[#D8C7BA]/70 text-[11px] leading-snug">
                    {policy.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Studio Location (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] font-medium text-[#E5C988] font-sans">
              Private Studio
            </h3>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs text-[#D8C7BA]/85">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {footerData.contact.address}
              </address>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-2.5 text-xs text-[#D8C7BA]/85">
              <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden="true" />
              <span>Studio Hours: 10:00 AM – 9:00 PM (By Appointment)</span>
            </div>

            {/* Phone Contacts */}
            <div className="flex flex-col space-y-1.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${footerData.contact.primaryPhone}`}
                  className="text-[#FFF8F0] hover:text-[#E5C988] transition-colors font-medium tracking-wide"
                >
                  +91 {footerData.contact.primaryPhone}
                </a>
                <span className="text-[#D4AF37]/50">/</span>
                <a
                  href={`tel:${footerData.contact.secondaryPhone}`}
                  className="text-[#FFF8F0] hover:text-[#E5C988] transition-colors font-medium tracking-wide"
                >
                  {footerData.contact.secondaryPhone}
                </a>
              </div>
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={footerData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white/5 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-white/10 text-xs text-[#FFF8F0] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label={`Follow Vikash Mehndi Art on Instagram @${footerData.contact.instagram}`}
              >
                <Instagram className="w-3.5 h-3.5 text-[#E5C988]" aria-hidden="true" />
                <span>@{footerData.contact.instagram}</span>
              </a>

              <a
                href={footerData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/25 text-xs text-[#E5C988] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D4AF37]"
                aria-label="Direct message on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Chat Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer: Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C7BA]/60">
          <p>© {currentYear} {footerData.copyrightText}</p>
          <p className="font-serif italic text-sm text-[#E5C988]/80 text-center sm:text-right">
            "{footerData.tagline}"
          </p>
        </div>
      </div>
    </footer>
  );
}
