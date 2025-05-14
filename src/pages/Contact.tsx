
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <section className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-navy mb-4">
                Get in Touch With Us
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to elevate your institution's exam preparation resources? Our team is here to help you implement the right test series solution.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white shadow-md rounded-lg p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Why Educational Institutions Choose Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join over 100+ institutes that have transformed their exam success rates with Entrancevault
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg text-center shadow-sm hover:shadow-md">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 text-navy">📚</div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Comprehensive Tests</h3>
                <p className="text-gray-600">
                  Expertly crafted test papers that cover the entire curriculum
                </p>
              </div>
              
              <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg text-center shadow-sm hover:shadow-md">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 text-navy">📊</div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Detailed Analytics</h3>
                <p className="text-gray-600">
                  In-depth performance reports for institutions and students
                </p>
              </div>
              
              <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg text-center shadow-sm hover:shadow-md">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 text-navy">📅</div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Customize test schedules according to your academic calendar
                </p>
              </div>
              
              <div className="bg-gray-50 hover:bg-gray-100 transition-all duration-300 p-6 rounded-lg text-center shadow-sm hover:shadow-md">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 text-navy">👨‍👩‍👧‍👦</div>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  Full technical and academic support throughout partnership
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
