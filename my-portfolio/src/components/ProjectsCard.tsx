type ProjectCardProps = {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
};

export function ProjectCard({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
}: ProjectCardProps) {
    return (
        <article className="rounded-xl border p-6">
            <h3 className="text-xl font-bold">{title}</h3>

            <p className="mt-3 text-gray-600">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-md bg-gray-100 px-3 py-1 text-sm"
                    >
                        {technology}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex gap-4">
                <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer font-semibold underline transition-colors hover:text-blue-600"
                    >
                    GitHub
                </a>

                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold underline"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;