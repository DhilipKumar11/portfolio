import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen pt-20 flex items-center bg-light relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <div className="inline-block border-2 border-accent text-accent font-semibold px-4 py-1 rounded-md mb-6 rotate-[-2deg]">
                            Hello There!
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-4 leading-tight">
                            I'm <span className="text-accent underline decoration-wavy decoration-primary/30">Dhilip Kumar B</span>,
                            <br />
                            <span className="text-primary">Full Stack Developer</span>
                        </h1>

                        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
                            I'm an experienced Full Stack Developer, building scalable web applications and intuitive user interfaces.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Link
                                to="projects"
                                smooth={true}
                                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition-colors flex items-center gap-2 cursor-pointer"
                            >
                                View My Portfolio
                                <span className="bg-white/20 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </Link>

                            <Link
                                to="contact"
                                smooth={true}
                                className="border-2 border-dark text-dark px-8 py-3 rounded-full font-medium hover:bg-dark hover:text-white transition-colors cursor-pointer"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 mx-auto">
                            {/* Yellow background shape */}
                            <div className="absolute inset-0 bg-accent rounded-full -rotate-6 scale-110 -z-10" />

                            <img
                                src="/profile.jpg"
                                alt="Dhilip Kumar B"
                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
                            />

                            {/* Floaters */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="absolute -right-4 top-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2"
                            >
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <span className="font-bold text-sm">Full Stack</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="absolute -left-8 bottom-20 bg-primary text-white px-4 py-2 rounded-full shadow-lg"
                            >
                                <span className="font-bold">Web Developer</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
