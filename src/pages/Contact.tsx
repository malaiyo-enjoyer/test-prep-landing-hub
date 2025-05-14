
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
      </div>
      <Footer />
    </>
  );
};

export default Contact;
