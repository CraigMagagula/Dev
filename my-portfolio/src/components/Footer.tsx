function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-surface-alt px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4
                      text-sm text-ink-subtle sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand-400 to-brand-600" />
          <span>© {year} Craig Magagula</span>
        </div>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;