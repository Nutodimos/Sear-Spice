'use client'

import MenuCard from './MenuCard'
import { useCurrency, CurrencyCode } from './CurrencyContext'

const menuItemsData = [
  {
    name: 'Suya platter',
    description: 'Skewered, spiced beef — the Lagos classic.',
    basePrice: 3500,
    imageUrl: '/images/suya-platter.jpg',
    imageAlt: 'Authentic spiced beef suya platter with sliced onions and peppers',
  },
  {
    name: 'Pepper chicken',
    description: 'Halved, marinated, grilled over live charcoal.',
    basePrice: 4200,
    imageUrl: '/images/pepper-chicken.jpg',
    imageAlt: 'Halved marinated pepper chicken grilled over live charcoal',
  },
  {
    name: 'Grilled tilapia',
    description: 'Whole fish, pepper crust, side of peppered sauce.',
    basePrice: 5800,
    imageUrl: '/images/grilled-tilapia.jpg',
    imageAlt: 'Whole grilled tilapia with pepper crust and peppered sauce',
  },
  {
    name: 'Beef skewers',
    description: 'Six cuts, two marinades — pick your heat level.',
    basePrice: 3200,
    imageUrl: '/images/beef-skewers.jpg',
    imageAlt: 'Six spiced beef skewers on a platter with dipping sauces',
  },
  {
    name: 'Smoky wings',
    description: 'Slow-grilled, finished hot. Crisp skin guaranteed.',
    basePrice: 3800,
    imageUrl: '/images/smoky-wings.jpg',
    imageAlt: 'Slow-grilled smoky chicken wings with crispy skin and dip',
  },
  {
    name: 'Mixed grill combo',
    description: 'Best of the menu — serves two comfortably.',
    basePrice: 8500,
    imageUrl: '/images/mixed-grill.jpg',
    imageAlt: 'Mixed grill combo platter with ribs, skewers, and sides for two',
  },
]

export default function MenuSection() {
  const { currency, setCurrency, formatPrice } = useCurrency()

  const currencies: CurrencyCode[] = ['NGN', 'USD', 'GBP', 'EUR']

  return (
    <section id="menu" className="py-24 px-6 bg-[#fcf8f6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-4xl font-bold text-smoke">
              What&apos;s on the grill
            </h2>
          </div>

          {/* International Currency Switcher */}
          <div className="flex items-center gap-2 bg-stone-200/70 p-1 rounded-lg self-start md:self-auto">
            {currencies.map((curr) => (
              <button
                key={curr}
                type="button"
                onClick={() => setCurrency(curr)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  currency === curr
                    ? 'bg-smoke text-white shadow-sm'
                    : 'text-stone-700 hover:text-smoke'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItemsData.map((item) => (
            <MenuCard
              key={item.name}
              name={item.name}
              description={item.description}
              price={formatPrice(item.basePrice)}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
