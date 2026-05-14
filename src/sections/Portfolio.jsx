import { useState } from "react"

function Portfolio() {
    const [activeTab, setActiveTab] = useState("all")
    return (
    <section
      id="portfolio"
      className="w-full bg-[#0D111A] px-10 lg:px-28 py-28"
    >

        {/* TITLE */}
        <div className="flex justify-center">

            <div className="border-4 border-pink-400 px-10 py-3">

            <h2 className="text-[28px] font-bold tracking-[6px] text-white">
                PORTFOLIO
            </h2>

            </div>

        </div>

        {/* FILTER MENU */}
        <div className="mt-20">

        {/* MENU */}
        <div className="flex items-center justify-around">

            <button
            onClick={() => setActiveTab("all")}
            className={`
                pb-4 text-[22px] font-semibold transition
                ${activeTab === "all"
                ? "text-[#F5D3DC]"
                : "text-pink-400 hover:text-[#F5D3DC]"
                }
            `}
            >
            ALL
            </button>

            <button
            onClick={() => setActiveTab("frontend")}
            className={`
                pb-4 text-[22px] font-semibold transition
                ${activeTab === "frontend"
                ? "text-[#F5D3DC]"
                : "text-pink-400 hover:text-[#F5D3DC]"
                }
            `}
            >
            Frontend
            </button>

            <button
            onClick={() => setActiveTab("uiux")}
            className={`
                pb-4 text-[22px] font-semibold transition
                ${activeTab === "uiux"
                ? "text-[#F5D3DC]"
                : "text-pink-400 hover:text-[#F5D3DC]"
                }
            `}
            >
            UI/UX
            </button>

            <button
            onClick={() => setActiveTab("ml")}
            className={`
                pb-4 text-[22px] font-semibold transition
                ${activeTab === "ml"
                ? "text-[#F5D3DC]"
                : "text-pink-400 hover:text-[#F5D3DC]"
                }
            `}
            >
            Machine Learning
            </button>

        </div>

        {/* LINE */}
        <div className="relative h-[1px] w-full bg-gray-300">

            {/* ACTIVE LINE */}
            <div className={`
                absolute top-0 h-[3px] bg-pink-500 transition-all duration-300
                ${activeTab === "all" && "left-0 w-1/8"}
                ${activeTab === "frontend" && "left-1/4 w-1/8"}
                ${activeTab === "uiux" && "left-2/4 w-1/8"}
                ${activeTab === "ml" && "left-3/4 w-1/8"}
            `}
            />

        </div>

        </div>

        {/* PROJECT GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-2xl bg-[#161B22]">

            {/* IMAGE */}
            <div className="h-[220px] bg-gray-700"></div>

            {/* CONTENT */}
            <div className="p-6">

            <h3 className="text-[24px] font-bold text-white">
                MQ Portfolio
            </h3>

            <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                Modern responsive frontend developer portfolio built using
                React, Vite, and Tailwind CSS.
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                React
                </span>

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                Tailwind
                </span>

            </div>

            </div>

        </div>

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-2xl bg-[#161B22]">

            {/* IMAGE */}
            <div className="h-[220px] bg-gray-700"></div>

            {/* CONTENT */}
            <div className="p-6">

            <h3 className="text-[24px] font-bold text-white">
                MQ Portfolio
            </h3>

            <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                Modern responsive frontend developer portfolio built using
                React, Vite, and Tailwind CSS.
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                React
                </span>

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                Tailwind
                </span>

            </div>

            </div>

        </div>

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-2xl bg-[#161B22]">

            {/* IMAGE */}
            <div className="h-[220px] bg-gray-700"></div>

            {/* CONTENT */}
            <div className="p-6">

            <h3 className="text-[24px] font-bold text-white">
                MQ Portfolio
            </h3>

            <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                Modern responsive frontend developer portfolio built using
                React, Vite, and Tailwind CSS.
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                React
                </span>

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                Tailwind
                </span>

            </div>

            </div>

        </div>

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-2xl bg-[#161B22]">

            {/* IMAGE */}
            <div className="h-[220px] bg-gray-700"></div>

            {/* CONTENT */}
            <div className="p-6">

            <h3 className="text-[24px] font-bold text-white">
                MQ Portfolio
            </h3>

            <p className="mt-4 text-[16px] leading-relaxed text-gray-300">
                Modern responsive frontend developer portfolio built using
                React, Vite, and Tailwind CSS.
            </p>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                React
                </span>

                <span className="rounded-full bg-pink-400/20 px-4 py-1 text-[14px] text-pink-300">
                Tailwind
                </span>

            </div>

            </div>

        </div>

        </div>

    </section>
  )
}

export default Portfolio