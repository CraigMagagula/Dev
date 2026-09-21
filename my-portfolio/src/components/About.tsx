function About() {
  return (
    <section id="about" className="border-t border-border-soft bg-surface-alt px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-500">
            About
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A little about me
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I'm learning software development and enjoy the process of turning
            ideas into working products. I care about clean code, thoughtful
            design, and understanding <em>why</em> something works — not just
            that it does.
          </p>
          <p>
            When I'm not coding, I'm usually reading documentation, breaking
            things on purpose to see how they fail, or sketching out what I'd
            like to build next.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            {[
              { k: "Focus",     v: "Frontend"      },
              { k: "Learning",  v: "React"    },
              { k: "Based in",  v: "Johannesburg"     },
            ].map(({ k, v }) => (
              <div key={k} className="rounded-xl border border-border-soft bg-surface p-4">
                <div className="text-xs uppercase tracking-widest text-ink-subtle">{k}</div>
                <div className="mt-1 font-semibold text-ink">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;