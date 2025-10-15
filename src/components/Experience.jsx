import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MdWork, MdLocationOn } from 'react-icons/md';
import { FaVuejs, FaHtml5, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiAlpinedotjs, SiTailwindcss, SiMysql } from 'react-icons/si';

const iconMap = {
    "Vue.js": <FaVuejs />,
    "HTML5": <FaHtml5 />,
    "Alpine.js": <SiAlpinedotjs />,
    "Tailwind CSS": <SiTailwindcss />,
    "PHP": <FaPhp />,
    "Laravel": <FaLaravel />,
    "MySQL": <SiMysql />
};

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Work Experience</h2>
        <div className="relative border-l-2 border-[var(--color-primary-dark)] pl-10">
          {experience.map((job, index) => (
            <div key={index} className="mb-12">
              <span className="absolute -left-[21px] flex items-center justify-center w-10 h-10 bg-[var(--color-primary)] rounded-full ring-8 ring-black">
                <MdWork className="text-white text-xl" />
              </span>
              {/* Contenedor ahora transparente con un borde */}
              <div className="bg-transparent p-6 rounded-lg border border-gray-700 ml-4">
                  <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                        <p className="text-md font-medium text-[var(--color-accent)] mb-2">{job.company}</p>
                    </div>
                    <time className="hidden md:block text-sm font-normal leading-none text-gray-400">{job.period}</time>
                  </div>
                   <p className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                    <MdLocationOn /> {job.location}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-5">
                    {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <h4 className="font-semibold text-gray-200">Technologies:</h4>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {job.technologies.map(tech => (
                            <div key={tech} className="flex items-center gap-2 text-gray-300">
                                <span className="text-[var(--color-accent)] text-xl">{iconMap[tech]}</span>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;