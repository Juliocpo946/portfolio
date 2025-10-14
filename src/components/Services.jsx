import React from 'react';

const generalServices = [
    {
        title: "Landing Page UI/UX Design",
        features: [
            "Figma design of one-page website",
            "Desktop & Mobile layouts",
            "Figma Prototype, adding animations & interactions",
            "When the project is finished, I'll share with you a link to the Figma file"
        ],
        delivery: "Within 1-5 days"
    },
    {
        title: "Larger Website UI/UX Design",
        features: [
            "Figma Website Design of 3 views or more (Home Page, About Page & Contact for example)",
            "Desktop & Mobile layouts",
            "Figma Prototype, adding animations & interactions",
            "When the project is finished, I'll share with you a link to the Figma file"
        ],
        delivery: "Within 3 weeks - 1 month"
    }
];

const studentServices = [
    {
        title: "Landing Page UI/UX Design",
        features: [
            "Figma design of one-page website",
            "Desktop layout only",
            "Figma Prototype, adding animations & interactions",
            "Full ownership of the website design (.FIG File)"
        ],
        delivery: "Within 1-5 days"
    },
    {
        title: "Landing Page Bundle: Design + Frontend Development",
        features: [
            'All of the "Landing Page UI/UX Design" service, plus...',
            "Frontend Development with Bootstrap",
            "Full ownership of the design (.FIG File) & Code Files",
        ],
        delivery: "Within 1-2 weeks"
    },
     {
        title: "Larger Website UI/UX Design",
        features: [
            "Figma Website Design of 3 views or more (Home Page, About Page & Contact for example)",
            "Desktop layout only",
            "Full ownership of the website design (.FIG File)",
        ],
        delivery: "Within 3 weeks - 1 month"
    },
    {
        title: "Larger Website Bundle: Design + Frontend Development",
        features: [
            'All of the "Larger Website Bundle: Design + Frontend Development" service, plus...',
            "Frontend Development with Bootstrap",
            "Full ownership of the design (.FIG File) & Code Files"
        ],
        delivery: "Within 1 month"
    },
];


const Services = () => {
    const [activeTab, setActiveTab] = React.useState('general');

    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h4 className="text-lg">Services</h4>
                <h2 className="gradient-text text-4xl">What I'm Offering?</h2>

                <div className="mt-8">
                    <div className="flex justify-center gap-4">
                        <button onClick={() => setActiveTab('general')} className={`px-6 py-2 rounded-md transition ${activeTab === 'general' ? 'bg-primary text-white' : 'border border-primary-300 text-primary-200'}`}>
                            General
                        </button>
                        <button onClick={() => setActiveTab('students')} className={`px-6 py-2 rounded-md transition ${activeTab === 'students' ? 'bg-primary text-white' : 'border border-primary-300 text-primary-200'}`}>
                            For Students
                        </button>
                    </div>

                    <div className="mt-12">
                        {activeTab === 'general' && (
                             <div className="grid md:grid-cols-2 gap-8 text-left">
                                {generalServices.map((service, index) => (
                                    <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-700">
                                        <h3 className="font-bold text-2xl">{service.title}</h3>
                                        <hr className="my-4 border-gray-600"/>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                        </ul>
                                        <p className="mt-6"><strong>Delivery time:</strong> {service.delivery}</p>
                                        <a href="#contact" className="btn-primary-gradient mt-6 inline-block px-6 py-2 rounded-md">Let's Talk!</a>
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'students' && (
                             <div className="grid md:grid-cols-2 gap-8 text-left">
                                {studentServices.map((service, index) => (
                                    <div key={index} className="bg-[#1e1e1e] p-6 rounded-lg border border-gray-700">
                                        <h3 className="font-bold text-2xl">{service.title}</h3>
                                        <hr className="my-4 border-gray-600"/>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
                                        </ul>
                                        <p className="mt-6"><strong>Delivery time:</strong> {service.delivery}</p>
                                        <a href="#contact" className="btn-primary-gradient mt-6 inline-block px-6 py-2 rounded-md">Let's Talk!</a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;