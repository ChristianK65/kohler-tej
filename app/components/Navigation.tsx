"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navItems = [
  { id: "home", label: "Otthon" },
  { id: "products", label: "Termékek" },
  { id: "about", label: "Rólunk" },
  { id: "contact", label: "Kapcsolat" },
] as const;

type SectionId = (typeof navItems)[number]["id"];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as SectionId);
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

  const scrollToSection = (sectionId: SectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (section: SectionId) => activeSection === section;

  const desktopLinkStyles = (section: SectionId) => clsx(
    "px-3 py-2 text-sm font-medium cursor-pointer",
    isActive(section) 
      ? "text-amber-400 border-b-2 border-amber-400" 
      : "text-zinc-300 hover:text-amber-300"
  );

  const mobileLinkStyles = (section: SectionId) => clsx(
    "block px-3 py-2 text-base font-medium cursor-pointer",
    isActive(section)
      ? "text-amber-400 bg-zinc-900"
      : "text-zinc-300 hover:text-amber-300 hover:bg-zinc-900"
  );

  const renderNavLinks = (isMobile = false) =>
    navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={isMobile ? mobileLinkStyles(item.id) : desktopLinkStyles(item.id)}
        aria-current={isActive(item.id) ? "page" : undefined}
      >
        {item.label}
      </button>
    ));

  return (
    <nav className="bg-zinc-900/95 border-b border-zinc-700 shadow-md backdrop-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <button onClick={() => scrollToSection("home")} className="flex-shrink-0 flex items-center space-x-3 py-2">
              <Image 
                src="/logo-white.png" 
                alt="Köhler Tej Logo" 
                width={64} 
                height={64}
                priority
                className="rounded object-cover"
              />
              <span className="text-2xl font-bold text-zinc-100">Köhler Tej</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {renderNavLinks()}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-amber-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
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
        <div id="mobile-menu" className="md:hidden bg-zinc-900 border-t border-zinc-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {renderNavLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
}
