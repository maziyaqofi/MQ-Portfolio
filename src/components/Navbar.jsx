import { HiMenuAlt3 } from "react-icons/hi"
import "./Navbar.css"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about-me" },
  { label: "Skills", href: "/#skills" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Certificate", href: "/#certificate" },
  { label: "Dokumentasi", href: "/#dokumentasi" },
]

function Navbar() {
  const currentPath = window.location.pathname

  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        <span className="text-pink-500">Maziya</span>
        <span className="text-black">Qofi</span>
      </h1>

      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={
                currentPath === item.href
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <a href="#contact" className="navbar__contact">
          CONTACT ME
        </a>

        <div className="navbar__language">
          <button className="navbar__language-button navbar__language-button--active">
            IDN
          </button>

          <button className="navbar__language-button">
            ENG
          </button>
        </div>
      </div>

      <button
        className="navbar__toggle"
        aria-label="Open navigation menu"
      >
        <HiMenuAlt3 />
      </button>
    </nav>
  )
}

export default Navbar
