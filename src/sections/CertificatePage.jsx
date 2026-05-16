const certificates = [
  {
    title: "Frontend Development Course",
    type: "Course",
    organizer: "Online Learning Platform",
    year: "2026",
    description:
      "Completed a learning program focused on HTML, CSS, JavaScript, responsive layout, and frontend development fundamentals.",
  },
  {
    title: "UI/UX Design Workshop",
    type: "Activity",
    organizer: "Campus / Community Event",
    year: "2026",
    description:
      "Participated in a design workshop covering user flow, wireframing, visual hierarchy, and interface presentation.",
  },
  {
    title: "Web Development Competition",
    type: "Competition",
    organizer: "Technology Competition",
    year: "2026",
    description:
      "Joined a web development competition and practiced building project ideas under requirements, time limits, and team collaboration.",
  },
  {
    title: "Technology Seminar",
    type: "Activity",
    organizer: "Informatics Event",
    year: "2025",
    description:
      "Attended a technology seminar to broaden knowledge about software development, digital products, and current technology trends.",
  },
]

function CertificatePage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] text-[#1B1B1B]">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="border-4 border-pink-500 px-10 py-3">
              <h1 className="text-[28px] font-bold tracking-[6px]">
                CERTIFICATE
              </h1>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center text-[18px] leading-relaxed">
            A collection of certificates and achievements from courses,
            competitions, workshops, seminars, and learning activities that
            support my growth in technology and design.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="bg-white p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[14px] font-bold uppercase tracking-[4px] text-pink-500">
                      {certificate.type}
                    </p>
                    <h2 className="mt-4 text-[24px] font-bold">
                      {certificate.title}
                    </h2>
                  </div>

                  <span className="border-l-2 border-r-2 border-pink-500 px-4 py-1 text-[14px] font-semibold text-pink-500">
                    {certificate.year}
                  </span>
                </div>

                <p className="mt-4 text-[16px] font-semibold text-[#e32277]">
                  {certificate.organizer}
                </p>

                <div className="mt-6 flex h-[180px] items-center justify-center bg-[#F5D3DC] text-center">
                  <p className="px-8 text-[14px] font-semibold uppercase tracking-[3px] text-[#0D111A]/60">
                    Certificate Preview
                  </p>
                </div>

                <p className="mt-6 text-[16px] leading-relaxed text-[#333333]">
                  {certificate.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CertificatePage
