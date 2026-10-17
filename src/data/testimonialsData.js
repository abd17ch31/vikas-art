/**
 * Central testimonial configuration and data for Vikash Mehndi Art.
 * Section 9: "Words From Our Brides"
 *
 * IMPORTANT:
 * The names and quotes below are layout development placeholders.
 * Do not present them as verified customer feedback in production.
 * Replace with authentic customer-approved testimonials before live launch.
 */

export const testimonialsData = [
  {
    id: 'testimonial-1',
    name: 'Mariam Ahmed',
    quote:
      'Perfectly elegant and incredibly neat. The design looked stunning, and I received so many compliments.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
  {
    id: 'testimonial-2',
    name: 'Fatima Noor',
    quote:
      'The mehndi was intricate, graceful, and beautifully crafted. The entire experience felt special from beginning to end.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
  {
    id: 'testimonial-3',
    name: 'Anaya Rizvi',
    quote:
      'Loved the personalised design. Every little detail felt thoughtful, and the final result was beautiful.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
  {
    id: 'testimonial-4',
    name: 'Aisha Sharma',
    quote:
      'The patterns were delicate and detailed. The design suited my outfit perfectly and made the occasion even more memorable.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
  {
    id: 'testimonial-5',
    name: 'Meera Kapoor',
    quote:
      'Beautiful artistry and such lovely attention to detail. I was delighted with how the mehndi turned out.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
  {
    id: 'testimonial-6',
    name: 'Sana Khan',
    quote:
      'The experience was smooth and enjoyable, and the design was exactly the kind of elegant mehndi I wanted.',
    roleLabel: 'CUSTOMER TESTIMONIAL',
    source: 'Direct Client Feedback',
    sourceUrl: null,
    date: 'Recent Bride',
    verified: false,
  },
];

export const shareExperienceConfig = {
  buttonText: 'Share your experience',
  // Verified review destination or fallback to direct WhatsApp feedback channel
  externalUrl: null, // Set to Google Business review URL once verified by business owner
  whatsappNumber: '919351260318',
  whatsappMessage:
    'Hello Vikash Mehndi Art, I would love to share my experience with your mehndi service. Please let me know how I can submit my feedback.',
};

/**
 * Returns the active URL for the Share Your Experience button.
 */
export function getShareExperienceUrl() {
  if (shareExperienceConfig.externalUrl) {
    return shareExperienceConfig.externalUrl;
  }
  const encoded = encodeURIComponent(shareExperienceConfig.whatsappMessage);
  return `https://wa.me/${shareExperienceConfig.whatsappNumber}?text=${encoded}`;
}
