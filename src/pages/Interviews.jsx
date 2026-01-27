import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Music, X } from 'lucide-react';
import rneLogo from '../assets/rne.png';
import InmaImg from '../assets/Inma.05.png';
import rtveLogo from '../assets/RTVE.png';
import RTVE01 from '../assets/RTVE/01.png';
import RTVE02 from '../assets/RTVE/02.png';
import RTVE03 from '../assets/RTVE/03.png';
import RTVE04 from '../assets/RTVE/04.png';
import RTVE05 from '../assets/RTVE/05.png';
import RTVE06 from '../assets/RTVE/06.png';
import RTVE07 from '../assets/RTVE/07.png';
import RTVE08 from '../assets/RTVE/08.png';
import RTVE09 from '../assets/RTVE/09.png';
import RTVE10 from '../assets/RTVE/10.png';
import RTVE11 from '../assets/RTVE/11.png';
import RTVE12 from '../assets/RTVE/12.png';

const Interviews = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const rtveImages = [
    RTVE01, RTVE02, RTVE03, RTVE04, 
    RTVE05, RTVE06, RTVE07, RTVE08, 
    RTVE09, RTVE10, RTVE11, RTVE12
  ];

  return (
    <>
      <Helmet>
        <title>Entrevistas - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Entrevistas y apariciones en medios de comunicación de Inmaculada Rodríguez Torné." />
      </Helmet>

      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-6">
                Entrevistas
              </h1>
              <p className="text-xl text-stone-600 font-light mb-12">
                Apariciones en medios de comunicación y conversaciones
              </p>

              {/* RTVE Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-lg border border-stone-200"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                  <div className="text-left max-w-2xl">
                    <p className="text-lg text-stone-800 font-medium leading-relaxed">
                      Inmaculada entrevistada el Domingo de la Palabra, 25 de Enero de 2026, en RTVE por Mariangeles Fernández en Últimas Preguntas.
                    </p>
                  </div>
                  <img src={rtveLogo} alt="RTVE" className="h-12 object-contain" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {rtveImages.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="overflow-hidden rounded-lg shadow-sm cursor-pointer group"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`Entrevista RTVE ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 border-t border-stone-100 pt-12">
                  <video controls className="w-full rounded-xl shadow-xl bg-black aspect-video mb-6">
                    <source src="/videos/entrevista-rtve.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                  <div className="text-center">
                    <a 
                      href="https://www.rtve.es/play/videos/ultimas-preguntas/palabra-cristo-habite/16908996/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-900 font-medium hover:text-amber-800 underline transition-colors"
                    >
                      Ver entrevista completa en RTVE Play
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-12 max-w-2xl mx-auto"
              >
                <img 
                  src={InmaImg} 
                  alt="Inmaculada Rodríguez Torné" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow mb-12"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-rose-100 rounded-lg">
                        <Music className="text-rose-700" size={24} />
                      </div>
                      <span className="text-rose-700 font-bold tracking-wider">RNE - FRONTERA</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-800 leading-tight">
                      Entrevista sobre los cursos de Hebreo y Griego Bíblico realizada por María Ángeles Fernández a Inmaculada
                    </h3>
                  </div>
                  <div className="w-32 flex-shrink-0">
                    <img 
                      src={rneLogo} 
                      alt="RNE Logo" 
                      className="w-full h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-stone-100 shadow-inner">
                  <p className="text-stone-500 text-sm mb-4 font-medium flex items-center">
                    <PlayCircle className="mr-2" size={16} />
                    Reproducir entrevista (09-09-2025)
                  </p>
                  <audio controls className="w-full h-12">
                    <source src="/audio/entrevista-rne-2023.mp3" type="audio/mpeg" />
                    Tu navegador no soporta la reproducción de audio.
                  </audio>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-rose-100 rounded-lg">
                        <Music className="text-rose-700" size={24} />
                      </div>
                      <span className="text-rose-700 font-bold tracking-wider">RNE - FRONTERA</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-800 leading-tight">
                      Entrevista sobre la Pascua de Resurrección
                    </h3>
                    <p className="text-stone-600 mt-2">
                      Inmaculada Rodríguez Torné en el programa Horizonte.
                    </p>
                  </div>
                  <div className="w-32 flex-shrink-0">
                    <img 
                      src={rneLogo} 
                      alt="RNE Logo" 
                      className="w-full h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-stone-100 shadow-inner">
                  <p className="text-stone-500 text-sm mb-4 font-medium flex items-center">
                    <PlayCircle className="mr-2" size={16} />
                    Reproducir entrevista (20-04-2025)
                  </p>
                  <audio controls className="w-full h-12">
                    <source src="/audio/entrevista-rne-pascua-2025.mp3" type="audio/mpeg" />
                    Tu navegador no soporta la reproducción de audio.
                  </audio>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
            >
              <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50 p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Interviews;