import React from 'react';
import { Link } from 'react-scroll';
import { Download, ArrowDown, Code, Mail, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/perfilnova.png';
import curriculo from '../assets/Davi.viana.pdf';

const HeroSection: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = curriculo;
    link.click();
  };

  {
    return (
      <section id="home" className="section min-h-screen flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-8 relative mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-40 h-40 rounded-full mx-auto overflow-hidden border-4 border-primary-500 p-1 relative group">

              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-800 to-primary-500 flex items-center justify-center text-lg font-medium group-hover:shadow-glow transition-all duration-300">
                <img
                  src={fotoPerfil}
                  alt="Minha Foto"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: 'top center' }}
                />

              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Davi Dos Santos Viana
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-primary-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Full Stack Developer | Node.js, Python, C#, SQL & TypeScript | Business the analyst and Software Engineer
          </motion.p>

          <motion.p
            className="text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Estudante de Gestão de Tecnologia da Informação, especializado em desenvolvimento Full Stack e gestão de projetos, apaixonado por transformar ideias em soluções reais.
            Tenho experiência em análise de negócios e dados, automação de processos e integração de sistemas, aplicando metodologias ágeis e boas práticas de engenharia de software para gerar eficiência e impacto mensurável.
            Atualmente, foco em desenvolvimento back-end com Node.js, Python e SQL, construindo aplicações escaláveis que unem tecnologia e visão estratégica.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={handleResumeDownload}
              className="btn btn-primary flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </button>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-outline flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={18} />
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="card flex flex-col items-center text-center p-6 cursor-pointer"
            >
              <Code size={36} className="text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">View Projects</h3>
              <p className="text-gray-400">Analise meus últimos trabalhos e projetos</p>
            </Link>

            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="card flex flex-col items-center text-center p-6 cursor-pointer"
            >
              <Mail size={36} className="text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-400">Entre em contato por e-mail ou mídia social</p>
            </Link>

            <Link
              to="hire"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="card flex flex-col items-center text-center p-6 cursor-pointer"
            >
              <Briefcase size={36} className="text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hire My Services</h3>
              <p className="text-gray-400">Vamos discutir as necessidades do seu projeto</p>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ArrowDown size={24} className="text-primary-500" />
          </Link>
        </div>
      </section>
    );
  };
};

export default HeroSection;