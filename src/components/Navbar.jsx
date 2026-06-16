import { useEffect, useState } from "react"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import "./Navbar.css"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Project", href: "/projects" },
  { label: "Certificate", href: "/certificate" },
  { label: "Documentation", href: "/documentation" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNavbarHidden, setIsNavbarHidden] = useState(false)
  const currentPath = window.location.pathname

  useEffect(() => {
    let previousScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isAtTop = currentScrollY <= 20
      const isAtBottom =
        window.innerHeight + currentScrollY >= document.documentElement.scrollHeight - 20
      const isScrollingDown = currentScrollY > previousScrollY

      if (isAtTop || isAtBottom || !isScrollingDown) {
        setIsNavbarHidden(false)
      } else if (currentScrollY > 120 && !isMenuOpen) {
        setIsNavbarHidden(true)
      }

      previousScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMenuOpen])

  return (
    <nav className={isNavbarHidden ? "navbar navbar--hidden" : "navbar"}>
      <div className="navbar__inner">
        <a href="/" className="navbar__logo" aria-label="Go to home page">
          <span className="text-pink-500">Maziya</span>
          <span className="text-black">Qofi</span>
        </a>

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
      </div>

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
