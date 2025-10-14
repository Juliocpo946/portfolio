import React from 'react';
import { IoMail, IoLogoWhatsapp } from 'react-icons/io5';
import { FaTelegram, FaInstagram } from 'react-icons/fa';

const contactInfo = [
  {
    platform: "Email",
    value: "ux.ramirez01@gmail.com",
    link: "mailto:ux.ramirez01@gmail.com",
    icon: <IoMail size={32} />
  },
  {
    platform: "WhatsApp Message",
    value: "+52 (664) 335 2557",
    link: "https://wa.me/526643352557",
    icon: <IoLogoWhatsapp size={32} />
  },
  {
    platform: "Telegram",
    value: "@ux_ramirez",
    link: "https://t.me/ux_ramirez",
    icon: <FaTelegram size={32} />
  },
  {
    platform: "Instagram DM",
    value: "UX Ramirez",
    link: "https://instagram.com/ux_ramirez/",
    icon: <FaInstagram size={32} />
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto my-12 px-8 lg:px-24">
        <div>
          <h4 className="text-lg">Contact</h4>
          <h2 className="gradient-text text-4xl">Let's Discuss Your Requeriments</h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 mt-10">
          <div className="lg:col-span-5">
            <p>If you want a unique and personalized project, send me a message, or contact me at:</p>
            <ul className="space-y-6 mt-6">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <a href={item.link} className="text-primary-200 mr-4">
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
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" name="Name" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
                <input type="text" placeholder="Last Name" name="Last Name" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
              </div>
              <input type="email" placeholder="example@email.com" name="Email Address" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"/>
              <textarea placeholder="Write your message here..." name="Message" rows="4" required className="w-full p-3 bg-[#2b2b2b] border border-[#414141] rounded-md"></textarea>
              <button type="submit" className="btn-primary-gradient px-8 py-3 rounded-md">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;