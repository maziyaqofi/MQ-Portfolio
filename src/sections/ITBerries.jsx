import logo from "../assets/LogoIT.svg"

function ITBerries() {
  return (
    <section className="w-full overflow-hidden bg-[#0D111A] lg:h-[180px]">
      <div className="relative flex h-full items-start justify-between px-8 py-8 lg:px-28">
        <div className="w-full">
          <h2 className="text-[20px] font-semibold tracking-[5px] text-[#F9F9F9] lg:text-[24px] lg:tracking-[6px]">
            IT BERRIES
          </h2>
          <p className="mt-4 max-w-6xl text-[13px] leading-relaxed text-[#F9F9F9] lg:text-[14px]">
            I explore technology through software engineering, AI innovation,
            and creative digital solutions. From developing applications and
            intelligent systems to participating in competitions and building
            personal projects, I enjoy creating technology that is both
            functional and impactful.
          </p>
        </div>

        <div className="relative hidden justify-end md:flex">
          <img
            src={logo}
            alt="IT Logo"
            className="w-[450px] -translate-y-45 translate-x-40 rotate-12 opacity-20"
          />
        </div>
      </div>
    </section>
  )
}

export default ITBerries
