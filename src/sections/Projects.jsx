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
    demoUrl: ""
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
        <div className="flex items-center justify-center gap-3 mb-4">
            <FaGithub className="text-2xl text-black" />
            <h2 className="text-black text-3xl font-bold text-center">Projects</h2>
        </div>
        
        <p className="text-center mb-12">My open source projects and contributions</p>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col h-full">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl text-gray-800 font-semibold">{project.title}</h3>
              </div>
              <p className="mb-4 text-sm line-clamp-2 h-[2.4rem]">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-gray-800 bg-gray-200 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mt-4 mb-2">
                {/* GitHub Link */}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-300 hover:text-gray-800 transition-all"
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
                    className="flex items-center gap-2 bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-300 hover:text-gray-800 transition-all"
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
