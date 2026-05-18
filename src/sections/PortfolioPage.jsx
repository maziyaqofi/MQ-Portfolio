import gunungkuImage from "../assets/gunungku.svg"
import lungoImage from "../assets/lungo.svg"
import bipolarImage from "../assets/bipolar.svg"
import rosokanImage from "../assets/rosokan.svg"

const projects = [
  {
    title: "Gunungku",
    category: "Frontend",
    image: gunungkuImage,
    description:
      "A project interface designed to present mountain tourism information with a clean and accessible visual experience.",
    tech: ["React", "Vite", "Tailwind CSS"],
    status: "In Progress",
  },
  {
    title: "Lungo",
    category: "UI/UX",
    image: lungoImage,
    description:
      "A UI exploration focused on product presentation, layout balance, and a modern visual system.",
    tech: ["Figma", "UI Design", "Responsive Design"],
    status: "Concept",
  },
  {
    title: "Bipolar",
    category: "Frontend",
    image: bipolarImage,
    description:
      "A web project concept built to organize information with readable sections and responsive interface structure.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
  },
  {
    title: "Rosokan",
    category: "Machine Learning",
    image: rosokanImage,
    description:
      "A project exploration that combines digital product thinking with technology-based problem solving.",
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

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.image}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-2xl bg-[#161B22] transition hover:-translate-y-2 hover:bg-[#1d2430]"
              >
                <div className="relative h-[260px] overflow-hidden bg-[#222936]">
                  <img
                    src={project.image}
                    alt={`${project.title} portfolio preview`}
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
                  <h2 className="text-[24px] font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                    {project.description}
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage
