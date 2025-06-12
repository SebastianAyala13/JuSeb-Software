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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
        {/* Header */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        {/* Debug: Mostrar cantidad de servicios */}
        <p className="text-gray-400 text-center mb-8">
          {servicios.length} servicios disponibles
        </p>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios && servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group"
            >
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                {/* Si tuvieras una imagen real de servicio, usa next/image así:
  <Image
    src={`/servicios/${servicio.titulo.toLowerCase().replace(/ /g, '-')}.webp`}
    alt={servicio.titulo}
    width={64}
    height={64}
    loading="lazy"
    className="mb-4 rounded-lg object-contain"
    style={{ background: '#222' }}
    // Si la imagen no existe, puedes dejar el icono por defecto
    onError={e => (e.currentTarget.style.display = 'none')}
  />
*/}
<span aria-label={servicio.titulo} role="img">{servicio.icono}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                {servicio.titulo}
              </h3>
              <p className="text-gray-400 mb-6">
                {servicio.descripcion}
              </p>
              <ul className="space-y-2">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
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
