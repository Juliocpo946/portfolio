import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-dark mb-4">{about.title}</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {about.description}
        </p>
      </div>
    </section>
  );
};

export default About;