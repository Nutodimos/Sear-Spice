import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="track" className="bg-smoke py-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left */}
        <Link href="/" className="font-display text-flame text-lg tracking-tight">
          Sear &amp; Spice
        </Link>

        {/* Center */}
        <div className="flex items-center gap-6 text-ash/60 text-sm font-sans">
          <Link href="#menu" className="hover:text-ash transition-colors">
            Menu
          </Link>
          <Link href="#about" className="hover:text-ash transition-colors">
            About
          </Link>
          <Link href="#track" className="hover:text-ash transition-colors">
            Track Order
          </Link>
        </div>

        {/* Right */}
        <div className="text-ash/60 text-sm font-sans">
          &copy; 2025 Sear &amp; Spice. Lagos, Nigeria &amp; International Hubs.
        </div>
      </div>
    </footer>
  )
}
