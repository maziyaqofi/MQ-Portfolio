import { FaGraduationCap, FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa"

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "Education",
    text: "Informatics Engineering student with a growing foundation in software development, web technology, and problem solving.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Frontend Focus",
    text: "Focused on creating responsive interfaces using React, Tailwind CSS, and modern component-based development.",
  },
  {
    icon: <FaLightbulb />,
    title: "Design Thinking",
    text: "Interested in clean UI, intuitive user flows, and turning ideas into polished digital experiences.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    text: "Enjoys learning through academic projects, competitions, teamwork, and feedback-driven iteration.",
  },
]

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] text-[#1B1B1B]">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="inline-block border-4 border-pink-500 px-10 py-3">
            <h1 className="text-[28px] font-bold tracking-[6px]">
              ABOUT ME
            </h1>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-[20px] leading-relaxed text-justify">
                I am Maziya Ats Tsaqofi, an Informatics Engineering student
                with a strong interest in frontend development, UI design, and
                modern web technologies. I enjoy building web interfaces that
                are responsive, accessible, and easy to use.
              </p>

              <p className="mt-8 text-[20px] leading-relaxed text-justify">
                My learning journey has grown through academic projects,
                competitions, and independent exploration. These experiences
                helped me understand how design, code, communication, and
                problem solving work together when creating a digital product.
              </p>

              <p className="mt-8 text-[20px] leading-relaxed text-justify">
                Currently, I am developing my portfolio while improving my
                frontend skills with React and Tailwind CSS. I am also exploring
                UI/UX design and AI-powered applications as part of my goal to
                become a frontend developer who can build meaningful and useful
                digital experiences.
              </p>
            </div>

            <div className="bg-[#0D111A] p-8 text-[#fce7f3]">
              <h2 className="text-[24px] font-bold tracking-[4px]">
                PROFILE
              </h2>

              <div className="mt-8 space-y-6 text-[18px] leading-relaxed">
                <p>
                  <span className="font-semibold text-pink-400">Role:</span>{" "}
                  Front-end Developer / UI Designer
                </p>
                <p>
                  <span className="font-semibold text-pink-400">Focus:</span>{" "}
                  React, Tailwind CSS, responsive UI, and user experience
                </p>
                <p>
                  <span className="font-semibold text-pink-400">Goal:</span>{" "}
                  Preparing for internship opportunities in software engineering
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="border-l-4 border-pink-500 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <span className="text-[32px] text-pink-500">
                    {item.icon}
                  </span>
                  <h3 className="text-[22px] font-bold tracking-[3px]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-[18px] leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
