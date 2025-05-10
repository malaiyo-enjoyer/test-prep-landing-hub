
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-navy to-navy-dark text-white section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Institution's Exam Results?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Join over 100+ leading educational institutions that trust AcademiTest to elevate their students' performance in JEE, NEET, and GATE exams.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-gold hover:bg-gold-dark text-navy font-bold text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-lg px-8 py-6"
              variant="outline"
              asChild
            >
              <Link to="/contact">
                Contact Sales Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
