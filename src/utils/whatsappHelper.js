/**
 * Multi-Image WhatsApp enquiry helper for Vikash Mehndi Art.
 * Generates formatted click-to-chat links containing proper absolute, openable image URLs.
 */
import { businessData } from '../data/businessData';

export const WHATSAPP_PHONE = businessData?.contact?.whatsappInternational || '919351260318';

/**
 * Maximum recommended designs in a single WhatsApp link before URL length warnings
 */
export const RECOMMENDED_MAX_DESIGNS = 12;

/**
 * Encodes special characters like spaces, ( and ) so WhatsApp's link parser
 * keeps the entire URL as a single continuous clickable hyperlink.
 */
function encodeCleanUrl(rawUrl) {
  if (!rawUrl) return '';
  try {
    // Decode first to prevent double-encoding (%20 -> %2520)
    const decoded = decodeURI(rawUrl);
    return encodeURI(decoded)
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29');
  } catch {
    return rawUrl
      .replace(/ /g, '%20')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29');
  }
}

/**
 * Converts any relative or local image path to a full, valid, publicly accessible absolute URL.
 * @param {string} src - The image source path
 * @returns {string} Fully qualified http(s) URL that can be clicked and opened anywhere
 */
export function getAbsoluteImageUrl(src) {
  if (!src) return '';

  // If already absolute with protocol
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return encodeCleanUrl(src);
  }

  // Get active browser origin (e.g. https://ais-dev-...run.app or your Vercel/custom domain)
  let origin = '';
  if (typeof window !== 'undefined' && window.location?.origin) {
    origin = window.location.origin;
  }

  // Fallback domain if rendered outside browser context
  if (!origin) {
    origin = 'https://vikashmehndiart.com';
  }

  const normalizedPath = src.startsWith('/') ? src : `/${src}`;

  try {
    const fullUrl = new URL(normalizedPath, origin).href;
    return encodeCleanUrl(fullUrl);
  } catch {
    return encodeCleanUrl(`${origin}${normalizedPath}`);
  }
}

/**
 * Generates the clean WhatsApp enquiry text message for selected designs
 * @param {Array} selectedItems - List of selected design objects
 * @returns {string} The full message body
 */
export function buildWhatsAppMessage(selectedItems) {
  if (!selectedItems || selectedItems.length === 0) {
    return '';
  }

  const designList = selectedItems
    .map((item, index) => {
      const rawUrl = item.src || item.thumbnail || '';
      const absoluteUrl = getAbsoluteImageUrl(rawUrl);
      const title = item.title || `Design #${index + 1}`;
      const category = item.category ? ` [${item.category}]` : '';
      return `${index + 1}. ${title}${category}\n${absoluteUrl}`;
    })
    .join('\n\n');

  return `Hello Vikash Mehndi Art,\n\nI would like to enquire about these ${selectedItems.length} mehndi design${
    selectedItems.length > 1 ? 's' : ''
  } from your gallery:\n\n${designList}\n\nPlease let me know the availability, pricing, and booking details for these designs.\n\nThank you.`;
}

/**
 * Generates the WhatsApp click-to-chat URL
 * @param {Array} selectedItems - List of selected design objects
 * @returns {{ url: string, isTooLong: boolean, charCount: number, message: string, phone: string }}
 */
export function generateWhatsAppCartUrl(selectedItems) {
  const message = buildWhatsAppMessage(selectedItems);
  if (!message) {
    return { url: '', isTooLong: false, charCount: 0, message: '' };
  }

  const encoded = encodeURIComponent(message);
  const fullUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
  const charCount = fullUrl.length;

  const isTooLong = selectedItems.length > RECOMMENDED_MAX_DESIGNS || charCount > 3200;

  return {
    url: fullUrl,
    isTooLong,
    charCount,
    message,
    phone: WHATSAPP_PHONE,
  };
}
