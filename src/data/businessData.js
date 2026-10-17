import heroBridalPrep from '../assets/images/homepage/image1.png';
import heroMehndiHands from '../assets/images/homepage/image.png';
import heroBrideMehndi from '../assets/images/homepage/image2.png';
import heroWeddingScene from '../assets/images/homepage/image3.png';

import catPortraitMehndi from '../assets/images/cat_portrait_mehndi_1791792921303.jpg';
import catBridalMehndi from '../assets/images/cat_bridal_mehndi_1791792933575.jpg';
import catGroomMehndi from '../assets/images/cat_groom_mehndi_1791792943764.jpg';
import catEngagementMehndi from '../assets/images/cat_engagement_mehndi_1791792958245.jpg';
import catFamilyMehndi from '../assets/images/cat_family_mehndi_1791792971328.jpg';

import pkgPremiumBridal from '../assets/images/pkg_premium_bridal_1791795205223.jpg';
import pkgSignatureBridal from '../assets/images/pkg_signature_bridal_1791795218611.jpg';
import pkgRoyalBridal from '../assets/images/pkg_royal_bridal_1791795230356.jpg';

import journeyHeroIllustration from '../assets/images/homepage/Krishna’s Flute by the River.png';
import step1DivineBlessings from '../assets/images/step1_divine_blessings_1791801679244.jpg';
import step2PureHennaLeaves from '../assets/images/step2_pure_henna_leaves_1791801690645.jpg';
import step3BlessedHennaBlend from '../assets/images/step3_blessed_henna_blend_1791801707980.jpg';
import step4NaturalDyeRelease from '../assets/images/step4_natural_dye_release_1791801727858.jpg';
import step5ReadyForBeauty from '../assets/images/step5_ready_for_beauty_1791801741171.jpg';

const prefilledMessage = 'Hello Vikash Mehndi Art, I would like to enquire about your mehndi services and availability.';
const encodedMessage = encodeURIComponent(prefilledMessage);

/**
 * Central business configuration for Vikash Mehndi Art.
 * Single source of truth for business contact, services, and branding.
 */
export const businessData = {
  name: 'Vikash Mehndi Art',
  tagline: 'Professional Mehndi Artistry in Jaipur',
  eyebrow: 'LUXURY MEHNDI ARTISTRY · JAIPUR',
  heroHeading: 'Tradition Woven With Elegance',
  heroDescription: "Beautiful mehndi artistry for weddings, celebrations, and life's most cherished moments.",
  contact: {
    primaryPhone: '9351260318',
    secondaryPhone: '8439743383',
    whatsappInternational: '919351260318',
    whatsappUrl: `https://wa.me/919351260318?text=${encodedMessage}`,
    address: 'Style-in Shop No. 390, Gali No. 1, Raja Park, Jaipur, Rajasthan',
    city: 'Jaipur',
    state: 'Rajasthan',
    pinCode: '302004',
    country: 'IN',
    email: 'vikashmehndiartjaipur@gmail.com',
    instagram: 'vikashmahandiart01',
    instagramUrl: 'https://www.instagram.com/vikashmahandiart01?dlrf=MWk0MXdmNWZiYWd5bA%3D%3D&utm_source=qr',
  },
  services: [
    'Arabian Mehndi',
    'Bombay Style Mehndi',
    'Gujarati Mehndi',
    'Marwadi Mehndi',
    'Rajasthani Mehndi',
    'Indo-Western Mehndi',
  ],
  occasions: [
    'Weddings',
    'Ceremonies',
    'Functions',
    'Special occasions',
  ],
  policies: {
    advancePayment: 'Advance amount is non-refundable.',
  },
  heroSlides: [
    {
      id: 'bridal-prep',
      image: heroBridalPrep,
      alt: 'Royal Rajasthani Indian bride adorned in traditional red and gold attire during mehndi preparation in Jaipur',
      focalPointDesktop: 'center 40%',
      focalPointMobile: 'center 30%',
    },
    {
      id: 'mehndi-hands',
      image: heroMehndiHands,
      alt: 'Macro view of intricate bridal mehndi henna designs on hands with fine Rajasthani and Marwadi patterns',
      focalPointDesktop: 'center 45%',
      focalPointMobile: 'center 40%',
    },
    {
      id: 'bride-mehndi',
      image: heroBrideMehndi,
      alt: 'Elegant Indian bride gracefully displaying detailed bridal mehndi hand artwork in crimson wedding attire',
      focalPointDesktop: 'right 35%',
      focalPointMobile: 'center 30%',
    },
    {
      id: 'wedding-scene',
      image: heroWeddingScene,
      alt: 'Festive Rajasthani wedding celebration and royal mehndi ceremony scene in Jaipur with ambient heritage lighting',
      focalPointDesktop: 'center 40%',
      focalPointMobile: 'center 35%',
    },
  ],
  celebrationCategories: [
    {
      id: 'portrait-mehndi',
      title: 'PORTRAIT MEHNDI',
      image: catPortraitMehndi,
      alt: 'Close-up of bridal palm showing delicate miniature bride and groom portrait drawn in dark mehndi henna',
      url: '/categories/portrait-mehndi',
      focalPoint: 'center center',
    },
    {
      id: 'bridal-mehndi',
      title: 'BRIDAL MEHNDI',
      image: catBridalMehndi,
      alt: 'Elaborate bridal hands and arms covered in intricate traditional henna motifs with gold kundan bangles',
      url: '/categories/bridal-mehndi',
      focalPoint: 'center center',
    },
    {
      id: 'groom-mehndi',
      title: 'GROOM MEHNDI',
      image: catGroomMehndi,
      alt: 'Refined minimalist traditional groom mehndi design on hands wearing royal ivory wedding sherwani',
      url: '/categories/groom-mehndi',
      focalPoint: 'center center',
    },
    {
      id: 'engagement-mehndi',
      title: 'ENGAGEMENT MEHNDI',
      image: catEngagementMehndi,
      alt: 'Bride-to-be displaying graceful engagement mehndi and diamond ring held lovingly during ceremony',
      url: '/categories/engagement-mehndi',
      focalPoint: 'center center',
    },
    {
      id: 'family-and-guest-mehndi',
      title: 'FAMILY AND GUEST MEHNDI',
      image: catFamilyMehndi,
      alt: 'Group of wedding guests and family women joyfully displaying decorated mehndi henna hands together',
      url: '/categories/family-and-guest-mehndi',
      focalPoint: 'center center',
    },
  ],
  bridalPackages: [
    {
      id: 'premium-bridal',
      name: 'Premium Bridal Package',
      image: pkgPremiumBridal,
      imageAlt: 'Indian bride in royal crimson red and gold bridal lehenga surrounded by sisters showing exquisite traditional bridal mehndi in Jaipur',
      description: 'Designed for brides who desire rich, intricate artistry with timeless elegance.',
      featured: false,
      badge: null,
      price: null,
      displayPrice: 'Enquire for pricing',
      currency: 'INR',
      rating: null,
      reviewCount: null,
      detailsUrl: '/bridal-packages/premium',
      whatsappMessage: 'Hello Vikash Mehndi Art, I would like to enquire about the Premium Bridal Package.',
      whatsappUrl: `https://wa.me/919351260318?text=${encodeURIComponent('Hello Vikash Mehndi Art, I would like to enquire about the Premium Bridal Package.')}`,
    },
    {
      id: 'signature-bridal',
      name: 'Signature Bridal Package',
      image: pkgSignatureBridal,
      imageAlt: 'Radiant bride in rich crimson and gold lehenga seated in heritage courtyard displaying signature fine bridal mehndi henna with bridesmaids in pastel attire',
      description: 'Our signature experience for brides seeking an elegant mehndi look for their special celebration.',
      featured: true,
      badge: '✦ SIGNATURE COLLECTION',
      price: null,
      displayPrice: 'Enquire for pricing',
      currency: 'INR',
      rating: null,
      reviewCount: null,
      detailsUrl: '/bridal-packages/signature',
      whatsappMessage: 'Hello Vikash Mehndi Art, I would like to enquire about the Signature Bridal Package.',
      whatsappUrl: `https://wa.me/919351260318?text=${encodeURIComponent('Hello Vikash Mehndi Art, I would like to enquire about the Signature Bridal Package.')}`,
    },
    {
      id: 'royal-bridal',
      name: 'Royal Bridal Package',
      image: pkgRoyalBridal,
      imageAlt: 'Luxurious bridal portrait of an Indian bride in blush and champagne couture gracefully holding up hands adorned with royal bridal mehndi',
      description: 'An elegant bridal experience for a celebration filled with tradition, beauty, and meaningful details.',
      featured: false,
      badge: null,
      price: null,
      displayPrice: 'Enquire for pricing',
      currency: 'INR',
      rating: null,
      reviewCount: null,
      detailsUrl: '/bridal-packages/royal',
      whatsappMessage: 'Hello Vikash Mehndi Art, I would like to enquire about the Royal Bridal Package.',
      whatsappUrl: `https://wa.me/919351260318?text=${encodeURIComponent('Hello Vikash Mehndi Art, I would like to enquire about the Royal Bridal Package.')}`,
    },
  ],
  sacredJourneyData: {
    eyebrow: 'A SACRED RITUAL',
    heading: 'Our Sacred\nMehndi Journey',
    subtitle: 'Blessed by Vrindavan,\nInspired by Barsana',
    heroIllustration: journeyHeroIllustration,
    heroAlt: 'Devotional artistic illustration of a traditional Indian woman in royal blue lehenga with braided hair adorned with flowers, surrounded by soft watercolor elements inspired by Lord Krishna, peacock feather and classical flute',
    closingStatement: 'CARRYING THE BLESSINGS OF RADHA RANI,\nVRINDAVAN & BARSANA IN EVERY CONE.',
    steps: [
      {
        id: 'divine-blessings',
        number: 1,
        title: 'Divine Blessings',
        description: 'Sacred prasadi and Barsana Raj are blended into our mehndi to bring blessings to every bride.',
        image: step1DivineBlessings,
        imageAlt: 'Devotional temple shrine arrangement with warm golden diya light and sacred prasadi blessings',
      },
      {
        id: 'pure-henna-leaves',
        number: 2,
        title: 'Pure Henna Leaves',
        description: 'Fresh henna leaves are sun-dried and naturally ground into fine henna powder.',
        image: step2PureHennaLeaves,
        imageAlt: 'Sun-dried organic henna leaves and finely ground herbal henna powder in traditional bowl',
      },
      {
        id: 'blessed-henna-blend',
        number: 3,
        title: 'Blessed Henna Blend',
        description: 'Henna powder is mixed with suitable ingredients to prepare a smooth paste.',
        image: step3BlessedHennaBlend,
        imageAlt: 'Artisanal brass bowl with smooth freshly blended green henna paste and natural botanicals',
      },
      {
        id: 'natural-dye-release',
        number: 4,
        title: 'Natural Dye Release',
        description: 'The paste rests for an appropriate period to release its colour and develop its natural qualities.',
        image: step4NaturalDyeRelease,
        imageAlt: 'Handcrafted bowl of resting henna paste naturally releasing deep rich dark mahogany color',
      },
      {
        id: 'ready-for-beauty',
        number: 5,
        title: 'Ready for Beauty',
        description: 'The prepared paste is filled into cones and carefully applied to create beautiful mehndi designs.',
        image: step5ReadyForBeauty,
        imageAlt: 'Rolled artisanal henna cones filled with fresh dark paste beside delicate jasmine blossoms',
      },
    ],
  },
};

export default businessData;
