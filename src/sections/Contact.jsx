import React from 'react';
import { BiSolidContact } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="mt-10 pt-4 mb-6 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 text-black dark:text-gray-100 mb-4">
            <BiSolidContact className="text-2xl" />
            <h2 className="text-3xl font-bold text-center">Contact</h2>
        </div>
        
        <p className="text-center mb-12">Feel free to reach out</p>

        {/* Content Container */}
        <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 py-14 p-6 rounded-xl shadow-lg flex flex-col md:flex-row relative">
          {/* Left Side */}
          <div className="md:w-1/2 md:pr-6 ms-12 p-8">
            <h2 className="text-3xl font-semibold mb-6 dark:text-gray-200 font-mono py-2 tracking-widest">LET'S CONNECT</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm open to new opportunities, freelance projects, or just a chat! Feel free to reach out via email or connect on LinkedIn.
            </p>

            <p className="flex items-center gap-3 text-sm mt-6 text-gray-600 dark:text-gray-300">
              <CiLocationOn /> 
              Montréal, Canada
            </p>
          </div>

         {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-700 mx-6 my-4" />

          {/* Right Side */}
          <div className="md:w-1/2 md:pl-6 mt ms-12 p-8 md:mt-8 space-y-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-800 dark:text-gray-300" />
              <a href="mailto:mir.ouaddah@hotmail.com" className="hover:text-black dark:hover:text-white">
                <span>mir.ouaddah@hotmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-800 dark:text-gray-300" />
              <span>+1 (438) 596-8160</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-gray-800 dark:text-gray-300" />
              <span>Available: Mon - Fri, 8am - 6pm</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
