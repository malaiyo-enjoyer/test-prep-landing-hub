
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const Footer = () => {
  const location = useLocation();

  const handleNavLinkClick = (sectionId: string) => {
    // If already on homepage, scroll to section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-navy-dark text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-white font-bold text-xl">
                Entrance<span className="text-gold">vault</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-300">
              Empowering educational institutions with comprehensive test series and analytics for JEE, NEET, and GATE exams.
            </p>
            <div className="flex items-center mt-4 text-gray-300">
              <Phone size={18} className="mr-2" />
              <a href="tel:+916387341428" className="hover:text-gold transition-colors">+91 6387341428</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavLinkClick("services");
                    }
                  }}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/#features" 
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavLinkClick("features");
                    }
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/#testimonials" 
                  className="text-gray-300 hover:text-gold transition-colors"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleNavLinkClick("testimonials");
                    }
                  }}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Exams We Cover</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">JEE Main & Advanced</li>
              <li className="text-gray-300">NEET</li>
              <li className="text-gray-300">GATE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Entrancevault. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
