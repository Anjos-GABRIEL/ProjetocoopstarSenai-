import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Como Funciona', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div className="hidden md:flex bg-gray-900 text-gray-300 py-2 px-6 text-sm justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-brand-light" />
            <span>(11) 5052-3563 / 5051-4442</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-brand-light" />
            <span>Av. Jurucê, 898 - Moema - São Paulo - SP</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/85 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
        } ${isScrolled ? 'top-0' : 'top-0 md:top-[36px]'}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <img 
                src="/logo.png" 
                alt="Coopstar Express Logotipo" 
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'} brightness-110 drop-shadow-sm group-hover:scale-105`} 
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm uppercase tracking-wide hover:text-brand-light transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900 md:text-gray-900 md:bg-white/70 md:px-3 md:py-1 md:rounded-full md:backdrop-blur-sm'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-dark/30"
              >
                Solicitar Coleta
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-md transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-900 bg-white/70 backdrop-blur-sm'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 flex flex-col space-y-4 px-6 border-t border-gray-100"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-800 border-b border-gray-50 pb-2 hover:text-brand-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand text-center text-white px-6 py-3 rounded-md font-bold mt-2 hover:bg-brand-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solicitar Coleta
            </a>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
