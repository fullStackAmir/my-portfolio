import React from 'react';
import { BiSolidContact } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="Get in Touch" className="min-h-screen mt-10 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
            <BiSolidContact className="text-2xl text-black" />
            <h2 className="text-black text-3xl font-bold text-center">Get in Touch</h2>
        </div>
        
        <p className="text-center mb-12">Feel free to reach out</p>
    
        <div className="bg-white p-6 rounded-xl shadow-lg border ">
          <h2 className="text-xl font-semibold mb-4">LET'S CONNECT</h2>
          <p className="text-gray-400 mb-8">
          Feel free to reach out if you're looking for a developer, have a question, or just want to connect!
          </p>

          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Say Hello
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
