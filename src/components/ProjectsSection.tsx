import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import selfChekoutfoto from '../assets/selfcheckout.png'
import gerenciadorapp from '../assets/cadastro.png'
import PortfolioWebsite from '../assets/portifolio.png'
import WebSite from '../assets/website.png'
import landingPage from '../assets/pageGamer.png'
import Orbitpage from '../assets/orbit_page.png'
import Biblequest from '/src/assets/biblequest.png'
import MottuLiderança from '/src/assets/pagemottu.jpg'


interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Orbit Page',
    description: 'Essa é uma criação minha, uma landingpage de uma ideia de empreendedorismo, um projeto pessoal e especial para mim, que foi pensando em cada detalhe para oferecer uma experiência única aos visitantes.',
    image: Orbitpage,
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'javascript', color: 'bg-yellow-500' },
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'Tailwind CSS', color: 'bg-blue-400' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/Orbit_Page',
    liveUrl: 'https://orbit-page-five.vercel.app/',
  },
  {
    id: 2,
    title: 'Landing Page Gamer',
    description: 'Uma landing page para um jogo, com design responsivo e atraente para a comunidade gamer.',
    image: landingPage,
    technologies: [
      { name: 'HTML', color: 'bg-blue-600' },
      { name: 'CSS', color: 'bg-blue-500' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/page_gamer',
    liveUrl: 'https://page-gamer.vercel.app/',
  },
  {
    id: 3,
    title: 'Guia para lideres de filiais da Mottu',
    description: 'LandingPage para lideres de filiais da Mottu, com design responsivo e atraente.',
    image: MottuLiderança,
    technologies: [
      { name: 'Angular', color: 'bg-red-500' },
      { name: 'HTML', color: 'bg-blue-600' },
      { name: 'CSS', color: 'bg-blue-500' },
      { name: 'Git Actions', color: 'bg-black-500' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/App-para-gerenciar-mentorados',
    liveUrl: 'https://davi-cleancode.github.io/mottu_lideran-a/',
  },
  {
    id: 4,
    title: 'Website',
    description: 'Projeto foi realizado como atividade do curso profissionalizante EBAC.',
    image: WebSite,
    technologies: [
      { name: 'HTML', color: 'bg-blue-600' },
      { name: 'CSS', color: 'bg-blue-500' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/WebSite-Gamer',
    liveUrl: 'https://web-site-gamer.vercel.app/',
  },
  {
    id: 5,
    title: 'bible quest',
    description: 'O intuito é criar um site interativo e gamificado para estudo da bíblia.',
    image: Biblequest,
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'Tailwind CSS', color: 'bg-blue-400' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/',
    liveUrl: 'https://bible-quest-xi.vercel.app/dashboard',
  },
  {
    id: 6,
    title: 'Self Checkout',
    description: 'Site de e-commerce totalmente responsivo com filtro de produtos e funcionalidade de carrinho.',
    image: selfChekoutfoto,
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'typescript', color: 'bg-blue-500' },
      { name: 'Next.Js', color: 'bg-gray-400' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/Self-Checkout',
  },
  {
    id: 7,
    title: 'App para gerenciar mentorados',
    description: 'Aplicativo responsivo para monitoramento de mentorados, com acompanhamento de progresso, metas e feedbacks em tempo real.',
    image: gerenciadorapp,
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Python', color: 'bg-blue-500' },
      { name: 'Django', color: 'bg-orange-500' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/App-para-gerenciar-mentorados',
  },
  {
    id: 8,
    title: 'Portfolio Web',
    description: 'Meu portifólio, criado para monitorar progresso de projetos e oferecer serviços Freelancer.',
    image: PortfolioWebsite,
    technologies: [
      { name: 'React', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'Tailwind CSS', color: 'bg-blue-400' },
      { name: 'Framer Motion', color: 'bg-purple-500' },
    ],
    githubUrl: 'https://github.com/Davi-CleanCode/Portfolio',
    liveUrl: 'https://about-me-davi.vercel.app/',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="card overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`${tech.color} text-white text-xs px-2 py-1 rounded-full`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline py-2 px-3 flex items-center gap-1 text-sm"
          >
            <Github size={16} />
            GitHub
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary py-2 px-3 flex items-center gap-1 text-sm"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section bg-dark-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Aqui estão alguns dos meus projetos recentes. Cada projeto é elaborado com atenção aos detalhes e às melhores práticas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;