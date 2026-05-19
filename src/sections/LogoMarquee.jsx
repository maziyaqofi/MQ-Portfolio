import udinusLogo from "../assets/Udinuslogo.png"
import samsungLogo from "../assets/samsung.svg"
import kitakerjaLogo from "../assets/kitakerja.png"
import dusanLogo from "../assets/dusan.png"

function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden bg-[#E42278] py-8">

      <div className="marquee">

        <div className="marquee__content">

        {/* FIRST */}
        <div className="flex gap-24">

            <img
            src={udinusLogo}
            alt="Udinus"
            className="h-16 object-contain"
            />

            <img 
            src={samsungLogo}
            alt="Samsung"
            className="h-10 object-contain"
            />

            <img 
            src={kitakerjaLogo}
            alt="Kita Kerja"
            className="h-15 object-contain"
            />

            <img 
            src={dusanLogo}
            alt="Duta Santri"
            className="h-15 object-contain"
            />
            
            <h3>GUNUNGKU</h3>

        </div>

        {/* DUPLICATE */}
        <div className="flex gap-24">

            <img
            src={udinusLogo}
            alt="Udinus"
            className="h-16 object-contain"
            />

            <img 
            src={samsungLogo}
            alt="Samsung"
            className="h-10 object-contain"
            />

            <img 
            src={kitakerjaLogo}
            alt="Kita Kerja"
            className="h-15 object-contain"
            />

            <img 
            src={dusanLogo}
            alt="Duta Santri"
            className="h-15 object-contain"
            />

            <h3>GUNUNGKU</h3>

        </div>

        </div>

      </div>

    </section>
  )
}

export default LogoMarquee