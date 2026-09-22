'use client'

import Image from 'next/image'
import { useCurrency } from './CurrencyContext'

export interface MenuCardProps {
  name: string
  description: string
  price: string
  imageUrl: string
  imageAlt: string
}

export default function MenuCard({
  name,
  description,
  price,
  imageUrl,
  imageAlt,
}: MenuCardProps) {
  const { openOrderModal } = useCurrency()

  return (
    <div className="flex flex-col h-full rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={400}
        height={225}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="p-4 bg-cream rounded-b-lg border border-stone-200 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-smoke font-bold text-lg font-sans">{name}</h3>
            <span className="text-flame font-semibold text-lg shrink-0 font-sans">{price}</span>
          </div>
          <p className="text-stone-600 text-sm mt-1 font-sans">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => openOrderModal(name)}
          className="mt-3 w-full border border-flame text-flame hover:bg-flame hover:text-white py-2 rounded-md text-sm font-medium transition-colors active:scale-[0.97]"
        >
          Add to order
        </button>
      </div>
    </div>
  )
}
