import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-light min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
