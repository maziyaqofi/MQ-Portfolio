import { useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import "./Navbar.css"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about-me" },
  // { label: "Skills", href: "/#skills" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Certificate", href: "/certificate" },
  { label: "Documentation", href: "/documentation" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <a href="/contact" className="navbar__contact">
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
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      <div className={isMenuOpen ? "navbar__mobile-menu navbar__mobile-menu--open" : "navbar__mobile-menu"}>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              currentPath === item.href
                ? "navbar__mobile-link navbar__mobile-link--active"
                : "navbar__mobile-link"
            }
          >
            {item.label}
          </a>
        ))}

        <a href="/contact" className="navbar__mobile-contact">
          CONTACT ME
        </a>
      </div>
    </nav>
  )
}

export default Navbar
