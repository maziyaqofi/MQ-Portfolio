import { Link } from "react-router-dom"
import { findProjectBySlug, getProjectPath, projects } from "../data/projects"

function ProjectDetailPage({ slug }) {
  const project = findProjectBySlug(slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0D111A] px-10 py-24 text-white lg:px-28">
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[4px] text-pink-300">
            Project Not Found
          </p>
          <h1 className="mt-4 text-[42px] font-bold">Project belum tersedia</h1>
          <p className="mt-5 text-[18px] leading-relaxed text-gray-300">
            Halaman detail project yang kamu buka belum ada di daftar project.
          </p>
          <Link
            to="/projects"
            className="mt-10 inline-flex border-l-2 border-r-2 border-pink-400 px-8 py-2 text-[18px] font-semibold tracking-[3px] text-pink-300 transition hover:text-white"
          >
            BACK TO PROJECTS
          </Link>
        </section>
      </main>
    )
  }

  const relatedProjects = projects
    .filter(
      (item) => item.category === project.category && item.id !== project.id,
    )
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-[#0D111A] text-white">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/projects"
            className="inline-flex border-l-2 border-r-2 border-pink-400 px-6 py-2 text-[14px] font-semibold tracking-[3px] text-pink-300 transition hover:text-white"
          >
            BACK
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[13px] font-semibold text-pink-300">
                  {project.category}
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1 text-[13px] font-semibold text-gray-200">
                  {project.year}
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1 text-[13px] font-semibold text-gray-200">
                  {project.status}
                </span>
              </div>

              <h1 className="mt-6 text-[42px] font-extrabold leading-tight text-white md:text-[56px]">
                {project.title}
              </h1>

              <p className="mt-6 text-[18px] leading-relaxed text-[#F5D3DC]">
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-lg bg-[#161B22]">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <aside className="rounded-lg bg-[#161B22] p-6">
              <h2 className="text-[18px] font-bold uppercase tracking-[4px] text-pink-300">
                Project Info
              </h2>

              <dl className="mt-6 grid gap-5">
                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[3px] text-gray-500">
                    Category
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold">
                    {project.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[3px] text-gray-500">
                    Year
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold">
                    {project.year}
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] font-semibold uppercase tracking-[3px] text-gray-500">
                    Status
                  </dt>
                  <dd className="mt-1 text-[17px] font-semibold">
                    {project.status}
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <h3 className="text-[13px] font-semibold uppercase tracking-[3px] text-gray-500">
                  Technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
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
            </aside>

            <article className="rounded-lg bg-[#161B22] p-8">
              <h2 className="text-[28px] font-bold text-white">
                Project Overview
              </h2>

              <p className="mt-5 text-[17px] leading-relaxed text-gray-300">
                {project.title} is part of my portfolio exploration in{" "}
                {project.category.toLowerCase()} technology. This project
                focuses on translating a practical problem into a clear digital
                experience through structured interface design, thoughtful user
                flow, and reliable implementation choices.
              </p>

              <p className="mt-5 text-[17px] leading-relaxed text-gray-300">
                The main idea behind this project is to build a product that is
                easy to understand, useful for its target users, and strong
                enough to communicate both technical thinking and product
                awareness. It also supports my broader direction toward becoming
                a software engineer with a stronger focus on healthtech and
                impactful digital systems.
              </p>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-lg border border-pink-400/20 p-5">
                  <h3 className="text-[18px] font-bold text-pink-300">
                    Focus
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
                    Clear user flow, readable visual structure, and practical
                    feature planning based on the project category.
                  </p>
                </div>
                <div className="rounded-lg border border-pink-400/20 p-5">
                  <h3 className="text-[18px] font-bold text-pink-300">
                    Role
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-300">
                    Product exploration, UI design, frontend planning, and
                    technology selection for the project concept.
                  </p>
                </div>
              </div>
            </article>
          </div>

          {relatedProjects.length > 0 && (
            <section className="mt-16">
              <h2 className="text-[24px] font-bold text-white">
                Related Projects
              </h2>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.id}
                    to={getProjectPath(item)}
                    className="rounded-lg bg-[#161B22] p-5 transition hover:-translate-y-1 hover:bg-[#1d2430]"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[3px] text-pink-300">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-[18px] font-bold text-white">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailPage
