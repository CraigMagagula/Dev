const skillGroups = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  { label: "Frameworks & Libraries", items: ["React", "Tailwind CSS"] },
  { label: "Tools", items: ["Git", "Vite", "pnpm", "VS Code"] },
];

function Skills() {
  return (
    <section id="skills" className="border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-500">
          Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          What I work with
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-ink-subtle">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-soft bg-surface px-4 py-2 text-sm
                               font-medium text-ink-muted transition-all
                               hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600
                               hover:shadow-[0_0_0_4px_rgba(99,102,241,0.08)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;