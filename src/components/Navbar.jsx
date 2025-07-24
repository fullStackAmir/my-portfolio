import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50 backdrop-blur-sm shadow-sm  text-black">
      <nav className="container max-w-5xl mx-auto p-6 flex items-center justify-between py-4 ">
        <h1 className="text-xl font-bold">Amir</h1>
        <ul className="hidden md:flex flex-row space-x-6">
          {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
