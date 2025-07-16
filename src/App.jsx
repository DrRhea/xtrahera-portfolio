import React, { useEffect, useState } from 'react'
import Navbar from './sections/Navbar'
import { Helmet } from 'react-helmet-async'
import Hero from './sections/Hero'
import ServiceSummary from './sections/ServiceSummary'
import { useProgress } from '@react-three/drei'
import ReactLenis from "lenis/react";
import Services from './sections/Service'

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsReady(true);
    }
  }, [progress]);

  return (
    <>
      <Helmet>
        <title>Xtrahera Portfolio</title>
        <meta name="title" content="Xtrahera Portfolio" />
        <meta name="description" content="Selamat datang di portfolio Xtrahera. Temukan karya, layanan, dan informasi kontak kami di sini." />
        <meta name="keywords" content="Xtrahera, portfolio, web developer, desain, jasa, kontak, karya" />
        <meta name="author" content="Xtrahera" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://xtrahera.com/" />
        <meta property="og:title" content="Xtrahera Portfolio" />
        <meta property="og:description" content="Selamat datang di portfolio Xtrahera. Temukan karya, layanan, dan informasi kontak kami di sini." />
        <meta property="og:image" content="https://xtrahera.com/og-image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://xtrahera.com/" />
        <meta property="twitter:title" content="Xtrahera Portfolio" />
        <meta property="twitter:description" content="Selamat datang di portfolio Xtrahera. Temukan karya, layanan, dan informasi kontak kami di sini." />
        <meta property="twitter:image" content="https://xtrahera.com/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <ReactLenis root className="relative w-screen min-h-screen overflow-x-auto">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading {Math.floor(progress)}%
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <Navbar />
        <Hero/>
        <ServiceSummary />
        <Services />
        {/* <About />
        <Works />
        <ContactSummary />
        <Contact /> */}
      </div>
      </ReactLenis>
    </>
  )
}

export default App