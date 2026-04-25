import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, CheckCircle } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall size={32} />,
      title: "1. Solicitação",
      description: "Você entra em contato via telefone ou WhatsApp e nos passa os detalhes da coleta e entrega."
    },
    {
      icon: <MapPin size={32} />,
      title: "2. Coleta Rápida",
      description: "Avaliamos a rota e enviamos um motoboy disponível mais próximo do seu local num curto prazo."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "3. Entrega Segura",
      description: "Sua encomenda chega ao destino com rapidez e segurança, e você é notificado da conclusão."
    }
  ];

  return (
    <section id="process" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-light/20 blur-3xl mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-500/20 blur-3xl mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-light font-bold tracking-wider uppercase mb-2">Processo Simples</h2>
          <h3 className="text-4xl font-extrabold text-white mb-4">Como Funciona</h3>
          <p className="text-lg text-gray-300">
            Três passos simples separam o seu problema logístico de uma solução rápida e eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-brand-light/50 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-brand-light shadow-xl border-4 border-brand-dark mb-6 relative z-10">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
