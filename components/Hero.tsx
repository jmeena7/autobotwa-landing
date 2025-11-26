"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to AutobotWA</h1>
        <p className="text-xl mb-6">Smart WhatsApp Automation for Businesses</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;   // ✅ default export
