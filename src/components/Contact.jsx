import React from 'react';
import { IoMail } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    platform: "Correo Electrónico",
    value: "juliocesarp6273@gmail.com",
    link: "mailto:juliocesarp6273@gmail.com",
    icon: <IoMail size={32} />
  },
  {
    platform: "LinkedIn",
    value: "Julio César Pérez Ortiz",
    link: "https://www.linkedin.com/in/tu-usuario/",
    icon: <FaLinkedin size={32} />
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto my-12 px-8 lg:px-24">
        <div>
          <h4 className="text-lg">Contacto</h4>
          <h2 className="gradient-text text-4xl">Hablemos de Tus Requerimientos</h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-5">
            <p>Si deseas un proyecto único y personalizado, envíame un mensaje, o contáctame en:</p>
            <ul className="space-y-6 mt-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-200)] mr-4">
                    {item.icon}
                  </a>
                  <div>
                    <strong>{item.platform}</strong> <br/> {item.value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="TU_ACCESS_KEY" />
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" name="Name" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
                <input type="text" placeholder="Apellido" name="Last Name" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
              </div>
              <input type="email" placeholder="ejemplo@email.com" name="Email Address" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
              <textarea placeholder="Escribe tu mensaje aquí..." name="Message" rows="4" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"></textarea>
              <button type="submit" className="btn-primary-gradient px-8 py-3 rounded-md">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;