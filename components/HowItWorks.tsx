import { IconShoppingBag, IconFlame, IconMotorbike } from '@tabler/icons-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: IconShoppingBag,
      title: 'Pick your grill',
      description: 'Browse the menu and choose your cut.',
    },
    {
      icon: IconFlame,
      title: 'We cook fresh',
      description: 'Grilled to order over real charcoal.',
    },
    {
      icon: IconMotorbike,
      title: 'Hot to your door',
      description: "Delivered hot within 35 minutes, or it's free.",
    },
  ]

  return (
    <section id="about" className="bg-cream py-20 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-smoke">
            From grill to door
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 relative max-w-5xl mx-auto">
          {/* Dashed connector (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(33%+1rem)] right-[calc(33%+1rem)] border-t-2 border-dashed border-stone-300 pointer-events-none" />

          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.title}
                className="flex-1 flex flex-col items-center text-center relative z-10 w-full"
              >
                <div className="w-16 h-16 rounded-full bg-smoke flex items-center justify-center text-flame mb-6 shadow-md">
                  <IconComponent size={30} stroke={1.75} />
                </div>
                <h3 className="text-smoke font-bold text-lg mb-2 font-sans">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm max-w-xs font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
