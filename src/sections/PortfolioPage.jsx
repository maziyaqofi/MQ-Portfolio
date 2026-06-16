import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { categories, getProjectPath, projects } from "../data/projects"

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
              <Link
                key={project.id}
                to={getProjectPath(project)}
                className="group block overflow-hidden rounded-lg bg-[#161B22] transition hover:-translate-y-2 hover:bg-[#1d2430]"
              >
                <div className="relative h-[260px] overflow-hidden bg-[#222936]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-95 group-hover:object-contain"
                  />

                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-[#0D111A]/85 px-5 py-3">
                    <span className="text-[12px] font-semibold uppercase tracking-[3px] text-pink-300">
                      {project.category}
                    </span>
                    <span className="text-[12px] font-semibold text-[#F5D3DC]">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-[24px] font-bold text-white">
                      {project.title}
                    </h2>
                    <span className="text-[13px] font-semibold text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.technologies.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage
