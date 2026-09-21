const links = [
  { label: "Email",    href: "mailto:craigthabo0@gmail.com", external: false },
  { label: "GitHub",   href: "https://github.com/CraigMagagula", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/craig-magagula/", external: true },
];

function Contact() {
  return (
    <section id="contact" className="border-t border-border-soft px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-500">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Let's build something together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
          Interested in working together, or just want to say hello? My inbox is
          always open.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="rounded-full border border-border-soft bg-surface px-6 py-3 font-semibold
                         text-ink transition-all hover:-translate-y-0.5 hover:border-brand-400
                         hover:text-brand-600"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;