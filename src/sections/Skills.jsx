import React from 'react';
import { FaJava, FaJs, FaPhp, FaPython, FaHtml5, FaCss3, FaReact, FaDocker, FaAws, FaNode, FaLaravel, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiMongodb, SiExpress, SiVercel, SiXampp, SiPostman, SiJquery, SiBootstrap, SiMysql } from 'react-icons/si';
import { DiMsqlServer } from "react-icons/di";
import { FaTools } from 'react-icons/fa';

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'PHP', icon: <FaPhp /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'C#' }, // No icon in react-icons
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3 /> },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaFX' },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Laravel', icon: <FaLaravel /> },
      { name: 'Node.js', icon: <FaNode /> },
      { name: 'ASP.NET' },
      { name: 'jQuery', icon: <SiJquery /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Microsoft SQL Server', icon: <DiMsqlServer /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'phpMyAdmin' },
    ],
  },
  {
    title: 'Cloud & Deployment',
    skills: [
      { name: 'AWS', icon: <FaAws /> },
      { name: 'XAMPP', icon: <SiXampp /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'CI/CD', icon: <FaGitAlt /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen mt-10 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center text-black dark:text-gray-100 gap-3 mb-4">
            <FaTools className="text-2xl" />
            <h2 className="text-3xl font-bold text-center">Skills</h2>
        </div>
        
        <p className="text-center mb-12">Technologies and tools I work with</p>

        {categories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h3 className="text-xl font-semibold mb-4 dark:text-gray-400 border-l-4 border-gray-900 dark:border-gray-100 pl-4">{cat.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-white dark:bg-gray-900 p-3 border border-gray-500 hover:border-2 hover:blue-400 rounded transition-all"
                >
                  <span className="text-2xl text-gray-900 dark:text-gray-200">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
