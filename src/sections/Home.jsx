import React from 'react';
import profile from '/profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CiLocationOn } from "react-icons/ci";

const Home = () => {
  return (
    <section 
        id="home" 
        className="min-h-screen pt-24 flex items-center justify-center py-16 px-4"
        >
        
        <div className="relative bg-white max-w-5xl mx-auto p-6 text-center rounded-xl shadow-lg border ">
            {/* Profile Image */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full ">
                    <img
                    src={profile}
                    alt="Amir"
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-gray-500 object-cover"
                    />
                </div>
            </div>
            {/* Content inside the card */}
            <div className="mt-20 bg-white">
                <h2 className="text-3xl md:text-4xl font-mono py-1 tracking-wide">AMIR OUADDAH</h2>
                <p className="flex items-center justify-end gap-3 mb-4 pr-8 text-sm mt-4"> 
                    <CiLocationOn />
                    Montréal, Canada
                </p>

                <p className="text-left text-lg text-justify leading-relaxed mt-4 px-8">
                    Motivated Full-Stack Developer transitioning to IT after a career in finance. 
                    Skilled in front-end & back-end technologies, data analysis and problem-solving. 
                    Background in Internal Audit and Credit Risk strengthened my attention to detail, 
                    logical thinking, and ability to thrive in fast-paced, high-responsibility roles.
                </p>

                <div className="mt-12 flex justify-center gap-4 flex-wrap">
                    <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-300 hover:text-gray-800 hover:shadow rounded transition-all">View my Work</button>
                    <button className="bg-white text-gray-800 border border-gray-500 px-4 py-2 rounded-xl hover:bg-gray-500 hover:text-white hover:shadow rounded transition-all">Get In Touch</button>
                </div>

                <div className="flex justify-center mt-6 space-x-6 text-2xl">
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
            </div>
        </div>
    </section>
  );
};

export default Home;
