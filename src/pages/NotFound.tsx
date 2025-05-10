
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-24 px-4">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-navy mb-4">404</h1>
          <p className="text-2xl md:text-3xl text-navy-light mb-6">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="bg-navy hover:bg-navy-light text-white">
            <Link to="/">Return to Home Page</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
