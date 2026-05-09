'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">PG</span>
            </div>
            <span className="text-xl font-semibold text-black hidden sm:inline">
              Peaceful PlayGate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-black hover:text-sage transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-sage transition font-medium"
            >
              About
            </Link>
            <Link
              href="/shop"
              className="text-black hover:text-sage transition font-medium"
            >
              Shop
            </Link>
            <Link
              href="/orders"
              className="text-black hover:text-sage transition font-medium"
            >
              Track Order
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-black transition transform ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-black transition transform ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-4">
            <Link href="/" className="block text-black hover:text-sage font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-black hover:text-sage font-medium">
              About
            </Link>
            <Link href="/shop" className="block text-black hover:text-sage font-medium">
              Shop
            </Link>
            <Link href="/orders" className="block text-black hover:text-sage font-medium">
              Track Order
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
