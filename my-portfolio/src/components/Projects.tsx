import ProjectCard from './ProjectsCard'

const projects = [
  {
    title: 'Smart AI Portfolio',
    description: 'Smart display design of my portfolio.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/CraigMagagula/Portfolio.git',
    liveUrl: 'https://portfolio-livid-three-28.vercel.app/',
  },
  {
    title: 'AI Chatbot Project',
    description: 'User Friendly Machine Learning Chatbot.',
    technologies: ['JavaScript', 'CSS'],
    githubUrl: 'https://github.com/CraigMagagula/BotKnows.git',
    liveUrl: 'https://landbot.online/v3/H-2940542-BMFIZK3JPWO9T9L4/index.html',
  },
]

function Projects() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects