import logo from "../assets/LogoIT.svg"

function ITBerries() {
  return (
    <section className="w-full h-[300px] bg-[#0D111A] overflow-hidden">

      <div className="h-full px-10 lg:px-28 py-8 flex items-start justify-between">

        {/* LEFT CONTENT */}
        <div className="w-full">

          <h2 className="text-[24px] font-semibold tracking-[6px] text-[#F9F9F9]">
            IT BERRIES
          </h2>

          <p className="mt-6 max-w-6xl text-[14px] leading-relaxed text-[#F9F9F9]">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim efficitur in. Sed at nunc a metus efficitur convallis. Donec ut ligula a enim efficitur commodo. Donec suscipit auctor dui, sed efficitur enim efficitur in. Sed at nunc a metus efficitur convallis. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur enim efficitur in. 
          </p>

          <a
            href="#about"
            className="mt-10 inline-block border-l-2 border-r-2 border-white px-4 py-1 text-[16px] font-medium tracking-widest text-white transition hover:text-pink-400"
          >
            READ MORE
          </a>

        </div>

        {/* RIGHT LOGO */}
        <div className="relative flex justify-end">

        <img
            src={logo}
            alt="IT Logo"
            className="
            w-[450px]
            opacity-20
            rotate-12
            translate-x-40
            -translate-y-25
            "
        />

        </div>

      </div>

    </section>
  )
}

export default ITBerries