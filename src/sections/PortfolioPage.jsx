import { useMemo, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { categories, projects } from "../data/projects"

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-[#0D111A] text-white">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="border-4 border-pink-400 px-10 py-3">
              <h1 className="text-[28px] font-bold tracking-[6px]">
                PROJECT
              </h1>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-[20px] leading-relaxed text-[#F5D3DC]">
              A focused collection of software projects, experiments, and
              product concepts across healthtech, education, finance, and
              digital experiences.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-[14px] font-semibold transition ${
                  activeCategory === category
                    ? "border-pink-400 bg-pink-400 text-white"
                    : "border-pink-400/40 bg-transparent text-pink-200 hover:border-pink-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage
