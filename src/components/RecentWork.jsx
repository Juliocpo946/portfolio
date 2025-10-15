import React from 'react';
import project01 from '../assets/images/project01.png';
import project02 from '../assets/images/project02.png';
import project03 from '../assets/images/project03.png';

const projects = [
    {
        title: "Deliv: Aplicación Móvil de Entrega de Restaurantes",
        category: "Diseño UI/UX",
        description: "Este proyecto fue completado durante el curso de Udemy 'Figma for Mobile App Design: Ultimate Edition', con el objetivo de ampliar mis conocimientos y aprender algo nuevo.",
        image: project03,
        link: "https://www.figma.com/proto/SOHqTt9AbwIoOGYeF62EPQ/Deliv-Mobile-App-Project?page-id=6402%3A15814&node-id=6466-1780&p=f&viewport=481%2C608%2C0.42&t=Gtf2C6Hn1Jg05Cvo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6466%3A1780"
    },
    {
        title: "Landing Page Smile Dental",
        category: "Diseño UI/UX",
        description: "Esta Landing Page es para un pequeño consultorio dental local llamado 'Smile Dental' que busca un sitio web moderno, profesional y accesible que inspire confianza y atraiga nuevos pacientes.",
        image: project02,
        link: "https://www.figma.com/proto/RKejHXNGOInmUJgnkHyXP3/Smile-Dental-Landing-Page?page-id=15388%3A86071&node-id=15396-57802&p=f&viewport=394%2C37%2C0.08&t=LEdxpXrbqmFEGzgO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15396%3A57802"
    },
    {
        title: "Landing Page Xbox México",
        category: "Diseño UI/UX",
        description: "Como proyecto personal, diseñé una Landing Page informativa para Xbox México, mostrando información general y más. Adaptable para dispositivos móviles, y trabajado en modo claro y oscuro.",
        image: project01,
        link: "https://www.figma.com/proto/wX1sFvMwT39DIoEPwprEiS/Project-03---Xbox-Espa%C3%B1ol-Landing-Page?page-id=15391%3A366&node-id=15431-32642&p=f&viewport=468%2C25%2C0.09&t=qSGo8oYM0cZrCujM-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15431%3A32642"
    }
];


const RecentWork = () => {
    return (
        <section id="recent" className="py-20">
            <div className="container mx-auto my-12 px-8 lg:px-24 text-center">
                <h4 className="text-lg">Trabajo Reciente</h4>
                <h2 className="gradient-text text-4xl">Mira Mis Últimos Proyectos</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-transparent rounded-lg overflow-hidden group">
                            <img src={project.image} alt={project.title} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="p-4">
                                <h5 className="font-bold text-xl">{project.title}</h5>
                                <p className="text-primary-200">{project.category}</p>
                                <p className="mt-2">{project.description}</p>
                                <a href={project.link} className="text-primary-100 mt-4 inline-block">Ver Proyecto</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentWork;