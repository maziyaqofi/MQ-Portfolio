import certificateKIM from "../assets/certificate-KIM.png"
import certificateDicoding from "../assets/certificate-dicoding.png"
import certificateHmdti from "../assets/certificate-hmdti.png"
import certificateYPI from "../assets/certificate-YPI.png"
import certificateWMK1 from "../assets/certificate-WMK1.png"
import certificateKitakerja from "../assets/certificate-kitakerja.png"
import certificateSIC from "../assets/certificate-SIC.png"
import certificateWMK2 from "../assets/certificate-WMK2.png"

const certificates = [
  {
    title: "KIM Certificate",
    type: "Course",
    year: "2026",
    image: certificateKIM,
    description:
      "Certificate from a learning or activity program that supports my growth in technology, collaboration, and digital skills.",
  },
  {
    title: "Dicoding Certificate",
    type: "Course",
    year: "2026",
    image: certificateDicoding,
    description:
      "Certificate from an online learning program focused on technology, programming fundamentals, and software development skills.",
  },
  {
    title: "HMDTI Certificate",
    type: "Activity",
    year: "2026",
    image: certificateHmdti,
    description:
      "Certificate from a campus or organization activity related to informatics, teamwork, and student development.",
  },
  {
    title: "YPI Certificate",
    type: "Competition",
    year: "2026",
    image: certificateYPI,
    description:
      "Certificate from a competition or program experience that helped develop creativity, discipline, and problem-solving.",
  },
  {
    title: "WMK Certificate 1",
    type: "Activity",
    year: "2026",
    image: certificateWMK1,
    description:
      "Certificate from an entrepreneurship or project-based activity involving ideation, teamwork, and product development.",
  },
  {
    title: "Kita Kerja Certificate",
    type: "Course",
    year: "2026",
    image: certificateKitakerja,
    description:
      "Certificate from a career or skills development program supporting readiness for professional opportunities.",
  },
  {
    title: "SIC Certificate",
    type: "Course",
    year: "2026",
    image: certificateSIC,
    description:
      "Certificate from a technology learning program that expands knowledge in software, innovation, and digital development.",
  },
  {
    title: "WMK Certificate 2",
    type: "Activity",
    year: "2026",
    image: certificateWMK2,
    description:
      "Additional certificate from WMK activities documenting participation, learning progress, and project experience.",
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

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex h-[220px] items-center justify-center overflow-hidden bg-[#F5D3DC]"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} preview`}
                    className="h-full w-full object-contain transition duration-300 hover:scale-105"
                  />
                </a>

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
