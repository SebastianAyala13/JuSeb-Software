'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SeoHead from '../../components/SeoHead'

const beneficios = [
  {
    titulo: "Aumento de Ventas",
    descripcion: "Sitios web optimizados que convierten visitantes en clientes",
    porcentaje: "340%",
    icono: "📈"
  },
  {
    titulo: "Mejor Posicionamiento",
    descripcion: "SEO avanzado para aparecer primero en Google",
    porcentaje: "280%",
    icono: "🔍"
  },
  {
    titulo: "Carga Ultra Rápida",
    descripcion: "Sitios que cargan en menos de 2 segundos",
    porcentaje: "95%",
    icono: "⚡"
  },
  {
    titulo: "Diseño Profesional",
    descripcion: "Interfaces modernas que generan confianza",
    porcentaje: "100%",
    icono: "🎨"
  }
];

const testimonios = [
  {
    nombre: "Dr. Carlos Mendoza",
    empresa: "Clínica Dental Sonrisa",
    testimonio: "Nuestro sitio web anterior no generaba citas. Con JuSeb SOFTWARE, ahora recibimos 15+ citas diarias solo por internet.",
    resultado: "340% más citas",
    imagen: "/images/testimonials/carlos-mendoza.jpg"
  },
  {
    nombre: "Ana Rodríguez",
    empresa: "Boutique Estilo Único",
    testimonio: "Pasamos de vender solo en tienda física a generar el 40% de nuestras ventas online. El ROI fue increíble.",
    resultado: "220% más ventas",
    imagen: "/images/testimonials/ana-rodriguez.jpg"
  }
];

const proceso = [
  {
    paso: 1,
    titulo: "Análisis Gratuito",
    descripcion: "Analizamos tu negocio y competencia",
    tiempo: "1 día",
    icono: "🔍"
  },
  {
    paso: 2,
    titulo: "Diseño Personalizado",
    descripcion: "Creamos mockups únicos para tu marca",
    tiempo: "3-5 días",
    icono: "🎨"
  },
  {
    paso: 3,
    titulo: "Desarrollo Avanzado",
    descripcion: "Programamos con las mejores tecnologías",
    tiempo: "2-3 semanas",
    icono: "⚡"
  },
  {
    paso: 4,
    titulo: "Lanzamiento y SEO",
    descripcion: "Publicamos y optimizamos para Google",
    tiempo: "1 semana",
    icono: "🚀"
  }
];

export default function LandingDesarrolloWeb() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SeoHead
        title="Desarrollo Web Profesional - Sitios que Venden | JuSeb SOFTWARE"
        description="Creamos sitios web que convierten visitantes en clientes. +340% más ventas garantizadas. Diseño profesional, SEO incluido. ¡Consulta gratuita!"
        canonical="https://juseb-software.com/landing/desarrollo-web"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🔥 Oferta Especial - Solo por Tiempo Limitado
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-tight">
                Sitios Web que Convierten Visitantes en Clientes
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Aumenta tus ventas hasta un <span className="text-green-400 font-bold">340%</span> con un sitio web profesional 
                que trabaja 24/7 para tu negocio. Diseño moderno + SEO + Conversión garantizada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-colors shadow-lg"
                  onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🚀 Quiero Mi Sitio Web - GRATIS
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-xl font-bold text-lg hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  📞 Llamar: +57 310 773 6703
                </motion.button>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <div>✅ Consulta y análisis completamente GRATIS</div>
                <div>✅ Sin compromiso • Respuesta en 2 horas</div>
                <div>✅ Garantía de satisfacción 30 días</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                ¿Por Qué Tu Negocio Necesita un Sitio Web Profesional?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Los resultados hablan por sí solos. Nuestros clientes ven mejoras inmediatas en sus ventas y presencia online.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="text-4xl mb-4">{beneficio.icono}</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">+{beneficio.porcentaje}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-400 text-sm">{beneficio.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-gray-400">Resultados reales de negocios reales</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonio.nombre}</h4>
                      <p className="text-gray-400 text-sm">{testimonio.empresa}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonio.testimonio}&rdquo;</p>
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg inline-block font-bold">
                    📈 {testimonio.resultado}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-16 px-4 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Nuestro Proceso Probado en 4 Pasos
              </h2>
              <p className="text-gray-400">De la idea al sitio web exitoso en tiempo récord</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {proceso.map((paso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {paso.paso}
                    </div>
                    <div className="text-3xl mb-4 mt-4">{paso.icono}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{paso.titulo}</h3>
                    <p className="text-gray-400 text-sm mb-3">{paso.descripcion}</p>
                    <div className="text-blue-400 font-medium text-sm">⏱️ {paso.tiempo}</div>
                  </div>
                  {index < proceso.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-500"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario CTA */}
        <section id="formulario" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  🎯 Consigue Tu Sitio Web Profesional GRATIS
                </h2>
                <p className="text-gray-400 mb-4">
                  Análisis completo de tu negocio + Propuesta personalizada + Mockup de diseño
                </p>
                <div className="text-yellow-400 font-bold text-lg">
                  ⚡ Oferta limitada: Solo los primeros 10 clientes este mes
                </div>
              </div>

              {showSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400 mb-6">
                    Te contactaremos en las próximas 2 horas para agendar tu consulta gratuita.
                  </p>
                  <div className="bg-green-500/20 text-green-400 px-6 py-3 rounded-lg inline-block">
                    📞 Mientras tanto, puedes llamarnos: +57 310 773 6703
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      👤 Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Ej: Juan Pérez"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      📧 Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="juan@empresa.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      📞 Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      🏢 Empresa/Negocio
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Mi Empresa S.A.S"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      💬 Cuéntanos sobre tu negocio
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="¿Qué tipo de negocio tienes? ¿Qué objetivos quieres lograr con tu sitio web?"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                        isSubmitting
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg hover:shadow-xl'
                      } text-white`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando solicitud...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>🚀 SÍ, QUIERO MI SITIO WEB GRATIS</span>
                        </div>
                      )}
                    </motion.button>
                  </div>

                  <div className="md:col-span-2 text-center text-sm text-gray-500 space-y-1">
                    <div>✅ Análisis gratuito de tu competencia</div>
                    <div>✅ Propuesta personalizada sin compromiso</div>
                    <div>✅ Mockup de diseño incluido</div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Urgencia Final */}
        <section className="py-16 px-4 bg-red-600/10 border-t border-red-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-red-400">
                ⚠️ No Pierdas Más Clientes Por No Tener Sitio Web
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                Cada día que pasa sin un sitio web profesional, tu competencia te está ganando clientes. 
                <span className="text-white font-bold"> ¡Actúa ahora!</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-colors shadow-lg"
                  onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  🔥 SOLICITAR AHORA - ÚLTIMOS CUPOS
                </motion.button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Solo quedan 3 cupos disponibles este mes
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} 