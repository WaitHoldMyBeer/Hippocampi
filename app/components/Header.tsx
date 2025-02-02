import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Hippocampi
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-600 hover:text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Button asChild variant="outline">
            <Link href="/client-portal">Client Portal</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

