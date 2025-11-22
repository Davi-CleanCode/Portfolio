import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    disponibilidade: '',
    detalhes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage('✅ ' + result.message);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          disponibilidade: '',
          detalhes: ''
        });
      } else {
        setMessage('❌ ' + result.message);
      }
    } catch (error) {
      setMessage('❌ Erro ao enviar mensagem. Verifique se o backend está rodando.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Entre em contato</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        
        {/* Formulário de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="card max-w-4xl mx-auto mb-16 p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-primary-400">
            Vamos transformar sua necessidade em solução?
          </h3>
          <p className="text-gray-300 text-center mb-8">
            Preencha o formulário e conversamos!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-300">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-semibold text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-gray-300">
                  Número para Contato *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400 transition-colors duration-300"
                  placeholder="+55 (11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-semibold text-gray-300">
                  Disponibilidade para Chamadas *
                </label>
                <select
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white transition-colors duration-300"
                >
                  <option value="">Selecione a disponibilidade</option>
                  <option value="manha">Manhã (8h-12h)</option>
                  <option value="tarde">Tarde (13h-18h)</option>
                  <option value="noite">Noite (18h-21h)</option>
                  <option value="flexivel">Horário Flexível</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-300">
                Detalhes ou Escopo do Projeto *
              </label>
              <textarea
                name="detalhes"
                value={formData.detalhes}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 text-white placeholder-gray-400 transition-colors duration-300 resize-none"
                placeholder="Conte-me sobre as necessidades do seu projeto..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Enviar Mensagem
                </>
              )}
            </motion.button>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-center ${
                  message.includes('✅') 
                    ? 'bg-green-900/20 border border-green-500 text-green-200' 
                    : 'bg-red-900/20 border border-red-500 text-red-200'
                }`}
              >
                {message}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Canais de Contato Existentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="mailto:daviviana2732@gmail.com"
            className="card flex flex-col items-center text-center p-8 cursor-pointer group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
              <Mail size={28} className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Email</h3>
            <p className="text-gray-400 break-all">daviviana2732@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/vianadavi"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center text-center p-8 cursor-pointer group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
              <Linkedin size={28} className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400">linkedin.com/in/vianadavi</p>
          </motion.a>

          <motion.a
            href="https://wa.me/5511914828157"
            className="card flex flex-col items-center text-center p-8 cursor-pointer group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
              <Phone size={28} className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-1">WhatsApp</h3>
            <p className="text-gray-400">+55 (11) 91482-8157</p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;