'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'Las Tendencias de Desarrollo Web en 2024',
    excerpt: 'Descubre las tecnologías y prácticas que están definiendo el desarrollo web moderno.',
    image: '/blog-default.png',
    date: '2024-03-05',
    category: 'Desarrollo Web',
    readTime: '5 min'
  },
  {
    id: 2,
    title: 'Inteligencia Artificial en el Desarrollo de Software',
    excerpt: 'Cómo la IA está transformando la manera en que desarrollamos software.',
    image: '/blog-default.png',
    date: '2024-03-04',
    category: 'Inteligencia Artificial',
    readTime: '7 min'
  },
  {
    id: 3,
    title: 'Mejores Prácticas en Desarrollo Móvil',
    excerpt: 'Guía completa para desarrollar aplicaciones móviles de alta calidad.',
    image: '/blog-default.png',
    date: '2024-03-03',
    category: 'Desarrollo Móvil',
    readTime: '6 min'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explora nuestros artículos sobre tecnología, desarrollo y tendencias en la industria del software
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gray-900/60 z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-gray-400">{post.date}</time>
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-white mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Leer más
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Suscríbete a nuestro newsletter
          </h3>
          <p className="text-gray-400 mb-6">
            Recibe las últimas actualizaciones y artículos directamente en tu bandeja de entrada
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 