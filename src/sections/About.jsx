import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const about = [
  {
    degree: 'ACS – Full Stack Developer Program',
    institution: 'John Abbott College - Montreal, QC Canada',
     year: 'Expected Dec 2025',
  },
  {
    degree: 'ACS – Business Intelligence and Analytics',
    institution: 'Collège de Bois-de-Boulogne - Montreal, QC Canada',
     year: 'Expected Jan 2026',
  },
  {
    degree: 'Master  of Finance',
    institution: 'Cergy University – Paris, France',
     year: '2009',
  },
  {
    degree: 'Bachelor of Banking',
    institution: 'Business School of Banking - Algeria ',
     year: '2007',
  },
];

const About = () => {
  return (
    <section id="education" className="min-h-screen py-4 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-3xl font-bold mb-4 text-center w-full">Education</h2>
        <p className="text-center mb-12">My academic background and qualifications</p>

        <div className="bg-white p-6 rounded-lg shadow border border-gray-700">
            {about.map((exp, index) => (
            <div key={index}>
                <div className="mb-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400 font-medium">{exp.company} • {exp.date}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>

                {index !== about.length - 1 && (
                <hr className="border-t border-gray-700 mb-6" />
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
