import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-xl font-bold font-sans flex items-center gap-2">
                    <span className="bg-accent text-white p-1 rounded-full w-8 h-8 flex items-center justify-center">D</span>
                    Dhilip.
                </div>
                <div className="text-gray-300 text-sm">
                    © {new Date().getFullYear()} Dhilip Kumar B. All rights reserved.
                </div>
                <div className="flex gap-4">
                    {/* Social links can go here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
