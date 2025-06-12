'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import DemoModal, { Project } from '@/app/components/DemoModal';

const proyectos: Record<string, Project> = {
  'gestion-escolar': {
    title: 'Sistema de Gestión Escolar',
    description: 'Sistema integral para la gestión académica y administrativa de instituciones educativas.',
    fullDescription: `
      Nuestro Sistema de Gestión Escolar es una solución completa que revoluciona la administración educativa, facilitando la gestión diaria y mejorando la comunicación entre todos los actores de la comunidad educativa.
      
      Características principales:
      • Dashboard personalizado para cada rol
      • Sistema de calificaciones en tiempo real
      • Control de asistencia digital
      • Comunicación integrada
      • Gestión de horarios
      • Reportes académicos
      • Portal para padres
      • Biblioteca digital
      
      Tecnologías utilizadas:
      • React para una interfaz moderna y responsive
      • Node.js para un backend robusto y escalable
      • MongoDB para almacenamiento flexible de datos
      • WebSockets para actualizaciones en tiempo real
    `,
    image: '/gestionescolar.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
    demoUrl: 'https://demo-gestion-escolar.juseb-software.com',
    downloadUrl: '/brochures/gestion-escolar.pdf',
    features: [
      'Gestión de estudiantes y docentes',
      'Control de asistencia',
      'Sistema de calificaciones',
      'Comunicación integrada',
      'Reportes y estadísticas',
      'Calendario académico'
    ],
    demoScreens: [
      {
        title: 'Dashboard Principal',
        description: 'Panel de control personalizado que muestra información relevante según el rol del usuario (administrador, docente, estudiante o padre).',
        image: '/school-screens/dashboard.png',
        video: '/videos/school-dashboard.mp4',
        features: [
          'Vista general personalizada',
          'Estadísticas en tiempo real',
          'Accesos rápidos',
          'Notificaciones importantes'
        ],
        interactive: {
          type: 'chart',
          data: {
            type: 'dashboard',
            title: 'Estadísticas Académicas'
          }
        }
      },
      {
        title: 'Gestión de Calificaciones',
        description: 'Sistema completo para el registro, seguimiento y análisis del rendimiento académico de los estudiantes.',
        image: '/school-screens/grades.png',
        video: '/videos/school-grades.mp4',
        features: [
          'Registro de notas por periodo',
          'Cálculo automático de promedios',
          'Gráficos de rendimiento',
          'Comentarios y observaciones'
        ],
        interactive: {
          type: 'form',
          data: {
            type: 'grades',
            fields: [
              'Estudiante',
              'Asignatura',
              'Periodo',
              'Calificación',
              'Observaciones'
            ]
          }
        }
      },
      {
        title: 'Control de Asistencia',
        description: 'Sistema digital para el registro y seguimiento de asistencia de estudiantes y personal.',
        image: '/school-screens/attendance.png',
        video: '/videos/school-attendance.mp4',
        features: [
          'Registro rápido de asistencia',
          'Justificación de ausencias',
          'Reportes por periodo',
          'Notificaciones automáticas'
        ],
        interactive: {
          type: 'calendar',
          data: {
            type: 'attendance',
            view: 'month'
          }
        }
      },
      {
        title: 'Portal de Comunicaciones',
        description: 'Plataforma integrada de comunicación entre docentes, estudiantes y padres de familia.',
        image: '/school-screens/communications.png',
        video: '/videos/school-communications.mp4',
        features: [
          'Mensajería instantánea',
          'Circulares digitales',
          'Calendario de eventos',
          'Solicitudes y permisos'
        ],
        interactive: {
          type: 'form',
          data: {
            type: 'message',
            fields: [
              'Destinatario',
              'Asunto',
              'Mensaje',
              'Archivos adjuntos'
            ]
          }
        }
      },
      {
        title: 'Reportes y Análisis',
        description: 'Sistema avanzado de generación de informes y análisis estadístico del desempeño académico.',
        image: '/school-screens/reports.png',
        video: '/videos/school-reports.mp4',
        features: [
          'Informes personalizados',
          'Estadísticas por curso',
          'Tendencias académicas',
          'Exportación de datos'
        ],
        interactive: {
          type: 'chart',
          data: {
            type: 'analytics',
            views: ['general', 'curso', 'estudiante']
          }
        }
      }
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
    downloadUrl: '/brochures/panel-tv.pdf',
    features: [
      'Gestión de contenido en tiempo real',
      'Soporte multi-pantalla',
      'Plantillas personalizables',
      'Integración de datos en vivo',
      'Control remoto',
      'Programación avanzada'
    ],
    demoScreens: [
      {
        title: 'Panel de Control',
        description: 'Centro de control centralizado para gestionar todas las pantallas y contenidos en tiempo real.',
        image: '/paneltv.png',
        video: '/videos/panel-tv-dashboard.mp4',
        features: [
          'Vista general de todas las pantallas',
          'Control en tiempo real',
          'Programación de contenido',
          'Monitoreo de estado'
        ]
      },
      {
        title: 'Editor de Contenido',
        description: 'Editor visual intuitivo para crear y personalizar contenido dinámico para diferentes pantallas y zonas.',
        image: '/blog-default.png'
      },
      {
        title: 'Monitoreo en Vivo',
        description: 'Vista en tiempo real de todas las pantallas activas y su contenido actual.',
        image: '/blog-default.png'
      }
    ]
  },
  'delivery-app': {
    title: 'App de Delivery',
    description: 'Aplicación móvil para servicio de entrega a domicilio con seguimiento en tiempo real, pagos integrados y sistema de calificaciones.',
    fullDescription: `
      FoodFast es una aplicación móvil completa para servicios de entrega a domicilio, diseñada para ofrecer la mejor experiencia tanto a usuarios como a restaurantes.
      
      Características principales:
      • Interfaz intuitiva y moderna
      • Proceso de pedido simplificado
      • Múltiples opciones de pago
      • Sistema de seguimiento en tiempo real
      • Gestión de restaurantes y menús
      • Notificaciones push
      • Historial de pedidos
      • Sistema de calificaciones y reseñas
      
      Tecnologías utilizadas:
      • React Native para una experiencia móvil nativa
      • Redux para gestión de estado
      • Node.js y Express para el backend
      • PostgreSQL para base de datos segura y escalable
    `,
    image: '/delivery-screens/adc00530-f102-4598-9137-55040ffd69f3.png',
    technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://demo-delivery.juseb-software.com',
    downloadUrl: '/brochures/delivery-app.pdf',
    features: [
      'Seguimiento en tiempo real',
      'Pagos integrados',
      'Gestión de repartidores',
      'Panel administrativo',
      'Notificaciones push',
      'Sistema de calificación'
    ],
    demoScreens: [
      {
        title: 'Bienvenida',
        description: 'Pantalla de bienvenida que introduce a los usuarios a FoodFast, la forma más fácil de ordenar comida de sus restaurantes favoritos.',
        image: '/delivery-screens/adc00530-f102-4598-9137-55040ffd69f3.png',
        features: [
          'Diseño moderno y atractivo',
          'Mensaje claro y directo',
          'Botón de acción llamativo',
          'Experiencia de usuario optimizada'
        ]
      },
      {
        title: 'Lista de Restaurantes',
        description: 'Exploración de restaurantes cercanos con información detallada, incluyendo tipo de cocina, tiempo de entrega y calificaciones.',
        image: '/delivery-screens/9bb43a40-9391-4fd4-a3ab-92a0f22a5bd4.webp',
        features: [
          'Listado de restaurantes cercanos',
          'Imágenes de alta calidad',
          'Calificaciones y tiempos de entrega',
          'Búsqueda y filtros'
        ]
      },
      {
        title: 'Proceso de Pago',
        description: 'Sistema de pago seguro y flexible que permite múltiples métodos de pago, incluyendo tarjetas y efectivo.',
        image: '/delivery-screens/c3a0bf12-3dc5-4ff1-b3b0-9d4f496d2e03.webp',
        features: [
          'Múltiples métodos de pago',
          'Resumen detallado del pedido',
          'Cálculo automático de costos',
          'Proceso de pago seguro'
        ]
      }
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
    image: '/blog-default.png',
    technologies: ['Vue.js', 'Python', 'Django', 'WebRTC'],
    demoUrl: 'https://demo-telemedicina.juseb-software.com',
    downloadUrl: '/brochures/telemedicina.pdf',
    features: [
      'Videoconsultas HD',
      'Agendamiento digital',
      'Historia clínica electrónica',
      'Recetas digitales',
      'Chat integrado',
      'Sistema de pagos'
    ],
    demoScreens: [
      {
        title: 'Sala de Consulta Virtual',
        description: 'Interfaz de videoconsulta con herramientas integradas para una atención médica efectiva.',
        image: '/blog-default.png',
        video: '/videos/telemedicina-consult.mp4',
        features: [
          'Videollamada HD',
          'Chat médico-paciente',
          'Compartir documentos',
          'Notas de consulta'
        ]
      },
      {
        title: 'Agenda Médica',
        description: 'Sistema de agendamiento inteligente con calendario y recordatorios automáticos.',
        image: '/blog-default.png'
      },
      {
        title: 'Historia Clínica Digital',
        description: 'Registro médico electrónico seguro con acceso a historial, recetas y resultados de laboratorio.',
        image: '/blog-default.png'
      }
    ]
  },
  'e-commerce': {
    title: 'E-Commerce',
    description: 'Plataforma de comercio electrónico moderna y elegante con diseño responsive, carrito de compras y sistema de pagos integrado.',
    fullDescription: `
      Una solución completa de e-commerce diseñada para ofrecer una experiencia de compra excepcional. Combina un diseño moderno y minimalista con funcionalidades avanzadas de comercio electrónico.
      
      Características principales:
      • Diseño moderno y responsive
      • Catálogo de productos dinámico
      • Carrito de compras intuitivo
      • Pasarela de pagos segura
      • Sistema de reseñas y calificaciones
      • Panel de administración completo
      • Gestión de inventario
      • Análisis de ventas en tiempo real
      
      Tecnologías utilizadas:
      • Next.js para renderizado híbrido
      • Stripe para procesamiento de pagos
      • MongoDB para base de datos
      • AWS S3 para almacenamiento de imágenes
    `,
    image: '/ecommerce-screens/bd0403c1-486e-4054-9397-917ea93dad44.png',
    technologies: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    demoUrl: 'https://demo-ecommerce.juseb-software.com',
    downloadUrl: '/brochures/ecommerce.pdf',
    features: [
      'Diseño moderno y minimalista',
      'Carrito de compras en tiempo real',
      'Integración con Stripe',
      'Panel administrativo',
      'Gestión de inventario',
      'Análisis de ventas'
    ],
    demoScreens: [
      {
        title: 'Página Principal',
        description: 'Diseño moderno y minimalista que destaca los productos y facilita la navegación.',
        image: '/ecommerce-screens/bd0403c1-486e-4054-9397-917ea93dad44.png',
        features: [
          'Diseño limpio y elegante',
          'Navegación intuitiva',
          'Destacados de productos',
          'Experiencia de usuario optimizada'
        ]
      },
      {
        title: 'Catálogo de Productos',
        description: 'Visualización elegante de productos con filtros y opciones de ordenamiento.',
        image: '/ecommerce-screens/fe0e56a8-42ee-457b-a789-cf9c709e8316.png',
        features: [
          'Filtros avanzados',
          'Ordenamiento inteligente',
          'Vista rápida de productos',
          'Calificaciones y reseñas'
        ]
      },
      {
        title: 'Proceso de Compra',
        description: 'Proceso de checkout simplificado con múltiples opciones de pago.',
        image: '/ecommerce-screens/15e8deae-e196-4f13-8f68-93c356678452.webp',
        features: [
          'Checkout en un paso',
          'Múltiples métodos de pago',
          'Carrito persistente',
          'Resumen de compra claro'
        ]
      }
    ]
  }
};

export default function ProjectDetail() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const params = useParams();
  const id = params?.id as string;
  const project = proyectos[id];

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
    <>
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
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
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
              <button
                onClick={() => setIsDemoOpen(true)}
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                Ver Demo Interactiva
              </button>
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

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        project={project}
      />
    </>
  );
} 