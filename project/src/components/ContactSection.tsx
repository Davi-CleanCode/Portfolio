import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
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
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Sinta-se à vontade para entrar em contato comigo por qualquer um dos seguintes canais. Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="mailto:your.email@example.com"
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
            <p className="text-gray-400">https://www.linkedin.com/in/vianadavi</p>
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            className="card flex flex-col items-center text-center p-8 cursor-pointer group"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
              <Phone size={28} className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-1">Phone</h3>
            <p className="text-gray-400">+55 (11) 91482-8157</p>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;