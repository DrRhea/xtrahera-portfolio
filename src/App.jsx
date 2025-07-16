import React from 'react'
import Navbar from './sections/Navbar'
import { Helmet } from 'react-helmet-async'
import Hero from './sections/Hero'

const App = () => {
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
      
      <div className='relative w-screen min-h-screen overflow-x-auto'>
        <Navbar />
        <Hero/>
      </div>
    </>
  )
}

export default App