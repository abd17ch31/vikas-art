import { useEffect } from 'react';
import { X, Trash2, ExternalLink, AlertTriangle, MessageCircle, Sparkles } from 'lucide-react';
import { generateWhatsAppCartUrl, RECOMMENDED_MAX_DESIGNS } from '../utils/whatsappHelper';

/**
 * Gallery-Exclusive Selection Cart Drawer
 * Manages selected designs, removal, batch review, and multi-image WhatsApp inquiry.
 */
export default function SelectionCart({
  isOpen,
  onClose,
  selectedItems = [],
  onRemoveItem,
  onClearAll,
  onOpenItemInLightbox,
}) {
  const { url: whatsappUrl, isTooLong, charCount } = generateWhatsAppCartUrl(selectedItems);
  const itemCount = selectedItems.length;

  // Escape key to close cart
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendWhatsApp = () => {
    if (!whatsappUrl || itemCount === 0) return;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Selected Mehndi Designs Cart"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Dim Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Drawer Container: Slide from right on desktop / bottom sheet on mobile */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF9] text-[#382329] border-l border-[#E7D5B6] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E7D5B6]/70 flex items-center justify-between bg-[#FBF6EE]">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-full bg-[#541820] text-[#E9D8B8]">
                <Sparkles className="w-4 h-4" />
              </span>
              <div>
                <h2 className="font-serif text-lg sm:text-xl font-bold text-[#541820] leading-none">
                  Your Selected Designs
                </h2>
                <span className="text-xs font-sans text-[#847976] mt-0.5 inline-block">
                  {itemCount} {itemCount === 1 ? 'design' : 'designs'} chosen for inquiry
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close selection cart"
              className="p-1.5 rounded-full text-[#541820] hover:bg-[#E7D5B6]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body: Scrollable Selected Items List or Empty State */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
            {itemCount === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F5EEE6] border border-[#E7D5B6] flex items-center justify-center text-[#541820]">
                  <Sparkles className="w-7 h-7 text-[#C5A15A]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#541820]">
                  Your collection is empty
                </h3>
                <p className="text-xs text-[#847976] max-w-xs font-sans">
                  Click the <span className="font-bold text-[#541820]">+</span> button on any mehndi card to collect your favorite designs for WhatsApp consultation.
                </p>
              </div>
            ) : (
              <>
                {/* Clear All Toolbar Button */}
                <div className="flex items-center justify-between pb-2 border-b border-[#E7D5B6]/40 text-xs text-[#847976]">
                  <span>Review your chosen items</span>
                  <button
                    type="button"
                    onClick={onClearAll}
                    className="text-[#541820] hover:text-[#3A1017] hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all ({itemCount})</span>
                  </button>
                </div>

                {/* Long Message Safeguard Banner */}
                {isTooLong && (
                  <div className="p-3 bg-[#FFF3CD]/80 border border-[#FFE69C] rounded text-xs text-[#856404] flex items-start gap-2 font-sans">
                    <AlertTriangle className="w-4 h-4 text-[#856404] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Notice for large selection ({itemCount} designs)</p>
                      <p className="mt-0.5 text-[11px] leading-relaxed">
                        WhatsApp operates most reliably with up to {RECOMMENDED_MAX_DESIGNS} designs at a time. All your URLs are included in the message, but consider sending in smaller batches if your browser warns of link length.
                      </p>
                    </div>
                  </div>
                )}

                {/* List of Cards */}
                <ul className="space-y-2.5">
                  {selectedItems.map((item, index) => (
                    <li
                      key={item.id}
                      className="group flex items-center gap-3 p-2 sm:p-2.5 rounded border border-[#E7D5B6]/80 bg-white hover:border-[#C5A15A] transition-colors"
                    >
                      {/* Compact Thumbnail */}
                      <button
                        type="button"
                        onClick={() => {
                          if (onOpenItemInLightbox) {
                            onOpenItemInLightbox(item);
                          }
                        }}
                        className="relative flex-shrink-0 w-14 h-16 rounded overflow-hidden bg-[#F5EEE6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
                        title="Click to preview full size in lightbox"
                      >
                        <img
                          src={item.thumbnail || item.src}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                        <span className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-white text-center py-0.2">
                          #{index + 1}
                        </span>
                      </button>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-sm font-semibold text-[#541820] truncate">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#F5EEE6] text-[#541820] border border-[#E9D8B8]">
                            {item.category}
                          </span>
                          <span className="text-[10px] text-[#847976] font-mono">
                            {item.id}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        aria-label={`Remove ${item.title} from selection`}
                        className="p-1.5 rounded text-[#847976] hover:text-[#541820] hover:bg-[#F5EEE6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Footer: WhatsApp Action & Helper Copy */}
          <div className="p-4 sm:p-5 border-t border-[#E7D5B6] bg-[#FBF6EE] space-y-3">
            <button
              type="button"
              disabled={itemCount === 0}
              onClick={handleSendWhatsApp}
              className={`w-full py-3.5 px-4 rounded font-semibold text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
                itemCount === 0
                  ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed border border-neutral-300'
                  : 'bg-[#541820] hover:bg-[#3A1017] text-[#FFFDF9] hover:shadow-lg border border-[#C5A15A]/60'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#C5A15A]" />
              <span>Send Selected Designs on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            <p className="text-[11px] text-center text-[#847976] font-sans leading-tight">
              Includes direct links to all {itemCount} selected design photos in one prefilled message directly to Vikash Mehndi Art Jaipur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
