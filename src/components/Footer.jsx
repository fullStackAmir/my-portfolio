import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-500 py-6 text-center">
      <div className="flex justify-center gap-4 mb-3 text-xl">
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
      <p className="text-gray-400">
        © {new Date().getFullYear()} Amir Ouaddah | Built with <span className="font-medium">React</span>, <span className="font-medium">Vite</span>, and <span className="font-medium">Tailwind CSS</span>
      </p>
    </footer>
  );
};

export default Footer;
