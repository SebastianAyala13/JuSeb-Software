'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SeoHead from '../components/SeoHead'

const paquetes = [
  {
    nombre: "Starter",
    descripcion: "Perfecto para emprendedores y pequeños negocios",
    precio: 1500,
    precioMensual: 150,
    caracteristicas: [
      "Sitio web responsivo (hasta 5 páginas)",
      "Diseño personalizado",
      "Optimización SEO básica",
      "Formulario de contacto",
      "Integración redes sociales",
      "SSL y hosting incluido (1 año)",
      "Soporte por email"
    ],
    extras: [
      { nombre: "Página adicional", precio: 200 },
      { nombre: "Blog integrado", precio: 400 },
      { nombre: "Chat en vivo", precio: 300 }
    ],
    popular: false,
    color: "blue"
  },
  {
    nombre: "Professional",
    descripcion: "Ideal para empresas en crecimiento",
    precio: 3500,
    precioMensual: 350,
    caracteristicas: [
      "Sitio web completo (hasta 15 páginas)",
      "Diseño avanzado y animaciones",
      "SEO avanzado + Google Analytics",
      "Sistema de citas/reservas",
      "E-commerce básico (hasta 50 productos)",
      "Panel de administración",
      "Integración con CRM",
      "Soporte prioritario 24/7"
    ],
    extras: [
      { nombre: "Productos adicionales (c/10)", precio: 300 },
      { nombre: "Pasarela de pagos extra", precio: 500 },
      { nombre: "App móvil básica", precio: 2000 }
    ],
    popular: true,
    color: "purple"
  },
  {
    nombre: "Enterprise",
    descripcion: "Solución completa para grandes empresas",
    precio: 8000,
    precioMensual: 800,
    caracteristicas: [
      "Sitio web ilimitado",
      "Aplicación móvil nativa",
      "E-commerce avanzado (productos ilimitados)",
      "Dashboard ejecutivo personalizado",
      "Integración con sistemas existentes",
      "Automatización de procesos",
      "Consultoría estratégica incluida",
      "Soporte dedicado 24/7",
      "Mantenimiento y actualizaciones"
    ],
    extras: [
      { nombre: "Integración ERP/CRM", precio: 1500 },
      { nombre: "IA y Machine Learning", precio: 3000 },
      { nombre: "Consultoría adicional (hora)", precio: 150 }
    ],
    popular: false,
    color: "green"
  }
];

const serviciosAdicionales = [
  { nombre: "Consultoría IT (hora)", precio: 120, categoria: "consultoria" },
  { nombre: "Mantenimiento mensual", precio: 200, categoria: "soporte" },
  { nombre: "Migración de datos", precio: 800, categoria: "desarrollo" },
  { nombre: "Capacitación equipo (día)", precio: 400, categoria: "consultoria" },
  { nombre: "Auditoría de seguridad", precio: 600, categoria: "seguridad" },
  { nombre: "Optimización de rendimiento", precio: 500, categoria: "desarrollo" }
];

export default function Precios() {
  const [planSeleccionado, setPlanSeleccionado] = useState('Professional');
  const [esAnual, setEsAnual] = useState(true);
  const [extrasSeleccionados, setExtrasSeleccionados] = useState<Record<string, boolean>>({});
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState<Record<number, boolean>>({});

  const calcularTotal = () => {
    const plan = paquetes.find(p => p.nombre === planSeleccionado);
    if (!plan) return 0;
    let total = esAnual ? plan.precio : plan.precioMensual * 12;
    
    // Agregar extras del plan
    Object.entries(extrasSeleccionados).forEach(([key, selected]) => {
      if (selected) {
        const [planNombre, extraIndex] = key.split('-');
        if (planNombre === planSeleccionado) {
          const planData = paquetes.find(p => p.nombre === planNombre);
          if (planData && planData.extras[parseInt(extraIndex)]) {
            total += planData.extras[parseInt(extraIndex)].precio;
          }
        }
      }
    });

    // Agregar servicios adicionales
    Object.entries(serviciosSeleccionados).forEach(([index, selected]) => {
      if (selected) {
        total += serviciosAdicionales[parseInt(index)].precio;
      }
    });

    return total;
  };

  const toggleExtra = (planNombre: string, extraIndex: number) => {
    const key = `${planNombre}-${extraIndex}`;
    setExtrasSeleccionados(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleServicio = (index: number) => {
    setServiciosSeleccionados(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <SeoHead
        title="Precios Transparentes - Desarrollo Web y Apps | JuSeb SOFTWARE"
        description="Precios claros y transparentes para desarrollo web, aplicaciones móviles y consultoría IT. Paquetes desde $1,500. Cotización personalizada gratuita."
        canonical="https://juseb-software.com/precios"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Precios Transparentes
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Sin sorpresas, sin costos ocultos. Elige el paquete perfecto para tu negocio 
              y personalízalo según tus necesidades específicas.
            </p>
            
            {/* Toggle Anual/Mensual */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!esAnual ? 'text-white' : 'text-gray-400'}`}>Mensual</span>
              <motion.button
                onClick={() => setEsAnual(!esAnual)}
                className={`relative w-16 h-8 rounded-full transition-colors ${esAnual ? 'bg-blue-600' : 'bg-gray-600'}`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full"
                  animate={{ x: esAnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <span className={`text-lg ${esAnual ? 'text-white' : 'text-gray-400'}`}>
                Anual <span className="text-green-400 text-sm">(Ahorra 20%)</span>
              </span>
            </div>
          </motion.div>

          {/* Paquetes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paquetes.map((paquete, index) => (
              <motion.div
                key={paquete.nombre}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gray-800/50 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                  paquete.popular 
                    ? 'border-purple-500 transform scale-105' 
                    : planSeleccionado === paquete.nombre
                    ? 'border-blue-500'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setPlanSeleccionado(paquete.nombre)}
              >
                {paquete.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      🔥 Más Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{paquete.nombre}</h3>
                  <p className="text-gray-400 text-sm mb-4">{paquete.descripcion}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      ${esAnual ? paquete.precio.toLocaleString() : paquete.precioMensual.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      {esAnual ? 'pago único' : '/mes'}
                    </span>
                  </div>
                  {esAnual && (
                    <p className="text-green-400 text-sm">
                      Ahorro: ${(paquete.precioMensual * 12 - paquete.precio).toLocaleString()}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {paquete.caracteristicas.map((caracteristica, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                {/* Extras del paquete */}
                {planSeleccionado === paquete.nombre && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="border-t border-gray-700 pt-4 mb-6"
                  >
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">🎯 EXTRAS DISPONIBLES</h4>
                    {paquete.extras.map((extra, idx) => (
                      <label key={idx} className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-700/30 rounded px-2">
                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={extrasSeleccionados[`${paquete.nombre}-${idx}`] || false}
                            onChange={() => toggleExtra(paquete.nombre, idx)}
                            className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-gray-300 text-sm">{extra.nombre}</span>
                        </div>
                        <span className="text-green-400 text-sm font-medium">+${extra.precio}</span>
                      </label>
                    ))}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    planSeleccionado === paquete.nombre
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'border border-gray-600 text-gray-400 hover:border-gray-500'
                  }`}
                  onClick={() => setPlanSeleccionado(paquete.nombre)}
                >
                  {planSeleccionado === paquete.nombre ? '✓ Seleccionado' : 'Seleccionar Plan'}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Servicios Adicionales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800/30 rounded-2xl p-8 mb-16 border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              🛠️ Servicios Adicionales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviciosAdicionales.map((servicio, index) => (
                <label key={index} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={serviciosSeleccionados[index] || false}
                      onChange={() => toggleServicio(index)}
                      className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-white text-sm font-medium">{servicio.nombre}</span>
                      <div className="text-xs text-gray-400 capitalize">{servicio.categoria}</div>
                    </div>
                  </div>
                  <span className="text-green-400 font-medium">${servicio.precio}</span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Calculadora de Precio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 mb-16 border border-blue-500/30"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                💰 Tu Inversión Total
              </h2>
              <div className="text-5xl font-bold text-white mb-4">
                ${calcularTotal().toLocaleString()}
              </div>
              <p className="text-gray-400 mb-6">
                Plan: {planSeleccionado} • {esAnual ? 'Pago único' : 'Anual'} • 
                {Object.values(extrasSeleccionados).filter(Boolean).length + Object.values(serviciosSeleccionados).filter(Boolean).length} extras seleccionados
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
                  📞 Consulta Gratuita
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              ❓ Preguntas Frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  pregunta: "¿Qué incluye el hosting y dominio?",
                  respuesta: "Incluimos hosting premium por 1 año, certificado SSL, dominio .com y soporte técnico 24/7."
                },
                {
                  pregunta: "¿Puedo cambiar de plan después?",
                  respuesta: "Sí, puedes actualizar tu plan en cualquier momento. Solo pagas la diferencia prorrateada."
                },
                {
                  pregunta: "¿Ofrecen garantía de satisfacción?",
                  respuesta: "Garantía de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero."
                },
                {
                  pregunta: "¿Cuánto tiempo toma el desarrollo?",
                  respuesta: "Starter: 2-4 semanas, Professional: 6-8 semanas, Enterprise: 8-12 semanas."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.pregunta}</h3>
                  <p className="text-gray-400">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center bg-gray-800/50 rounded-2xl p-12 border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              🎯 ¿Necesitas algo personalizado?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              Cada negocio es único. Si ningún paquete se ajusta perfectamente a tus necesidades, 
              creamos una propuesta 100% personalizada sin costo adicional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium text-lg hover:from-green-700 hover:to-blue-700 transition-colors"
              >
                💬 Cotización Personalizada
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-xl font-medium text-lg hover:bg-yellow-500 hover:text-black transition-colors"
              >
                📅 Agendar Reunión
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              ⚡ Respuesta en 2 horas • 💰 Consulta gratuita • 🎯 Sin compromiso • 📊 Análisis incluido
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
} 