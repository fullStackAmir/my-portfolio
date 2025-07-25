import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // More reliable theme detection
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && 
                  window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = (mode) => {
    const newMode = mode === 'dark';
    setDarkMode(newMode);
    localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1">
      <button
            onClick={() => toggleTheme('light')}
            className={`p-1 dark:hover:bg-gray-200 rounded-full transition-colors ${!darkMode ? 'bg-white shadow' : 'text-gray-400 '}`}
            aria-label="Light mode"
        >
            <FiSun size={16} />
        </button>
        <button
            onClick={() => toggleTheme('dark')}
            className={`p-1 hover:bg-gray-600 rounded-full transition-colors ${darkMode ? 'bg-gray-950 dark:bg-black text-white shadow' : 'text-gray-500'}`}
            aria-label="Dark mode"
        >
            <FiMoon size={16} />
        </button>
    </div>
  );
};

export default ThemeToggle;