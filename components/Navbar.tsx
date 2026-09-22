'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useCurrency } from './CurrencyContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { openOrderModal } = useCurrency()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = `${
    scrolled ? 'bg-smoke shadow-md' : 'bg-transparent'
  } fixed top-0 left-0 right-0 z-50 transition-colors duration-300`

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl text-flame tracking-tight">
          Sear &amp; Spice
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#menu" className="text-ash hover:text-white text-sm transition-colors">
            Menu
          </Link>
          <Link href="#about" className="text-ash hover:text-white text-sm transition-colors">
            About
          </Link>
          <Link href="#track" className="text-ash hover:text-white text-sm transition-colors">
            Track Order
          </Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => openOrderModal()}
            className="bg-flame hover:bg-ember text-white px-4 py-2 rounded-md text-sm font-medium transition-colors active:scale-[0.97]"
          >
            Order now
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-ash hover:text-white p-2 transition-colors focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-smoke/95 backdrop-blur-md border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ash hover:text-white text-base transition-colors"
            >
              Menu
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ash hover:text-white text-base transition-colors"
            >
              About
            </Link>
            <Link
              href="#track"
              onClick={() => setMobileMenuOpen(false)}
              className="text-ash hover:text-white text-base transition-colors"
            >
              Track Order
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
