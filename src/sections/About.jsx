import React from 'react';
import { FaGraduationCap, FaBriefcase  } from 'react-icons/fa';

const education  = [
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
    institution: 'Business School of Banking - Algoers, Algeria ',
     year: '2007',
  },
];
const experience = [
  {
    position: 'Head of Internal Audit',
    company: 'Al Salam Bank - Algeria',
    year: '2022-2023',
    description: 'Enhanced internal controls | Drove risk-based audit programs | Delivered executive-level risk reports | Led data-powered audit initiatives.'
  },
  {
    position: 'Team Leader - Internal Audit',
    company: 'Al Salam Bank - Algeria',
    year: '2013-2022',
    description: 'Automated data cleaning (VBA macros) | Analyzed large datasets | Streamlined internal controls | Designed dynamic dashboards.'
  },
  {
    position: 'Credit Risk Analyst',
    company: 'BNP Paribas, Algeria',
    year: '2011-2012',
    description: 'Performed financial data analysis | Conducted predictive credit risk analysis | Prepared executive credit committee reports.'
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen mt-6 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Education Section */}
        <div className="mb-16">
             <div className="flex items-center justify-center gap-3 mb-4">
                <FaGraduationCap className="text-2xl text-black" />
                <h2 className="text-black text-3xl font-bold text-center">Education</h2>
            </div>
            <p className="text-center mb-12">My academic background and qualifications</p>

            <div className="bg-white p-6 rounded-xl shadow-lg border ">
                {education.map((exp, index) => (
                <div key={index}>
                    <div className="mb-3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800 font-semibold">{exp.degree}</h2>
                            <p className="text-gray-500 font-medium">• {exp.year}</p>
                        </div>
                        <p className="text-gray-500 font-medium">{exp.institution}</p>
                    </div>

                    {index !== education.length - 1 && (
                    <hr className="border-t border-gray-700 mb-3" />
                    )}
                </div>
            ))}
            </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaBriefcase className="text-2xl text-black" />
            <h2 className="text-black text-3xl font-bold text-center">Experience</h2>
          </div>
          <p className="text-center mb-10">My professional journey</p>

          <div className="bg-white p-6 mb-10 rounded-xl shadow-lg border">
            {experience.map((exp, index) => (
              <div key={`exp-${index}`}>
                <div className="mb-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-800 font-semibold">{exp.position}</h2>
                    <p className="text-gray-500 font-medium">• {exp.year}</p>
                  </div>
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-gray-400 mt-1">{exp.description}</p>
                </div>
                {index !== experience.length - 1 && <hr className="border-t border-gray-200 mb-3" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
