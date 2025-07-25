import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi'; 

const projects = [
  {
    title: 'Vehicle Rental Management System',
    description: 'A digital platform for managing vehicle rentals, maintenance, pricing and customer feedback.',
    tags: ['JavaFX', 'Spring Boot (Java)', 'MySQL, Azure'],
    githubUrl: "https://github.com/Hitao1623/VehicleRentalSystem.git",
    demoUrl: ""
  },
  {
    title: 'Movie Explorer website',
    description: 'A movie discovery website with real-time TMDB data, user authentication, and personalized favorites list.',
    tags: ['React', 'JavaScript', 'TMDB API', 'JSON Server'],
    githubUrl: "https://github.com/Hitao1623/movie-explorer.git",
    demoUrl: "movie-explorer-sandy.vercel.app"
  },
  {
    title: 'E-commerce Web',
    description: 'A responsive E-commerce platform implementing product search/categorization, shopping cart workflow, payment processing, user review system, and seller dashboard.',
    tags: ['JavaScript', 'Tailwind CSS', 'PHP', 'Laravel', 'MySQL'],
    githubUrl: "https://github.com/dyln-n/webdev-project.git",
    demoUrl: "https://e-commerce-web.infinityfreeapp.com"
  },
  {
    title: 'FSD Portfolio',
    description: 'Designed and developed a responsive portfolio with dark/light mode.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    githubUrl: "https://github.com/fullStackAmir/my-portfolio.git",
    demoUrl: "https://amirouadd-portfolio.vercel.app/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen mt-10 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3 text-black dark:text-gray-100 mb-4">
            <FaGithub className="text-2xl" />
            <h2 className="text-3xl font-bold text-center">Projects</h2>
        </div>
        
        <p className="text-center mb-12">My open source projects and contributions</p>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col h-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl text-gray-800 font-semibold dark:text-gray-200">{project.title}</h3>
              </div>
              <p className="mb-4 text-sm line-clamp-2 h-[2.4rem]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-gray-800 bg-gray-200 dark:bg-gray-500 dark:text-gray-100 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 ms-6 mt-4 mb-2">
                {/* GitHub Link */}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-xl hover:bg-gray-600 hover:text-gray-100 dark:hover:bg-gray-50 transition-all"
                >
                    <FaGithub />
                    Code
                </a>
                
                {/* Demo Link - Only show if demoUrl exists */}
                {project.demoUrl && (
                    <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded-xl hover:bg-gray-600 hover:text-gray-100 dark:hover:bg-gray-50 transition-all"
                    >
                    <FiExternalLink className="text-lg" />
                    Live Demo
                    </a>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
