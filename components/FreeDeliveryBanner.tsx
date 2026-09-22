'use client'

import { useCurrency } from './CurrencyContext'

export default function FreeDeliveryBanner() {
  const { openOrderModal } = useCurrency()

  return (
    <section className="bg-flame w-full py-14 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          First order? Free delivery.
        </h2>
        <p className="text-white/80 mt-2 text-lg font-sans">
          No code needed. Just order.
        </p>
        <button
          type="button"
          onClick={() => openOrderModal()}
          className="bg-white text-flame hover:bg-ash px-8 py-3 rounded-md font-medium mt-6 inline-block transition-colors active:scale-[0.97]"
        >
          Start your order
        </button>
      </div>
    </section>
  )
}
