import { FaExternalLinkAlt, FaTiktok, FaYoutube } from "react-icons/fa"

const documentationImages = Object.entries(
  import.meta.glob("../assets/Documentation*.{jpeg,jpg,png,webp}", {
    eager: true,
    import: "default",
    query: "?url",
  })
)
  .map(([path, src]) => {
    const number = Number(path.match(/Documentation(\d+)/)?.[1] ?? 0)

    return {
      number,
      src,
      title: `Documentation ${number}`,
    }
  })
  .sort((a, b) => a.number - b.number)

const videoLinks = [
  {
    title: "YouTube Documentation",
    platform: "YouTube",
    href: "https://www.youtube.com/@maziyadoc/videos",
    icon: <FaYoutube />,
    description:
      "Video documentation, project stories, and activity records from my YouTube channel.",
  },
  {
    title: "TikTok Short Documentation",
    platform: "TikTok",
    href: "https://www.tiktok.com/@maziyadoc",
    icon: <FaTiktok />,
    description:
      "Short-form documentation and behind-the-scenes project moments from my TikTok account.",
  },
]

function DocumentationPage() {
  return (
    <main className="min-h-screen bg-[#0D111A] text-white">
      <section className="px-10 py-24 lg:px-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="border-4 border-pink-400 px-10 py-3">
              <h1 className="text-[28px] font-bold tracking-[6px]">
                DOKUMENTASI
              </h1>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {videoLinks.map((video) => (
              <a
                key={video.platform}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl bg-[#161B22] p-8 transition hover:-translate-y-1 hover:bg-[#1d2430]"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[34px] text-pink-400">
                      {video.icon}
                    </span>
                    <div>
                      <p className="text-[13px] font-bold uppercase tracking-[4px] text-pink-300">
                        {video.platform}
                      </p>
                      <h2 className="mt-2 text-[22px] font-bold">
                        {video.title}
                      </h2>
                    </div>
                  </div>

                  <FaExternalLinkAlt className="text-pink-300 transition group-hover:text-white" />
                </div>

                <p className="mt-6 text-[16px] leading-relaxed text-gray-300">
                  {video.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentationImages.map((image) => (
              <a
                key={image.title}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-3xl bg-[#161B22]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-[#222936]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default DocumentationPage
