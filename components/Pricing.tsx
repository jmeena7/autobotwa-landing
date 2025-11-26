"use client";
import React from "react";

const Pricing = () => {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Simple Pricing</h2>
        <p className="text-gray-600 mb-12">
          Choose a plan that fits your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Basic Plan */}
          <div className="border p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">₹499<span className="text-lg font-normal">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔ 1,000 Messages</li>
              <li>✔ Basic Automations</li>
              <li>✔ Email Support</li>
            </ul>
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-600">
              Choose Plan
            </button>
          </div>

          {/* Standard Plan */}
          <div className="border p-8 rounded-xl shadow-md hover:shadow-xl transition bg-blue-50 border-blue-400">
            <h3 className="text-2xl font-bold mb-4">Standard</h3>
            <p className="text-4xl font-bold mb-4">₹999<span className="text-lg">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔ 5,000 Messages</li>
              <li>✔ Auto Replies</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">₹1999<span className="text-lg">/month</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>✔ Unlimited Messages</li>
              <li>✔ All Automations</li>
              <li>✔ 24/7 Premium Support</li>
            </ul>
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
