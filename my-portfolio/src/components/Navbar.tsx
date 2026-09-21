const links = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-surface/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="group flex items-center gap-2 font-bold tracking-tight text-ink"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 shadow-[0_0_12px_rgba(99,102,241,0.6)]" />
          Craig&nbsp;Magagula
        </a>

        <div className="hidden gap-8 text-sm font-medium sm:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-ink-muted transition-colors hover:text-ink
                         after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0
                         after:bg-brand-500 after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-surface
                     transition-transform hover:scale-105 sm:inline-block"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}

export default Navbar;