'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export type CurrencyCode = 'NGN' | 'USD' | 'GBP' | 'EUR'

export interface CityHub {
  city: string
  country: string
  flag: string
  currency: CurrencyCode
  deliveryTime: string
}

export const HUBS: CityHub[] = [
  { city: 'Lagos', country: 'Nigeria', flag: '🇳🇬', currency: 'NGN', deliveryTime: '35 mins' },
  { city: 'London', country: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', deliveryTime: '35 mins' },
  { city: 'New York', country: 'United States', flag: '🇺🇸', currency: 'USD', deliveryTime: '40 mins' },
  { city: 'Paris', country: 'France', flag: '🇪🇺', currency: 'EUR', deliveryTime: '35 mins' },
]

export const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
  EUR: '€',
}

interface CurrencyContextType {
  currency: CurrencyCode
  setCurrency: (code: CurrencyCode) => void
  activeHub: CityHub
  setActiveHub: (hub: CityHub) => void
  formatPrice: (baseNgn: number) => string
  isOrderModalOpen: boolean
  openOrderModal: (itemName?: string) => void
  closeOrderModal: () => void
  selectedItemForOrder: string | null
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

const CURRENCY_PRICES: Record<number, Record<CurrencyCode, string>> = {
  3500: { NGN: '₦3,500', USD: '$4.50', GBP: '£3.50', EUR: '€4.20' },
  4200: { NGN: '₦4,200', USD: '$5.50', GBP: '£4.20', EUR: '€5.00' },
  5800: { NGN: '₦5,800', USD: '$7.50', GBP: '£5.80', EUR: '€7.00' },
  3200: { NGN: '₦3,200', USD: '$4.00', GBP: '£3.20', EUR: '€3.80' },
  3800: { NGN: '₦3,800', USD: '$5.00', GBP: '£3.80', EUR: '€4.50' },
  8500: { NGN: '₦8,500', USD: '$11.00', GBP: '£8.50', EUR: '€10.20' },
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('NGN')
  const [activeHub, setActiveHub] = useState<CityHub>(HUBS[0])
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<string | null>(null)

  const setCurrency = (code: CurrencyCode) => {
    setCurrencyState(code)
    const matchingHub = HUBS.find((h) => h.currency === code)
    if (matchingHub) {
      setActiveHub(matchingHub)
    }
  }

  const handleSetActiveHub = (hub: CityHub) => {
    setActiveHub(hub)
    setCurrencyState(hub.currency)
  }

  const formatPrice = (baseNgn: number): string => {
    if (CURRENCY_PRICES[baseNgn] && CURRENCY_PRICES[baseNgn][currency]) {
      return CURRENCY_PRICES[baseNgn][currency]
    }
    return `₦${baseNgn.toLocaleString()}`
  }

  const openOrderModal = (itemName?: string) => {
    setSelectedItemForOrder(itemName || null)
    setIsOrderModalOpen(true)
  }

  const closeOrderModal = () => {
    setIsOrderModalOpen(false)
    setSelectedItemForOrder(null)
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        activeHub,
        setActiveHub: handleSetActiveHub,
        formatPrice,
        isOrderModalOpen,
        openOrderModal,
        closeOrderModal,
        selectedItemForOrder,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
