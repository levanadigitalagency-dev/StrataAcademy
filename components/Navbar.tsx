'use client'

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from "@/public/logo.png"
import CustomLink from './CustomLink'

const navLinks = [
  { name: 'Beranda', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Cohort Class', href: '#cohort' },
  { name: 'Kelas Privat', href: '#private' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const { scrollY } = useScroll()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!isMobile) {
      setIsScrolled(latest > 0)
    }
  })

  const isPill = isMobile || isScrolled

  return (
    <motion.nav
      layout
      animate={{
        borderRadius: isPill ? '50px' : '0px',
        top: isPill ? '1rem' : '0rem',
        height: isOpen ? 'auto' : '4rem',
        backgroundColor: (isPill || isOpen) ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0)",
        borderColor: (isPill || isOpen) ? "rgb(255, 255, 255)" : "rgba(255, 255, 255, 0)",
        boxShadow: (isPill || isOpen) ? "0px 2px 2px rgba(0,0,0,0.2) " : "0px 0px 0px rgba(0,0,0,0)"
      }}
      initial={{ width: '100%', top: '0rem' }}
      transition={{
        type: 'tween',
        stiffness: 260,
        damping: 20,
      }}
      className={`
        fixed left-1/2 z-50 overflow-hidden
        backdrop-blur-lg border border-transparent
        ${isPill ? 'shadow-sm' : ''}
      `}
      style={{
        maxWidth: '90.6%',
        x: "-50%",
      }}
    >
      <motion.div
        layout
        animate={{
          padding: isPill ? '35px' : '0px',
        }}
        className="flex h-16 items-center justify-between w-full">

        {/* Logo */}
        <Link href="#home" className="shrink-0 relative w-25 h-12.5">
          <Image
            src={logo}
            alt='Logo'
            fill
            sizes="100px"
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-teal-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <CustomLink
            className='px-10'
            href='https://strataacademy.id/register'
            variant='primary'
            size='md'>Daftar
          </CustomLink>

          <CustomLink
            className='px-10'
            href='https://strataacademy.id/login'
            variant='secondary'
            size='md'>Masuk
          </CustomLink>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* --- MOBILE MENU CONTENT --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col px-6 pb-6 pt-2"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-gray-800 border-t pt-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-teal-600 hover:pl-2 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 flex gap-3 w-full">
              <div className="w-full">
                <CustomLink
                  className='w-full justify-center'
                  href='https://strataacademy.id/register'
                  variant='primary'
                  size='md'>Daftar
                </CustomLink>

              </div>
              <div className="w-full">
                <CustomLink
                  className='w-full justify-center'
                  href='https://strataacademy.id/login'
                  variant='secondary'
                  size='md'>Masuk
                </CustomLink>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
