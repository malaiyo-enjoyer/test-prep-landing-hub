
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "Subject Matter Experts",
      description: "Our test papers are designed by experienced educators and subject experts from premier institutions.",
    },
    {
      title: "Exam Pattern Alignment",
      description: "Tests that precisely mirror the latest exam patterns and question styles of JEE, NEET, and GATE.",
    },
    {
      title: "Institutional Dashboard",
      description: "Dedicated dashboard for institutions to monitor overall performance metrics and student progress.",
    },
    {
      title: "Customizable Branding",
      description: "Option to include your institution's branding on test materials for a seamless experience.",
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed analytical reports at individual and batch levels with comparative performance metrics.",
    },
    {
      title: "Dedicated Support",
      description: "Dedicated account manager and technical support for smooth implementation and ongoing assistance.",
    },
  ];

  return (
    <section id="features" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Partner With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide institutions with the tools and resources they need to elevate their students' exam performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-gold shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">
            Exams We Cover
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-navy-light mb-2">JEE</div>
              <p className="text-gray-600">
                Comprehensive test series for JEE Main and Advanced, covering all subjects with detailed solutions.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-navy-light mb-2">NEET</div>
              <p className="text-gray-600">
                Subject-wise and full tests for NEET aspirants with focus on NCERT alignment and concept application.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-navy-light mb-2">GATE</div>
              <p className="text-gray-600">
                Specialized test series for various GATE disciplines with subject experts' insights and explanations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
