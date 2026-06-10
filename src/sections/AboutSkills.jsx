import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaServer,
  FaTools,
} from "react-icons/fa"
import { HiOutlineAcademicCap } from "react-icons/hi"
import "./AboutSkills.css"

const skillGroups = [
  {
    title: "Frontend",
    icon: <FaCode />,
    tone: "purple",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    tone: "green",
    skills: ["Node.js", "REST API", "Express"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    tone: "blue",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    icon: <FaTools />,
    tone: "orange",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Design",
    icon: <FaPalette />,
    tone: "pink",
    skills: ["Figma", "UI/UX", "Responsive Design"],
  },
  {
    title: "Currently Learning",
    icon: <HiOutlineAcademicCap />,
    tone: "purple",
    featured: true,
    skills: ["TypeScript", "Next.js", "Python", "TensorFlow"],
  },
]

function AboutSkills() {
  return (
    <section
      id="skills"
      className="skills-section"
      style={{
        background: "radial-gradient(circle, #F9F9F9 0%, #F5D3DC 100%)",
      }}
    >
      <div className="skills-section__inner">
        <header className="skills-section__header">
          <p>WHAT I WORK WITH</p>
          <h2>
            Skills &amp; <span>Technologies</span>
          </h2>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`skill-card skill-card--${group.tone} ${
                group.featured ? "skill-card--featured" : ""
              }`}
            >
              <div className="skill-card__icon" aria-hidden="true">
                {group.icon}
              </div>

              <h3>{group.title}</h3>

              <div className="skill-card__pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSkills
