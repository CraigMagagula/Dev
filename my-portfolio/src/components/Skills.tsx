const skills = [
    'React',
    'Git',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Figma',
    'PostgreSQL',
]

function Skills() {
    return (
        <section id="skills" className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-3xl font-bold">Skills</h2>

                <div className="mt-8 flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full border px-4 py-2 text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills