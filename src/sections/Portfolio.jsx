import lungoImage from "../assets/lungo.svg"
import rosokanImage from "../assets/rosokan.svg"
import bipolarImage from "../assets/bipolar.svg"
import gunungkuImage from "../assets/gunungku.svg"

const projects = [
  {
    title: "Lung'O - Traveling App",
    image: lungoImage,
    alt: "Lung'O traveling app",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Rosokan - Green Commerce",
    image: rosokanImage,
    alt: "Rosokan green commerce app",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Bipolar Detection - Text Analysis ML",
    image: bipolarImage,
    alt: "Bipolar detection text analysis app",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Gunungku - Booking Ticket App",
    image: gunungkuImage,
    alt: "Gunungku booking ticket app",
    tech: ["React", "Tailwind"],
  },
]

function Portfolio() {
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
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl bg-[#161B22]"
          >
            <div className="h-[220px] overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-[24px] font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                A responsive digital product developed with a focus on clean
                interfaces, useful features, and accessible user experiences.
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

      <div className="mt-16 flex justify-center">
        <a
          href="/portofolio"
          className="border-l-2 border-r-2 border-pink-400 px-8 py-2 text-[20px] font-semibold tracking-[4px] text-pink-300 transition hover:text-white"
        >
          - More -
        </a>
      </div>
    </section>
  )
}

export default Portfolio
