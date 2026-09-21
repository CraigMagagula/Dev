function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 md:py-32">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10
                   bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]"
      />

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-soft
                       bg-surface-alt px-4 py-1.5 text-xs font-semibold uppercase tracking-widest
                       text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Available for work
        </p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-brand-600
                           bg-clip-text text-transparent">
            Craig Magagula
          </span>
          .
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
         A IT Professional who enjoys building useful applications
          and learning new technologies — one project at a time.

        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group rounded-full bg-ink px-6 py-3 font-semibold text-surface
                       shadow-lg shadow-brand-500/10 transition-all
                       hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-500/20"
          >
            View my projects
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#contact"
            className="rounded-full border border-border-soft bg-surface px-6 py-3 font-semibold
                       text-ink transition-all hover:-translate-y-0.5 hover:border-brand-400
                       hover:text-brand-600"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;