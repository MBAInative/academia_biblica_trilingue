import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BibleArt = () => {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "🚧 Esta función no está implementada todavía",
      description: "¡No te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

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
              <p className="text-xl text-stone-600 font-light">
                La expresión artística de la fe a través de los siglos
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img class="w-full h-[500px] object-cover rounded-2xl shadow-lg" alt="Biblical art and religious paintings" src="https://images.unsplash.com/photo-1566313099003-cf8d399b6535" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-serif font-bold text-stone-800">
                    La Biblia inspirando al arte
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    A lo largo de la historia, la Biblia ha sido una fuente inagotable de inspiración para artistas de todas las épocas y estilos.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    En esta sección exploramos cómo los textos sagrados han sido interpretados visualmente, desde las obras maestras del Renacimiento hasta el arte contemporáneo.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Analizamos la simbología, el contexto cultural y teológico detrás de las representaciones artísticas de pasajes bíblicos.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <Palette className="mx-auto text-amber-900 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Análisis Artístico</h3>
                  <p className="text-stone-600">Interpretación de obras maestras inspiradas en la Biblia</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <BookOpen className="mx-auto text-amber-900 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Contexto Bíblico</h3>
                  <p className="text-stone-600">Conexión entre el texto sagrado y su representación</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <Eye className="mx-auto text-amber-900 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Simbología</h3>
                  <p className="text-stone-600">Descubriendo los símbolos y significados ocultos</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl p-12 text-center"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                  Contenido en desarrollo
                </h2>
                <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                  Estamos preparando un contenido exclusivo sobre la relación entre la Biblia y el arte. Pronto podrás explorar análisis detallados de obras maestras y su conexión con los textos sagrados.
                </p>
                <button
                  onClick={handleComingSoon}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
                >
                  Mantenerme informado
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BibleArt;