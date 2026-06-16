import gunungkuImage from "../assets/gunungku.svg"
import lungoImage from "../assets/lungo.svg"
import modalinImage from "../assets/modalin.svg"
import bipolarImage from "../assets/bipolar.svg"
import rosokanImage from "../assets/rosokan.svg"
import animeImage from "../assets/nontonanime.svg"
import kitakerjaImage from "../assets/kitakerja.svg"
import qoffashionImage from "../assets/qoffashion.svg"
import furnitechImage from "../assets/furnitech.svg"
import dusanImage from "../assets/dusan.svg"
import truthlyImage from "../assets/truthly.svg"
import astratapImage from "../assets/astratap.png"
import medilinkImage from "../assets/medilink.png"

const tickrImage = modalinImage
const dailyjournalImage = gunungkuImage

export const categories = [
  "All",
  "Medical",
  "Education",
  "Finance",
  "Entertainment",
  "Real Estate",
  "Others",
]


export const projects = [
  {
    id: 1,
    title: "Gunungku",
    category: "Education",
    year: "2024",
    image: gunungkuImage,
    description:
      "A learning and tourism platform concept that presents mountain exploration with structured information, booking flow, and accessible digital experience.",
    technologies: ["Laravel", "MySQL", "Web App"],
    featured: true,
    status: "Featured",
  },
  {
    id: 2,
    title: "Lung'O",
    category: "Entertainment",
    year: "2024",
    image: lungoImage,
    description:
      "A travel and lifestyle interface exploration focused on visual storytelling, destination browsing, and responsive UI composition.",
    technologies: ["React", "Tailwind", "UI Design"],
    status: "Completed",
  },
  {
    id: 3,
    title: "Bipolar Detection",
    category: "Medical",
    year: "2025",
    image: bipolarImage,
    description:
      "A machine learning exploration for mental health text analysis, built to classify early indications and support healthtech learning.",
    technologies: ["Python", "Machine Learning", "NLP"],
    status: "Learning",
  },
  {
    id: 4,
    title: "Rosokan",
    category: "Others",
    year: "2024",
    image: rosokanImage,
    description:
      "A green commerce concept that supports waste management workflows through a clean and practical digital product experience.",
    technologies: ["React", "Tailwind", "Product Design"],
    status: "Completed",
  },
  {
    id: 5,
    title: "Nonton Anime",
    category: "Entertainment",
    year: "2024",
    image: animeImage,
    description:
      "An entertainment web interface for browsing anime content with simple navigation, catalog sections, and responsive viewing layout.",
    technologies: ["React", "API", "Responsive UI"],
    status: "Completed",
  },
  {
    id: 6,
    title: "Modal-In",
    category: "Finance",
    year: "2025",
    image: modalinImage,
    description:
      "A finance product concept for capital access and business funding workflows, designed with clear onboarding and transaction flow.",
    technologies: ["Fintech", "UI/UX", "Prototype"],
    status: "Concept",
  },
  {
    id: 7,
    title: "Redesign Kita Kerja",
    category: "Education",
    year: "2025",
    image: kitakerjaImage,
    description:
      "A redesign project for a learning and career platform, improving information hierarchy, visual clarity, and user journey.",
    technologies: ["Figma", "UI/UX", "Research"],
    status: "Completed",
  },
  {
    id: 8,
    title: "Qof Fashion Web",
    category: "Entertainment",
    year: "2024",
    image: qoffashionImage,
    description:
      "A fashion website concept for product presentation, visual branding, and responsive catalog browsing.",
    technologies: ["React", "Branding", "UI Design"],
    status: "Completed",
  },
  {
    id: 9,
    title: "Furnitech",
    category: "Real Estate",
    year: "2025",
    image: furnitechImage,
    description:
      "A furniture and property-related product interface for showcasing spaces, interior products, and practical purchase journeys.",
    technologies: ["UI Design", "Catalog", "Responsive"],
    status: "Concept",
  },

  {
    id: 10,
    title: "Fokus Room",
    category: "Education",
    year: "2025",
    image: gunungkuImage,
    description:
      "A productivity and learning space app concept that helps users organize focus sessions, study routines, and task flow.",
    technologies: ["React", "Productivity", "UX"],
    status: "Concept",
  },

  {
    id: 11,
    title: "Dusan Web",
    category: "Others",
    year: "2025",
    image: dusanImage,
    description:
      "A community and organization website built to present activities, identity, and important information in a clear digital format.",
    technologies: ["Web Design", "Content", "Responsive"],
    status: "Completed",
  },

  {
    id: 12,
    title: "Truthly",
    category: "Education",
    year: "2025",
    image: truthlyImage,
    description:
      "A fact-checking and digital literacy project concept that helps users understand information credibility and misinformation risk.",
    technologies: ["AI", "Education", "Research"],
    status: "Learning",
  },
  {
    id: 13,
    title: "Tickr",
    category: "Finance",
    year: "2025",
    image: tickrImage,
    description:
      "A lightweight finance and tracking product concept for monitoring values, simple transactions, or investment-style information.",
    technologies: ["Dashboard", "Finance", "UI"],
    status: "Concept",
  },
  {
    id: 14,
    title: "Web Daily Journal",
    category: "Education",
    year: "2024",
    image: dailyjournalImage,
    description:
      "A journaling web app concept for daily reflection, learning notes, and personal progress tracking.",
    technologies: ["React", "CRUD", "UX Writing"],
    status: "Completed",
  },
  {
    id: 15,
    title: "AstraTap",
    category: "Finance",
    year: "2026",
    image: astratapImage,
    description:
      "A fintech innovation concept for NFC-based fuel payment, designed to simplify cashless transactions for motorcyclists.",
    technologies: ["Fintech", "NFC", "Figma"],
    featured: true,
    status: "Featured",
  },
  {
    id: 16,
    title: "Medilink Rescue",
    category: "Medical",
    year: "2026",
    image: medilinkImage,
    description:
      "An emergency healthcare concept that connects users with medical assistance, rescue information, and urgent response workflows.",
    technologies: ["Healthtech", "Emergency", "UX"],
    status: "Concept",
  },
  {
    id: 17,
    title: "Prediksi Pelanggan",
    category: "Finance",
    year: "2025",
    image: medilinkImage,
    description:
      "A data analysis project for predicting customer behavior, supporting business decisions through simple machine learning workflows.",
    technologies: ["Python", "Data Analysis", "ML"],
    status: "Learning",
  },
  {
    id: 18,
    title: "AI Prompt Studio",
    category: "Others",
    year: "2026",
    image: medilinkImage,
    description:
      "A creative AI workspace concept for organizing prompts, testing ideas, and improving AI-assisted production workflows.",
    technologies: ["AI", "Prompting", "Product Design"],
    status: "Concept",
  },
  {
    id: 19,
    title: "Math Mind AI",
    category: "Education",
    year: "2026",
    image: medilinkImage,
    description:
      "An AI-based education concept that helps learners understand math problems through guided explanation and practice flow.",
    technologies: ["AI", "Education", "Math"],
    status: "Concept",
  },
  {
    id: 20,
    title: "Property Listing App",
    category: "Real Estate",
    year: "2025",
    image: medilinkImage,
    description:
      "A property listing app concept for browsing homes, comparing details, and presenting real estate information clearly.",
    technologies: ["Real Estate", "Listing", "UI"],
    status: "Concept",
  },
  {
    id: 21,
    title: "Artsy Studio Web",
    category: "Entertainment",
    year: "2025",
    image: medilinkImage,
    description:
      "A creative studio website concept focused on visual identity, portfolio presentation, and polished digital storytelling.",
    technologies: ["Branding", "Web Design", "UI"],
    status: "Completed",
  },
  {
    id: 22,
    title: "Smart Wardrobe",
    category: "Medical",
    year: "2025",
    image: medilinkImage,
    description:
      "An IoT-based monitoring system that tracks temperature and humidity to help maintain safe storage conditions and reduce mold risk.",
    technologies: ["IoT", "Firebase", "Monitoring"],
    featured: true,
    status: "Featured",
  },
  {
    id: 23,
    title: "Oce Design Web",
    category: "Entertainment",
    year: "2025",
    image: medilinkImage,
    description:
      "A design portfolio web concept for showcasing creative work, service identity, and visual brand presentation.",
    technologies: ["Web Design", "Portfolio", "Branding"],
    status: "Completed",
  },
  {
    id: 24,
    title: "Banking Lite",
    category: "Finance",
    year: "2026",
    image: medilinkImage,
    description:
      "A simple banking interface concept for balance overview, transaction history, and lightweight financial management.",
    technologies: ["Finance", "Dashboard", "UI/UX"],
    status: "Concept",
  },
  {
    id: 25,
    title: "Smart Clinic",
    category: "Medical",
    year: "2025",
    image: medilinkImage,
    description:
      "A clinic management system designed to support patient registration, medical records, prescriptions, and healthcare workflows.",
    technologies: ["Java", "JavaFX", "MySQL"],
    featured: true,
    status: "Featured",
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function createProjectSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getProjectPath(project) {
  return `/projects/${createProjectSlug(project.title)}`
}

export function findProjectBySlug(slug) {
  return projects.find((project) => createProjectSlug(project.title) === slug)
}
