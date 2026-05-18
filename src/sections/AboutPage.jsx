import { FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa"
import teamPhoto from "../assets/gunungkuteam.jpeg"

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Developer",
    text: "I build responsive and interactive web applications using modern frontend technologies. I focus on creating clean interfaces, smooth user experiences, and functional digital products.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Software & AI Exploration",
    text: "I enjoy exploring software development, AI technology, and problem-solving through projects, competitions, and continuous learning experiences.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Technologist",
    text: "I love combining creativity and technology to create impactful digital experiences, from web platforms and applications to innovative tech-based ideas.",
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

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div>
              <p className="text-[20px] leading-relaxed text-justify">
                I am an Informatics Engineering student who enjoys exploring technology through frontend development, AI innovation, and digital product creation. I love building modern and interactive applications that combine functionality, problem-solving, and meaningful user experiences.
              </p>

              <p className="mt-8 text-[20px] leading-relaxed text-justify">
                Throughout my learning journey, I have explored various fields including web development, machine learning, databases, IoT, and software development. I actively participate in competitions, collaborative projects, and creative technology initiatives that continuously challenge me to grow both technically and creatively.
              </p>

              <p className="mt-8 text-[20px] leading-relaxed text-justify">
                Beyond coding, I also enjoy documenting my journey, sharing ideas, and creating digital content related to technology and personal experiences. For me, technology is not only about building systems, but also about creating impactful experiences and meaningful innovations for people.
              </p>

              <p className="mt-8 text-[20px] leading-relaxed text-justify">
                Currently, I am actively developing personal projects, expanding my knowledge in frontend and AI technologies, and preparing myself for internship opportunities in the software engineering industry. My goal is to continue growing as a creative technologist who can build innovative digital solutions that are both functional and impactful.
              </p>
            </div>

            <div className="flex h-full flex-col">
              <div className="min-h-[260px] flex-1 overflow-hidden bg-[#F5D3DC]">
                <img
                  src={teamPhoto}
                  alt="Maziya team activity"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-8 bg-[#0D111A] p-8 text-[#fce7f3]">
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
