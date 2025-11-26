
"use client";
import React from "react";

const features = [
  { title: 'Bulk Messaging', desc: 'Send messages to thousands of users at once.' },
  { title: 'Auto Reply', desc: 'Automatically reply to messages instantly.' },
  { title: 'Schedule Messages', desc: 'Plan your messages to be sent later.' },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;  // ✅ default export
