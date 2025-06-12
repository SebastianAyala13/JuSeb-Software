'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import SeoHead from '../../components/SeoHead';

const blogPosts = {
  '1': {
    title: 'Las Tendencias de Desarrollo Web en 2024',
    category: 'Desarrollo Web',
    date: '2024-03-05',
    readTime: '5 min',
    image: '/blog-default.png',
    content: `
      El desarrollo web está en constante evolución, y 2024 no es la excepción. Veamos las tendencias más importantes que están definiendo el futuro del desarrollo web.

      ## 1. Arquitecturas sin Servidor (Serverless)

      La computación serverless está revolucionando la forma en que desarrollamos aplicaciones web:
      - Menor mantenimiento de infraestructura
      - Escalabilidad automática
      - Modelo de pago por uso
      - Mayor enfoque en la lógica de negocio

      ## 2. Web Components y Micro-frontends

      La modularización del frontend está ganando terreno:
      - Componentes reutilizables y encapsulados
      - Mejor mantenibilidad
      - Desarrollo independiente de equipos
      - Integración más sencilla

      ## 3. Progressive Web Apps (PWAs)

      Las PWAs siguen siendo relevantes en 2024:
      - Experiencia similar a aplicaciones nativas
      - Funcionamiento offline
      - Mejor rendimiento
      - Instalables en dispositivos

      ## 4. Jamstack y Generación Estática

      La arquitectura Jamstack está madurando:
      - Mejor rendimiento
      - Mayor seguridad
      - SEO mejorado
      - Costos reducidos de hosting

      ## 5. Inteligencia Artificial en el Desarrollo

      La IA está transformando el desarrollo web:
      - Generación automática de código
      - Optimización de rendimiento
      - Personalización de experiencias
      - Debugging inteligente

      ## Conclusión

      El desarrollo web en 2024 se centra en la eficiencia, el rendimiento y la experiencia del usuario. Las tecnologías emergentes están haciendo posible crear aplicaciones web más potentes y accesibles que nunca.
    `
  },
  '2': {
    title: 'Inteligencia Artificial en el Desarrollo de Software',
    category: 'Inteligencia Artificial',
    date: '2024-03-04',
    readTime: '7 min',
    image: '/blog-default.png',
    content: `
      La Inteligencia Artificial está revolucionando la forma en que desarrollamos software. Exploremos cómo esta tecnología está transformando la industria.

      ## Impacto de la IA en el Desarrollo

      La IA está cambiando fundamentalmente cómo creamos software:
      - Automatización de tareas repetitivas
      - Mejora en la calidad del código
      - Predicción de bugs
      - Optimización de procesos

      ## Herramientas de IA para Desarrolladores

      Las principales herramientas que están transformando el desarrollo:
      - Copilots y asistentes de código
      - Análisis estático mejorado
      - Testing automatizado
      - Optimización de rendimiento

      ## IA en el Ciclo de Desarrollo

      La integración de IA en diferentes etapas:
      - Planificación y estimación
      - Desarrollo y codificación
      - Testing y QA
      - Mantenimiento y monitoreo

      ## Mejores Prácticas

      Cómo aprovechar la IA en tu proceso de desarrollo:
      - Selección de herramientas adecuadas
      - Integración con flujos de trabajo existentes
      - Capacitación del equipo
      - Evaluación continua de resultados

      ## Desafíos y Consideraciones

      Aspectos a tener en cuenta:
      - Calidad y revisión del código generado
      - Seguridad y privacidad
      - Curva de aprendizaje
      - Costos de implementación

      ## El Futuro del Desarrollo con IA

      Lo que podemos esperar:
      - Herramientas más sofisticadas
      - Mayor automatización
      - Nuevos roles y habilidades
      - Cambios en metodologías de desarrollo
    `
  },
  '3': {
    title: 'Mejores Prácticas en Desarrollo Móvil',
    category: 'Desarrollo Móvil',
    date: '2024-03-03',
    readTime: '6 min',
    image: '/blog-default.png',
    content: `
      El desarrollo de aplicaciones móviles requiere un enfoque específico para garantizar la mejor experiencia de usuario. Aquí te presentamos las mejores prácticas.

      ## Diseño y UX

      Principios fundamentales:
      - Diseño intuitivo y consistente
      - Navegación clara
      - Accesibilidad
      - Rendimiento optimizado

      ## Arquitectura y Código

      Bases para un código mantenible:
      - Patrones de diseño apropiados
      - Clean Architecture
      - SOLID principles
      - Testing exhaustivo

      ## Rendimiento

      Optimización del rendimiento:
      - Gestión de memoria
      - Carga eficiente de recursos
      - Caché y almacenamiento local
      - Optimización de imágenes

      ## Seguridad

      Aspectos críticos de seguridad:
      - Encriptación de datos
      - Autenticación segura
      - Protección contra ataques comunes
      - Cumplimiento de normativas

      ## Testing y QA

      Estrategias de testing:
      - Tests unitarios
      - Tests de integración
      - Tests de UI
      - Testing automatizado

      ## Despliegue y Mantenimiento

      Consideraciones post-desarrollo:
      - CI/CD
      - Monitoreo y analytics
      - Actualizaciones regulares
      - Soporte y mantenimiento
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Artículo no encontrado</h1>
          <Link href="/blog" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  const schemaOrgBlog = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.content.substring(0, 150),
    image: `https://juseb-software.com${post.image}`,
    author: {
      '@type': 'Person',
      name: 'Juan Sebastian Ayala Martin',
    },
    publisher: {
      '@type': 'Organization',
      name: 'JuSeb SOFTWARE',
      logo: {
        '@type': 'ImageObject',
        url: 'https://juseb-software.com/logo.png',
      },
    },
    datePublished: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://juseb-software.com/blog/${id}`,
    },
  };

  return (
    <>
      <SeoHead
        title={`${post.title} | Blog | JuSeb SOFTWARE`}
        description={post.content.substring(0, 150)}
        canonical={`https://juseb-software.com/blog/${id}`}
        schema={schemaOrgBlog}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Encabezado */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <span className="text-blue-400">{post.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400">{post.readTime}</span>
                <span className="text-gray-400">•</span>
                <time className="text-gray-400">{post.date}</time>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                {post.title}
              </h1>
          {/* Encabezado */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-blue-400">{post.category}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">{post.readTime}</span>
              <span className="text-gray-400">•</span>
              <time className="text-gray-400">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {post.title}

            {/* Imagen destacada */}
            <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
              {/* Optimización: portada WebP y lazy loading, fallback si no existe */}
              <Image
                src={post.image.replace('.png', '.webp')}
                alt={post.title}
                className="w-full h-64 object-cover rounded-xl mb-8"
                width={800}
                height={320}
                loading="lazy"
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            </div>

            {/* Contenido */}
            <div className="prose prose-invert prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-xl md:text-2xl font-bold text-white mt-8 mb-4 break-words whitespace-normal leading-tight max-w-xl mx-auto">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-300 ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-300 mb-4">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-300 ml-4">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-300 mb-4">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* Navegación */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al Blog
            </Link>
          </div>
        </motion.article>
      </div>
    </div>
  );
} 