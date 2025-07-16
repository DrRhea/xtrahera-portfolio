import React, { useRef, useState } from 'react'
import { socials } from '../contants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const navRef = useRef(null)
  const linksRef = useRef([])
  const contactRef = useRef(null)
  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const tl = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100});
    gsap.set([linksRef.current, contactRef.current], { 
      autoAlpha: 0,
      x: -20, 
    });

    tl.current = gsap.timeline({ paused: true }).to(navRef.current, {
      xPercent: 0,
      duration: 1,
      ease: 'power3.out',
    })
    .to(linksRef.current, {
      autoAlpha: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
    }, '<')
    .to(contactRef.current, {
      autoAlpha: 1,
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    }, '<+0.2')
  })

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse()
    } else {
      tl.current.play()
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav 
      ref={navRef}
      className='fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2'>
        <div className='flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl'>
          {['home', 'services', 'about', 'work', 'contact'].map(
            (section, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <a href="" className='transition-all duration-300 cursor-pointer hover:text-white'>{section}</a>
              </div>
            )
          )}
        </div>
        
        <div ref={contactRef} className='flex flex-col justify-between gap-8 md:flex-row'>
          <div className='font-light space-y-4'>
            <div>
              <p className='tracking-widest text-white/50'>Email</p>
              <a href="mailto:hello@amiamie.com" className='text-xl tracking-widest lowercase text-pretty'>hello@xtrahera.com</a>
            </div>
            <div>
              <p className='tracking-widest text-white/50'>Phone</p>
              <a href="tel:+6285282725798" className='text-xl tracking-widest lowercase text-pretty'>+6285282725798</a>
            </div>
          </div>
          <div className='font-light'>
            <p className='tracking-widest text-white/50'>Social Media</p>
            <div className='flex flex-col flex-wrap md:flex-row gap-x-2'>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target='_blank' rel='noopener noreferrer' className='text-xm tracking-widest uppercase text-pretty leading-loose hover:text-white transition-colors duration-300 cursor-pointer'>
                  {'{ '}
                  {social.name}
                  {' }'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <button className='fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer bg-black rounded-full w-14 h-14 top-4 right-10' onClick={toggleMenu}>
              <span 
              ref={topLineRef}
              className='block w-8 h-0.5 bg-white rounded-full origin-center'>
              </span>
              <span 
              ref={bottomLineRef}
              className='block w-8 h-0.5 bg-white rounded-full origin-center'>
              </span>
      </button>
    </>
  )
}

export default Navbar