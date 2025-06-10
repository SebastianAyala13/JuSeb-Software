'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'gestion-escolar',
    title: 'Sistema de Gestión Escolar',
    description: 'Sistema integral para la gestión académica y administrativa de instituciones educativas. Incluye módulos de asistencia, calificaciones, comunicación y más.',
    image: '/gestionescolar.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets']
  },
  {
    id: 'panel-tv',
    title: 'Sistema de Gestión de Contenido Digital',
    description: 'Sistema de gestión de contenido para pantallas digitales en tiempo real. Permite programar contenido, mostrar datos en vivo y gestionar múltiples pantallas.',
    image: '/paneltv.png',
    technologies: ['Next.js', 'Firebase', 'WebRTC', 'Material UI']
  },
  {
    id: 'delivery-app',
    title: 'App de Delivery',
    description: 'Aplicación móvil para servicio de entrega a domicilio con seguimiento en tiempo real, pagos integrados y sistema de calificaciones.',
    image: '/drop.png',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'telemedicina',
    title: 'Sistema de Telemedicina',
    description: 'Plataforma para consultas médicas virtuales con agendamiento, videollamadas, historial clínico y recetas electrónicas.',
    image: '/telemedicina.png',
    technologies: ['Vue.js', 'Python', 'Django', 'WebRTC']
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones tecnológicas han ayudado a empresas a alcanzar sus objetivos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <Link href={`/proyectos/${project.id}`}>
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Ver detalles
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
  