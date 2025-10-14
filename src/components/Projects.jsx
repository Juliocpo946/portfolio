import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-accent-blue font-semibold hover:underline">Ver proyecto &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;