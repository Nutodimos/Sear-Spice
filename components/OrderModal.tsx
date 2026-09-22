'use client'

import { useState } from 'react'
import { useCurrency, HUBS, CityHub } from './CurrencyContext'

export default function OrderModal() {
  const {
    isOrderModalOpen,
    closeOrderModal,
    activeHub,
    setActiveHub,
    selectedItemForOrder,
  } = useCurrency()

  const [spiceLevel, setSpiceLevel] = useState<'Mild' | 'Medium' | 'Fire'>('Medium')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  if (!isOrderModalOpen) return null

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setOrderPlaced(true)
    setTimeout(() => {
      setOrderPlaced(false)
      closeOrderModal()
    }, 2400)
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={closeOrderModal}
    >
      <div
        className="bg-smoke text-ash border border-white/10 rounded-xl max-w-lg w-full p-6 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeOrderModal}
          className="absolute top-4 right-4 text-ash/60 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close order dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {orderPlaced ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 bg-flame/20 text-flame rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white font-sans">
              Grill Order Fired Up!
            </h3>
            <p className="text-sm text-ash/80 max-w-sm mx-auto font-sans">
              Your order is hitting live coals now. Guaranteed hot delivery to your door in 35 minutes.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-flame font-semibold text-xs uppercase tracking-wider font-sans">
                Express Delivery Dispatch
              </span>
              <h3 className="text-2xl font-bold text-white font-sans mt-1">
                {selectedItemForOrder ? `Order ${selectedItemForOrder}` : 'Quick Express Grill Order'}
              </h3>
              <p className="text-sm text-ash/70 mt-1 font-sans">
                Real charcoal grilling. Cooked fresh, delivered hot.
              </p>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4 font-sans">
              {/* Kitchen Hub Selection */}
              <div>
                <label className="block text-xs uppercase font-semibold text-ash/60 tracking-wider mb-2">
                  Delivery Kitchen Hub
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {HUBS.map((hub: CityHub) => (
                    <button
                      key={hub.city}
                      type="button"
                      onClick={() => setActiveHub(hub)}
                      className={`flex items-center justify-between p-2 rounded-lg border text-xs transition-colors ${
                        activeHub.city === hub.city
                          ? 'border-flame bg-flame/15 text-white font-medium'
                          : 'border-white/10 bg-white/5 text-ash hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{hub.flag}</span>
                        <span>{hub.city}</span>
                      </span>
                      <span className="text-ash/60 font-mono text-[11px]">{hub.currency}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Spice Level */}
              <div>
                <label className="block text-xs uppercase font-semibold text-ash/60 tracking-wider mb-2">
                  Spice Heat Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Mild', 'Medium', 'Fire'] as const).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSpiceLevel(level)}
                      className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                        spiceLevel === level
                          ? 'border-flame bg-flame text-white'
                          : 'border-white/10 bg-white/5 text-ash hover:bg-white/10'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label htmlFor="address" className="block text-xs uppercase font-semibold text-ash/60 tracking-wider mb-1">
                  Delivery Address in {activeHub.city}
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={`Enter your street address in ${activeHub.city}`}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-ash/30 focus:outline-none focus:border-flame transition-colors"
                />
              </div>

              {/* Contact Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs uppercase font-semibold text-ash/60 tracking-wider mb-1">
                  Contact Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="e.g. +234 800 000 0000 or local number"
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-sm text-white placeholder:text-ash/30 focus:outline-none focus:border-flame transition-colors"
                />
              </div>

              {/* Delivery Guarantee Info */}
              <div className="rounded-lg bg-white/5 p-3 flex items-center justify-between text-xs border border-white/5">
                <span className="text-ash/70">Estimated arrival time:</span>
                <span className="font-semibold text-flame">{activeHub.deliveryTime}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-flame hover:bg-ember text-white py-3 rounded-lg font-medium text-sm transition-colors active:scale-[0.97]"
              >
                Confirm Order &bull; Free Delivery
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
