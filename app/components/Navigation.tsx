"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const linkStyles = (path: string) => clsx(
    "px-3 py-2 text-sm font-medium",
    isActive(path) 
      ? "text-green-700 border-b-2 border-green-700" 
      : "text-gray-700 hover:text-green-700"
  );

  const mobileLinkStyles = (path: string) => clsx(
    "block px-3 py-2 text-base font-medium",
    isActive(path)
      ? "text-green-700 bg-green-50"
      : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3 py-2">
              <Image 
                src="/logo.jpg" 
                alt="Köhler Tej Logo" 
                width={64} 
                height={64}
                className="rounded object-cover"
              />
              <span className="text-2xl font-bold text-black-700">Köhler Tej</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={linkStyles('/')}>
              Home
            </Link>
            <Link href="/products" className={linkStyles('/products')}>
              Products
            </Link>
            <Link href="/about" className={linkStyles('/about')}>
              About Us
            </Link>
            <Link href="/contact" className={linkStyles('/contact')}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className={mobileLinkStyles('/')} onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" className={mobileLinkStyles('/products')} onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link href="/about" className={mobileLinkStyles('/about')} onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className={mobileLinkStyles('/contact')} onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
