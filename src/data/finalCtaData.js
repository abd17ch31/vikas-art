import cinematicBridalBg from '../assets/images/cinematic_bridal_bg_1791821227070.jpg';
import vikashLogoGold from '../assets/images/vikash_logo_gold_1791821209128.jpg';
import { businessData } from './businessData';

/**
 * Configuration and structured data for Section 10:
 * Cinematic Final CTA & Premium Footer
 */
export const finalCtaData = {
  bgImage: cinematicBridalBg,
  eyebrow: 'YOUR BESPOKE BRIDAL EXPERIENCE',
  headingPrimary: 'Let us adorn your hands with',
  headingItalic: 'stories that linger for a lifetime.',
  description:
    'From our studio in Raja Park to destination palaces across Rajasthan, our artisanal mehndi blends timeless heritage motifs with personalised bridal narratives.',
  bookButtonText: 'Book an Appointment',
  bookButtonHref: '#contact',
  whatsappButtonText: 'WhatsApp Enquiry',
  whatsappHref: businessData.contact.whatsappUrl,
  consultationNote: 'Private consultations & destination wedding bookings open for upcoming wedding seasons.',
};

export const footerData = {
  logo: {
    image: vikashLogoGold,
    alt: 'Vikash Mehndi Art - Luxury Monogram Emblem',
    title: 'VIKASH MEHNDI ART',
    subtitle: 'BRIDAL ATELIER · JAIPUR',
  },
  description:
    'Dedicated to the ancient ritual of bridal adornment, blending classical Marwadi intricacy with contemporary grace. Handcrafted organic henna stains designed to honour love stories across Rajasthan and beyond.',
  navigation: [
    { label: 'Atelier Story', href: '#about' },
    { label: 'Bridal Collections', href: '#bridal-packages' },
    { label: 'Recent Creations', href: '#gallery' },
    { label: 'The Henna Journey', href: '#sacred-journey' },
    { label: 'Signature Styles', href: '#signature-styles' },
    { label: 'Words From Brides', href: '#testimonials' },
  ],
  policies: [
    { label: 'Booking & Advance Policy', href: '#booking-policy', note: 'Advance amount is non-refundable.' },
    { label: '100% Organic Henna Guarantee', href: '#henna-purity', note: 'Pure Rajasthani leaves, chemical-free.' },
    { label: 'On-Location Bridal Services', href: '#travel-policy', note: 'Available across Jaipur & destination venues.' },
  ],
  contact: {
    primaryPhone: businessData.contact.primaryPhone,
    secondaryPhone: businessData.contact.secondaryPhone,
    whatsappUrl: businessData.contact.whatsappUrl,
    address: businessData.contact.address,
    cityState: 'Raja Park, Jaipur, Rajasthan 302004',
    instagram: businessData.contact.instagram,
    instagramUrl: businessData.contact.instagramUrl,
  },
  copyrightText: 'Vikash Mehndi Art. All rights reserved. Handcrafted in Jaipur, Rajasthan.',
  tagline: 'Artistry in Every Stroke · Elegance in Every Shade',
};
