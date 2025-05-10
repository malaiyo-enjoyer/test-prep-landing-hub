
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajiv Sharma",
      role: "Director, Excellence Coaching Institute",
      image: "",
      quote:
        "Partnering with AcademiTest has significantly improved our JEE success rates. Their comprehensive test series and analytics have given our teachers invaluable insights to tailor their teaching methods.",
    },
    {
      id: 2,
      name: "Prof. Priya Verma",
      role: "Principal, New Horizon School",
      image: "",
      quote:
        "The flexibility of both online and offline test options has been perfect for our institution. The detailed performance reports have helped us identify and address knowledge gaps effectively.",
    },
    {
      id: 3,
      name: "Dr. Anil Kumar",
      role: "CEO, Future Leaders Academy",
      image: "",
      quote:
        "Our NEET aspirants have seen a remarkable improvement in their scores after we implemented AcademiTest's testing system. Their subject matter expertise is evident in every question paper.",
    },
  ];

  const stats = [
    { value: "98%", label: "Partner Retention Rate" },
    { value: "89%", label: "Average Score Improvement" },
    { value: "100+", label: "Institutional Partners" },
    { value: "15k+", label: "Successful Students" },
  ];

  return (
    <section id="testimonials" className="bg-white section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by leading educational institutions across the country to deliver excellence in test preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 border-2 border-gold">
                    <AvatarFallback className="bg-navy text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                    {testimonial.image && <AvatarImage src={testimonial.image} alt={testimonial.name} />}
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-600">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-navy rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Our Impact in Numbers
            </h3>
            <p className="text-gold-light">
              Delivering measurable results for our institutional partners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4 bg-white/10 rounded-lg">
                <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
                <div className="text-white text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
