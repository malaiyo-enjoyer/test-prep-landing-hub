
import React from "react";
import { Book, FileText, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Comprehensive Test Series",
      description: "Expertly crafted test papers modeled after actual exams for JEE, NEET, and GATE, available both online and offline.",
      icon: <Book className="h-10 w-10 text-navy" />,
    },
    {
      id: 2,
      title: "Detailed Performance Analytics",
      description: "In-depth analysis of student performance with actionable insights and improvement strategies.",
      icon: <FileText className="h-10 w-10 text-navy" />,
    },
    {
      id: 3,
      title: "Flexible Test Schedules",
      description: "Customizable test schedules aligned with your institution's academic calendar and exam preparation timelines.",
      icon: <Calendar className="h-10 w-10 text-navy" />,
    },
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Services for Educational Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive testing solutions designed specifically for coaching institutes and schools preparing students for competitive exams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy text-center mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-navy-light text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Both Online & Offline Test Options</h3>
              <p className="text-lg">
                We understand different institutions have different needs. That's why we offer both digital and traditional testing solutions with the same level of quality and analytical depth.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Online Tests</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    Instant results
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    AI-powered analytics
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    Secure testing environment
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold text-xl mb-2">Offline Tests</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    Physical test papers
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    Traditional exam setting
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gold h-2 w-2 rounded-full mr-2"></span>
                    Comprehensive reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
