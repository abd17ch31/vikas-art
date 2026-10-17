/**
 * Multi-Image WhatsApp enquiry helper for Vikash Mehndi Art.
 * Generates formatted click-to-chat links containing all selected design URLs.
 */
import { businessData } from '../data/businessData';

export const WHATSAPP_PHONE = businessData?.contact?.whatsappInternational || '919351260318';

/**
 * Maximum recommended designs in a single WhatsApp link before URL length warnings
 */
export const RECOMMENDED_MAX_DESIGNS = 12;

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
      // Use absolute public image URL
      const imageUrl = item.src || item.thumbnail || '';
      return `${index + 1}. ${item.title || `Mehndi Design #${item.id}`}\n${imageUrl}`;
    })
    .join('\n\n');

  return `Hello Vikash Mehndi Art,\n\nI would like to enquire about these ${selectedItems.length} mehndi design${
    selectedItems.length > 1 ? 's' : ''
  }:\n\n${designList}\n\nPlease let me know the availability, pricing, and customisation options for these designs.\n\nThank you.`;
}

/**
 * Generates the WhatsApp click-to-chat URL
 * @param {Array} selectedItems - List of selected design objects
 * @returns {{ url: string, isTooLong: boolean, charCount: number, message: string }}
 */
export function generateWhatsAppCartUrl(selectedItems) {
  const message = buildWhatsAppMessage(selectedItems);
  if (!message) {
    return { url: '', isTooLong: false, charCount: 0, message: '' };
  }

  const encoded = encodeURIComponent(message);
  const fullUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
  const charCount = fullUrl.length;

  // WhatsApp click-to-chat URLs can become unstable on some mobile web browsers if > 3500 chars
  const isTooLong = selectedItems.length > RECOMMENDED_MAX_DESIGNS || charCount > 3200;

  return {
    url: fullUrl,
    isTooLong,
    charCount,
    message,
    phone: WHATSAPP_PHONE,
  };
}
