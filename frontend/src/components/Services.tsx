import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer, FaCloud } from 'react-icons/fa';

const Services: React.FC = () => {
    const services = [
        {
            icon: <FaCode className="w-8 h-8" />,
            title: 'Frontend Development',
            description: 'Building responsive, scalable web applications using modern technologies like React, Node.js, and Tailwind CSS.'
        },
        {
            icon: <FaServer className="w-8 h-8" />,
            title: 'Backend Development',
            description: 'Designing and implementing robust RESTful APIs and server-side logic using Node.js, Express, and Spring Boot.'
        },
        {
            icon: <FaCloud className="w-8 h-8" />,
            title: 'Deployment',
            description: 'Deploying and managing applications on cloud platforms like AWS, Vercel, and Render for optimal performance.'
        },
        {
            icon: <FaPaintBrush className="w-8 h-8" />,
            title: 'UI/UX Design',
            description: 'Creating intuitive and visually appealing user interfaces that provide seamless user experiences.'
        }
    ];

    return (
        <section id="services" className="section-container bg-white min-h-screen flex flex-col justify-center">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-dark mb-4"
                >
                    My <span className="text-accent">Services</span>
                </motion.h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-light p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary/20 group"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
