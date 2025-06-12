'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'
import SeoHead from '../components/SeoHead'
// Validación de formularios recomendada aquí

const servicios = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Creamos sitios web modernos, responsivos y optimizados para SEO. Utilizamos las últimas tecnologías como React, Next.js y Tailwind CSS para garantizar el mejor rendimiento y experiencia de usuario.",
    caracteristicas: [
      "Diseño responsivo",
      "Optimización SEO",
      "Integración con CMS",
      "Análisis de rendimiento",
      "Mantenimiento continuo"
    ],
    icono: "🌐"
  },
  {
    titulo: "Aplicaciones Móviles",
    descripcion: "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android. Nuestro enfoque se centra en crear experiencias móviles intuitivas y eficientes.",
    caracteristicas: [
      "Desarrollo nativo iOS/Android",
      "Apps multiplataforma",
      "UI/UX móvil",
      "Integración con APIs",
      "Publicación en stores"
    ],
    icono: "📱"
  },
  {
    titulo: "Consultoría IT",
    descripcion: "Ofrecemos asesoramiento experto para optimizar tus procesos tecnológicos. Ayudamos a empresas a tomar decisiones informadas sobre su infraestructura y estrategia digital.",
    caracteristicas: [
      "Auditoría tecnológica",
      "Planificación estratégica",
      "Optimización de procesos",
      "Seguridad informática",
      "Transformación digital"
    ],
    icono: "💡"
  },
  {
    titulo: "E-commerce",
    descripcion: "Implementamos soluciones de comercio electrónico escalables y seguras. Desde tiendas pequeñas hasta grandes marketplaces, nos adaptamos a tus necesidades.",
    caracteristicas: [
      "Plataformas personalizadas",
      "Integración de pagos",
      "Gestión de inventario",
      "Analytics y reportes",
      "Optimización de conversión"
    ],
    icono: "🛍️"
  },
  {
    titulo: "Marketing Digital",
    descripcion: "Desarrollamos estrategias digitales efectivas para aumentar tu presencia online y generar más leads. Utilizamos datos y análisis para optimizar resultados.",
    caracteristicas: [
      "SEO/SEM",
      "Redes sociales",
      "Email marketing",
      "Análisis de datos",
      "Content marketing"
    ],
    icono: "📈"
  },
  {
    titulo: "Soporte Técnico",
    descripcion: "Brindamos soporte técnico especializado para mantener tus sistemas funcionando sin problemas. Respuesta rápida y soluciones efectivas.",
    caracteristicas: [
      "Soporte 24/7",
      "Mantenimiento preventivo",
      "Resolución de problemas",
      "Backups y seguridad",
      "Actualizaciones"
    ],
    icono: "🔧"
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
  useEffect(() => {
    // console.log eliminado
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-normal md:leading-normal">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
              >
                <div className="text-4xl mb-6">
                  <span aria-label={servicio.titulo} role="img" className="transform transition-transform hover:scale-110 inline-block">
                    {servicio.icono}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {servicio.titulo}
                </h3>
                <p className="text-gray-400 mb-6">
                  {servicio.descripcion}
                </p>
                <ul className="space-y-3">
                  {servicio.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{caracteristica}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Contactar ahora
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
