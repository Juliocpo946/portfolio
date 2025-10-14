import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Educación</h2>
        <div className="relative border-l-4 border-blue-700 pl-10">
          {education.map((item, index) => (
            <div key={index} className="mb-12">
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-accent-blue rounded-full ring-8 ring-primary-dark">
                <FaGraduationCap className="text-primary-dark text-xl" />
              </span>
              <div className="bg-blue-900 p-6 rounded-lg shadow-lg border-l-4 border-accent-blue">
                  <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
                  <p className="text-md font-medium text-accent-blue mb-2">{item.institution}</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.period}</time>
                  <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;