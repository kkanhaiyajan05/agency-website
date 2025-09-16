"use client";
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Nanosoft Technologies
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
        <Link
          href="/#contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Quote
        </Link>
      </nav>
    </header>
  );
}