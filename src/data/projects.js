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
import wardrobeImage from "../assets/smart-wardrobe.png"

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


const baseProjects = [
  {
    id: 1,
    title: "Gunungku",
    category: "Entertainment",
    year: "2024",
    image: gunungkuImage,
    description:
      "A learning and tourism platform concept that presents mountain exploration with structured information, booking flow, and accessible digital experience.",
    technologies: ["Laravel", "MySQL", "Web App"],
    featured: true,
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
  },

  {
    id: 11,
    title: "Duta Santri Web",
    category: "Others",
    year: "2025",
    image: dusanImage,
    description:
      "A community and organization website built to present activities, identity, and important information in a clear digital format.",
    technologies: ["Web Design", "Content", "Responsive"],
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
  },
  {
    id: 22,
    title: "Smart Wardrobe",
    category: "Medical",
    year: "2025",
    image: wardrobeImage,
    description:
      "An IoT-based monitoring system that tracks temperature and humidity to help maintain safe storage conditions and reduce mold risk.",
    technologies: ["IoT", "Firebase", "Monitoring"],
    featured: true,
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
  },
]

const projectDetails = {
  1: {
    title: "Gunungku",
    category: "Entertainment",
    year: "2023",
    technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/maziyaqofi/gunungku",
    description:
      "Gunungku is a hiking companion platform that helps users book mountain tickets, access hiking information, and improve safety during outdoor adventures. Developed as part of the Wirausaha Merdeka (WMK) 2023 entrepreneurship program.",
    overview:
      "Gunungku was developed to simplify the hiking experience by providing an all-in-one platform for mountain climbers. The application offers ticket booking services, offline maps, weather forecasting, hiking time estimation, safety monitoring, and essential mountain information. Built by a team of five members during the Wirausaha Merdeka (WMK) 2023 program, the project successfully reached the final demonstration stage and received investor funding support from DinusTek after being recognized as one of the outstanding projects in the program.",
    focus:
      "Web Application Development, Tourism Technology, User Experience Design, Team Collaboration, and Digital Product Development.",
    role:
      "Full-Stack Developer (Team of 5 Members). Contributed to application development, feature implementation, database integration, and final product presentation.",
  },
  2: {
    title: "Lung'O",
    category: "Entertainment",
    year: "2023",
    technologies: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Lung'O is a mobile travel companion application designed to help visitors explore Central Java by providing location-based recommendations, navigation, and transportation options.",
    overview:
      "Lung'O was developed for a technology competition in 2023 under the supervision of Mrs. Novita and in collaboration with Eka Rizky Anggi. The application serves as a digital travel guide for tourists visiting Central Java, helping users discover attractions, restaurants, places of worship, shopping centers, hotels, and other essential destinations. To improve travel convenience, Lung'O also provides route planning and transportation recommendations, including walking, ride-hailing services, public transportation, and local transit options. The project focuses on creating a seamless travel experience through an integrated mobile platform.",
    focus:
      "Mobile Application Development, Location-Based Services, Digital Tourism, Navigation Systems, and User Experience Design.",
    role:
      "Mobile App Developer (Team of 2 Members). Collaborated on application design, feature development, location-based service integration, and project presentation during the competition.",
  },
  3: {
    title: "Bipolar Disorder Detection from Text Using Machine Learning",
    category: "Medical",
    year: "2026",
    technologies: [
      "Python",
      "Google Colab",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    link: "https://github.com/maziyaqofi/",
    description:
      "A machine learning project that detects potential bipolar disorder indicators from text data. The study focuses on handling imbalanced datasets and identifying the most effective classification model.",
    overview:
      "This project explores the use of machine learning techniques to detect bipolar disorder patterns from textual data. The primary challenge was dealing with class imbalance within the dataset while maintaining reliable model performance. Multiple preprocessing, balancing, training, and evaluation approaches were applied to identify the most effective classification model. The project was developed using Google Colab and resulted in a research paper documenting the methodology, experiments, and findings.",
    focus:
      "Machine Learning, Natural Language Processing (NLP), Text Classification, Imbalanced Data Handling, and Research Writing.",
    role:
      "Machine Learning Engineer & Researcher. Designed the machine learning pipeline, performed data preprocessing and model evaluation, handled class imbalance challenges, and authored the accompanying research paper.",
  },
  4: {
    title: "Rosokan",
    category: "Others",
    year: "2023",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Rosokan is a green commerce platform that enables users to collect recyclable waste and trade upcycled products through a single digital ecosystem.",
    overview:
      "Rosokan was developed as part of an Information Systems course project by a team of two members. The platform aims to promote environmental sustainability by connecting waste collection and product reuse activities in one system. Users can submit recyclable waste for collection while also exploring and purchasing creative products made from recycled materials. By combining waste management and e-commerce concepts, Rosokan encourages a circular economy approach and supports environmentally conscious communities.",
    focus:
      "Information Systems Development, Green Commerce, Sustainable Technology, Database Design, and Web Application Development.",
    role:
      "Full-Stack Developer (Team of 2 Members). Collaborated in system analysis, database design, feature development, and implementation of the web-based platform.",
  },
  5: {
    title: "Nonton Anime",
    category: "Entertainment",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Nonton Anime is a streaming platform concept designed for anime enthusiasts, offering curated content in a safe and user-friendly viewing experience.",
    overview:
      "Nonton Anime was developed as a Human-Computer Interaction (HCI) course project by a team of five members. The platform was designed to provide anime fans with a simple and accessible streaming experience through a subscription-based model similar to popular video streaming services. A key concept of the project was content curation, where anime titles were carefully selected to ensure a comfortable viewing experience for a broader audience. The project emphasized usability, interface design, and user experience principles while exploring how streaming platforms can effectively serve niche entertainment communities.",
    focus:
      "Human-Computer Interaction (HCI), UI/UX Design, Streaming Platform Design, User Research, and Web Application Development.",
    role:
      "UI/UX Designer & Front-End Developer (Team of 5 Members). Contributed to user interface design, user experience evaluation, feature planning, and implementation of core application components.",
  },
  6: {
    title: "Modal-In",
    category: "Finance",
    year: "2023",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Modal-In is an inclusive digital platform designed to support entrepreneurs with disabilities by helping them showcase and grow their businesses.",
    overview:
      "Modal-In was developed during a national hackathon as part of the Young Innovators Competition, where only 49 participants from across Indonesia were selected. Built by a team of three members within a 24-hour development period, the platform aimed to empower entrepreneurs with disabilities by providing digital support for business promotion and growth. The project focused on creating an accessible and inclusive solution that helps bridge opportunities between disabled business owners, customers, and potential supporters. Despite the limited development time, the team successfully delivered a functional prototype and presented the concept during the competition.",
    focus:
      "Inclusive Technology, Social Impact Innovation, Accessibility, Digital Entrepreneurship, and Rapid Prototyping.",
    role:
      "Full-Stack Developer (Team of 3 Members). Contributed to idea validation, system design, feature implementation, and final product presentation during the hackathon.",
  },
  7: {
    title: "Redesign & Redevelop Website Kita Kerja",
    category: "Others",
    year: "2023",
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi/",
    description:
      "A website redesign and redevelopment project aimed at improving user experience and aligning the platform with user needs identified through research and usability analysis.",
    overview:
      "This project was carried out by a team of three members who were selected to redesign and redevelop the Kita Kerja website based on user research findings and stakeholder requirements. Throughout the project, the team worked closely with mentors from Kita Kerja and Plan Indonesia Foundation to ensure the proposed solutions addressed real user challenges. The redevelopment process focused on improving usability, navigation, accessibility, and overall user experience while modernizing the platform's design and functionality. The project provided valuable experience in applying user-centered design principles and translating research insights into a functional digital product.",
    focus:
      "UI/UX Design, User Research, Website Redesign, Front-End Development, and User-Centered Design.",
    role:
      "UI/UX Designer & Web Developer (Team of 3 Members). Contributed to user research analysis, interface redesign, feature implementation, and collaboration with mentors and stakeholders throughout the development process.",
  },
  8: {
    title: "QOF Brand Website",
    category: "Others",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi/",
    description:
      "A company profile and lightweight e-commerce website developed to strengthen QOF Brand's online presence and simplify customer inquiries through WhatsApp integration.",
    overview:
      "QOF Brand Website was developed as a digital platform to showcase the brand, its products, and business information in a professional and accessible way. The project covered the entire development lifecycle, from initial research and planning to design, development, and deployment. In addition to serving as a company profile website, the platform included a simple e-commerce experience that allowed customers to browse products and connect directly with the business through WhatsApp for inquiries and purchases. The project focused on creating an effective digital presence while maintaining a simple and user-friendly customer journey.",
    focus:
      "Website Development, Company Profile Design, Digital Branding, E-Commerce Integration, and User Experience.",
    role:
      "Full-Stack Developer. Led the project from research and planning through development and deployment, including website implementation, product catalog management, and WhatsApp integration.",
  },
  9: {
    title: "Furnitech",
    category: "Others",
    year: "2024",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Augmented Reality (AR)",
      "JavaScript",
    ],
    link: "https://github.com/maziyaqofi/",
    description:
      "Furnitech is a digital platform that connects Indonesian furniture artisans with international buyers while leveraging augmented reality to enhance the furniture purchasing experience.",
    overview:
      "Furnitech was developed as a competition project for Pertamina by a team of two members, consisting of myself and Mayra Angraini. The platform was designed to help Indonesian furniture artisans expand into international markets, particularly in the United States and Germany. One of the key innovations of the project is the integration of Augmented Reality (AR), allowing customers to scan their room, measure available space, and visualize furniture placement before making a purchase. The platform also provides production tracking, progress updates, and delivery estimations to improve transparency throughout the ordering process. By combining digital commerce, AR technology, and local craftsmanship, Furnitech aims to bridge the gap between Indonesian artisans and the global furniture market.",
    focus:
      "Digital Marketplace Development, Augmented Reality (AR), International E-Commerce, User Experience Design, and Technopreneurship.",
    role:
      "Product Designer & Full-Stack Developer (Team of 2 Members). Contributed to business concept development, market research, system planning, feature design, and platform development for the competition project.",
  },
  10: {
    title: "Fokus Room",
    category: "Others",
    year: "2022",
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Fokus Room is a workplace communication platform designed to separate professional conversations and documents from personal messaging activities.",
    overview:
      "Fokus Room was developed to address a common challenge faced by employees who use personal messaging applications for work-related communication. The platform provides a dedicated workspace where conversations, files, and documents related to work are stored separately from personal activities. By centralizing work discussions and documentation in a secure environment, the application helps users stay organized, improve productivity, and reduce the risk of mixing personal and professional information. The concept emphasizes focused communication, document management, and workplace data security.",
    focus:
      "Workplace Productivity, Communication Systems, Document Management, User Experience Design, and Information Security.",
    role:
      "Product Designer & Full-Stack Developer. Designed the product concept, analyzed user problems, developed system features, and implemented the platform to support focused workplace communication and document organization.",
  },
  11: {
    title: "Duta Santri Website",
    category: "Education",
    year: "2023",
    technologies: ["WordPress", "SEO", "Google Analytics", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/maziyaqofi/",
    description:
      "Led the development and optimization of the Duta Santri Nasional website, focusing on content management, SEO performance, and platform growth.",
    overview:
      "As the project leader, I was entrusted with overseeing the development and continuous improvement of the Duta Santri Nasional website. The project focused on maintaining the platform, enhancing its visibility through Search Engine Optimization (SEO), and ensuring a better user experience for visitors. Working collaboratively with a team, I coordinated development activities, content strategy, and website optimization efforts to maximize reach and engagement. The role provided valuable experience in website management, leadership, team coordination, and digital growth strategies using WordPress and SEO best practices.",
    focus:
      "Website Management, Search Engine Optimization (SEO), Digital Growth Strategy, Team Leadership, and Content Management.",
    role:
      "Project Leader & Web Developer. Led a development team, managed website enhancement initiatives, implemented SEO strategies, coordinated maintenance activities, and contributed to the platform's long-term growth and performance.",
  },
}

export const projects = baseProjects.map((project) => {
  const detail = projectDetails[project.id] ?? {}

  return {
    ...project,
    ...detail,
    link: detail.link ?? "https://github.com/maziyaqofi/",
    overview:
      detail.overview ??
      `${detail.description ?? project.description} This project was developed as part of my continuous exploration in software engineering, product thinking, and user-centered digital experiences.`,
    focus:
      detail.focus ??
      "Digital Product Development, User Experience Design, Technical Implementation, and Problem Solving.",
    role:
      detail.role ??
      "Product Designer & Developer. Contributed to concept planning, interface design, feature development, and project presentation.",
  }
})

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
