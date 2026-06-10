import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import ITBerries from "./sections/ITBerries"
import AboutSkills from "./sections/AboutSkills"
import LogoMarquee from "./sections/LogoMarquee"
import Portfolio from "./sections/Portfolio"
import PortfolioPage from "./sections/PortfolioPage"
import CertificatePage from "./sections/CertificatePage"
import DocumentationPage from "./sections/DocumentationPage"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const pageComponents = {
  "/portofolio": PortfolioPage,
  "/certificate": CertificatePage,
  "/documentation": DocumentationPage,
  "/contact": Contact,
}

function PageLayout({ children }) {
  return (
    <div id="top">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function App() {
  const currentPath = window.location.pathname
  const PageComponent = pageComponents[currentPath]

  if (PageComponent) {
    return (
      <PageLayout>
        <PageComponent />
      </PageLayout>
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
