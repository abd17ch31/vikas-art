/**
 * Configurable data source for the Vikash Mehndi Art About page sections.
 * Business owners can easily update co-founders, gratitude acknowledgements,
 * and promise copy here without editing component JSX.
 */

export const aboutContent = {
  // Section One: The Guiding Hands
  foundersSection: {
    eyebrow: 'MEET OUR CO-FOUNDERS',
    heading: 'The Guiding Hands',
    intro:
      'Behind every beautiful design is a commitment to artistry, care, and personal attention. Our team brings creativity and dedication to every celebration, helping each client find a mehndi style that feels uniquely theirs.',
    coFounders: [
      {
        id: 'co-founder-1',
        name: 'Vikash Kumar',
        role: 'Founder & Master Artist',
        initials: 'V',
        image: null, // Supports genuine profile photograph if supplied
        bio: 'Leading bridal mehndi artistry in Jaipur with deep reverence for Rajasthani, Marwadi, and contemporary henna craftsmanship.',
      },
      {
        id: 'co-founder-2',
        name: 'Co-Founder',
        role: 'Co-Founder & Creative Director',
        initials: 'C',
        image: null, // Supports genuine profile photograph if supplied
        bio: 'Guiding client experience, bespoke wedding consultations, and signature design collections.',
      },
    ],
  },

  // Section Two: Brand Promise
  promiseSection: {
    eyebrow: 'OUR BLESSING & PROMISE',
    heading: 'Purity. Quality. Honesty.',
    text:
      'We believe every mehndi experience should be built on care, quality, and honesty. From understanding your preferences to creating your chosen design, we aim to make every celebration feel personal, memorable, and beautifully crafted.',
    icon: 'shield-check',
  },

  // Section Three: Special Thanks & CTAs
  gratitudeSection: {
    eyebrow: 'SPECIAL THANKS',
    heading: 'With heartfelt gratitude',
    text:
      'We are grateful to the people who continue to encourage our journey and inspire us to create with care. Their support reminds us of the value of trust, creativity, and meaningful connections.',
    // Configurable gratitude acknowledgements
    gratitudeBadges: [
      { id: 'gratitude-1', name: 'Our Valued Brides & Families' },
      { id: 'gratitude-2', name: 'Mentors & Well-Wishers' },
    ],
    ctas: {
      primary: {
        label: 'Book a Consultation',
        target: '#contact',
      },
      secondary: {
        label: 'Read FAQs',
        target: '#faq',
      },
    },
    // Helpful frequently asked questions for clients who click "Read FAQs"
    faqs: [
      {
        q: 'How far in advance should I book my bridal mehndi?',
        a: 'We recommend booking 2 to 6 months in advance for peak wedding seasons in Rajasthan and destination dates.',
      },
      {
        q: 'What type of henna do you use?',
        a: 'We use 100% natural, freshly prepared artisanal henna paste free from harmful synthetic chemicals, ensuring safe application and deep mahogany stains.',
      },
      {
        q: 'Do you travel for destination weddings?',
        a: 'Yes, our team travels across India and internationally for bridal and destination wedding celebrations.',
      },
      {
        q: 'Can I customize my bridal mehndi motifs?',
        a: 'Absolutely. We specialize in personalized motifs, including love story portraits, wedding hashtags, sacred verses, and couple monograms.',
      },
    ],
  },
};

export default aboutContent;
