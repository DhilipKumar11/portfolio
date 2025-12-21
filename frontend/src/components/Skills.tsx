import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiVercel, SiRender, SiSpringboot } from 'react-icons/si';
import { FaRocket, FaMousePointer, FaCode, FaAws } from 'react-icons/fa';

const Skills: React.FC = () => {
    const skills = [
        { name: 'VS Code', icon: <FaCode className="w-12 h-12 text-blue-500" />, level: 95 },
        { name: 'Antigravity', icon: <FaRocket className="w-12 h-12 text-purple-600" />, level: 90 },
        { name: 'Cursor', icon: <FaMousePointer className="w-12 h-12 text-gray-700" />, level: 85 },
        { name: 'GitHub', icon: <SiGithub className="w-12 h-12 text-black" />, level: 90 },
        { name: 'Vercel', icon: <SiVercel className="w-12 h-12 text-black" />, level: 85 },
        { name: 'Render', icon: <SiRender className="w-12 h-12 text-green-500" />, level: 80 },
        { name: 'AWS', icon: <FaAws className="w-12 h-12 text-orange-500" />, level: 75 },
        { name: 'Spring Boot', icon: <SiSpringboot className="w-12 h-12 text-green-600" />, level: 80 },
    ];

    return (
        <section id="skills" className="section-container bg-light">
            <div className="text-center mb-16">
                <div className="text-secondary font-semibold mb-2">- My Favorite Tools</div>
                <h2 className="text-3xl font-bold text-dark">
                    Exploring the Tools <br />
                    <span className="text-accent">Behind My Designs</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((tool, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center gap-4 group"
                    >
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            {tool.icon}
                        </div>
                        <h3 className="font-semibold text-gray-700">{tool.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
