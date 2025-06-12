'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SeoHead from '../components/SeoHead'

const equipo = [
  {
    nombre: "Juan Sebastián",
    cargo: "CEO & Full Stack Developer",
    experiencia: "8+ años",
    especialidades: ["React", "Node.js", "AWS", "Arquitectura de Software"],
    descripcion: "Apasionado por crear soluciones tecnológicas que transforman negocios. Especialista en desarrollo full-stack y arquitectura de sistemas escalables.",
    logros: [
      "100+ proyectos exitosos",
      "Certificado AWS Solutions Architect",
      "Speaker en conferencias tech",
      "Mentor de desarrolladores junior"
    ],
    imagen: "/images/team/juan-sebastian.jpg",
    linkedin: "https://linkedin.com/in/juansebastian",
    github: "https://github.com/juansebastian"
  },
  {
    nombre: "María González",
    cargo: "UX/UI Designer & Frontend Developer",
    experiencia: "6+ años",
    especialidades: ["Figma", "React", "Design Systems", "User Research"],
    descripcion: "Diseñadora con enfoque en experiencia de usuario y desarrollo frontend. Crea interfaces intuitivas que conectan con los usuarios.",
    logros: [
      "50+ diseños premiados",
      "Especialista en Design Systems",
      "Certificada en UX Research",
      "Mentora en bootcamps de diseño"
    ],
    imagen: "/images/team/maria-gonzalez.jpg",
    linkedin: "https://linkedin.com/in/mariagonzalez",
    dribbble: "https://dribbble.com/mariagonzalez"
  },
  {
    nombre: "Carlos Rodríguez",
    cargo: "DevOps Engineer & Cloud Architect",
    experiencia: "7+ años",
    especialidades: ["Docker", "Kubernetes", "CI/CD", "Monitoring"],
    descripcion: "Experto en infraestructura cloud y automatización. Garantiza que nuestras soluciones sean escalables, seguras y eficientes.",
    logros: [
      "Infraestructuras para 1M+ usuarios",
      "Certificado Kubernetes Administrator",
      "Especialista en seguridad cloud",
      "Contribuidor open source"
    ],
    imagen: "/images/team/carlos-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/carlosrodriguez",
    github: "https://github.com/carlosrodriguez"
  }
];

const valores = [
  {
    titulo: "Excelencia Técnica",
    descripcion: "Utilizamos las mejores prácticas y tecnologías más actuales para entregar soluciones de calidad superior.",
    icono: "⚡",
    color: "blue"
  },
  {
    titulo: "Transparencia Total",
    descripcion: "Comunicación clara, precios transparentes y reportes detallados en cada etapa del proyecto.",
    icono: "🔍",
    color: "green"
  },
  {
    titulo: "Orientación a Resultados",
    descripcion: "Nos enfocamos en generar valor real y ROI medible para nuestros clientes.",
    icono: "🎯",
    color: "purple"
  },
  {
    titulo: "Innovación Constante",
    descripcion: "Siempre exploramos nuevas tecnologías y metodologías para ofrecer soluciones vanguardistas.",
    icono: "🚀",
    color: "orange"
  }
];

const certificaciones = [
  { nombre: "AWS Solutions Architect", imagen: "/images/certs/aws-sa.png" },
  { nombre: "Google Cloud Professional", imagen: "/images/certs/gcp-pro.png" },
  { nombre: "Certified Kubernetes Administrator", imagen: "/images/certs/cka.png" },
  { nombre: "Scrum Master Certified", imagen: "/images/certs/scrum.png" }
];

const estadisticas = [
  { numero: "100+", label: "Proyectos Completados", icono: "🏆" },
  { numero: "50+", label: "Clientes Satisfechos", icono: "😊" },
  { numero: "8+", label: "Años de Experiencia", icono: "📅" },
  { numero: "99.9%", label: "Uptime Garantizado", icono: "⚡" },
  { numero: "24/7", label: "Soporte Técnico", icono: "🛠️" },
  { numero: "285%", label: "ROI Promedio", icono: "📈" }
];

export default function SobreNosotros() {
  return (
    <>
      <SeoHead
        title="Sobre Nosotros - Equipo Experto en Desarrollo Web | JuSeb SOFTWARE"
        description="Conoce al equipo de JuSeb SOFTWARE. 8+ años de experiencia, 100+ proyectos exitosos. Especialistas en desarrollo web, apps móviles y consultoría IT."
        canonical="https://juseb-software.com/sobre-nosotros"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Sobre JuSeb SOFTWARE
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Somos un equipo apasionado de desarrolladores, diseñadores y consultores tecnológicos 
              comprometidos con transformar ideas en soluciones digitales exitosas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🤝 Trabajar con Nosotros
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-medium text-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                📞 Agendar Reunión
              </motion.button>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20"
          >
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icono}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.numero}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Nuestra Historia */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    JuSeb SOFTWARE nació en 2016 con una visión clara: democratizar el acceso a 
                    tecnología de calidad empresarial para negocios de todos los tamaños.
                  </p>
                  <p>
                    Comenzamos como un pequeño equipo de desarrolladores apasionados trabajando 
                    desde un garaje en Pereira, Colombia. Hoy, somos una empresa reconocida que 
                    ha transformado más de 100 negocios a través de soluciones tecnológicas innovadoras.
                  </p>
                  <p>
                    Nuestro enfoque siempre ha sido el mismo: entender profundamente las necesidades 
                    de nuestros clientes y crear soluciones que no solo resuelvan problemas, sino 
                    que impulsen el crecimiento y la eficiencia.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Nuestra Misión</h3>
                  <p className="text-gray-300 mb-6">
                    Empoderar a las empresas con tecnología que transforma procesos, 
                    mejora la eficiencia y genera crecimiento sostenible.
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">🔮 Nuestra Visión</h3>
                  <p className="text-gray-300">
                    Ser la empresa líder en transformación digital en Colombia, 
                    reconocida por la excelencia técnica y el impacto positivo en nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {valores.map((valor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="text-4xl mb-4">{valor.icono}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{valor.titulo}</h3>
                  <p className="text-gray-400 text-sm">{valor.descripcion}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Equipo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Conoce Nuestro Equipo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipo.map((miembro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {miembro.nombre.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{miembro.nombre}</h3>
                    <p className="text-blue-400 font-medium mb-2">{miembro.cargo}</p>
                    <p className="text-gray-400 text-sm">{miembro.experiencia} de experiencia</p>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {miembro.descripcion}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2">🛠️ ESPECIALIDADES</h4>
                    <div className="flex flex-wrap gap-2">
                      {miembro.especialidades.map((especialidad, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">
                          {especialidad}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">🏆 LOGROS</h4>
                    <ul className="space-y-1">
                      {miembro.logros.map((logro, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-xs">{logro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {miembro.linkedin && (
                      <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-400 hover:text-blue-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {miembro.github && (
                      <a href={miembro.github} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {miembro.dribbble && (
                      <a href={miembro.dribbble} target="_blank" rel="noopener noreferrer" 
                         className="text-pink-400 hover:text-pink-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Certificaciones y Reconocimientos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {certificaciones.map((cert, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🏆</span>
                  </div>
                  <h3 className="text-white font-medium text-sm">{cert.nombre}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center bg-gray-800/50 rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ¿Listo para Trabajar Juntos?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Nuestro equipo está listo para ayudarte a transformar tu negocio con tecnología. 
              Conversemos sobre tu proyecto y cómo podemos hacerlo realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🚀 Empezar Proyecto
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-medium text-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                📞 Llamar: +57 321 123 4567
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ⚡ Respuesta en 2 horas • 💰 Consulta gratuita • 🎯 Sin compromiso
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
} 