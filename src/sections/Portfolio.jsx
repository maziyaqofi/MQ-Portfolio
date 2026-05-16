function Portfolio() {
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

        

        {/* PROJECT GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-10">

        {/* PROJECT CARD */}
        <div className="overflow-hidden rounded-2xl bg-[#161B22]">

            {/* IMAGE */}
            <div className="h-[220px] bg-gray-700"></div>

            {/* CONTENT */}
            <div className="p-6">

            <h3 className="text-[24px] font-bold text-white">
                MQ Portfolio 1
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
                MQ Portfolio 2
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
                MQ Portfolio 3
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
                MQ Portfolio 4
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

        <div className="mt-16 flex justify-center">
            <a
                href="/portofolio"
                className="
                border-l-2
                border-r-2
                border-pink-400
                px-8
                py-2
                text-[20px]
                font-semibold
                tracking-[4px]
                text-pink-300
                transition
                hover:text-white
                "
            >
                - More -
            </a>
        </div>

    </section>
  )
}

export default Portfolio
