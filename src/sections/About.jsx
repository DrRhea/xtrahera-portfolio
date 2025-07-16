import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Xtrahera adalah agency software development yang berfokus pada solusi digital inovatif dan berkualitas tinggi. Kami membangun website, aplikasi mobile, dan desain UI/UX yang membantu bisnis bertumbuh dan beradaptasi di era digital.`;
  const aboutText = `Kami adalah tim profesional yang berpengalaman dalam pengembangan web, mobile, dan desain antarmuka. Setiap project kami kerjakan dengan pendekatan kolaboratif, transparan, dan berorientasi hasil.\n\nMengapa memilih Xtrahera?\n1. Kolaborasi erat dengan klien di setiap tahap\n2. Desain modern, fungsional, dan user-centric\n3. Kode bersih, scalable, dan mudah di-maintain\n4. Komitmen pada kualitas, deadline, dan support\n\nBersama Xtrahera, wujudkan transformasi digital bisnis Anda dengan solusi yang tepat guna dan berdampak.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Solusi Digital, Kolaborasi Tanpa Batas"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/safira.png"
          alt="Tim Xtrahera"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;