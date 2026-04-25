import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Atendem fora do horário comercial?",
      answer: "Sim! Funcionamos 24 horas por dia, de Segunda a Segunda-feira. Importante ressaltar que para serviços fora do horário comercial (noturno, finais de semana ou feriados) é recomendável agendamento."
    },
    {
      question: "Como funciona a entrega para fora da Capital (SP)?",
      answer: "Realizamos coletas para Litoral e Interior. Para estes destinos, temos uma tabela de preços diferenciada. Basta entrar em contato com um de nossos atendentes para obter a cotação precisa do seu frete."
    },
    {
      question: "Quais os tipos de volumes aceitos no Moto Frete?",
      answer: "Nossos motoboys transportam documentos, pastas, pequenas encomendas, insumos para clínicas, autopeças, delivery de farmácia e fast-food, desde que as dimensões e pesos estejam dentro da legislação do município."
    },
    {
      question: "Como faço um contrato de prestação de serviços (Delivery Corporativo)?",
      answer: "Você pode nos contatar pelo telefone (11) 5052-3563 para analisar sua demanda. Podemos disponibilizar motoboys fixos ou em sistema de cotas diárias de acordo com a sua necessidade (Pizzarias, Farmácias, Clínicas, etc)."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-light font-bold tracking-wider uppercase mb-2">Dúvidas Comuns</h2>
          <h3 className="text-4xl font-extrabold text-gray-900">Perguntas Frequentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left font-semibold text-lg text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown 
                  className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-light' : 'text-gray-400'}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-600 bg-white leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
