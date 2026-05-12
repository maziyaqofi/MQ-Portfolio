import { HiMenuAlt3 } from "react-icons/hi"
import "./Navbar.css"

const menuItems = [
  "Home",
  "About me",
  "Skills",
  "Portofolio",
  "Certificate",
  "Dokumentasi",
]

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        <span className="text-pink-500">Maziya</span>
        <span className="text-black">Qofi</span>
      </h1>

      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className={
                item === "Home"
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              {item}
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
