"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">AutobotWA</h2>
          <p className="text-gray-400">
            Smart WhatsApp automation tools built for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#features" className="hover:text-blue-400 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-blue-400 transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: support@autobotwa.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} AutobotWA — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
