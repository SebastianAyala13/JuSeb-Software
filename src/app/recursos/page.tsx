'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import SeoHead from '../components/SeoHead'

const categorias = [
  { id: 'todos', nombre: 'Todos', icono: '📚' },
  { id: 'desarrollo', nombre: 'Desarrollo Web', icono: '🌐' },
  { id: 'marketing', nombre: 'Marketing Digital', icono: '📈' },
  { id: 'diseno', nombre: 'Diseño UX/UI', icono: '🎨' },
  { id: 'seo', nombre: 'SEO', icono: '🔍' },
  { id: 'herramientas', nombre: 'Herramientas', icono: '🛠️' }
];

const recursos = [
  {
    titulo: "Guía Completa de SEO para Principiantes",
    descripcion: "Todo lo que necesitas saber para posicionar tu sitio web en Google",
    categoria: "seo",
    tipo: "Guía PDF",
    tiempo: "30 min",
    descarga: "/downloads/guia-seo-principiantes.pdf",
    imagen: "/images/resources/seo-guide.jpg",
    popular: true
  },
  {
    titulo: "Checklist de Conversión Digital 2025",
    descripcion: "Lista verificable de 50 puntos para digitalizar tu negocio",
    categoria: "marketing",
    tipo: "Checklist",
    tiempo: "15 min",
    descarga: "/downloads/checklist-conversion-digital.pdf",
    imagen: "/images/resources/digital-checklist.jpg",
    popular: true
  },
  {
    titulo: "Kit de Herramientas Gratuitas para Emprendedores",
    descripcion: "25+ herramientas gratuitas para hacer crecer tu negocio online",
    categoria: "herramientas",
    tipo: "Lista",
    tiempo: "20 min",
    descarga: "/downloads/herramientas-gratuitas.pdf",
    imagen: "/images/resources/tools-kit.jpg",
    popular: false
  },
  {
    titulo: "Plantillas de Email Marketing",
    descripcion: "10 plantillas probadas que aumentan la tasa de apertura",
    categoria: "marketing",
    tipo: "Plantillas",
    tiempo: "10 min",
    descarga: "/downloads/plantillas-email.zip",
    imagen: "/images/resources/email-templates.jpg",
    popular: false
  },
  {
    titulo: "Guía de Colores para Sitios Web",
    descripcion: "Psicología del color aplicada al diseño web",
    categoria: "diseno",
    tipo: "Guía",
    tiempo: "25 min",
    descarga: "/downloads/guia-colores-web.pdf",
    imagen: "/images/resources/color-guide.jpg",
    popular: false
  },
  {
    titulo: "Checklist de Rendimiento Web",
    descripcion: "Optimiza la velocidad de tu sitio web paso a paso",
    categoria: "desarrollo",
    tipo: "Checklist",
    tiempo: "20 min",
    descarga: "/downloads/checklist-rendimiento.pdf",
    imagen: "/images/resources/performance-checklist.jpg",
    popular: true
  }
];

const faqs = [
  {
    categoria: "General",
    preguntas: [
      {
        pregunta: "¿Cuánto tiempo toma desarrollar un sitio web?",
        respuesta: "Depende de la complejidad del proyecto. Un sitio básico toma 2-4 semanas, uno profesional 6-8 semanas, y proyectos enterprise 8-12 semanas. Siempre entregamos en los plazos acordados."
      },
      {
        pregunta: "¿Qué incluye el mantenimiento del sitio web?",
        respuesta: "Incluye actualizaciones de seguridad, backups automáticos, monitoreo 24/7, actualizaciones de contenido menores, soporte técnico y reportes mensuales de rendimiento."
      },
      {
        pregunta: "¿Ofrecen garantía en sus servicios?",
        respuesta: "Sí, ofrecemos garantía de 30 días en todos nuestros proyectos. Si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas."
      }
    ]
  },
  {
    categoria: "Técnico",
    preguntas: [
      {
        pregunta: "¿Qué tecnologías utilizan para el desarrollo?",
        respuesta: "Utilizamos tecnologías modernas como React, Next.js, Node.js, TypeScript, Tailwind CSS, y bases de datos como PostgreSQL y MongoDB. Todo optimizado para rendimiento y SEO."
      },
      {
        pregunta: "¿Los sitios web son responsivos?",
        respuesta: "Absolutamente. Todos nuestros sitios web están optimizados para móviles, tablets y desktop. Utilizamos diseño mobile-first para garantizar la mejor experiencia en todos los dispositivos."
      },
      {
        pregunta: "¿Incluyen optimización SEO?",
        respuesta: "Sí, todos nuestros sitios incluyen SEO técnico básico: meta tags, sitemap, velocidad optimizada, estructura semántica y configuración de Google Analytics y Search Console."
      }
    ]
  },
  {
    categoria: "Comercial",
    preguntas: [
      {
        pregunta: "¿Cuáles son las formas de pago?",
        respuesta: "Aceptamos transferencias bancarias, PSE, tarjetas de crédito/débito y pagos internacionales. Ofrecemos planes de pago flexibles para proyectos grandes."
      },
      {
        pregunta: "¿Puedo hacer cambios después del lanzamiento?",
        respuesta: "Sí, incluimos 2 rondas de cambios menores sin costo. Para cambios mayores, ofrecemos tarifas preferenciales a nuestros clientes existentes."
      },
      {
        pregunta: "¿Trabajan con clientes internacionales?",
        respuesta: "Sí, trabajamos con clientes en toda Latinoamérica y Estados Unidos. Manejamos diferentes zonas horarias y métodos de pago internacionales."
      }
    ]
  }
];

const herramientasGratuitas = [
  {
    nombre: "Analizador de Velocidad Web",
    descripcion: "Analiza qué tan rápido carga tu sitio web",
    url: "https://pagespeed.web.dev/",
    icono: "⚡"
  },
  {
    nombre: "Generador de Paletas de Colores",
    descripcion: "Crea paletas de colores profesionales",
    url: "https://coolors.co/",
    icono: "🎨"
  },
  {
    nombre: "Optimizador de Imágenes",
    descripcion: "Reduce el tamaño de tus imágenes sin perder calidad",
    url: "https://tinypng.com/",
    icono: "🖼️"
  },
  {
    nombre: "Verificador de SEO",
    descripcion: "Analiza el SEO de tu sitio web",
    url: "https://www.seobility.net/",
    icono: "🔍"
  }
];

export default function Recursos() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [faqAbierta, setFaqAbierta] = useState<string | null>(null);
  const [emailDescarga, setEmailDescarga] = useState('');
  const [mostrarFormDescarga, setMostrarFormDescarga] = useState<string | null>(null);

  const recursosFiltrados = categoriaActiva === 'todos' 
    ? recursos 
    : recursos.filter(recurso => recurso.categoria === categoriaActiva);

  const toggleFaq = (id: string) => {
    setFaqAbierta(faqAbierta === id ? null : id);
  };

  const handleDescarga = (recurso: any) => {
    setMostrarFormDescarga(recurso.titulo);
  };

  const procesarDescarga = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de descarga real
    setMostrarFormDescarga(null);
    setEmailDescarga('');
    alert('¡Descarga iniciada! Revisa tu email.');
  };

  return (
    <>
      <SeoHead
        title="Centro de Recursos - Guías, Herramientas y FAQs | JuSeb SOFTWARE"
        description="Recursos gratuitos para hacer crecer tu negocio: guías de SEO, checklists de conversión, herramientas y respuestas a preguntas frecuentes."
        canonical="https://juseb-software.com/recursos"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Centro de Recursos
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Guías, herramientas y recursos gratuitos para hacer crecer tu negocio online. 
              Todo lo que necesitas en un solo lugar.
            </p>
          </motion.div>

          {/* Filtros de Categoría */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categorias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  categoriaActiva === categoria.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {categoria.icono} {categoria.nombre}
              </button>
            ))}
          </motion.div>

          {/* Grid de Recursos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {recursosFiltrados.map((recurso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                {recurso.popular && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 text-sm font-bold">
                    🔥 Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {recurso.tipo}
                    </span>
                    <span className="text-gray-400 text-sm">⏱️ {recurso.tiempo}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{recurso.titulo}</h3>
                  <p className="text-gray-400 mb-6">{recurso.descripcion}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDescarga(recurso)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    📥 Descargar Gratis
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Herramientas Gratuitas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              🛠️ Herramientas Gratuitas Recomendadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {herramientasGratuitas.map((herramienta, index) => (
                <motion.a
                  key={index}
                  href={herramienta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 block"
                >
                  <div className="text-3xl mb-4">{herramienta.icono}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{herramienta.nombre}</h3>
                  <p className="text-gray-400 text-sm">{herramienta.descripcion}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ❓ Preguntas Frecuentes
            </h2>
            
            {faqs.map((categoria, categoriaIndex) => (
              <div key={categoriaIndex} className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">
                    {categoriaIndex + 1}
                  </span>
                  {categoria.categoria}
                </h3>
                
                <div className="space-y-4">
                  {categoria.preguntas.map((faq, faqIndex) => {
                    const faqId = `${categoriaIndex}-${faqIndex}`;
                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 + faqIndex * 0.1 }}
                        className="bg-gray-800/50 rounded-lg border border-gray-700"
                      >
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                        >
                          <span className="text-white font-medium">{faq.pregunta}</span>
                          <motion.span
                            animate={{ rotate: faqAbierta === faqId ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-blue-400 text-xl"
                          >
                            ▼
                          </motion.span>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: faqAbierta === faqId ? 'auto' : 0,
                            opacity: faqAbierta === faqId ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-400">
                            {faq.respuesta}
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center bg-gray-800/50 rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ¿No Encontraste lo que Buscabas?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Nuestro equipo está aquí para ayudarte. Contáctanos y te ayudaremos 
              a encontrar la solución perfecta para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  💬 Contactar Experto
                </motion.button>
              </Link>
              <Link href="/servicios">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-medium text-lg hover:bg-green-500 hover:text-white transition-colors"
                >
                  🚀 Ver Servicios
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de Descarga */}
      {mostrarFormDescarga && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setMostrarFormDescarga(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-2xl p-8 max-w-md w-full border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">📥 Descargar Recurso</h3>
            <p className="text-gray-400 mb-6">
              Ingresa tu email para recibir <strong>{mostrarFormDescarga}</strong> directamente en tu bandeja de entrada.
            </p>
            
            <form onSubmit={procesarDescarga} className="space-y-4">
              <input
                type="email"
                value={emailDescarga}
                onChange={(e) => setEmailDescarga(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setMostrarFormDescarga(null)}
                  className="flex-1 py-3 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Descargar
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam. Solo recursos valiosos para tu negocio.
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 