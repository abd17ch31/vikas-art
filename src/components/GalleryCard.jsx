import { memo } from 'react';
import { Plus, Check } from 'lucide-react';

/**
 * Compact Gallery Card for the mehndi portfolio
 * Features an independent + selection toggle and full-card lightbox click trigger.
 */
function GalleryCard({
  item,
  isSelected,
  onToggleSelect,
  onOpenLightbox,
  isPriority = false,
}) {
  const handlePlusClick = (e) => {
    e.stopPropagation();
    onToggleSelect(item);
  };

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={() => onOpenLightbox(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(item);
        }
      }}
      aria-label={`View ${item.title} in full screen`}
      className={`group relative w-full overflow-hidden rounded-[3px] bg-[#FFFCF7] border transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] ${
        isSelected
          ? 'border-[#C5A15A] shadow-[0_4px_16px_rgba(197,161,90,0.3)] ring-1 ring-[#C5A15A]'
          : 'border-[#E7D5B6]/90 hover:border-[#C5A15A]/90 hover:shadow-[0_6px_20px_rgba(84,24,32,0.12)]'
      }`}
    >
      {/* Visual Image Container with subtle ratio rhythm */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#F5EEE6]">
        <img
          src={item.thumbnail || item.src}
          alt={item.alt}
          loading={isPriority ? 'eager' : 'lazy'}
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-[1.04]"
        />

        {/* Top-Right Plus/Check Selection Button */}
        <button
          type="button"
          onClick={handlePlusClick}
          aria-label={
            isSelected
              ? `Remove ${item.title} from selection`
              : `Add ${item.title} to selection`
          }
          className={`absolute top-2 right-2 z-10 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A] shadow-[0_2px_8px_rgba(0,0,0,0.2)] ${
            isSelected
              ? 'bg-[#541820] text-[#E9D8B8] ring-2 ring-[#C5A15A] scale-105'
              : 'bg-[#FFFDF9]/95 text-[#541820] hover:bg-[#541820] hover:text-[#E9D8B8] border border-[#E7D5B6]/80'
          }`}
          title={isSelected ? 'Selected (Click to remove)' : 'Add to WhatsApp selection'}
        >
          {isSelected ? (
            <Check className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          ) : (
            <Plus className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
          )}
        </button>

      </div>
    </article>
  );
}

export default memo(GalleryCard);
