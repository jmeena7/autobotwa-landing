
"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              "AutobotWA helped us automate 80% customer replies. Amazing product!"
            </p>
            <h3 className="font-semibold text-blue-600 mt-4">— Rahul Sharma</h3>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              "Bulk messaging feature saved us hours every week."
            </p>
            <h3 className="font-semibold text-blue-600 mt-4">— Neha Verma</h3>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              "Very useful tool for WhatsApp marketing. Highly recommended!"
            </p>
            <h3 className="font-semibold text-blue-600 mt-4">— Aman Gupta</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
