import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
