import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const InmaDrawings = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Importar todas las imágenes de la carpeta assets/dibujos dinámicamente
  const imagesGlob = import.meta.glob('../assets/dibujos/*.{jpg,jpeg,png,svg}', { eager: true });
  
  // Convertir el objeto de glob a un array de rutas
  const images = Object.values(imagesGlob).map(img => img.default);

  // Función para obtener un título legible del nombre del archivo (opcional)
  const getTitle = (path) => {
    // Extraer el nombre del archivo de la ruta (ej: /src/assets/dibujos/Nombre.jpg -> Nombre)
    // Nota: Esto depende de cómo Vite resuelva las rutas, es solo cosmético.
    return "Dibujo de Inma"; 
  };

  return (
    <>
      <Helmet>
        <title>Los dibujos de Inma - Academia Bíblica Trilingüe</title>
        <meta name="description" content="Colección de dibujos y caligrafías realizados por Inmaculada Rodríguez Torné para la revista Vida Nueva y otros proyectos." />
      </Helmet>

      <div className="pt-20">
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-6">
                Inma y sus dibujos
              </h1>
              <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
                "La caligrafía y el dibujo forman parte de mis aficiones más queridas."
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
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
                    />
                  </div>
                </motion.div>
              ))}
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
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default InmaDrawings;