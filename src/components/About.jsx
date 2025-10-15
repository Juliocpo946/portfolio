import React from 'react';
import { FaCode, FaServer, FaBolt, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto my-12 px-8 lg:px-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <FaLaptopCode className="text-[10rem] text-[var(--color-primary-200)]" />
          </div>
          
          <div className="lg:col-span-7">
            <h4 className="text-lg">Sobre Mí</h4>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white">
              Julio César
            </h2>
            <p className="mt-4 text-lg">
              Como Desarrollador Fullstack, me especializo en diseñar y construir aplicaciones web completas. Mi experiencia radica en crear APIs REST robustas, interfaces de usuario dinámicas y sistemas escalables, enfocándome en ofrecer soluciones modernas, seguras y eficientes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
              <div>
                <FaCode size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Desarrollo Fullstack</h5>
              </div>
              <div>
                <FaServer size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Sistemas Escalables</h5>
              </div>
              <div>
                <FaBolt size={64} className="mx-auto mb-3 text-[var(--color-primary-200)]" />
                <h5 className="font-bold">Soluciones Eficientes</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;