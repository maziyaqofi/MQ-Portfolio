import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa"


function Footer() {
  return (
    <footer className="w-full bg-[#0D111A] px-10 py-16">

      {/* BACK TO TOP */}
      <div className="flex justify-center">

        <a
          href="#home"
          className="
            flex
            flex-col
            items-center
            gap-3
            text-white
            transition
            hover:text-pink-400
          "
        >

          <FaArrowUp className="text-[24px]" />

          <span className="text-[16px] tracking-[4px]">
            BACK TO TOP
          </span>

        </a>

      </div>

      {/* SOCIAL ICONS */}
      <div className="mt-12 flex justify-center gap-8">

        <a
          href="https://github.com/"
          target="_blank"
          className="
            text-[24px]
            text-white
            transition
            hover:text-pink-400
          "
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          className="
            text-[24px]
            text-white
            transition
            hover:text-pink-400
          "
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          className="
            text-[24px]
            text-white
            transition
            hover:text-pink-400
          "
        >
          <FaInstagram />
        </a>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center">

        <p className="text-[16px] tracking-[2px] text-gray-400">
          © 2026 MaziyaQofi. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer