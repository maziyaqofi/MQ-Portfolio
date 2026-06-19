import { Route, Routes, useParams } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import ITBerries from "./sections/ITBerries"
import AboutSkills from "./sections/AboutSkills"
import LogoMarquee from "./sections/LogoMarquee"
import Projects from "./sections/Projects"
import PortfolioPage from "./sections/PortfolioPage"
import ProjectDetailPage from "./sections/ProjectDetailPage"
import CertificatePage from "./sections/CertificatePage"
import DocumentationPage from "./sections/DocumentationPage"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const pageRoutes = [
  { path: "/projects", Component: PortfolioPage },
  { path: "/certificate", Component: CertificatePage },
  { path: "/documentation", Component: DocumentationPage },
  { path: "/contact", Component: Contact },
]

function PageLayout({ children }) {
  return (
    <div id="top">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

function HomePage() {
  return (
    <div id="home">
      <Navbar />
      <Hero />
      <ITBerries />
      <AboutSkills />
      <LogoMarquee />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

function ProjectDetailRoute() {
  const { slug } = useParams()

  return (
    <PageLayout>
      <ProjectDetailPage slug={slug} />
    </PageLayout>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {pageRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageLayout>
              <Component />
            </PageLayout>
          }
        />
      ))}
      <Route path="/projects/:slug" element={<ProjectDetailRoute />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
