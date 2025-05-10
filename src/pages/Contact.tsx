
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Users, Book, FileText, Calendar } from "lucide-react";

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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-white shadow-md rounded-lg p-8 h-full">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-navy mb-4">Contact Information</h3>
                    <p className="text-gray-600">
                      Reach out to us directly or fill out the form to discuss how we can help your institution excel.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-navy/10 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">Email Address</h4>
                        <p className="text-gray-600">info@academitest.com</p>
                        <p className="text-gray-600">support@academitest.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-navy/10 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">Phone Number</h4>
                        <p className="text-gray-600">+91 98765 43210 (Sales)</p>
                        <p className="text-gray-600">+91 98765 43211 (Support)</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-navy/10 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-navy" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy">Office Address</h4>
                        <p className="text-gray-600">
                          Tech Park, 123 Education Street,<br />
                          Bangalore - 560001, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="font-medium text-navy mb-4">Working Hours</h4>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="bg-white shadow-md rounded-lg p-8">
                  <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Why Educational Institutions Choose Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Join over 100+ institutes that have transformed their exam success rates with AcademiTest
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Comprehensive Tests</h3>
                <p className="text-gray-600">
                  Expertly crafted test papers that cover the entire curriculum
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Detailed Analytics</h3>
                <p className="text-gray-600">
                  In-depth performance reports for institutions and students
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Customize test schedules according to your academic calendar
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy" />
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
