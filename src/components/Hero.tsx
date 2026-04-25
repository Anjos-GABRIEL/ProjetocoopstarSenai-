import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      >
        {/* Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand/20 text-brand-light backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-brand/30 shadow-sm"
          >
            <MapPin size={16} />
            <span className="text-sm font-semibold tracking-wide uppercase">Atendimento em toda Grande São Paulo</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Entregas <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-red-300">Rápidas e Seguras</span> para o seu Negócio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
          >
            Agilize seus serviços com a Coopstar Express. Há mais de 9 anos no mercado de entregas, oferecendo a melhor logística corporativa e personal delivery 24 horas por dia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-brand/20"
            >
              Solicitar Tabela de Preços
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all"
            >
              Conhecer Serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
