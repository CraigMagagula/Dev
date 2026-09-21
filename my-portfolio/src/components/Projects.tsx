import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "SmartEd - AI Learning Platform",
    description:
      "A web application that leverages AI to provide personalized learning experiences for students, helping them to learn more effectively.",
    technologies: ["React", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/CraigMagagula/SmartEd.git",
    liveUrl: "https://smart-ed-two.vercel.app/",
  },
  {
    title: "AI Chatbot Project",
    description:
      "An AI-powered chatbot designed to provide helpful responses and improve user engagement.",
    technologies: ["JavaScript", "CSS"],
    githubUrl: "https://github.com/CraigMagagula/BotKnows.git",
    liveUrl: "https://landbot.online/v3/H-2940542-BMFIZK3JPWO9T9L4/index.html",
  },
];

function Projects() {
  return (
    <section id="projects" className="border-t border-border-soft bg-surface-alt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-500">
              Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Selected projects
            </h2>
          </div>
          <a
            href="https://github.com/CraigMagagula"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-medium text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            See all on GitHub →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;