
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavLinkClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If already on homepage, scroll to section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on homepage, navigate to homepage with section hash
      navigate(`/#${sectionId}`);
    }
  };

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
            Entrance<span className="text-gold-dark">vault</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-navy hover:text-navy-light transition-colors font-medium">
            Home
          </Link>
          <button 
            onClick={() => handleNavLinkClick("services")} 
            className="text-navy hover:text-navy-light transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavLinkClick("features")} 
            className="text-navy hover:text-navy-light transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => handleNavLinkClick("testimonials")} 
            className="text-navy hover:text-navy-light transition-colors font-medium bg-transparent border-none cursor-pointer"
          >
            Testimonials
          </button>
          <Link to="/contact" className="text-navy hover:text-navy-light transition-colors font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-navy hover:bg-navy-light text-white">
            <Link to="/contact">Partner With Us</Link>
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
            <button
              onClick={() => handleNavLinkClick("services")}
              className="text-navy hover:text-navy-light transition-colors font-medium py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleNavLinkClick("features")}
              className="text-navy hover:text-navy-light transition-colors font-medium py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleNavLinkClick("testimonials")}
              className="text-navy hover:text-navy-light transition-colors font-medium py-2 text-left bg-transparent border-none cursor-pointer"
            >
              Testimonials
            </button>
            <Link
              to="/contact"
              className="text-navy hover:text-navy-light transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-navy hover:bg-navy-light text-white w-full">
              <Link to="/contact">Partner With Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
