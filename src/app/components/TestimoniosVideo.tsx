'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const testimoniosVideo = [
  {
    id: 1,
    nombre: "Dr. Carlos Mendoza",
    empresa: "Clínica Dental Sonrisa",
    cargo: "Director Médico",
    testimonio: "Antes de trabajar con JuSeb SOFTWARE, nuestra clínica apenas recibía 2-3 citas por semana a través de internet. Ahora, con nuestro nuevo sitio web, recibimos más de 15 citas diarias solo por la web. El ROI ha sido increíble.",
    resultado: "340% más citas",
    videoUrl: "/videos/testimonial-carlos.mp4",
    thumbnail: "/images/testimonials/carlos-mendoza.jpg",
    rating: 5,
    fecha: "Hace 2 meses"
  },
  {
    id: 2,
    nombre: "Ana Rodríguez",
    empresa: "Boutique Estilo Único",
    cargo: "Propietaria",
    testimonio: "La transformación digital de mi boutique fue impresionante. Pasamos de vender solo en tienda física a generar el 40% de nuestras ventas online. El equipo de JuSeb entendió perfectamente nuestra visión y la hizo realidad.",
    resultado: "220% más ventas",
    videoUrl: "/videos/testimonial-ana.mp4",
    thumbnail: "/images/testimonials/ana-rodriguez.jpg",
    rating: 5,
    fecha: "Hace 1 mes"
  },
  {
    id: 3,
    nombre: "Miguel Torres",
    empresa: "Despacho Contable Números",
    cargo: "Contador Público",
    testimonio: "La automatización que implementaron nos cambió la vida. Antes perdíamos horas en tareas manuales, ahora todo es automático. Podemos atender 3 veces más clientes con el mismo equipo.",
    resultado: "300% más capacidad",
    videoUrl: "/videos/testimonial-miguel.mp4",
    thumbnail: "/images/testimonials/miguel-torres.jpg",
    rating: 5,
    fecha: "Hace 3 semanas"
  }
];

const logosClientes = [
  { nombre: "Clínica Dental Sonrisa", logo: "/images/clients/clinica-sonrisa.png" },
  { nombre: "Boutique Estilo Único", logo: "/images/clients/boutique-estilo.png" },
  { nombre: "Despacho Números", logo: "/images/clients/despacho-numeros.png" },
  { nombre: "FoodFast Delivery", logo: "/images/clients/foodfast.png" },
  { nombre: "Consultora Marketing Pro", logo: "/images/clients/marketing-pro.png" },
  { nombre: "TransRápido Logística", logo: "/images/clients/transrapido.png" }
];

export default function TestimoniosVideo() {
  const [videoActivo, setVideoActivo] = useState<number | null>(null);

  const reproducirVideo = (id: number) => {
    setVideoActivo(id);
  };

  const cerrarVideo = () => {
    setVideoActivo(null);
  };

  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Resultados reales de negocios reales. Escucha directamente de nuestros clientes 
            cómo hemos transformado sus empresas.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <span>4.9/5 promedio</span>
            </div>
            <div>50+ clientes satisfechos</div>
            <div>100+ proyectos exitosos</div>
          </div>
        </motion.div>

        {/* Testimonios con Video */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimoniosVideo.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">
                          {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="text-sm font-medium">{testimonio.nombre}</div>
                      <div className="text-xs opacity-80">{testimonio.empresa}</div>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => reproducirVideo(testimonio.id)}
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{testimonio.fecha}</span>
                </div>

                <p className="text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonio.testimonio}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold">{testimonio.nombre}</h4>
                    <p className="text-gray-400 text-sm">{testimonio.cargo}</p>
                    <p className="text-blue-400 text-sm">{testimonio.empresa}</p>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm font-bold">
                    📈 {testimonio.resultado}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos de Clientes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-gray-400 mb-8">
            Empresas que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logosClientes.map((cliente, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <div className="w-full h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs text-center">
                    {cliente.nombre}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Estadísticas de Confianza */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">285%</div>
              <div className="text-gray-400 text-sm">ROI Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Soporte</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">30 días</div>
              <div className="text-gray-400 text-sm">Garantía</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de Video */}
      {videoActivo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={cerrarVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-white font-bold">Testimonio en Video</h3>
              <button
                onClick={cerrarVideo}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-4">🎥</div>
                <p>Video testimonial próximamente</p>
                <p className="text-sm mt-2">
                  Mientras tanto, puedes leer el testimonio completo arriba
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
