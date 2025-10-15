import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGraduationCap, FaLink, FaGoogle, FaAws } from 'react-icons/fa';
import { SiCisco } from "react-icons/si";

const certIconMap = {
    "Google": <FaGoogle />,
    "AWS": <FaAws />,
    "CISCO": <SiCisco />
};

const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Education & Certifications</h2>
        
        {/* Education Timeline */}
        <div className="relative border-l-2 border-[var(--color-primary-dark)] pl-10">
          {education.map((item, index) => (
            <div key={index} className="mb-12">
              <span className="absolute -left-[21px] flex items-center justify-center w-10 h-10 bg-[var(--color-primary)] rounded-full ring-8 ring-black">
                <FaGraduationCap className="text-white text-xl" />
              </span>
              {/* Contenedor ahora transparente con un borde */}
              <div className="bg-transparent p-6 rounded-lg border border-gray-700 ml-4">
                  <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
                  <p className="text-md font-medium text-[var(--color-accent)] mb-2">{item.institution}</p>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.period}</time>
                  <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {certifications.map((cert, index) => (
                    // Contenedor ahora transparente con un borde
                    <div key={index} className="bg-transparent p-5 rounded-lg border border-gray-700 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-[var(--color-accent)] text-3xl flex-shrink-0">
                                {certIconMap[cert.issuer]}
                            </span>
                            <div>
                                <h4 className="font-bold text-lg">{cert.title}</h4>
                                <p className="text-gray-400">{cert.issuer}</p>
                            </div>
                        </div>
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-accent)] transition-colors">
                            <FaLink />
                        </a>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Education;