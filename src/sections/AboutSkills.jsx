import htmlLogo from "../assets/html.svg"
import cssLogo from "../assets/css.svg"
import jsLogo from "../assets/javascript.svg"
import reactLogo from "../assets/react.svg"
import tailwindLogo from "../assets/tailwindcss.svg"
import nodejsLogo from "../assets/nodejs.svg"
import mysqlLogo from "../assets/mysql.svg"
import mongodbLogo from "../assets/mongodb.svg"
import pythonLogo from "../assets/python.svg"
import figmaLogo from "../assets/figma.svg"
import gitLogo from "../assets/git.svg"
import githubLogo from "../assets/github.svg"

import {
  FaPencilRuler,
  FaTools,
  FaLaptopCode
} from "react-icons/fa"

function AboutSkills() {
  return (

// About Section
    <section
    id="about"
    className="
        w-full
        min-h-screen
        px-10
        lg:px-28
        py-24
    "
    style={{
        background:
        "radial-gradient(circle, #F9F9F9 0%, #F5D3DC 100%)",
    }}
    >

    {/* TITLE */}
    <div className="flex justify-center">

        <div className="border-4 border-pink-500 px-10 py-3">

        <h2 className="text-[28px] font-bold tracking-[6px] text-[#1B1B1B]">
            ABOUT ME
        </h2>

        </div>

    </div>

    {/* DESCRIPTION */}
    <div className="mx-auto mt-16 max-w-5xl">

        <p className="text-[20px] leading-relaxed text-justify text-[#1B1B1B]">
        I am an Informatics Engineering student with a strong interest in
        <span className="font-semibold">
            {" "}Frontend Development and modern web technologies.
        </span>

        {" "}I enjoy building responsive, interactive, and user-friendly
        web applications that combine clean design with functional user
        experiences. I have worked on several academic and competition
        projects that helped me improve my skills. Through these experiences,
        I learned how to turn ideas into real digital products while
        continuously improving my problem-solving and teamwork abilities.
        </p>

        <p className="mt-8 text-[20px] leading-relaxed text-justify text-[#1B1B1B]">

        I am
        <span className="font-semibold text-pink-500">
            {" "}passionate about learning new technologies,
        </span>

        especially in
        <span className="font-semibold text-pink-500">
            {" "}web development and AI-powered applications.
        </span>

        {" "}My goal is to grow as a frontend developer and contribute to
        creating impactful digital experiences that are both modern and
        accessible.

        {" "}Currently, I am actively developing my portfolio, exploring
        modern UI/UX design, and preparing for internship opportunities in
        the software engineering industry.

        </p>

    </div>

    {/* SERVICES */}
    <div className="mt-32">

    {/* TOP ROW */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-5xl mx-auto">

        {/* DESIGN */}
        <div className="flex gap-6">

        <FaPencilRuler className="text-[40px] text-[#C7B8BE]" />

        <div>

            <h3 className="text-[24px] font-bold tracking-[4px] text-black">
            DESIGN
            </h3>

            <p className="mt-6 max-w-md text-[20px] leading-relaxed text-[#1B1B1B]">
            I can design the site based on your needs and suggestions.
            I can also design the site from scratch and consult you during the job.
            </p>

        </div>

        </div>

        {/* DEVELOPMENT */}
        <div className="flex gap-6">

        <FaTools className="text-[40px] text-[#C7B8BE]" />

        <div>

            <h3 className="text-[24px] font-bold tracking-[4px] text-black">
            DEVELOPMENT
            </h3>

            <p className="mt-6 max-w-md text-[20px] leading-relaxed text-[#1B1B1B]">
            I can design the site based on your needs and suggestions.
            I can also design the site from scratch and consult you during the job.
            </p>

        </div>

        </div>

    </div>

    {/* BOTTOM */}
    <div className="mt-24 flex justify-center">

        <div className="flex gap-6">

        <FaLaptopCode className="text-[40px] text-[#C7B8BE]" />

        <div>

            <h3 className="text-[24px] font-bold tracking-[4px] text-black">
            MAINTENANCE
            </h3>

            <p className="mt-6 max-w-md text-[20px] leading-relaxed text-[#1B1B1B]">
            I can design the site based on your needs and suggestions.
            I can also design the site from scratch and consult you during the job.
            </p>

        </div>

        </div>

    </div>

    </div>

    {/* READ MORE */}
    <div className="mt-28 flex justify-center">

    <a
        href="/about-me"
        className="
        border-l-2
        border-r-2
        border-pink-500
        px-8
        py-2
        text-[24px]
        font-semibold
        tracking-wide
        text-pink-500
        transition
        hover:scale-105
        "
    >
        READ MORE
    </a>

    </div>

    {/* SKILLS */}
    <div id="skills" className="mt-40">

    {/* TITLE */}
    <div className="flex justify-center">

        <div className="border-4 border-pink-500 px-10 py-3">

        <h2 className="text-[28px] font-bold tracking-[6px] text-[#1B1B1B]">
            SKILLS
        </h2>

        </div>

    </div>

    {/* CONTENT */}
    <div className="mx-auto mt-24 max-w-5xl">

        {/* SUBTITLE USING NOW */}
        <h3 className="text-[24px] font-bold tracking-[4px] text-[#1B1B1B]">
        USING NOW:
        </h3>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16">

        <div className="flex flex-col items-center">
        <img
            src={htmlLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
        />

        <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
            HTML5
        </h4>
        </div>

        <div className="flex flex-col items-center">
        <img
            src={cssLogo}
            alt="CSS"
            className="w-20 h-20 object-contain"
        />

        <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
            CSS3
        </h4>
        </div>

        <div className="flex flex-col items-center">
        <img
            src={jsLogo}
            alt="JavaScript"
            className="w-20 h-20 object-contain"
        />

        <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
            JAVASCRIPT
        </h4>
        </div>

        <div className="flex flex-col items-center">
        <img
            src={reactLogo}
            alt="React"
            className="w-20 h-20 object-contain"
        />

        <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
            REACT
        </h4>
        </div>

        <div className="flex flex-col items-center">
        <img
            src={tailwindLogo}
            alt="Tailwind"
            className="w-20 h-20 object-contain"
        />

        <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
            Tailwind
        </h4>
        </div>

        </div>

        {/* LEARNING */}
        <div className="mt-28">

        <h3 className="text-[24px] font-bold tracking-[4px] text-[#1B1B1B]">
            LEARNING:
        </h3>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16">

            {/* NODE JS */}
            <div className="flex flex-col items-center">
            <img
            src={nodejsLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />
            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                NODE JS
            </h4>

            </div>

            {/* EXPRESS */}
            <div className="flex flex-col items-center">

            <img
            src={mysqlLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />

            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                MySQL
            </h4>

            </div>

            {/* MONGODB */}
            <div className="flex flex-col items-center">
            <img
            src={mongodbLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />
            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                MONGODB
            </h4>

            </div>

            {/* PYTHON */}
            <div className="flex flex-col items-center">
            <img
            src={pythonLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />

            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                PYTHON
            </h4>

            </div>

        </div>

        </div>

        {/* OTHER SKILLS */}
        <div className="mt-28">

        <h3 className="text-[24px] font-bold tracking-[4px] text-[#1B1B1B]">
            OTHER SKILLS:
        </h3>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16">

            {/* GIT */}
            <div className="flex flex-col items-center">
            <img
            src={gitLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />

            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                GIT
            </h4>

            </div>

            {/* GITHUB */}
            <div className="flex flex-col items-center">

            <img
            src={githubLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />

            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                GITHUB
            </h4>

            </div>

            {/* FIGMA */}
            <div className="flex flex-col items-center">

            <img
            src={figmaLogo}
            alt="HTML"
            className="w-20 h-20 object-contain"
            />

            <h4 className="mt-4 text-[20px] tracking-[3px] text-[#1B1B1B]">
                FIGMA
            </h4>

            </div>


        </div>

        </div>
    </div>

    </div>

    </section>

    
    

  )
}

export default AboutSkills
