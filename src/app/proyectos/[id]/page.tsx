'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const proyectos = {
  'gestion-escolar': {
    title: 'Sistema de Gestión Escolar',
    description: 'Sistema integral para la gestión académica y administrativa de instituciones educativas.',
    fullDescription: `
      Nuestro Sistema de Gestión Escolar es una solución completa que revoluciona la administración educativa.
      
      Características principales:
      • Gestión de estudiantes y docentes
      • Control de asistencia automatizado
      • Sistema de calificaciones en tiempo real
      • Comunicación integrada entre docentes, estudiantes y padres
      • Generación de reportes y estadísticas
      • Calendario académico interactivo
      • Portal de padres y estudiantes
      • Gestión de recursos y horarios
      
      Tecnologías utilizadas:
      • React para una interfaz de usuario moderna y responsive
      • Node.js para un backend robusto y escalable
      • MongoDB para almacenamiento flexible de datos
      • WebSockets para actualizaciones en tiempo real
    `,
    image: '/gestionescolar.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    demoUrl: 'https://demo-gestion-escolar.juseb-software.com',
    features: [
      'Gestión de estudiantes y docentes',
      'Control de asistencia',
      'Sistema de calificaciones',
      'Comunicación integrada',
      'Reportes y estadísticas',
      'Calendario académico'
    ]
  },
  'panel-tv': {
    title: 'Sistema de Gestión de Contenido Digital',
    description: 'Sistema de gestión de contenido para pantallas digitales en tiempo real.',
    fullDescription: `
      Panel TV es una solución innovadora para la gestión y visualización de contenido digital en pantallas.
      
      Características principales:
      • Programación de contenido en tiempo real
      • Soporte para múltiples pantallas y zonas
      • Gestión de contenido multimedia
      • Plantillas personalizables
      • Integración con fuentes de datos en vivo
      • Monitoreo y análisis de visualización
      • Control remoto de pantallas
      • Programación por calendario
      
      Tecnologías utilizadas:
      • Next.js para una experiencia de usuario fluida
      • Firebase para tiempo real y almacenamiento
      • WebRTC para streaming de contenido
      • Material UI para una interfaz moderna
    `,
    image: '/paneltv.png',
    technologies: ['Next.js', 'Firebase', 'WebRTC', 'Material UI'],
    demoUrl: 'https://demo-panel-tv.juseb-software.com',
    features: [
      'Gestión de contenido en tiempo real',
      'Soporte multi-pantalla',
      'Plantillas personalizables',
      'Integración de datos en vivo',
      'Control remoto',
      'Programación avanzada'
    ]
  },
  'delivery-app': {
    title: 'App de Delivery',
    description: 'Aplicación móvil para servicio de entrega a domicilio.',
    fullDescription: `
      Nuestra App de Delivery es una solución completa para servicios de entrega a domicilio.
      
      Características principales:
      • Seguimiento en tiempo real de pedidos
      • Sistema de pagos integrado
      • Gestión de repartidores
      • Panel de administración
      • Notificaciones push
      • Calificación de servicio
      • Historial de pedidos
      • Múltiples métodos de pago
      
      Tecnologías utilizadas:
      • React Native para desarrollo móvil multiplataforma
      • Redux para gestión de estado
      • Node.js para el backend
      • PostgreSQL para base de datos
    `,
    image: '/drop.png',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://demo-delivery.juseb-software.com',
    features: [
      'Seguimiento en tiempo real',
      'Pagos integrados',
      'Gestión de repartidores',
      'Panel administrativo',
      'Notificaciones push',
      'Sistema de calificación'
    ]
  },
  'telemedicina': {
    title: 'Sistema de Telemedicina',
    description: 'Plataforma para consultas médicas virtuales.',
    fullDescription: `
      Nuestra plataforma de Telemedicina facilita la atención médica virtual de manera segura y eficiente.
      
      Características principales:
      • Videoconsultas en HD
      • Agendamiento de citas
      • Historia clínica digital
      • Recetas electrónicas
      • Chat médico-paciente
      • Recordatorios automáticos
      • Integración con laboratorios
      • Pagos en línea
      
      Tecnologías utilizadas:
      • Vue.js para la interfaz de usuario
      • Python/Django para el backend
      • WebRTC para videollamadas
      • Base de datos segura para historias clínicas
    `,
    image: '/telemedicina.png',
    technologies: ['Vue.js', 'Python', 'Django', 'WebRTC'],
    demoUrl: 'https://demo-telemedicina.juseb-software.com',
    features: [
      'Videoconsultas HD',
      'Agendamiento digital',
      'Historia clínica electrónica',
      'Recetas digitales',
      'Chat integrado',
      'Sistema de pagos'
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = proyectos[id as keyof typeof proyectos];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Proyecto no encontrado</h1>
          <Link href="/proyectos" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg">
            Volver a Proyectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Encabezado del proyecto */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Imagen del proyecto */}
          <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Descripción detallada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Descripción Detallada</h2>
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              {/* Tecnologías */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Características */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Características</h3>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-blue-400 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Botón de demo */}
          <div className="text-center mb-16">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Ver Demo
            </a>
          </div>

          {/* Navegación entre proyectos */}
          <div className="border-t border-gray-800 pt-8">
            <Link
              href="/proyectos"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver a Proyectos
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 