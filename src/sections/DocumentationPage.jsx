const documentations = [
  {
    title: "Portfolio Website Development",
    category: "Project Process",
    date: "2026",
    description:
      "Documentation of the process of building a personal portfolio, including layout planning, responsive design decisions, and section refinement.",
    notes: ["Design exploration", "React component structure", "Responsive testing"],
  },
  {
    title: "Team Project Discussion",
    category: "Team Activity",
    date: "2026",
    description:
      "A record of collaborative project discussions with team members, covering idea development, task division, and interface planning.",
    notes: ["Brainstorming", "Task planning", "Progress review"],
  },
  {
    title: "UI Design Iteration",
    category: "Design Process",
    date: "2026",
    description:
      "Documentation of UI improvements from early design to a cleaner visual system, including typography, color, spacing, and layout revisions.",
    notes: ["Wireframe", "Visual hierarchy", "Design feedback"],
  },
  {
    title: "Academic Project Build",
    category: "Project Documentation",
    date: "2025",
    description:
      "Documentation of an academic project workflow from requirements and implementation to final presentation and project reflection.",
    notes: ["Requirement analysis", "Implementation", "Presentation"],
  },
]

function DocumentationPage() {
  return (
    <main className="min-h-screen bg-[#0D111A] text-white">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="border-4 border-pink-400 px-10 py-3">
              <h1 className="text-[28px] font-bold tracking-[6px]">
                DOKUMENTASI
              </h1>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-[18px] leading-relaxed text-[#F5D3DC]">
            Documentation of team activities, project development processes,
            design exploration, discussions, and progress behind the projects I
            work on.
          </p>

          <div className="mt-16 grid gap-8">
            {documentations.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-8 bg-[#161B22] p-8 lg:grid-cols-[320px_1fr]"
              >
                <div className="flex min-h-[220px] items-center justify-center bg-[#222936]">
                  <div className="text-center">
                    <p className="text-[48px] font-bold text-pink-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-[14px] font-semibold uppercase tracking-[4px] text-[#F5D3DC]">
                      Documentation Photo
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="bg-pink-400/20 px-4 py-1 text-[14px] font-semibold text-pink-300">
                      {item.category}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[2px] text-gray-400">
                      {item.date}
                    </span>
                  </div>

                  <h2 className="mt-5 text-[28px] font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-[17px] leading-relaxed text-gray-300">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="rounded-full border border-pink-400/40 px-4 py-1 text-[14px] text-[#F5D3DC]"
                      >
                        {note}
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

export default DocumentationPage
