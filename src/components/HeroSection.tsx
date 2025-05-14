
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Elevate Your Institution's{" "}
              <span className="bg-gradient-to-r from-gold-dark to-gold bg-clip-text text-transparent">Exam Success</span> Rates
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Partner with us to provide your students with premium test series for
              JEE, NEET, and GATE exams. Our comprehensive assessment solutions help
              institutions achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-navy to-navy-light hover:from-navy-light hover:to-navy text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
              <Button
                className="bg-white border-2 border-navy text-navy hover:bg-gray-100 hover:shadow-md px-8 py-6 text-lg transition-all duration-300"
                variant="outline"
                asChild
              >
                <Link to="/#features">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-slide-up">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-gold relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="bg-gradient-to-r from-navy to-navy-light text-white text-sm font-bold uppercase py-1 px-3 rounded absolute -top-3 left-4">
                Trusted by 100+ Institutions
              </div>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-5xl font-bold bg-gradient-to-r from-navy to-navy-light bg-clip-text text-transparent mb-2">93%</div>
                  <div className="text-gray-600">Higher Selection Rate</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded text-center border-l-4 border-gold shadow-sm hover:shadow transition-all duration-300">
                  <div className="text-2xl font-bold text-navy-light">50k+</div>
                  <div className="text-sm text-gray-600">Tests Conducted</div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border-l-4 border-gold shadow-sm hover:shadow transition-all duration-300">
                  <div className="text-2xl font-bold text-navy-light">15k+</div>
                  <div className="text-sm text-gray-600">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
