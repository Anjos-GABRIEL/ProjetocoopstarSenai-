import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-light font-bold tracking-wider uppercase mb-2">Fale Conosco</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Contato & Localização</h3>
          <p className="text-lg text-gray-600">
            Nossa equipe de atendimento está pronta para ouvir sua solicitação e enviar um portador imediatamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Info Side */}
          <div className="p-10 lg:p-14 bg-brand-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <h4 className="text-3xl font-bold mb-8 relative z-10">Informações de Contato</h4>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <MapPin size={28} className="text-brand-light flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Nosso Endereço</h5>
                  <p className="text-gray-300">Av. Jurucê, 898 - Moema<br />São Paulo - SP, CEP 04080-000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone size={28} className="text-brand-light flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Telefones</h5>
                  <p className="text-gray-300 font-medium">(11) 5052-3563</p>
                  <p className="text-gray-300 font-medium">(11) 5051-4442</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail size={28} className="text-brand-light flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg mb-1">E-mail</h5>
                  <p className="text-gray-300">coopstar_express@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock size={28} className="text-brand-light flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Horário de Funcionamento</h5>
                  <p className="text-gray-300">24 horas de Segunda a Segunda-feira<br />*Sujeito a agendamento noturno</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-14">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo / Empresa</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all"
                    placeholder="(11) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-light focus:border-brand-light outline-none transition-all resize-none"
                  placeholder="Descreva o que preicsa..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-light hover:bg-brand-dark text-white font-bold py-4 rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-brand-light/30"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
