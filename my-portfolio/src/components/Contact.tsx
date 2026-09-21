function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-gray-600">
          Interested in working together or just want to say hello?
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="mailto:craigthabo0@gmail.com"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Email me
          </a>

          <a
            href="https://github.com/CraigMagagula"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-lg border px-5 py-3 transition-colors hover:bg-gray-50"
>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/craig-magagula/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer rounded-lg border px-5 py-3 transition-colors hover:bg-gray-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact