import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  images: string[]
  link: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Meu Artigo no LinkedIn',
    excerpt: 'Quando um evento muda a forma como você enxerga sua carreira.',
    images: [
      '/src/assets/blog/Artigofiap01.jpg',
      '/src/assets/blog/Artigofiap02.jpg',
      '/src/assets/blog/Artigofiap03.jpg',
      '/src/assets/blog/Artigofiap04.jpg',
    ],
    link: 'https://www.linkedin.com/posts/vianadavi_carreiraemt-fiap-tecnologia-activity-7321515804221423617-oQip',
    date: '2025-04-25',
  },
]

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (post.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % post.images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [post.images])

  return (
    <motion.div
      className="card overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="relative h-56 overflow-hidden rounded-t-lg bg-black">
        <img
          src={post.images[currentImage]}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"
        />
      </div>

      <div className="flex-1 p-6 flex flex-col">
        <span className="text-sm text-primary-400 mb-2">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </span>

        <h3 className="text-xl font-semibold mb-2">
          {post.title}
        </h3>

        <p className="text-gray-400 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {post.link && (
          <div className="mt-auto">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary py-2 px-3 flex items-center gap-2 text-sm w-fit"
            >
              <ExternalLink size={16} />
              Ler artigo
            </a>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section bg-dark-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Artigos & Conteúdo
        </h2>

        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8"></div>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Artigos, reflexões e aprendizados que compartilho ao longo da minha jornada em tecnologia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default BlogSection
