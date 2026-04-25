import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-8 border-t border-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
        
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-gray-400">Coopstar<span className="text-brand-dark">Express</span></span> &copy; {new Date().getFullYear()}. Todos os direitos reservados.
        </div>
        
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-brand-light transition-colors">Quem Somos</a>
          <a href="#services" className="hover:text-brand-light transition-colors">Serviços</a>
          <a href="#process" className="hover:text-brand-light transition-colors">Como Funciona</a>
          <a href="#faq" className="hover:text-brand-light transition-colors">FAQ</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
