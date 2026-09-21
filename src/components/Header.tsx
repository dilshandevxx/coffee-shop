"use client";

import { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-950/95 backdrop-blur-sm text-coffee-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight">
          <Coffee className="w-6 h-6 text-coffee-300" />
          Brew Haven
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-coffee-200 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-coffee-500 hover:bg-coffee-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-coffee-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-coffee-900 border-t border-coffee-800">
          <nav className="flex flex-col px-4 py-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-coffee-100 py-2 font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-coffee-500 text-white text-center font-semibold py-2 rounded-full mt-2"
              onClick={() => setOpen(false)}
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
