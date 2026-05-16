function Contact() {
  return (
    <section
      id="contact"
      className="
        w-full
        min-h-screen
        px-10
        lg:px-28
        py-16
      "
      style={{
        background:
          "radial-gradient(circle, #F9F9F9 0%, #F5D3DC 100%)",
      }}
    >

      {/* TITLE */}
      <div className="flex justify-center">

        <div className="border-4 border-black px-10 py-3">

          <h2 className="text-[28px] font-bold tracking-[6px] text-black">
            CONTACT
          </h2>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="mx-auto mt-8 max-w-3xl text-center">

        <p className="text-[16px] leading-relaxed text-[#1B1B1B]">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
          sem varius finibus. Sed ornare sit amet lorem sed viverra.
          In vel urna quis libero viverra facilisis ut ac est.
        </p>

      </div>

      {/* FORM */}
      <form className="mx-auto mt-12 max-w-3xl">

        {/* NAME */}
        <div className="border-l-[4px] border-b-[4px] border-black px-5 py-3">

          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="
              w-full
              bg-transparent
              text-[16px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* EMAIL */}
        <div className="mt-7 border-l-[4px] border-b-[4px] border-black px-5 py-3">

          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
            className="
              w-full
              bg-transparent
              text-[16px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* PHONE */}
        <div className="mt-7 border-l-[4px] border-b-[4px] border-black px-5 py-3">

          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="
              w-full
              bg-transparent
              text-[16px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* MESSAGE */}
        <div className="mt-7 border-l-[4px] border-b-[4px] border-black px-5 py-3">

          <textarea
            rows="4"
            placeholder="YOUR MESSAGE*"
            className="
              w-full
              resize-none
              bg-transparent
              text-[16px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* BUTTON */}
        <div className="mt-10 flex justify-center">

          <button
            className="
              border-l-[4px]
              border-r-[4px]
              border-black
              px-12
              py-2
              text-[18px]
              font-bold
              tracking-[4px]
              text-black
              transition
              hover:bg-black
              hover:text-white
            "
          >
            SUBMIT
          </button>

        </div>

      </form>

    </section>
  )
}

export default Contact
