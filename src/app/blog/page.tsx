'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const posts = [
  {
    id: 'tendencias-web-2025',
    title: 'Tendencias Web 2025: ¿Qué esperan los usuarios en una página moderna?',
    description: 'Descubre las últimas tendencias en diseño web: responsive design, dark mode, animaciones suaves, carga rápida y accesibilidad. Conoce cómo JuSeb implementa estas tecnologías.',
    image: '/blog-default.png',
    date: '15 Enero 2025',
    category: 'Diseño Web',
    readTime: '8 min'
  },
  {
    id: 'checklist-conversion-2025',
    title: '¿Tu sitio web vende por ti? Checklist de conversión digital 2025',
    description: 'Lista completa descargable con elementos clave: formularios optimizados, botón de WhatsApp, testimonios y más. Datos reales sobre cómo mejorar las ventas.',
    image: '/blog-default.png',
    date: '12 Enero 2025',
    category: 'Marketing Digital',
    readTime: '6 min'
  },
  {
    id: 'casos-exito-digitalizacion',
    title: 'Casos de Éxito: cómo ayudamos a clínicas y negocios a digitalizarse con estilo',
    description: 'Historias reales de transformación digital. Fotos del antes/después y resultados concretos de nuestros proyectos más exitosos.',
    image: '/blog-default.png',
    date: '10 Enero 2025',
    category: 'Casos de Éxito',
    readTime: '10 min'
  },
  {
    id: 'mas-que-pagina-web-2025',
    title: '¿Por qué necesitas más que solo una página web en 2025?',
    description: 'La importancia del blog, SEO, CRM, chatbots y más. Incluye guía descargable "Guía básica para emprendedores digitales".',
    image: '/blog-default.png',
    date: '8 Enero 2025',
    category: 'Estrategia Digital',
    readTime: '7 min'
  },
  {
    id: 'ia-para-negocios-sin-programar',
    title: 'Cómo usar IA en tu negocio (sin ser programador)',
    description: 'Herramientas simples de IA: formularios inteligentes, ChatGPT embebido, asistentes de soporte. Descubre nuestros servicios de integración.',
    image: '/blog-default.png',
    date: '5 Enero 2025',
    category: 'Inteligencia Artificial',
    readTime: '9 min'
  },
  {
    id: 'ecommerce-local-futuro',
    title: 'El futuro del e-commerce local: vender en tu ciudad con estilo y velocidad',
    description: 'Para negocios de barrio y pymes que quieren competir online. Plantillas, funciones de carrito, pagos, reseñas y cómo destacar localmente.',
    image: '/blog-default.png',
    date: '3 Enero 2025',
    category: 'E-commerce',
    readTime: '8 min'
  },
  {
    id: 'errores-diseno-seo',
    title: '10 errores de diseño web que están matando tu posicionamiento en Google',
    description: 'Guía práctica sobre velocidad, texto oculto, falta de H1, y otros errores críticos que afectan tu SEO. Soluciones inmediatas incluidas.',
    image: '/blog-default.png',
    date: '1 Enero 2025',
    category: 'SEO',
    readTime: '12 min'
  },
  {
    id: 'excel-al-exito-automatizacion',
    title: 'Del Excel al Éxito: cómo automatizar tu negocio con herramientas web',
    description: 'Para negocios que aún usan tablas y papel. Ejemplos de dashboards y automatizaciones que transformarán tu gestión empresarial.',
    image: '/blog-default.png',
    date: '28 Diciembre 2024',
    category: 'Automatización',
    readTime: '11 min'
  },
  {
    id: 'chatbot-vale-la-pena-2025',
    title: '¿Vale la pena tener un chatbot en 2025? Lo probamos y estos son los resultados',
    description: 'Análisis completo usando nuestro proyecto Chatea.pro. Capturas, flujos de conversación y mejoras reales en tiempo de respuesta.',
    image: '/blog-default.png',
    date: '25 Diciembre 2024',
    category: 'Chatbots',
    readTime: '10 min'
  },
  {
    id: 'herramientas-gratuitas-emprendedores',
    title: 'JuSeb recomienda: 7 herramientas gratuitas para emprendedores digitales',
    description: 'Notion, Trello, ChatGPT, Canva, Figma, Google Forms y más. Ejemplos de integración y cómo complementarlas con nuestros servicios.',
    image: '/blog-default.png',
    date: '22 Diciembre 2024',
    category: 'Herramientas',
    readTime: '6 min'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-normal md:leading-normal">
            Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explora nuestros artículos sobre tecnología, desarrollo y tendencias digitales
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    <span className="text-sm font-medium">Leer más</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 