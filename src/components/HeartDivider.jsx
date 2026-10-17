/**
 * Elegant decorative thin gold line divider with a central heart ornament.
 * Used across the About page and luxury portfolio sections.
 */
export default function HeartDivider({ className = '', isDark = false }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 sm:gap-4 my-3 sm:my-3.5 ${
        isDark ? 'text-[#D0AC6B]' : 'text-[#D0AC6B]'
      } ${className}`}
      aria-hidden="true"
    >
      <div
        className={`w-10 sm:w-16 h-[1px] ${
          isDark ? 'bg-[#D0AC6B]/40' : 'bg-[#E9D8B8]'
        }`}
      />
      <svg
        className={`w-3.5 h-3.5 ${isDark ? 'text-[#D0AC6B]' : 'text-[#D0AC6B]'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <div
        className={`w-10 sm:w-16 h-[1px] ${
          isDark ? 'bg-[#D0AC6B]/40' : 'bg-[#E9D8B8]'
        }`}
      />
    </div>
  );
}
