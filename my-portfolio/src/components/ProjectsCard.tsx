type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-soft
                 bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300
                 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
    >
      {/* Top gradient accent bar */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent
                   opacity-0 transition-opacity group-hover:opacity-100"
      />

      <header className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold tracking-tight text-ink">{title}</h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${title} on GitHub`}
          className="rounded-full border border-border-soft p-2 text-ink-muted transition-colors
                     hover:border-brand-400 hover:text-brand-600"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
      </header>

      <p className="mt-3 flex-1 text-ink-muted">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-surface-alt px-2.5 py-1 text-xs font-medium
                       text-ink-muted ring-1 ring-inset ring-border-soft"
          >
            {technology}
          </span>
        ))}
      </div>

      {liveUrl && (
        <div className="mt-6 border-t border-border-soft pt-5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600
                       transition-colors hover:text-brand-700"
          >
            Live Demo
            <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
          </a>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;