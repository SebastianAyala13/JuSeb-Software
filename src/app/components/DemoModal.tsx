'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export interface DemoScreen {
  title: string;
  description: string;
  image?: string;
  video?: string;
  features?: string[];
  interactive?: {
    type: 'form' | 'calendar' | 'chart';
    data: any;
  };
}

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  downloadUrl?: string;
  features: string[];
  demoScreens: DemoScreen[];
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function DemoModal({ isOpen, onClose, project }: DemoModalProps) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const nextScreen = () => {
    setCurrentScreen((prev) => 
      prev === project.demoScreens.length - 1 ? 0 : prev + 1
    );
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => 
      prev === 0 ? project.demoScreens.length - 1 : prev - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const handleNextScreen = () => {
      setCurrentScreen((prev) => 
        prev === project.demoScreens.length - 1 ? 0 : prev + 1
      );
    };

    let interval: NodeJS.Timeout;
    if (isAutoplay) {
      interval = setInterval(handleNextScreen, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay, project.demoScreens.length]);

  const currentDemo = project.demoScreens[currentScreen];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-10 bg-gray-900 rounded-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-b from-gray-900 to-transparent border-b border-gray-800">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">
                  Demo: {project.title}
                </h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className={`p-2 rounded-lg transition-colors ${
                      isAutoplay ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'
                    }`}
                    title={isAutoplay ? 'Detener presentación' : 'Iniciar presentación'}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isAutoplay ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      )}
                    </svg>
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-600"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((currentScreen + 1) / project.demoScreens.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Media Section */}
                  <div className="space-y-6">
                    {currentDemo.video ? (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <video
                          src={currentDemo.video}
                          className="w-full"
                          controls
                          autoPlay={isAutoplay}
                          muted={isAutoplay}
                          loop={isAutoplay}
                        />
                      </div>
                    ) : currentDemo.image ? (
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
                        <Image
                          src={currentDemo.image}
                          alt={currentDemo.title}
                          fill
                          className="object-contain"
                          priority
                          sizes="(max-width: 1200px) 100vw, 50vw"
                        />
                      </div>
                    ) : null}

                    {/* Interactive Elements */}
                    {currentDemo.interactive && (
                      <div className="bg-gray-800/50 rounded-lg p-6">
                        <div className="text-gray-400 text-center">
                          {currentDemo.interactive.type === 'form' ? 'Formulario interactivo' : 
                           currentDemo.interactive.type === 'calendar' ? 'Calendario interactivo' : 
                           'Elemento interactivo'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info Section */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">
                        {currentDemo.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {currentDemo.description}
                      </p>
                    </div>

                    {currentDemo.features && (
                      <div>
                        <h5 className="text-lg font-medium text-white mb-4">
                          Características Destacadas
                        </h5>
                        <ul className="space-y-3">
                          {currentDemo.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <svg
                                className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
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
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Solicitar Información
                  </button>
                  {project.downloadUrl && (
                    <a
                      href={project.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Descargar Brochure
                    </a>
                  )}
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={prevScreen}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  </button>

                  <span className="text-gray-400">
                    {currentScreen + 1} / {project.demoScreens.length}
                  </span>

                  <button
                    onClick={nextScreen}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Modal */}
          <AnimatePresence>
            {showContactForm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] bg-gray-900 rounded-2xl z-[60] p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Solicitar más información
                  </h3>
                  <button
                    onClick={() => setShowContactForm(false)}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Enviar Solicitud
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
} 