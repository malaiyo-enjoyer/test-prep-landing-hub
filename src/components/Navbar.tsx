
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-navy font-bold text-xl md:text-2xl">
            Academi<span className="text-gold-dark">Test</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-navy hover:text-navy-light transition-colors font-medium">
            Home
          </Link>
          <a href="#services" className="text-navy hover:text-navy-light transition-colors font-medium">
            Services
          </a>
          <a href="#features" className="text-navy hover:text-navy-light transition-colors font-medium">
            Features
          </a>
          <a href="#testimonials" className="text-navy hover:text-navy-light transition-colors font-medium">
            Testimonials
          </a>
          <Link to="/contact" className="text-navy hover:text-navy-light transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-navy hover:bg-navy-light text-white">
            Partner With Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#services"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#features"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Link
              to="/contact"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-navy hover:bg-navy-light text-white w-full">
              Partner With Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
