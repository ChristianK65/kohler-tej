"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (section: string) => {
    return activeSection === section;
  };

  const linkStyles = (section: string) => clsx(
    "px-3 py-2 text-sm font-medium cursor-pointer",
    isActive(section) 
      ? "text-green-700 border-b-2 border-green-700" 
      : "text-gray-700 hover:text-green-700"
  );

  const mobileLinkStyles = (section: string) => clsx(
    "block px-3 py-2 text-base font-medium cursor-pointer",
    isActive(section)
      ? "text-green-700 bg-green-50"
      : "text-gray-700 hover:text-green-700 hover:bg-gray-50"
  );

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <button onClick={() => scrollToSection("home")} className="flex-shrink-0 flex items-center space-x-3 py-2">
              <Image 
                src="/logo.jpg" 
                alt="Köhler Tej Logo" 
                width={64} 
                height={64}
                className="rounded object-cover"
              />
              <span className="text-2xl font-bold text-black-700">Köhler Tej</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className={linkStyles('home')}>
              Otthon
            </button>
            <button onClick={() => scrollToSection("products")} className={linkStyles('products')}>
              Termékek
            </button>
            <button onClick={() => scrollToSection("about")} className={linkStyles('about')}>
              Rólunk
            </button>
            <button onClick={() => scrollToSection("contact")} className={linkStyles('contact')}>
              Kapcsolat
            </button>
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
            <button onClick={() => scrollToSection("home")} className={mobileLinkStyles('home')}>
              Otthon
            </button>
            <button onClick={() => scrollToSection("products")} className={mobileLinkStyles('products')}>
              Termékek
            </button>
            <button onClick={() => scrollToSection("about")} className={mobileLinkStyles('about')}>
              Rólunk
            </button>
            <button onClick={() => scrollToSection("contact")} className={mobileLinkStyles('contact')}>
              Kapcsolat
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
