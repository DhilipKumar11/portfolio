import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Expense Tracker',
            category: 'Web App',
            description: 'A full-stack financial tool using MongoDB, Express, React, and Node.js to provide real-time income and expense tracking.',
            tags: ['MERN', 'Chart.js', 'Auth'],
            image: '/expense-tracker.png',
            link: '#'
        },
        {
            title: 'Product Review Fetcher',
            category: 'Web App',
            description: 'App to fetch and display product reviews from external APIs with robust error handling.',
            tags: ['React', 'REST APIs', 'CSS'],
            image: '/product-watcher.jpg',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="section-container bg-white">
            <div className="text-center mb-16">
                <div className="text-secondary font-semibold mb-2">- My Portfolio</div>
                <h2 className="text-3xl font-bold text-dark">
                    My Latest <span className="text-accent">Projects</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <button className="bg-primary text-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Project
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-dark mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>

                            <div className="flex items-center justify-between">
                                <span className="font-semibold text-accent">{project.category}</span>
                                <a href={project.link} className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-dark text-white px-8 py-3 rounded-full hover:bg-primary transition-colors">
                    View All Projects
                </button>
            </div>
        </section>
    );
};

export default Projects;
