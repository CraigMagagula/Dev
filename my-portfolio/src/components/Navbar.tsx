function Navbar()   {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <a href="#home" className="font-bold">
                Craig Magagula
            </a>

            <div className="flex gap-6 text-sm">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
         </div>
        </nav>
    )
}

export default Navbar