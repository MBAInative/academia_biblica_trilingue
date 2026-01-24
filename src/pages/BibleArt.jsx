import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';
import ProvidenciaImage from '../assets/dibujos/Providencia quizas tarjeton.jpg';

const BibleArt = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Importar todas las imágenes de la carpeta assets/dibujos dinámicamente
  const imagesGlob = import.meta.glob('../assets/dibujos/*.{jpg,jpeg,png,svg}', { eager: true });
  
  // Convertir el objeto de glob a un array de rutas
  const images = Object.values(imagesGlob).map(img => img.default);

  return (
    <>
      <Helmet>
        <title>Biblia y Arte - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Explora la intersección entre la Biblia y el arte a través del análisis de obras maestras inspiradas en textos sagrados." />
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
                Biblia y Arte
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              
              <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 lg:text-left text-center"
                >
                  <Palette className="inline-block lg:block text-amber-900 mb-6" size={48} />
                  <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                    Inma y sus dibujos bíblicos
                  </h2>
                  <p className="text-xl text-stone-600 italic font-serif leading-relaxed">
                    "Durante años he realizado dibujos para la revista Vida Nueva. La caligrafía y el dibujo forman parte de mis aficiones más queridas."
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 max-w-md"
                >
                  <img 
                    className="w-full h-auto object-cover rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500" 
                    alt="Providencia" 
                    src={ProvidenciaImage} 
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-stone-50 rounded-2xl p-8 sm:p-12 border border-stone-200"
              >
                
                {/* Galería de imágenes */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-12 text-left">
                  {images.map((imgSrc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="break-inside-avoid"
                    >
                      <div 
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage(imgSrc)}
                      >
                        <img 
                          src={imgSrc} 
                          alt={`Dibujo de Inma ${index + 1}`} 
                          className="w-full h-auto rounded-lg transform transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable="false"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-stone-200 pt-6 mt-6">
                  <p className="text-sm text-stone-500 font-light">
                    © Todos los derechos reservados a favor de Inmaculada Rodríguez Torné. Prohibida su reproducción total o parcial sin autorización.
                  </p>
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
                alt="Dibujo ampliado"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()} // Evita cerrar si se hace clic en la imagen
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

export default BibleArt;