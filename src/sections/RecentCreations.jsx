import { galleryData } from '../data/galleryData';
import { businessData } from '../data/businessData';

function GalleryItem({ item, aspectClass, isPriority = false }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[2px] border-[2px] border-[#DCC58F] shadow-[0_4px_14px_rgba(220,197,143,0.18)] bg-neutral-100 transition-all duration-300"
    >
      {/* High-Resolution Mehndi Art Photograph */}
      <div className={`w-full overflow-hidden ${aspectClass}`}>
        <img
          src={item.image}
          alt={item.alt}
          loading={isPriority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          style={{ objectPosition: item.objectPosition }}
        />
      </div>
    </div>
  );
}

export default function RecentCreations({ onNavigateGallery }) {
  const images = galleryData;

  return (
    <section
      id="gallery"
      aria-labelledby="recent-creations-heading"
      className="bg-[#FFFCF7] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E5D1A4]/40"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================================================================
            SECTION HEADING & INTRO
            Centered eyebrow, large italic serif heading, and double-diamond gold divider
           ========================================================================= */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          {/* Eyebrow Label matching reference */}
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.26em] uppercase text-[#A56B6B] font-sans inline-flex items-center gap-2">
            <span>—</span>
            <span>@{businessData.contact.instagram.toUpperCase()}</span>
            <span>—</span>
          </span>

          {/* Main Heading */}
          <h2
            id="recent-creations-heading"
            className="font-serif italic font-normal text-[#6B1F2B] text-3xl sm:text-4xl md:text-5xl lg:text-[58px] leading-[1.08] tracking-tight mt-2.5"
          >
            Recent Creations
          </h2>

          {/* Centered Decorative Double-Diamond Divider matching reference */}
          <div className="flex items-center justify-center gap-3.5 mt-4 text-[#D6B777]" aria-hidden="true">
            <div className="w-12 sm:w-16 h-[1px] bg-[#E5D1A4]" />
            <svg
              className="w-3.5 h-4.5 text-[#D6B777]"
              viewBox="0 0 16 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <path d="M8 1L14 6.5L8 12L2 6.5L8 1Z" />
              <path d="M8 8L14 13.5L8 19L2 13.5L8 8Z" />
            </svg>
            <div className="w-12 sm:w-16 h-[1px] bg-[#E5D1A4]" />
          </div>
        </div>

        {/* =========================================================================
            DESKTOP & TABLET LAYOUT (Four-Column Asymmetric Masonry >= 768px)
            Preserved exactly as requested ("desktop view is already fine")
            Col 1: Image 1 (tall)
            Col 2: Image 2 (medium) + Image 5 (tall)
            Col 3: Image 3 (tall)
            Col 4: Image 4 (medium) + Image 6 (tall)
           ========================================================================= */}
        <div className="hidden md:grid md:grid-cols-4 gap-3 lg:gap-4 max-w-7xl mx-auto items-start">
          {/* Column 1: Image 1 */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <GalleryItem item={images[0]} aspectClass="aspect-[3/4.4]" isPriority />
          </div>

          {/* Column 2: Image 2 (top) + Image 5 (bottom) */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <GalleryItem item={images[1]} aspectClass="aspect-[4/3.9]" isPriority />
            <GalleryItem item={images[4]} aspectClass="aspect-[3/4.2]" />
          </div>

          {/* Column 3: Image 3 */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <GalleryItem item={images[2]} aspectClass="aspect-[3/4.4]" isPriority />
          </div>

          {/* Column 4: Image 4 (top) + Image 6 (bottom) */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <GalleryItem item={images[3]} aspectClass="aspect-[4/3.9]" isPriority />
            <GalleryItem item={images[5]} aspectClass="aspect-[3/4.2]" />
          </div>
        </div>

        {/* =========================================================================
            MOBILE VIEWPORT LAYOUT (< 768px)
            Replicating the exact 2-column, 3-row grid arrangement from the reference image:
            Row 1: Turquoise Bridal (left) | Crimson Velvet Bridal (right)
            Row 2: Traditional Intricate on lap (left) | Open Palms on pink fabric (right)
            Row 3: Fine Forearm Motif (left) | Symmetrical Lotus Palms on gold (right)
           ========================================================================= */}
        <div className="md:hidden grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-md mx-auto">
          {/* Row 1 */}
          <GalleryItem item={images[0]} aspectClass="aspect-[3/4.2]" isPriority />
          <GalleryItem item={images[2]} aspectClass="aspect-[3/4.2]" isPriority />

          {/* Row 2 */}
          <GalleryItem item={images[1]} aspectClass="aspect-[3/4.2]" />
          <GalleryItem item={images[3]} aspectClass="aspect-[3/4.2]" />

          {/* Row 3 */}
          <GalleryItem item={images[4]} aspectClass="aspect-[3/4.2]" />
          <GalleryItem item={images[5]} aspectClass="aspect-[3/4.2]" />
        </div>

        {/* Explore Full 100-Design Gallery CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onNavigateGallery}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 bg-[#541820] text-[#FFFDF9] hover:bg-[#3A1017] hover:shadow-lg border border-[#C5A15A]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A15A]"
          >
            <span>Explore All Mehndi Designs</span>
            <span className="text-[#E9D8B8]" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
