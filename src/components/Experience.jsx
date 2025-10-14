import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary-dark mb-12">Experiencia Laboral</h2>
        <div className="relative border-l-4 border-blue-200 pl-10">
          {experience.map((job, index) => (
            <div key={index} className="mb-12">
               <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full ring-8 ring-white">
                <MdWork className="text-white text-xl" />
              </span>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-700">
                  <h3 className="text-2xl font-semibold text-primary-dark">{job.role}</h3>
                  <p className="text-md font-medium text-blue-600 mb-2">{job.company}</p>
                  <time className="block mb-4 text-sm font-normal leading-none text-gray-500">{job.period}</time>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;