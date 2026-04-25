import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Package, Map, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText size={40} />,
      title: "Serviços Moto Frete",
      description: "Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade incluindo serviços bancários, cartórios, despachos e retiradas em aeroportos.",
      color: "from-brand to-red-400"
    },
    {
      icon: <Package size={40} />,
      title: "Delivery Corporativo",
      description: "Se sua empresa tem um grande volume de documentos ou encomendas leves, implantamos em sua empresa um serviço de delivery com o melhor custo-benefício.",
      features: ["Farmácias", "Pizzarias", "Restaurantes", "Auto Peças"],
      color: "from-brand-dark to-brand"
    },
    {
      icon: <Map size={40} />,
      title: "Fora da Capital",
      description: "Atendemos não somente a capital, mas realizamos percursos para o Interior, Litoral e outros Estados com agendamento prévio.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-light font-bold tracking-wider uppercase mb-2">O que fazemos</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Nossos Serviços</h3>
          <p className="text-lg text-gray-600">
            Soluções completas e sob medida em logística para o seu negócio não parar de girar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 group relative overflow-hidden flex flex-col h-full"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-light/10 transition-colors">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
              
              {service.features && (
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
              )}

              <a href="#contact" className="inline-flex items-center text-brand-light font-bold hover:text-brand-dark transition-colors mt-auto">
                Solicitar orçamento <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
