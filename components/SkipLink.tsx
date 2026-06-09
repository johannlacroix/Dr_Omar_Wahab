export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-light focus:text-neutral-800 focus:shadow-xl focus:ring-2 focus:ring-primary focus:outline-none"
    >
      Aller au contenu principal
    </a>
  );
}
