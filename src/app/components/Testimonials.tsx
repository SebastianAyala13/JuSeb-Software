'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'CEO, TechStart',
    image: '/avatar-default.png',
    content: 'JuSeb SOFTWARE transformó completamente nuestro proceso de negocio. Su solución personalizada aumentó nuestra eficiencia en un 40%.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ana Martínez',
    role: 'Directora de Marketing, InnovaCorp',
    image: '/avatar-default.png',
    content: 'El equipo de JuSeb no solo entregó un producto excepcional, sino que también proporcionó un servicio al cliente sobresaliente.',
    rating: 5
  },
  {
    id: 3,
    name: 'Diego Sánchez',
    role: 'Fundador, HealthTech',
    image: '/avatar-default.png',
    content: 'La aplicación móvil que desarrollaron superó todas nuestras expectativas. Altamente recomendados.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre por qué las empresas confían en nosotros para sus soluciones tecnológicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {/* Optimización: avatar WebP y lazy loading, fallback accesible si no existe */}
                <Image
                  src={testimonial.image.replace('.png', '.webp')}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                  width={64}
                  height={64}
                  loading="lazy"
                  onError={e => (e.currentTarget.style.display = 'none')}
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            ¿Listo para empezar tu proyecto?
          </a>
        </motion.div>
      </div>
    </section>
  );
} 