import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Inovasi",
    "Presisi",
    "Kepercayaan",
    "Kolaborasi",
    "Keunggulan",
  ];
  const items2 = [
    "Hubungi Kami",
    "Hubungi Kami",
    "Hubungi Kami",
    "Hubungi Kami",
    "Hubungi Kami",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=400 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-[60vh] gap-8 mt-16 mb-10 md:mb-24"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Mari bangun <br />
          <span className="font-normal">aplikasi web</span> yang <span className="italic">berkesan</span> &<br />
          <span className="text-gold">menginsipirasi</span> bersama Xtrahera “
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-black bg-transparent border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;