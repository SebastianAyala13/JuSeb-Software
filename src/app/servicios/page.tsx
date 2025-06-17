'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SeoHead from '../components/SeoHead'

const servicios = [
  {
    titulo: "Desarrollo Web",
    descripcion: "Creamos sitios web modernos, responsivos y optimizados para SEO. Utilizamos las últimas tecnologías para garantizar el mejor rendimiento y experiencia de usuario.",
    tecnologias: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "PostgreSQL"],
    beneficios: ["Velocidad +40%", "Mejora SEO +60%", "Rebote -35%", "Conversiones +50%"],
    icono: "🌐",
    precio: "Desde $1,500",
    tiempoEntrega: "2-4 semanas"
  },
  {
    titulo: "Aplicaciones Móviles",
    descripcion: "Desarrollamos apps nativas y multiplataforma con UX excepcional. Compatibles con iOS y Android.",
    tecnologias: ["React Native", "Flutter", "Firebase", "Swift", "Kotlin"],
    beneficios: ["Desarrollo 50% más rápido", "Compatibilidad 95%", "Rating 4.8+ Stores", "Pedidos +25%"],
    icono: "📱",
    precio: "Desde $3,000",
    tiempoEntrega: "6-12 semanas"
  },
  {
    titulo: "Consultoría IT",
    descripcion: "Auditoría, estrategia digital y automatización de procesos para empresas modernas.",
    tecnologias: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform"],
    beneficios: ["Costos -30%", "Eficiencia +45%", "Automatización 80%", "ROI promedio 250%"],
    icono: "💡",
    precio: "Desde $800",
    tiempoEntrega: "1-3 semanas"
  },
  {
    titulo: "Automatización de Procesos",
    descripcion: "Conectamos y automatizamos tus apps favoritas (CRM, email, WhatsApp, formularios, bases de datos, etc.) para ahorrar tiempo y evitar errores manuales.",
    tecnologias: ["n8n", "Zapier", "Make", "Airtable", "Google Sheets", "APIs", "Webhooks"],
    beneficios: [
      "Ahorro de +10h semanales",
      "Tareas repetitivas 100% automáticas",
      "Integración multiplataforma",
      "Disminución de errores humanos"
    ],
    icono: "⚙️",
    precio: "Desde $400",
    tiempoEntrega: "1-2 semanas"
  }  
];

const schemaOrgServicios = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Desarrollo Web, Aplicaciones Móviles, Consultoría IT, Automatización de Procesos',
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
      telephone: '+57-310-773-6703',
      contactType: 'customer support',
      email: 'contacto@juseb-software.com',
    }]
  },
  areaServed: 'Colombia',
  description: 'Servicios de desarrollo web, apps móviles, consultoría IT y automatización con herramientas como n8n, Zapier y más, en Pereira y Colombia.'
};

export default function Servicios() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Analytics or Tracking if needed
  }, []);

  return (
    <>
      <SeoHead
        title="Servicios Profesionales de Tecnología | JuSeb SOFTWARE"
        description="Creamos soluciones digitales modernas: desarrollo web, apps móviles, consultoría IT. Cotiza tu proyecto fácilmente con nosotros."
        canonical="https://juseb-software.com/servicios"
        schema={schemaOrgServicios}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Servicios que<br /> Transforman
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Desarrollo web, apps móviles y consultoría IT con enfoque en resultados. Más de 100 empresas nos recomiendan.
            </p>
          </motion.div>

          {/* Servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicios.map((servicio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{servicio.icono} {servicio.titulo}</h3>
                <p className="text-gray-400 mb-4">{servicio.descripcion}</p>
                <div className="mb-4">
                  <h4 className="text-blue-400 text-sm font-semibold mb-1">🛠️ Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {servicio.tecnologias.map((tec, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-200 text-xs rounded">{tec}</span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-green-400 text-sm font-semibold mb-1">📈 Beneficios</h4>
                  <ul className="list-disc list-inside text-sm text-green-300 space-y-1">
                    {servicio.beneficios.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
                <div className="mt-6">
                  <motion.a
                    href={`https://wa.me/573107736703?text=Hola%2C%20quiero%20cotizar%20${encodeURIComponent(servicio.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm text-center"
                  >
                    💬 Cotizar Proyecto
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
