import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import logoLight from '/logo-light.png';
import logoDark from '/logo-dark.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navbarHeight = 64; 

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + navbarHeight + 1;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };


    // Détection initiale
    setTimeout(() => handleScroll(), 100);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]);


  return (
    <header className="fixed top-0 w-full h-16 z-50 bg-gray-50 dark:bg-black backdrop-blur-sm shadow-sm">
      <nav className="max-w-5xl mx-auto px-6 h-full flex items-center justify-between">
        <a href='#home' className="flex items-center gap-2">
          {/* Light Mode */}
          <img
            src={logoLight}
            alt="Logo"
            className="h-12 block dark:hidden"
          />
          {/* Dark Mode */}
          <img
            src={logoDark}
            alt="Logo"
            className="h-12 hidden dark:block"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
            const lowerItem = item.toLowerCase();
            return (
              <li key={lowerItem}>
                <a
                  href={`#${lowerItem}`}
                  className={`transition-colors ${
                    activeSection === lowerItem
                      ? 'text-black dark:text-white'
                      : 'text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white'
                  }`}
                >
                  {item}
                </a>

              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;