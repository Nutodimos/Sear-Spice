'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCurrency } from './CurrencyContext'

export default function Hero() {
  const { openOrderModal } = useCurrency()

  return (
    <section className="relative min-h-screen flex items-center bg-smoke overflow-hidden">
      {/* Layer 1 — background image */}
      <Image
        src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600"
        alt="Mixed grill on charcoal"
        fill
        className="object-cover object-center opacity-40"
        priority
      />

      {/* Layer 2 — gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-smoke via-smoke/85 to-smoke/20" />

      {/* Layer 3 — text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-tight">
          <span className="block">Flame-grilled.</span>
          <span className="block">At your door in 35.</span>
        </h1>
        <p className="text-ash text-lg md:text-xl mt-6 max-w-md font-sans">
          Real charcoal. Real suya spice. From Lagos to wherever you are.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button
            type="button"
            onClick={() => openOrderModal()}
            className="bg-flame hover:bg-ember text-white px-6 py-3 rounded-md font-medium transition-colors active:scale-[0.97] text-center"
          >
            Order now
          </button>
          <Link
            href="#menu"
            className="border border-ash text-ash hover:bg-ash/10 px-6 py-3 rounded-md font-medium transition-colors active:scale-[0.97] text-center inline-block"
          >
            See the menu
          </Link>
        </div>
      </div>
    </section>
  )
}
