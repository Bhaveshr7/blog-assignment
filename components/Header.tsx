import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold">Posts Blog</Link>

        <nav className="space-x-4">
          <Link href="/about" className="text-sm hover:text-pink-600">About</Link>
          <Link href="/service" className="text-sm hover:text-pink-600">Service</Link>
          <Link href="/contact" className="text-sm hover:text-pink-600">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
