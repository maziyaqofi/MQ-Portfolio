import logo from "../assets/LogoIT.svg"

function ITBerries() {
  return (
    <section className="w-full bg-[#0D111A] overflow-hidden lg:h-[180px]">

      <div className="relative h-full px-8 py-8 lg:px-28 flex items-start justify-between">

        {/* LEFT CONTENT */}
        <div className="w-full">

          <h2 className="text-[20px] lg:text-[24px] font-semibold tracking-[5px] lg:tracking-[6px] text-[#F9F9F9]">
            IT BERRIES
          </h2>

          <p className="mt-4 max-w-6xl text-[13px] lg:text-[14px] leading-relaxed text-[#F9F9F9]">
            I explore technology through frontend development, creative design, and AI innovation. From web applications to digital products and tech competitions, I love creating experiences that are both functional and impactful.
          </p>

          {/* <a
            href="#about"
            className="mt-4 inline-block border-l-2 border-r-2 border-white px-4 py-1 text-[12px] font-medium tracking-widest text-white transition hover:text-pink-400"
          >
            READ MORE
          </a> */}

        </div>

        {/* RIGHT LOGO */}
        <div className="hidden md:flex relative justify-end">

        <img
            src={logo}
            alt="IT Logo"
            className="
            w-[450px]
            opacity-20
            rotate-12
            translate-x-40
            -translate-y-45
            "
        />

        </div>

      </div>

    </section>
  )
}

export default ITBerries
