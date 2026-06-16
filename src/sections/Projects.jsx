import { Link } from "react-router-dom"
import { featuredProjects, getProjectPath } from "../data/projects"

function Projects() {
  return (
    <section id="portfolio" className="w-full bg-[#0D111A] px-10 py-28 lg:px-28">
      <div className="flex justify-center">
        <div className="border-4 border-pink-400 px-10 py-3">
          <h2 className="text-[28px] font-bold tracking-[6px] text-white">
            PROJECT
          </h2>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 gap-10 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            to={getProjectPath(project)}
            className="block overflow-hidden rounded-lg bg-[#161B22]"
          >
            <div className="h-[220px] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[13px] font-semibold text-pink-300">
                  {project.category}
                </span>
                <span className="text-[13px] font-semibold text-gray-400">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-4 text-[24px] font-bold text-white">
                {project.title}
              </h3>

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

      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="border-l-2 border-r-2 border-pink-400 px-8 py-2 text-[20px] font-semibold tracking-[4px] text-pink-300 transition hover:text-white"
        >
          - More -
        </Link>
      </div>
    </section>
  )
}

export default Projects
