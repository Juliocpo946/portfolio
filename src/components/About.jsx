import React from 'react';
import { MdDevices, MdDesignServices } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";


const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto my-12 px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            {/* Omitido el contenedor de la imagen de decoración */}
          </div>
          <div className="lg:col-span-7">
            <h4 className="text-lg">About</h4>
            <h2 className="gradient-text text-4xl">UX Ramirez</h2>
            <p className="mt-4 text-lg">
              I'm beginning my journey as a freelance UI/UX & Web Designer, passionate about creating solutions that make a difference. 
              I am dedicated to providing services with commitment and attention to detail, always ensuring results that exceed expectations. 
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-10">
              <div>
                <MdDevices size={64} className="mx-auto mb-3 text-primary-200" />
                <h5 className="font-bold">Responsive Designs</h5>
              </div>
              <div>
                <MdDesignServices size={64} className="mx-auto mb-3 text-primary-200" />
                <h5 className="font-bold">Focus on Design</h5>
              </div>
              <div>
                <FaRegHandshake size={64} className="mx-auto mb-3 text-primary-200" />
                <h5 className="font-bold">Easy To Use</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;