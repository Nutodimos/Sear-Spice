import { IconFlame, IconClock, IconPepper } from '@tabler/icons-react'

export default function TrustBar() {
  return (
    <section className="bg-smoke border-y border-white/10 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-6">
        <div className="flex items-center gap-3">
          <IconFlame className="text-flame shrink-0" size={24} />
          <span className="text-ash text-sm font-sans">Char-grilled daily, never frozen</span>
        </div>

        <div className="flex items-center gap-3">
          <IconClock className="text-flame shrink-0" size={24} />
          <span className="text-ash text-sm font-sans">35-min delivery or your next order&apos;s free</span>
        </div>

        <div className="flex items-center gap-3">
          <IconPepper className="text-flame shrink-0" size={24} />
          <span className="text-ash text-sm font-sans">Mild to fire — you choose the heat</span>
        </div>
      </div>
    </section>
  )
}
