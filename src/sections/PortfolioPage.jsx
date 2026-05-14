const projects = [
  {
    title: "MQ Portfolio",
    category: "Frontend",
    description:
      "Personal portfolio website built with React, Vite, and Tailwind CSS. The project focuses on responsive layout, visual identity, and clean section-based composition.",
    details:
      "This portfolio presents profile, skills, selected projects, and contact information in a polished single-page experience with additional detail pages.",
    tech: ["React", "Vite", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    title: "UI Portfolio Concept",
    category: "UI/UX",
    description:
      "Interface exploration for a personal branding website with strong visual hierarchy, readable spacing, and mobile-first layout decisions.",
    details:
      "The design process includes layout planning, color system exploration, typography balancing, and responsive behavior refinement.",
    tech: ["Figma", "UI Design", "Responsive Design"],
    status: "Concept",
  },
  {
    title: "Academic Web Project",
    category: "Frontend",
    description:
      "A web development project created for academic practice, focused on translating requirements into functional and organized web pages.",
    details:
      "The project helped strengthen practical skills in component structure, styling consistency, and user-facing content organization.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    title: "Machine Learning Exploration",
    category: "Machine Learning",
    description:
      "Learning project focused on understanding basic machine learning workflow, dataset preparation, and model experimentation.",
    details:
      "This exploration supports a broader interest in combining frontend interfaces with AI-powered application ideas.",
    tech: ["Python", "Data Processing", "Model Training"],
    status: "Learning",
  },
]

function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0D111A] text-white">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="border-4 border-pink-400 px-10 py-3">
              <h1 className="text-[28px] font-bold tracking-[6px]">
                PORTFOLIO
              </h1>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <p className="text-[20px] leading-relaxed text-[#F5D3DC]">
              A more complete collection of projects, experiments, and learning
              work that show my growth in frontend development, UI design, and
              technology exploration.
            </p>
          </div>

          <div className="mt-20 grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="grid gap-8 bg-[#161B22] p-8 md:grid-cols-[260px_1fr]"
              >
                <div className="flex min-h-[180px] items-center justify-center bg-[#222936] text-center">
                  <div>
                    <p className="text-[14px] font-semibold uppercase tracking-[4px] text-pink-400">
                      {project.category}
                    </p>
                    <p className="mt-3 text-[18px] font-bold text-[#F5D3DC]">
                      {project.status}
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-[28px] font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-[18px] leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  <p className="mt-4 text-[16px] leading-relaxed text-gray-400">
                    {project.details}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage
