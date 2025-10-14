import React from 'react';
import { FaFigma, FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaSass } from 'react-icons/fa';
import { SiCanva } from "react-icons/si";

const technologies = [
  { name: 'Figma', icon: <FaFigma size={50} /> },
  { name: 'Canva', icon: <SiCanva size={50} /> },
  { name: 'HTML', icon: <FaHtml5 size={50} /> },
  { name: 'CSS', icon: <FaCss3Alt size={50} /> },
  { name: 'Javascript', icon: <FaJs size={50} /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={50} /> },
  { name: 'NodeJs', icon: <FaNodeJs size={50} /> },
  { name: 'SASS', icon: <FaSass size={50} /> },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h4 className="text-lg">Skills</h4>
            <h2 className="gradient-text text-4xl mt-2">What tools do I specialize in?</h2>
            <p className="mt-4">
              Here, I share the tools I use to make things happen. From design to development, these are the platforms that help me bring my ideas to life!
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-[#2b2b2b] border border-[#414141] rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:bg-[#242424] hover:border-[#727272] transition-colors">
                  <div className="text-primary-200">{tech.icon}</div>
                  <p className="mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;