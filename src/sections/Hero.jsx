import profile from "../assets/Maziyapic.png"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import "./Hero.css"

const socials = [
  {
    label: "Email Maziya",
    href: "mailto:qofimaziya@gmail.com",
    icon: <MdAlternateEmail />,
  },
  {
    label: "Maziya on GitHub",
    href: "https://github.com/maziyaqofi",
    icon: <FaGithub />,
  },
  {
    label: "Maziya on LinkedIn",
    href: "https://www.linkedin.com/in/maziyaqofi",
    icon: <FaLinkedinIn />,
  },
]

function SocialLinks({ variant }) {
  return (
    <div className={`hero__socials hero__socials--${variant}`}>
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className={`hero__social-link hero__social-link--${variant}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__desktop">
        <div className="hero__content">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              Hi, I am
            </p>

            <h1 className="hero__title">
              Maziya <span className="text-pink-400">Ats Tsaqofi</span>
            </h1>

            <p className="hero__role">
              Front-end Developer / UI Designer
            </p>
          </div>

          <SocialLinks variant="desktop" />
        </div>

        <div className="hero__portrait-panel">
          <div className="hero__desktop-diagonal" />

          <img
            src={profile}
            alt="Maziya Ats Tsaqofi"
            className="hero__desktop-image"
          />
        </div>
      </div>

      <div className="hero__mobile">
        <img
          src={profile}
          alt="Maziya Ats Tsaqofi"
          className="hero__mobile-image"
        />

        <div className="hero__mobile-card">
          <div className="hero__mobile-copy">
            <p className="hero__mobile-eyebrow">
              Hi, I am
            </p>

            <h1 className="hero__mobile-title">
              Maziya <span className="text-pink-400">Ats Tsaqofi</span>
            </h1>

            <p className="hero__mobile-role">
              Front-end Developer / UI Designer
            </p>
          </div>
        </div>

        <SocialLinks variant="mobile" />
      </div>
    </section>
  )
}

export default Hero
