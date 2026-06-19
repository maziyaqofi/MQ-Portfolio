import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { featuredProjects } from "../data/projects"

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
          <ProjectCard key={project.id} project={project} compact />
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
