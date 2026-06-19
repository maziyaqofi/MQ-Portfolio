import { Link } from "react-router-dom"
import { getProjectPath } from "../data/projects"

function ProjectCard({ project, compact = false }) {
  const imageClassName = compact
    ? "h-[220px] overflow-hidden"
    : "relative h-[260px] overflow-hidden bg-[#222936]"

  return (
    <Link
      to={getProjectPath(project)}
      className={`group block overflow-hidden rounded-lg bg-[#161B22] ${
        compact ? "" : "transition hover:-translate-y-2 hover:bg-[#1d2430]"
      }`}
    >
      <div className={imageClassName}>
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          className={`h-full w-full object-cover ${
            compact
              ? ""
              : "transition duration-300 group-hover:scale-95 group-hover:object-contain"
          }`}
        />

        {!compact && (
          <div className="absolute inset-x-0 bottom-0 bg-[#0D111A]/85 px-5 py-3">
            <span className="text-[12px] font-semibold uppercase tracking-[3px] text-pink-300">
              {project.category}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        {compact ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[13px] font-semibold text-pink-300">
              {project.category}
            </span>
            <span className="text-[13px] font-semibold text-gray-400">
              {project.year}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-[24px] font-bold text-white">
              {project.title}
            </h2>
            <span className="text-[13px] font-semibold text-gray-400">
              {project.year}
            </span>
          </div>
        )}

        {compact && (
          <h3 className="mt-4 text-[24px] font-bold text-white">
            {project.title}
          </h3>
        )}

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
  )
}

export default ProjectCard
