import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';

const About: React.FC = () => {


    return (
        <section id="about" className="section-container bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="text-secondary font-semibold mb-2">- About Me</div>
                    <h2 className="text-4xl font-bold text-dark mb-6">
                        Who is <span className="text-accent">Dhilip Kumar</span>?
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        I am a Computer Science undergraduate and aspiring Full Stack Developer with a strong foundation in Data Structures, Algorithms, and OOP. I build scalable web applications using the MERN stack, Java/Spring Boot, and Python, focusing on AWS-based cloud-native solutions.
                    </p>

                    <div className="flex justify-center gap-6 mb-10">
                        <a href="https://www.linkedin.com/in/dhilipkumarb" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0077b5] transition-colors">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/DhilipKumar11" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://credly.com/users/dhilip-kumarb" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B00] transition-colors">
                            <SiCredly className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/itz_dhilip_kumar?igsh=MWxzdnQ0bTU4OW16bw==" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#E4405F] transition-colors">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                    </div>

                    <a
                        href="/cv.jpg"
                        download
                        className="inline-flex items-center gap-2 bg-dark text-white px-8 py-3 rounded-full hover:bg-primary transition-colors"
                    >
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
