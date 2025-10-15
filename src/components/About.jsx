import React from 'react';
import { FaCode, FaServer, FaBolt, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto my-12 px-8 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Ícono oculto en móvil (hidden) y visible en pantallas grandes (lg:flex) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <FaLaptopCode className="text-[10rem] text-[var(--color-primary-200)]" />
          </div>
          
          <div className="lg:col-span-7">
            <h4 className="text-lg">About Me</h4>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white">
              Julio César
            </h2>
            <p className="mt-4 text-lg">
              As a Fullstack Developer, I specialize in designing and building complete web applications. My expertise lies in creating robust REST APIs, dynamic user interfaces, and scalable systems, focusing on delivering modern, secure, and efficient solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
              <div>
                <FaCode size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Fullstack Development</h5>
              </div>
              <div>
                <FaServer size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Scalable Systems</h5>
              </div>
              <div>
                <FaBolt size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Efficient Solutions</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;