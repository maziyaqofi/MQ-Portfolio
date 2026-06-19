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
import fokusroomImage from "../assets/fokusroom.png"
import tickrImage from "../assets/tickr.png"
import dailyjournalImage from "../assets/dailyjournal.png"
import aipromptImage from "../assets/aiprompt.jpeg"
import propertyImage from "../assets/property.jpeg"
import mathmindImage from "../assets/mathmindai.jpeg"
import bankmlImage from "../assets/bankml.png"
import artsyImage from "../assets/artsystudio.png"
import oceImage from "../assets/oce.svg"
import bankingImage from "../assets/bankinglite.png"
import smartclinicImage from "../assets/smartclinic.jpeg"


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
    image: fokusroomImage,
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
    image: bankmlImage,
    description:
      "A data analysis project for predicting customer behavior, supporting business decisions through simple machine learning workflows.",
    technologies: ["Python", "Data Analysis", "ML"],
  },
  {
    id: 18,
    title: "AI Prompt Studio",
    category: "Others",
    year: "2026",
    image: aipromptImage,
    description:
      "A creative AI workspace concept for organizing prompts, testing ideas, and improving AI-assisted production workflows.",
    technologies: ["AI", "Prompting", "Product Design"],
  },
  {
    id: 19,
    title: "Math Mind AI",
    category: "Education",
    year: "2026",
    image: mathmindImage,
    description:
      "An AI-based education concept that helps learners understand math problems through guided explanation and practice flow.",
    technologies: ["AI", "Education", "Math"],
  },
  {
    id: 20,
    title: "Property Listing App",
    category: "Real Estate",
    year: "2025",
    image: propertyImage,
    description:
      "A property listing app concept for browsing homes, comparing details, and presenting real estate information clearly.",
    technologies: ["Real Estate", "Listing", "UI"],
  },
  {
    id: 21,
    title: "Artsy Studio Web",
    category: "Entertainment",
    year: "2025",
    image: artsyImage,
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
    image: oceImage,
    description:
      "A design portfolio web concept for showcasing creative work, service identity, and visual brand presentation.",
    technologies: ["Web Design", "Portfolio", "Branding"],
  },
  {
    id: 24,
    title: "Banking Lite",
    category: "Finance",
    year: "2026",
    image: bankingImage,
    description:
      "A simple banking interface concept for balance overview, transaction history, and lightweight financial management.",
    technologies: ["Finance", "Dashboard", "UI/UX"],
  },
  {
    id: 25,
    title: "Smart Clinic",
    category: "Medical",
    year: "2025",
    image: smartclinicImage,
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
  12: {
    title: "Truthly",
    category: "Others",
    year: "2023",
    technologies: ["Blockchain", "Laravel", "PHP", "MySQL", "JavaScript"],
    link: "https://github.com/maziyaqofi",
    description:
      "Truthly is a blockchain-powered fact-checking platform designed to help users verify the authenticity of online information and identify potential hoaxes.",
    overview:
      "Truthly was developed by a team of four members during the Samsung Innovation Campus Challenge. The project addresses the growing problem of misinformation and fake news circulating across digital platforms. Users can simply copy and paste a link from social media, news websites, or other online sources into the Truthly platform, where the information is analyzed and verified. By leveraging blockchain concepts, the platform aims to improve transparency, trust, and accountability in the verification process. The solution was designed to make fact-checking more accessible, enabling the public to quickly assess the credibility of information before sharing or acting upon it.",
    focus:
      "Blockchain Applications, Misinformation Detection, Digital Trust, Information Verification, and Social Impact Technology.",
    role:
      "Full-Stack Developer & Team Member (Team of 4 Members). Contributed to solution design, feature development, system planning, and presentation of the innovation during the Samsung Innovation Challenge.",
  },
  13: {
    title: "Tickr",
    category: "Others",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi",
    description:
      "Tickr is a student-focused task management platform designed to help users organize assignments, deadlines, and daily activities through an engaging interface.",
    overview:
      "Tickr was developed as a university project in collaboration with classmates. The platform was designed to address productivity challenges commonly faced by students by providing a simple and visually appealing task management experience. Users can create, manage, and track their academic tasks and personal activities in one place. Unlike generic to-do list applications, Tickr focuses on the needs of university students, emphasizing usability, motivation, and a modern interface to encourage better organization and time management.",
    focus:
      "Web Application Development, Productivity Tools, User Experience Design, Student Productivity, and Interface Design.",
    role:
      "Front-End Developer & Team Member. Contributed to interface development, feature implementation, and collaboration throughout the design and development process.",
  },
  14: {
    title: "Daily Journal Web",
    category: "Others",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi",
    description:
      "A simple web-based journaling application developed to practice CRUD operations and fundamental web development concepts.",
    overview:
      "Daily Journal Web was developed as part of a Web Programming course project. The application allows users to create, read, update, and delete journal entries through a simple and intuitive interface. The primary objective of the project was to strengthen understanding of CRUD functionality, database integration, and basic web application architecture. Through this project, fundamental concepts of full-stack web development, including data management and user interaction, were successfully implemented.",
    focus:
      "CRUD Operations, Web Programming Fundamentals, Database Integration, Full-Stack Development, and Data Management.",
    role:
      "Full-Stack Developer. Designed and developed the entire application, including database structure, CRUD functionality, and user interface implementation.",
  },
  15: {
    title: "AstraTap",
    category: "Others",
    year: "2026",
    technologies: [
      "Figma",
      "NFC (Near Field Communication)",
      "AstraPay Integration",
      "Product Design",
      "Fintech Architecture",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "AstraTap is an NFC-based payment solution that enables motorcycle users to complete fuel transactions with a single tap, eliminating the need to open apps, scan QR codes, or carry cash.",
    overview:
      "AstraTap was developed as a fintech innovation concept designed to simplify fuel payments within the Astra ecosystem. The solution utilizes NFC technology integrated with AstraPay, allowing users to link their vehicle to a secure NFC tag and complete transactions through a single tap. The project addresses common pain points faced by drivers, such as handling cash, opening payment applications, or scanning QR codes during fueling. Beyond fuel payments, AstraTap was envisioned as a digital vehicle identity that could support future services including smart parking, vehicle maintenance, spare part purchases, loyalty programs, and membership services. The concept focuses on creating a seamless, secure, and efficient payment experience for everyday mobility.",
    focus:
      "Fintech Innovation, Digital Payments, NFC Technology, Product Design, User Experience, and Smart Mobility Solutions.",
    role:
      "Product Designer & Software Engineer. Led the ideation process, designed the user journey and payment ecosystem, developed the product concept, and created the system architecture and user experience for the AstraTap solution.",
  },
  16: {
    title: "MediLink Rescue AI",
    category: "Medical",
    year: "2026",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Gemini AI",
      "QR Code Technology",
      "GitHub",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "MediLink Rescue AI is a digital medical identity platform that enables healthcare professionals to access critical patient information through a QR code during emergency situations.",
    overview:
      "MediLink Rescue AI was developed to address the challenge of accessing essential patient information during emergencies, especially when patients are unconscious or unable to communicate. The platform allows users to securely store medical information such as blood type, allergies, medical history, current medications, and emergency contacts. Each user receives a unique QR code that can be accessed by healthcare providers during critical situations. To improve efficiency, AI technology automatically generates concise medical summaries, helping medical personnel quickly understand the patient's condition and make informed decisions. The solution aims to enhance emergency response, improve patient safety, and support faster medical treatment through accessible digital health records.",
    focus:
      "Health Technology, Artificial Intelligence, Emergency Response Systems, Digital Health Records, QR Code Technology, and Patient Safety.",
    role:
      "Full-Stack Developer, AI Engineer & Product Designer. Led the end-to-end development process, including problem validation, system architecture design, AI integration, database design, user experience development, and product presentation for innovation and competition purposes.",
  },
  17: {
    title: "Bank Customer Segmentation and Classification Using Machine Learning",
    category: "Finance",
    year: "2025",
    technologies: [
      "Python",
      "Google Colab",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "A machine learning project that segments bank customers based on transaction behavior and predicts customer groups using classification models.",
    overview:
      "This project was developed to analyze banking customer behavior through a combination of clustering and classification techniques. The first stage focused on customer segmentation by grouping individuals with similar characteristics, such as transaction activity, account balance, age, occupation, and transaction duration. After identifying meaningful customer clusters, a classification model was built to automatically predict the segment of new customers without repeating the clustering process. The project involved data preprocessing, exploratory analysis, customer segmentation, cluster interpretation, and predictive modeling using Decision Tree and Random Forest algorithms. The best-performing model achieved approximately 98% accuracy, demonstrating the effectiveness of machine learning in customer profiling and decision support within the banking sector.",
    focus:
      "Machine Learning, Customer Segmentation, Classification, Data Mining, Predictive Analytics, and Financial Data Analysis.",
    role:
      "Machine Learning Engineer & Data Analyst. Performed data preprocessing, clustering analysis, customer segmentation, model training, performance evaluation, and interpretation of customer behavior patterns using machine learning techniques.",
  },
  18: {
    title: "AI Prompt Studio",
    category: "Others",
    year: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Generative AI",
      "Prompt Engineering",
      "GitHub",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "AI Prompt Studio is a web platform that helps users analyze, improve, and optimize AI prompts to generate more accurate and effective results.",
    overview:
      "AI Prompt Studio was developed as part of a Generative AI learning project to address a common challenge faced by AI users: poorly structured prompts. The platform evaluates prompts across multiple dimensions, including clarity, specificity, context, target audience, and goal definition. Based on the analysis, the system provides actionable recommendations and generates improved versions of the original prompt. Through this project, I explored how prompt quality directly impacts AI performance and learned the importance of effective human-AI collaboration. The platform demonstrates how AI can act not only as a content generator but also as a design assistant, validator, and productivity partner in modern workflows.",
    focus:
      "Generative AI, Prompt Engineering, Human-AI Collaboration, AI Evaluation Systems, User Experience, and AI-Assisted Workflows.",
    role:
      "AI Engineer & Full-Stack Developer. Designed and developed the platform, implemented prompt evaluation logic, integrated generative AI capabilities, and translated prompt engineering concepts into a practical tool for AI users.",
  },
  19: {
    title: "MathMind AI",
    category: "Education",
    year: "2026",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Amazon Bedrock",
      "AWS Lambda",
      "DynamoDB",
      "Amazon S3",
      "API Gateway",
      "AWS Cloud Services",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "MathMind AI is an AI-powered educational game that helps children learn basic mathematics through interactive quizzes and personalized feedback.",
    overview:
      "MathMind AI was developed as the final project of the AWS Cloud Computing and Generative AI learning path offered by Dicoding Indonesia and Amazon Web Services (AWS). The platform transforms basic arithmetic learning into an engaging experience through interactive challenges covering addition, subtraction, multiplication, and division. After each learning session, an AI tutor named Milo analyzes student performance and generates personalized feedback to help learners understand their strengths and identify areas for improvement. The project combines cloud computing, generative AI, and learning analytics to create a scalable educational platform that supports adaptive learning and progress tracking. Through this project, I applied AWS cloud services and AI technologies to solve real-world educational challenges in a practical and meaningful way.",
    focus:
      "Generative AI, Cloud Computing, Educational Technology (EdTech), Learning Analytics, Personalized Learning, and Full-Stack Development.",
    role:
      "Cloud & AI Developer. Designed and developed the application, integrated AWS cloud services, implemented AI-powered feedback generation, and built the learning analytics workflow to enhance student engagement and learning outcomes.",
  },
  20: {
    title: "Property Listing App",
    category: "Real Estate",
    year: "2026",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "localStorage",
      "Kiro AI",
      "Claude",
      "Gemini",
      "NotebookLM",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "A property marketplace web application that allows sellers to manage property listings and buyers to search, browse, and filter properties through a simple and intuitive interface.",
    overview:
      "Property Listing App was developed as the final project for the Spec-Driven Development with Kiro course, a collaboration between Dicoding Indonesia and Amazon Web Services (AWS). Inspired by marketplace platforms such as OLX, the application enables property sellers to create, update, and manage listings while helping buyers discover properties through search and filtering features. The project was built using a Spec-Driven Development approach, where requirements, design specifications, and development tasks were translated into implementation through AI-assisted workflows. Throughout development, I collaborated with multiple AI tools, including Kiro AI for code generation and task execution, Claude and Gemini for architectural discussions and business rule validation, and NotebookLM for research and knowledge synthesis. This project strengthened my understanding of human-AI collaboration, modern web development, and AI-assisted software engineering workflows.",
    focus:
      "Spec-Driven Development, AI-Assisted Software Engineering, Full-Stack Development, Real Estate Technology, Human-AI Collaboration, and Product Architecture.",
    role:
      "Software Architect & Full-Stack Developer. Defined project requirements, managed development scope, designed system architecture, directed AI-assisted implementation workflows, validated business requirements, and delivered the final web application using modern full-stack technologies.",
  },
  21: {
    title: "Artsy Studio Website",
    category: "Others",
    year: "2023",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi",
    description:
      "A company profile and product catalog website developed to strengthen Artsy Studio's digital presence and showcase its products to potential customers.",
    overview:
      "Artsy Studio Website was developed to support the online presence of Artsy Studio, a store that sells products through e-commerce platforms. The website serves as a centralized platform where visitors can learn about the brand, explore its story, and browse product catalogs in a more professional and organized way. The project focused on creating an attractive and user-friendly experience that helps potential customers discover products while increasing brand credibility and visibility. By combining company profile content with a digital product catalog, the website acts as a bridge between customers and the store's e-commerce channels.",
    focus:
      "Website Development, Digital Branding, Product Catalog Management, User Experience Design, and Small Business Digitalization.",
    role:
      "Full-Stack Developer. Handled the project from planning and design to development and deployment, including website structure, product catalog implementation, and overall user experience optimization.",
  },
  22: {
    title: "Smart Wardrobe: Temperature & Humidity Monitoring System",
    category: "Others",
    year: "2026",
    technologies: ["ESP32", "DHT22 Sensor", "Arduino IDE", "Blynk IoT", "C++", "Wi-Fi"],
    link: "https://github.com/maziyaqofi",
    description:
      "An IoT-based smart wardrobe system that monitors temperature and humidity levels in real time to help prevent mold growth and protect stored clothing.",
    overview:
      "Smart Wardrobe was developed as an Internet of Things (IoT) solution to address humidity-related issues inside wardrobes, which can lead to mold growth, unpleasant odors, and fabric damage. The system continuously monitors temperature and humidity conditions using environmental sensors and sends real-time data to a mobile dashboard. Users can easily track wardrobe conditions and take preventive actions when humidity levels become unsuitable for clothing storage. The project demonstrates how IoT technology can be applied to everyday household challenges by providing a simple, automated, and data-driven monitoring solution.",
    focus:
      "Internet of Things (IoT), Embedded Systems, Environmental Monitoring, Sensor Integration, Real-Time Data Monitoring, and Smart Home Technology.",
    role:
      "IoT Developer & System Designer. Designed the system architecture, integrated sensors with ESP32, developed the monitoring workflow, implemented real-time data transmission, and tested the solution for practical household use.",
  },
  23: {
    title: "Oce Design Website",
    category: "Others",
    year: "2022",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/maziyaqofi",
    description:
      "A business website developed for Oce Design to showcase digital services, strengthen brand credibility, and reach both local and international clients.",
    overview:
      "Oce Design Website was created as the primary digital presence for Oce Design, a creative agency specializing in social media management, branding, and website development services. The platform was designed to professionally present the agency's portfolio, services, and business information while making it easier for potential clients to connect with the team. A key objective of the project was to create a website that could serve not only domestic clients but also international audiences through a professional and accessible online experience. The project focused on digital branding, service presentation, and business growth through an effective web presence.",
    focus:
      "Website Development, Digital Branding, Agency Portfolio Design, Business Digitalization, and User Experience Design.",
    role:
      "Full-Stack Developer & Website Designer. Led the development of the agency website, designed the user experience, implemented core features, and optimized the platform to support client acquisition and business growth.",
  },
  24: {
    title: "Banking Lite",
    category: "Finance",
    year: "2026",
    technologies: [
      "React",
      "JavaScript/TypeScript",
      "REST API",
      "Financial API Integration",
      "HTML",
      "CSS",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "A digital banking application prototype that integrates multiple financial accounts and APIs into a unified dashboard for easier financial management.",
    overview:
      "Banking Lite was developed as a fintech application prototype that enables users to monitor and manage financial information from multiple accounts through a single platform. The system integrates financial APIs to aggregate account data and provide a consolidated view of balances, transactions, and account activities. Inspired by modern digital banking and open banking concepts, the project focuses on improving accessibility and simplifying financial management by reducing the need to switch between different banking applications. The platform demonstrates how API integration can create a more connected and efficient financial experience for users.",
    focus:
      "Fintech Development, API Integration, Open Banking Concepts, Financial Data Management, and Full-Stack Development.",
    role:
      "Full-Stack Developer. Designed the application architecture, integrated financial APIs, developed account management features, and implemented the user interface for a seamless banking experience.",
  },
  25: {
    title: "Smart Clinic System",
    category: "Medical",
    year: "2025",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
      "JDBC",
      "Object-Oriented Programming",
    ],
    link: "https://github.com/maziyaqofi",
    description:
      "A clinic management system designed to streamline healthcare operations, patient services, and administrative workflows through a role-based dashboard.",
    overview:
      "Smart Clinic Management System was developed to help clinics and healthcare facilities manage their daily operations more efficiently. The platform provides an integrated dashboard for handling patient registration, medical records, appointments, examinations, prescriptions, and administrative activities. To ensure data security and proper access control, the system implements role-based permissions, allowing different levels of access for administrators, doctors, pharmacists, and other staff members. The project focuses on improving operational efficiency, reducing manual processes, and supporting better healthcare service management through a centralized information system.",
    focus:
      "Healthcare Information Systems, Object-Oriented Programming (OOP), Database Management, Role-Based Access Control (RBAC), and Desktop Application Development.",
    role:
      "Full-Stack Developer. Designed and developed the entire system, including database architecture, user authentication, role-based authorization, patient management workflows, and healthcare operational modules.",
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
