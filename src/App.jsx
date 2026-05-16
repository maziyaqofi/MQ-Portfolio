import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import ITBerries from "./sections/ITBerries"
import AboutPage from "./sections/AboutPage"
import AboutSkills from "./sections/AboutSkills"
import LogoMarquee from "./sections/LogoMarquee"
import Portfolio from "./sections/Portfolio"
import PortfolioPage from "./sections/PortfolioPage"
import CertificatePage from "./sections/CertificatePage"
import DocumentationPage from "./sections/DocumentationPage"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  const currentPath = window.location.pathname
  const isAboutPage = currentPath === "/about-me"
  const isPortfolioPage = currentPath === "/portofolio"
  const isCertificatePage = currentPath === "/certificate"
  const isDocumentationPage = currentPath === "/dokumentasi"

  if (isAboutPage) {
    return (
      <div>
        <Navbar />
        <AboutPage />
        <Footer />
      </div>
    )
  }

  if (isPortfolioPage) {
    return (
      <div>
        <Navbar />
        <PortfolioPage />
        <Footer />
      </div>
    )
  }

  if (isCertificatePage) {
    return (
      <div>
        <Navbar />
        <CertificatePage />
        <Footer />
      </div>
    )
  }

  if (isDocumentationPage) {
    return (
      <div>
        <Navbar />
        <DocumentationPage />
        <Footer />
      </div>
    )
  }

  return (
    <div id="home">
      <Navbar />
      <Hero />
      <ITBerries />
      <AboutSkills />
      <LogoMarquee />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
