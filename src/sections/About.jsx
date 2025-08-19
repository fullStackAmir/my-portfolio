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
     year: 'Expected Dec 2025',
  },
  {
    degree: 'Master  of Finance',
    institution: 'Cergy University – Paris, France',
     year: '2009',
  },
  {
    degree: 'Bachelor of Banking',
    institution: 'Business School of Banking - Algiers, Algeria ',
     year: '2007',
  },
];
const experience = [
  {
    position: 'Head of Internal Audit',
    company: 'Al Salam Bank',
    year: '2022-2023',
    description: 'Enhanced internal controls | Drove risk-based audit programs | Delivered executive-level risk reports | Led data-powered audit initiatives.'
  },
  {
    position: 'Team Leader - Internal Audit',
    company: 'Al Salam Bank',
    year: '2013-2022',
    description: 'Automated data cleaning (VBA macros) | Analyzed large datasets | Streamlined internal controls | Designed dynamic dashboards.'
  },
  {
    position: 'Credit Risk Analyst',
    company: 'BNP Paribas',
    year: '2011-2012',
    description: 'Performed financial data analysis | Conducted predictive credit risk analysis | Prepared executive credit committee reports.'
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen mt-20 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Education Section */}
        <div>
             <div className="flex items-center justify-center gap-3 text-black dark:text-gray-100 mb-4">
                <FaGraduationCap className="text-2xl" />
                <h2 className="text-3xl font-bold text-center">Education</h2>
            </div>
            <p className="text-center mb-10">My academic background and qualifications</p>

            <div className="bg-white dark:bg-gray-900 dark:border-gray-700 p-6 rounded-xl shadow-lg border ">
                {education.map((exp, index) => (
                <div key={index}>
                    <div className="mb-3">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800 font-semibold dark:text-gray-200">{exp.degree}</h2>
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
          <div className="flex items-center justify-center gap-3 text-black dark:text-gray-100 mt-16 py-4">
            <FaBriefcase className="text-2xl" />
            <h2 className="text-3xl font-bold text-center">Experience</h2>
          </div>
          <p className="text-center mb-10">My professional journey</p>

          <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 p-6 mb-10 rounded-xl shadow-lg">
            {experience.map((exp, index) => (
              <div key={`exp-${index}`}>
                <div className="mb-3">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl text-gray-800 font-semibold dark:text-gray-200">{exp.position}</h2>
                    <p className="text-gray-500 font-medium">• {exp.year}</p>
                  </div>
                  <p className="font-medium mt-1">{exp.company}</p>
                  <p className="text-gray-500">{exp.description}</p>
                </div>
                {index !== experience.length - 1 && <hr className="border-t border-gray-700  mb-3" />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
