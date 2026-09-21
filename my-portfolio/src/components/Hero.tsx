function Hero() {
    return (
        <section
        id="home"
        className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20">
            <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
                    Hi, I'm Craig Magagula.

                </p>
                <h1 className="text-5xl font-old tracking-tight sm:text-6xl">
                    Craig Magagula
                </h1>

                <p className="mt-6 max-w-2xl text-lg text-gray-600">
                    I am a dedicated IT professional with a strong passion for web development, technology, automation, and problem-solving. My interests span across IT support, cloud technologies, artificial intelligence, and web development. I enjoy building solutions, learning new technologies, and helping users get the most out of their systems.
                </p>

                <div className="mt-8 flex gap-4">
                    <a 
                    href="#projects"
                    className="rounded-lg bg-black px-5 py-3 text-white">
                        View my projects
                    </a>

                    <a
                    href="#contact"
                    className="rounded-lg border px-5 py-3">
                        Contact me 
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero