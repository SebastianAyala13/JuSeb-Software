'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SeoHead from './components/SeoHead';

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JuSeb SOFTWARE',
  url: 'https://juseb-software.com',
  logo: 'https://juseb-software.com/logo.png',
  description: 'Desarrollo de software a medida, aplicaciones web, móviles y sistemas empresariales. Expertos en tecnologías modernas y soluciones innovadoras.',
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
};

export default function Home() {
  return (
    <>
      <SeoHead
        title="JuSeb SOFTWARE - Soluciones Tecnológicas Innovadoras"
        description="Desarrollo de software a medida, aplicaciones web, móviles y sistemas empresariales. Expertos en tecnologías modernas y soluciones innovadoras."
        canonical="https://juseb-software.com/"
        schema={schemaOrg}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 break-words whitespace-normal leading-tight max-w-4xl mx-auto">
              Transformamos Ideas en Realidad Digital
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Desarrollamos soluciones tecnológicas innovadoras para impulsar tu negocio hacia el futuro
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contacto"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                {/* Si tienes un logo o imagen de CTA:
                <Image src="/cta-logo.webp" alt="Comienza tu Proyecto" width={32} height={32} loading="lazy" className="inline-block mr-2" />
                */}
                Comienza tu Proyecto
              </Link>
              <Link
                href="/servicios"
                className="px-8 py-4 bg-gray-800 text-white rounded-xl font-medium text-lg hover:bg-gray-700 transition-colors"
              >
                Conoce Nuestros Servicios
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 break-words whitespace-normal leading-tight max-w-2xl mx-auto">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nos destacamos por nuestra experiencia, calidad y compromiso con tu éxito
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experiencia Comprobada',
                description: 'Años de experiencia desarrollando soluciones tecnológicas exitosas para diversos sectores.',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: 'Tecnología de Punta',
                description: 'Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones modernas y escalables.',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Soporte Continuo',
                description: 'Ofrecemos soporte y mantenimiento continuo para asegurar el éxito a largo plazo de tu proyecto.',
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gray-700/50 rounded-lg p-3 inline-block mb-4">
                  {/* Si tienes imagen para el feature:
  <Image
    src={`/features/${feature.title.toLowerCase().replace(/ /g, '-')}.webp`}
    alt={feature.title}
    width={48}
    height={48}
    loading="lazy"
    className="mb-3 object-contain"
    style={{ background: '#222' }}
    onError={e => (e.currentTarget.style.display = 'none')}
  />
*/}
<span aria-label={feature.title} role="img">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />
    </div>
    </>
  );
} 