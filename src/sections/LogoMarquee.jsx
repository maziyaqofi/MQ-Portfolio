import udinusLogo from "../assets/Udinuslogo.png"
import samsungLogo from "../assets/samsung.svg"
import kitakerjaLogo from "../assets/kitakerja.png"
import dusanLogo from "../assets/dusan.png"

const partners = [
  { name: "Udinus", logo: udinusLogo, className: "h-8" },
  { name: "Samsung", logo: samsungLogo, className: "h-5" },
  { name: "Kita Kerja", logo: kitakerjaLogo, className: "h-8" },
  { name: "Duta Santri", logo: dusanLogo, className: "h-8" },
]

function PartnerGroup({ hidden = false }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12"
      aria-hidden={hidden || undefined}
    >
      {partners.map((partner) => (
        <img
          key={partner.name}
          src={partner.logo}
          alt={hidden ? "" : partner.name}
          className={`${partner.className} object-contain`}
        />
      ))}
      <h3>GUNUNGKU</h3>
    </div>
  )
}

function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden bg-[#E42278] py-4">
      <div className="marquee">
        <div className="marquee__content">
          <PartnerGroup />
          <PartnerGroup />
          <PartnerGroup />
          <PartnerGroup />
          <PartnerGroup hidden />
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
