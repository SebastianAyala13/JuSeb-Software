'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SeoHead from '../components/SeoHead';

const equipo = [
  {
    nombre: "Juan Sebastián",
    cargo: "CEO & Full Stack Developer",
    experiencia: "Más de 5 años",
    especialidades: ["React", "Node.js", "AWS", "Arquitectura de Software", "Python", "Java", "HTML", "PHP", "SQL", "CSS", "JavaScript", "Tailwind", "Next.js"],
    descripcion: "Apasionado por crear soluciones tecnológicas que transforman negocios. Especialista en desarrollo full-stack y arquitectura de sistemas escalables.",
    logros: [
      "100+ proyectos exitosos",
      "Certificado AWS Solutions Architect",
      "Speaker en conferencias tech",
      "Mentor de desarrolladores junior"
    ],
    imagen: "/team/sebas.png",
    linkedin: "https://www.linkedin.com/in/sebastian-aayala13/",
    github: "https://github.com/SebastianAyala13"
  },
  {
    nombre: "Juan José Cardona",
    cargo: "Full Stack Developer",
    experiencia: "Más de 5 años",
    especialidades: ["Next.js","Firebase","Python","SQL","HTML","CSS","JavaScript"],
    descripcion: "Desarrollador full-stack con pasión por construir plataformas modernas y escalables. Siempre enfocado en la mejora continua y las buenas prácticas de código.",
    logros: [
      "Desarrollo de múltiples plataformas SaaS",
      "Especialista en arquitectura moderna web",
      "Automatización de procesos internos",
      "Líder en implementación CI/CD"
    ],
    imagen: "/images/team/juan-jose.jpg",
    linkedin: "https://www.linkedin.com/in/juan-jose-cardona-gil-9b627321a/",
    github: "https://github.com/juanjose0312"
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
  { numero: "50+", label: "Proyectos Completados", icono: "🏆" },
  { numero: "30+", label: "Clientes Satisfechos", icono: "😊" },
  { numero: "6+", label: "Años Programando", icono: "📅" },
  { numero: "99.9%", label: "Uptime Garantizado", icono: "⚡" },
  { numero: "24/7", label: "Soporte Técnico", icono: "🛠️" },
  { numero: "200%", label: "ROI Promedio", icono: "📈" }
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
              JuSeb SOFTWARE – Desarrollo Web & Apps desde Pereira
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Desarrollamos soluciones web y móviles con +6 años de experiencia, empezando a los 17. Tecnología moderna, impacto real y atención personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/573107736703?text=Hola%2C%20quiero%20trabajar%20con%20JuSeb%20SOFTWARE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                🤝 Trabajar con Nosotros
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contacto"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-medium text-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                📅 Agenda tu Reunión
              </motion.a>
            </div>
          </motion.div>

              {/* Contacto */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contacto"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-xl font-medium text-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                📅 Agenda tu Reunión
              </motion.a>
            </div>


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
                    JuSeb SOFTWARE nació en 2019 con una visión clara: democratizar el acceso a 
                    tecnología de calidad para negocios de todos los tamaños.
                  </p>
                  <p>
                    Desde nuestros inicios como un pequeño equipo de desarrolladores jóvenes en Pereira, Colombia, 
                    hemos crecido con esfuerzo, constancia y pasión por la innovación. Lo que comenzó como proyectos 
                    freelance en un cuarto convertido en oficina, se transformó en una agencia formal que ha acompañado 
                    a más de 100 clientes en sus procesos de transformación digital.
                  </p>
                  <p>
                    A lo largo del camino, hemos mantenido un enfoque claro: entender profundamente a cada cliente, 
                    construir soluciones a la medida y aportar valor real a través de tecnología eficiente y escalable.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">🎯 Nuestra Misión</h3>
                  <p className="text-gray-300 mb-6">
                    Empoderar a empresas y emprendedores con soluciones tecnológicas que optimicen procesos, 
                    generen crecimiento y mejoren la competitividad.
                  </p>
                  <h3 className="text-xl font-bold text-white mb-4">🔮 Nuestra Visión</h3>
                  <p className="text-gray-300">
                    Convertirnos en la empresa referente en transformación digital en Colombia y Latinoamérica, 
                    destacándonos por nuestra calidad técnica, cercanía con los clientes y resultados tangibles.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
              {equipo.map((miembro, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-center mb-6">
                    {miembro.imagen ? (
                      <Image
                        src={miembro.imagen}
                        alt={`Foto de ${miembro.nombre}`}
                        width={96}
                        height={96}
                        className="rounded-full mx-auto mb-4 object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {miembro.nombre.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
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
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                        </svg>
                      </a>
                    )}
                    {miembro.github && (
                      <a href={miembro.github} target="_blank" rel="noopener noreferrer"
                         className="text-gray-400 hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 href="https://wa.me/573107736703?text=Hola%2C%20estoy%20interesado%20en%20un%20proyecto%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-medium text-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                💬 Hablar por WhatsApp
              </motion.a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ⚡ Respuesta en 2 horas • 💰 Consulta gratuita • 🎯 Sin compromiso
            </p>  
          </motion.div>
        </div>
  
    </>
  );
} 