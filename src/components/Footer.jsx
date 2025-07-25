import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-gray-500 py-6 text-center">
      <div className="flex justify-center gap-4 mt-2 mb-4 text-xl">
        <a href="https://github.com/fullStackAmir" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:shadow rounded transition-all">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/amirouaddah/?locale=en_US" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:shadow rounded transition-all">
            <FaLinkedin />
        </a>
        <a href="mailto:mir.ouaddah@hotmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 hover:shadow rounded transition-all">
            <FaEnvelope />
        </a>
      </div>
      <div className="relative max-w-5xl mx-auto px-4 mt-4 flex items-center justify-center">
        <p className="text-sm text-center">
            © {new Date().getFullYear()} Amir Ouaddah | Built with <span className="font-medium">React</span>, 
            <span className="font-medium">Vite</span>, and <span className="font-medium">Tailwind CSS</span>
          </p>
        <a
          href="#home"
          className="absolute right-4 inline-flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-all"
        >
          <BsFillArrowUpSquareFill className="text-3xl mb-3" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
