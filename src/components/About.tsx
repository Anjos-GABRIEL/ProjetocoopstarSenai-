import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Clock size={32} className="text-brand-light" />,
      title: "Disponibilidade 24h",
      description: "Operamos de Segunda a Segunda-feira, com agendamento via hora marcada para sua conveniência."
    },
    {
      icon: <Target size={32} className="text-brand-light" />,
      title: "Agilidade Comprovada",
      description: "Agilizamos os mais diversos serviços, tornando-nos uma empresa de destaque no segmento de logística expresso."
    },
    {
      icon: <Users size={32} className="text-brand-light" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados para suprir as necessidades da sua empresa e garantir total êxito na entrega."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-light font-bold tracking-wider uppercase mb-2">Quem Somos</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Mais de 9 Anos Entregando com <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand">Eficiência</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Coopstar Express é uma empresa especializada no serviço de entregas e coletas que atua com excelência no mercado. Nosso objetivo principal é desempenhar uma função vital para nossos clientes: agilizar serviços com total segurança. Atendemos em São Paulo (Capital) e Grande São Paulo.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            {/* Soft gradient graphic replacement for literal photo, to maintain modern aesthetic without relying on placeholder images */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-brand-dark"></div>
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <div className="w-24 h-24 bg-brand-light/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-brand-light/30 group-hover:scale-110 transition-transform duration-500">
                <Target size={40} className="text-brand-light" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Garantia de Êxito</h3>
              <p className="text-gray-300 text-lg">Suprimos suas demandas logísticas para que você foque no seu verdadeiro negócio.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
