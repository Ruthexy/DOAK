import React, { useState, useEffect } from "react";
import logo from "../assets/logo doak w bg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="Doak Logo"
              className="h-10 w-auto object-contain"
            />
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Doak
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-medium transition-colors hover:text-red-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-700 font-medium hover:text-red-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
