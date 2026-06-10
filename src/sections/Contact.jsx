import {
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa"
import "./Contact.css"

const contactDetails = [
  {
    label: "qofimaziya@gmail.com",
    href: "mailto:qofimaziya@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    label: "github.com/maziyaqofi",
    href: "https://github.com/maziyaqofi",
    icon: <FaGithub />,
    external: true,
  },
  {
    label: "Central Java, Indonesia",
    icon: <FaMapMarkerAlt />,
  },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-panel">
        <div className="contact-intro">
          <div className="contact-eyebrow">
            <span aria-hidden="true">
              <FaEnvelope />
            </span>
            Start A Project
          </div>

          <h2>
            Let&apos;s Build Your
            <br />
            Digital Future
          </h2>

          <p>
            Ready to launch your next project? Fill out the form or reach out
            directly to start a conversation about your ideas and how I can
            help bring them to life.
          </p>

          <div className="contact-details">
            {contactDetails.map((detail) => {
              const content = (
                <>
                  <span className="contact-details__icon" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <span>{detail.label}</span>
                </>
              )

              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              )
            })}
          </div>
        </div>

        <form className="contact-form">
          <label>
            <span>Your Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Name"
              required
            />
          </label>

          <label>
            <span>Your Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows="3"
              placeholder="Tell me about your project..."
              required
            />
          </label>

          <button type="submit">
            <span aria-hidden="true">
              <FaPaperPlane />
            </span>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
