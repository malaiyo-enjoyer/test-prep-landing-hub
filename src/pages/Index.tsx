
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  
  console.log("Index page rendering, current location:", location);

  useEffect(() => {
    // Log that component mounted successfully
    console.log("Index component mounted");
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);
  
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;
