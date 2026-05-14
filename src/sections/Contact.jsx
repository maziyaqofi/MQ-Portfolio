function Contact() {
  return (
    <section
      id="contact"
      className="
        w-full
        px-10
        lg:px-28
        py-32
      "
      style={{
        background:
          "radial-gradient(circle, #F9F9F9 0%, #F5D3DC 100%)",
      }}
    >

      {/* TITLE */}
      <div className="flex justify-center">

        <div className="border-[6px] border-black px-16 py-5">

          <h2 className="text-[36px] font-bold tracking-[10px] text-black">
            CONTACT
          </h2>

        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="mx-auto mt-16 max-w-4xl text-center">

        <p className="text-[22px] leading-relaxed text-[#1B1B1B]">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel
          sem varius finibus. Sed ornare sit amet lorem sed viverra.
          In vel urna quis libero viverra facilisis ut ac est.
        </p>

      </div>

      {/* FORM */}
      <form className="mx-auto mt-32 max-w-4xl">

        {/* NAME */}
        <div className="border-l-[5px] border-b-[5px] border-black px-6 py-4">

          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="
              w-full
              bg-transparent
              text-[22px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* EMAIL */}
        <div className="mt-16 border-l-[5px] border-b-[5px] border-black px-6 py-4">

          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
            className="
              w-full
              bg-transparent
              text-[22px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* PHONE */}
        <div className="mt-16 border-l-[5px] border-b-[5px] border-black px-6 py-4">

          <input
            type="text"
            placeholder="PHONE NUMBER"
            className="
              w-full
              bg-transparent
              text-[22px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* MESSAGE */}
        <div className="mt-16 border-l-[5px] border-b-[5px] border-black px-6 py-6">

          <textarea
            rows="6"
            placeholder="YOUR MESSAGE*"
            className="
              w-full
              resize-none
              bg-transparent
              text-[22px]
              font-semibold
              tracking-[2px]
              text-gray-500
              outline-none
              placeholder:text-gray-500
            "
          />

        </div>

        {/* BUTTON */}
        <div className="mt-24 flex justify-center">

          <button
            className="
              border-l-[4px]
              border-r-[4px]
              border-black
              px-16
              py-3
              text-[24px]
              font-bold
              tracking-[6px]
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