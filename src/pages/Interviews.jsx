import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlayCircle, Music } from 'lucide-react';
import rneLogo from '../assets/rne.png';

const Interviews = () => {
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
              <p className="text-xl text-stone-600 font-light">
                Apariciones en medios de comunicación y conversaciones
              </p>
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

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Interviews;