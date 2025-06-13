'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SeoHead from '../components/SeoHead'
// Validación de formularios recomendada aquí

const servicios = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Creamos sitios web modernos, responsivos y optimizados para SEO. Utilizamos las últimas tecnologías para garantizar el mejor rendimiento y experiencia de usuario.",
    tecnologias: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    caracteristicas: [
      "Diseño responsivo y mobile-first",
      "Optimización SEO avanzada",
      "Integración con CMS headless",
      "Análisis de rendimiento en tiempo real",
      "Mantenimiento y soporte continuo"
    ],
    beneficios: [
      "Aumento del 40% en velocidad de carga",
      "Mejora del 60% en posicionamiento SEO",
      "Reducción del 35% en tasa de rebote",
      "Incremento del 50% en conversiones"
    ],
    casoExito: {
      cliente: "Clínica Dental Sonrisa",
      reto: "Sitio web obsoleto con baja conversión de citas",
      solucion: "Rediseño completo con sistema de citas online y optimización móvil",
      resultados: [
        "340% más citas agendadas",
        "280% incremento en ingresos",
        "ROI de 336% en 6 meses"
      ]
    },
    demoVideo: "/videos/web-development-demo.mp4",
    icono: "🌐",
    precio: "Desde $1,500",
    tiempoEntrega: "2-4 semanas"
  },
  {
    titulo: "Aplicaciones Móviles",
    descripcion: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android con enfoque en experiencias móviles intuitivas y eficientes.",
    tecnologias: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
    caracteristicas: [
      "Desarrollo nativo iOS/Android",
      "Apps multiplataforma eficientes",
      "UI/UX móvil optimizada",
      "Integración con APIs REST/GraphQL",
      "Publicación en App Store y Google Play"
    ],
    beneficios: [
      "Reducción del 50% en tiempo de desarrollo",
      "Compatibilidad con 95% de dispositivos",
      "Performance nativo garantizado",
      "Mantenimiento simplificado"
    ],
    casoExito: {
      cliente: "FoodFast Delivery",
      reto: "Necesidad de app de delivery competitiva",
      solucion: "App nativa con tracking en tiempo real y pagos integrados",
      resultados: [
        "10K+ descargas en primer mes",
        "4.8/5 rating en stores",
        "25% incremento en pedidos"
      ]
    },
    demoVideo: "/videos/mobile-app-demo.mp4",
    icono: "📱",
    precio: "Desde $3,000",
    tiempoEntrega: "6-12 semanas"
  },
  {
    titulo: "Consultoría IT",
    descripcion: "Asesoramiento experto para optimizar procesos tecnológicos y tomar decisiones informadas sobre infraestructura y estrategia digital.",
    tecnologias: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    caracteristicas: [
      "Auditoría tecnológica completa",
      "Planificación estratégica IT",
      "Optimización de procesos",
      "Implementación de seguridad",
      "Roadmap de transformación digital"
    ],
    beneficios: [
      "Reducción del 30% en costos IT",
      "Mejora del 45% en eficiencia",
      "Eliminación de 80% de procesos manuales",
      "ROI promedio de 250%"
    ],
    casoExito: {
      cliente: "Despacho Contable Números",
      reto: "Procesos manuales lentos y propensos a errores",
      solucion: "Automatización completa con dashboard ejecutivo",
      resultados: [
        "60% menos tiempo en tareas rutinarias",
        "300% más capacidad de clientes",
        "190% incremento en ingresos"
      ]
    },
    demoVideo: "/videos/consulting-demo.mp4",
    icono: "💡",
    precio: "Desde $800",
    tiempoEntrega: "1-3 semanas"
  },
  {
    titulo: "E-commerce",
    descripcion: "Implementamos soluciones de comercio electrónico escalables y seguras, desde tiendas pequeñas hasta grandes marketplaces.",
    tecnologias: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Mailchimp", "Google Analytics"],
    caracteristicas: [
      "Plataformas personalizadas",
      "Integración de múltiples pagos",
      "Gestión avanzada de inventario",
      "Analytics y reportes detallados",
      "Optimización de conversión CRO"
    ],
    beneficios: [
      "Incremento del 45% en ventas online",
      "Reducción del 30% en abandono de carrito",
      "Aumento del 25% en ticket promedio",
      "Mejora del 60% en experiencia móvil"
    ],
    casoExito: {
      cliente: "Boutique Estilo Único",
      reto: "Transición de tienda física a modelo omnicanal",
      solucion: "E-commerce completo con estrategia de marketing digital",
      resultados: [
        "450% incremento en alcance",
        "220% aumento en ventas totales",
        "40% de ventas provienen de online"
      ]
    },
    demoVideo: "/videos/ecommerce-demo.mp4",
    icono: "🛍️",
    precio: "Desde $2,500",
    tiempoEntrega: "4-8 semanas"
  },
  {
    titulo: "Marketing Digital",
    descripcion: "Desarrollamos estrategias digitales efectivas para aumentar presencia online y generar más leads utilizando datos y análisis.",
    tecnologias: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "HubSpot"],
    caracteristicas: [
      "SEO/SEM avanzado",
      "Gestión de redes sociales",
      "Email marketing automatizado",
      "Análisis de datos y KPIs",
      "Content marketing estratégico"
    ],
    beneficios: [
      "Incremento del 200% en leads calificados",
      "Reducción del 40% en costo por adquisición",
      "Mejora del 150% en engagement",
      "ROI promedio de 300%"
    ],
    casoExito: {
      cliente: "Consultora Marketing Pro",
      reto: "Baja generación de leads calificados",
      solucion: "Estrategia integral SEO + SEM + Content Marketing",
      resultados: [
        "200% más leads calificados",
        "400% ROI en herramientas",
        "Posicionamiento #1 en keywords clave"
      ]
    },
    demoVideo: "/videos/marketing-demo.mp4",
    icono: "📈",
    precio: "Desde $600/mes",
    tiempoEntrega: "2-4 semanas"
  },
  {
    titulo: "Soporte Técnico",
    descripcion: "Brindamos soporte técnico especializado 24/7 para mantener tus sistemas funcionando sin problemas con respuesta rápida.",
    tecnologias: ["Monitoring Tools", "Backup Solutions", "Security Scanners", "Performance Tools", "Help Desk"],
    caracteristicas: [
      "Soporte 24/7 multicanal",
      "Mantenimiento preventivo",
      "Resolución proactiva de problemas",
      "Backups automáticos y seguridad",
      "Actualizaciones programadas"
    ],
    beneficios: [
      "99.9% de uptime garantizado",
      "Reducción del 70% en incidencias",
      "Tiempo de respuesta < 2 horas",
      "Ahorro del 50% vs equipo interno"
    ],
    casoExito: {
      cliente: "Empresa Logística TransRápido",
      reto: "Caídas frecuentes del sistema afectando operaciones",
      solucion: "Monitoreo 24/7 con mantenimiento preventivo",
      resultados: [
        "99.9% uptime alcanzado",
        "85% reducción en incidencias",
        "Ahorro de $2,000/mes en costos"
      ]
    },
    demoVideo: "/videos/support-demo.mp4",
    icono: "🔧",
    precio: "Desde $300/mes",
    tiempoEntrega: "Inmediato"
  }
];

const schemaOrgServicios = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desarrollo Web, Aplicaciones Móviles, Consultoría IT, E-commerce, Marketing Digital',
  provider: {
    '@type': 'Organization',
    name: 'JuSeb SOFTWARE',
    url: 'https://juseb-software.com',
    logo: 'https://juseb-software.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pereira',
      addressRegion: 'Risaralda',
      addressCountry: 'CO',
    },
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+57-321-123-4567',
      contactType: 'customer support',
      email: 'contacto@juseb-software.com',
    }]
  },
  areaServed: 'Colombia',
  description: 'Servicios de desarrollo web, aplicaciones móviles, consultoría IT, e-commerce y marketing digital en Pereira, Colombia.'
};

export default function Servicios() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Analytics tracking
  }, []);

  return (
    <>
      <SeoHead
        title="Servicios de Desarrollo Web, Apps y Consultoría IT | JuSeb SOFTWARE"
        description="Creamos soluciones digitales: desarrollo web, apps móviles, consultoría IT, e-commerce y marketing digital. Servicios profesionales en Pereira, Colombia."
        canonical="https://juseb-software.com/servicios"
        schema={schemaOrgServicios}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-normal md:leading-normal">
              Servicios que Transforman Negocios
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Soluciones tecnológicas integrales con casos de éxito comprobados. 
              Más de 100 empresas han confiado en nosotros para su transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🎯 Solicitar Demo Gratuita
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-medium text-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                💰 Ver Precios Transparentes
              </motion.button>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-700 hover:border-blue-500 backdrop-blur-sm"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">
                      <span aria-label={servicio.titulo} role="img" className="transform transition-transform hover:scale-110 inline-block">
                        {servicio.icono}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {servicio.titulo}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {servicio.precio}
                        </span>
                        <span>⏱️ {servicio.tiempoEntrega}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">🛠️ TECNOLOGÍAS</h4>
                  <div className="flex flex-wrap gap-2">
                    {servicio.tecnologias.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Beneficios */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">📊 BENEFICIOS COMPROBADOS</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {servicio.beneficios.map((beneficio, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{beneficio}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Caso de Éxito */}
                <div className="mb-6 p-4 bg-gray-700/30 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">🏆 CASO DE ÉXITO</h4>
                  <p className="text-white font-medium mb-1">{servicio.casoExito.cliente}</p>
                  <p className="text-gray-400 text-sm mb-2">{servicio.casoExito.reto}</p>
                  <p className="text-blue-300 text-sm mb-3">{servicio.casoExito.solucion}</p>
                  <div className="grid grid-cols-1 gap-1">
                    {servicio.casoExito.resultados.map((resultado, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-green-400">▶</span>
                        <span className="text-green-300 text-sm font-medium">{resultado}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    🎯 Solicitar Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-6 py-3 border border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    💬 Cotizar Proyecto
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-20 border border-blue-500/30"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Resultados que Hablan por Sí Solos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-400">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">285%</div>
                <div className="text-gray-400">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Soporte Técnico</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gray-800/50 rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Únete a más de 100 empresas que han confiado en JuSeb SOFTWARE para su transformación digital. 
              Consulta gratuita de 30 minutos incluida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🚀 Empezar Ahora - Gratis
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-medium text-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                📞 Llamar: +57 310 773 6703
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Respuesta en menos de 2 horas • 💰 Sin compromiso • 🎯 Consulta personalizada
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
