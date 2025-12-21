import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="section-container bg-light/50">
            <div className="text-center mb-16">
                <div className="text-secondary font-semibold mb-2">- Education & Work</div>
                <h2 className="text-3xl font-bold text-dark">
                    My Academic and <br />
                    <span className="text-accent">Professional Journey</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Education Column */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-dark">Education</h3>
                    </div>

                    <div className="space-y-8 pl-4 border-l-2 border-gray-100">
                        <div className="relative pl-8">
                            <div className="absolute -left-[21px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                            <div className="text-sm text-gray-500 mb-1">2024 - 2028</div>
                            <h4 className="text-lg font-bold text-dark">Bachelor of Engineering</h4>
                            <div className="text-gray-600">St. Joseph's College of Engineering</div>
                            <div className="text-sm text-gray-400 mt-1">Chennai</div>
                        </div>
                    </div>
                </div>

                {/* Work Experience Column */}
                <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-dark">Work Experience</h3>
                    </div>

                    <div className="space-y-8 pl-4 border-l-2 border-gray-100">
                        <div className="relative pl-8">
                            <div className="absolute -left-[21px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                            <div className="text-sm text-gray-500 mb-1">2025</div>
                            <h4 className="text-lg font-bold text-dark">Java Programming Intern</h4>
                            <div className="text-gray-600">CodSoft</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
