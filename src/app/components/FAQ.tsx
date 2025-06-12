'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: '¿Qué servicios ofrece JuSeb SOFTWARE?',
    answer: 'Ofrecemos una amplia gama de servicios que incluyen desarrollo de aplicaciones web y móviles, consultoría tecnológica, diseño UX/UI, desarrollo de software a medida, y soluciones de comercio electrónico.'
  },
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Proyectos pequeños pueden tomar 4-6 semanas, mientras que proyectos más grandes pueden llevar 3-6 meses. Proporcionamos un cronograma detallado durante la fase de planificación.'
  },
  {
    question: '¿Cuál es el proceso de desarrollo?',
    answer: 'Nuestro proceso incluye: 1) Análisis y planificación, 2) Diseño y prototipado, 3) Desarrollo, 4) Pruebas y control de calidad, 5) Implementación, y 6) Mantenimiento y soporte continuo.'
  },
  {
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer: 'Sí, ofrecemos varios planes de soporte y mantenimiento post-lanzamiento para asegurar que tu aplicación funcione sin problemas. Esto incluye actualizaciones de seguridad, corrección de errores y mejoras continuas.'
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer: 'Trabajamos con las últimas tecnologías incluyendo React, Next.js, Node.js, Python, React Native para aplicaciones móviles, y diversas bases de datos como MongoDB y PostgreSQL. La elección de la tecnología se basa en las necesidades específicas de cada proyecto.'
  },
  {
    question: '¿Cómo garantizan la calidad del código?',
    answer: 'Implementamos prácticas de desarrollo rigurosas que incluyen revisión de código, pruebas automatizadas, integración continua y despliegue continuo (CI/CD). Además, seguimos los estándares de la industria y mejores prácticas de desarrollo.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 leading-normal md:leading-normal">
          Preguntas Frecuentes
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex justify-between items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
            >
              <span className="text-left text-lg font-medium text-white leading-relaxed pr-8">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 transform transition-transform flex-shrink-0 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-gray-800/30 rounded-b-xl">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
          ¿No encontraste lo que buscabas?
        </p>
        <a
          href="/contacto"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
        >
          Contáctanos
        </a>
      </motion.div>
    </div>
  );
} 