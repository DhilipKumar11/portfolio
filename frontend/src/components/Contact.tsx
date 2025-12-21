import React, { useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiCredly } from 'react-icons/si';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Replace with your actual backend URL when deployed
            // For now, it will fail or we can mock it
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-container bg-white">
            <div className="text-center mb-16">
                <div className="text-secondary font-semibold mb-2">- Contact Us</div>
                <h2 className="text-3xl font-bold text-dark">
                    Let's Talk for Your <br />
                    <span className="text-accent">Next Projects</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-light p-8 rounded-3xl">
                    <h3 className="text-xl font-bold text-dark mb-4">Get in Touch</h3>
                    <p className="text-gray-600 mb-8">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Call Me</div>
                                <div className="font-semibold text-dark">+91 6383885026</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Email Me</div>
                                <div className="font-semibold text-dark">dhilipkumarb2007@gmail.com</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Location</div>
                                <div className="font-semibold text-dark">Villupuram, TamilNadu</div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
                            <a href="https://www.linkedin.com/in/dhilipkumarb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0077b5] transition-all shadow-sm">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/DhilipKumar11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-black transition-all shadow-sm">
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href="https://credly.com/users/dhilip-kumarb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#FF6B00] transition-all shadow-sm">
                                <SiCredly className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/itz_dhilip_kumar?igsh=MWxzdnQ0bTU4OW16bw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#E4405F] transition-all shadow-sm">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ex. John Doe"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none"
                            >
                                <option value="">Select</option>
                                <option value="freelance">Freelance Project</option>
                                <option value="hiring">Hiring</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Enter here..."
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-green-800 transition-colors flex items-center gap-2"
                    >
                        {status === 'sending' ? 'Sending...' : 'Submit Message'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    {status === 'success' && <p className="text-green-600">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-600">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
