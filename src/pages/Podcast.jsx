import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mic, Radio, Headphones, PlayCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import rtveLogo from '../assets/rtve.png';
import radioMariaLogo from '../assets/radio_maria.png';

const Podcast = () => {
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
        <title>Podcast - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Escucha contenido especializado sobre Biblia, lenguas bíblicas y cultura del mundo antiguo." />
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
                Podcast
              </h1>
              <p className="text-xl text-stone-600 font-light">
                Contenido especializado sobre Biblia y cultura
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <div className="h-12 mb-4 flex items-center justify-center">
                    <img src={radioMariaLogo} alt="Radio María" className="h-12 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Radio María</h3>
                  <p className="text-stone-600">Colaboraciones en programas especializados</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <Radio className="mx-auto text-amber-900 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Temas Bíblicos</h3>
                  <p className="text-stone-600">Análisis profundo de textos sagrados</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <Headphones className="mx-auto text-amber-900 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">Cultura Antigua</h3>
                  <p className="text-stone-600">Contexto histórico y cultural</p>
                </motion.div>

                 <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200"
                >
                  <div className="h-12 mb-4 flex items-center justify-center">
                    <img src={rtveLogo} alt="RTVE" className="h-12 object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">RTVE</h3>
                  <p className="text-stone-600">Intervenciones en medios públicos</p>
                </motion.div>
              </div>

              {/* Episodios Destacados Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12 space-y-8"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-8 text-center">
                  Episodios Destacados
                </h2>

                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">
                      Custodios de la creación
                    </h3>
                    <img src={radioMariaLogo} alt="Radio María" className="h-8 object-contain" />
                  </div>
                  <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    En este episodio de Radio María, Inmaculada Rodríguez Torné profundiza en el concepto bíblico del desierto.
                  </p>
                  <p className="text-md text-stone-700 mb-6">
                    Inmaculada interviene desde el minuto <strong>16:35</strong> hasta el <strong>23:41</strong>.
                  </p>
                  <a
                    href="https://radiomaria.es/podcast/custodios-de-la-creacion-08-11-25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
                  >
                    <PlayCircle className="mr-2" size={20} />
                    Escuchar episodio
                  </a>
                </div>

                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <h3 className="text-2xl font-serif font-bold text-stone-800">
                      Horizonte: Pascua, Resurrección, Tierra Santa, Pastoral Bíblica
                    </h3>
                    <img src={rtveLogo} alt="RTVE" className="h-8 object-contain" />
                  </div>
                  <p className="text-lg text-stone-600 leading-relaxed mb-4">
                    Reflexión sobre la Pascua en el programa Horizonte de RTVE.
                  </p>
                  <p className="text-md text-stone-700 mb-6">
                    Inmaculada interviene desde el minuto <strong>08:26</strong> hasta el minuto <strong>24:15</strong>.
                  </p>
                  <a
                    href="https://www.rtve.es/play/audios/horizonte/horizonte-pascua-resurreccion-tierra-santa-pastoral-biblica/16544340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
                  >
                    <PlayCircle className="mr-2" size={20} />
                    Escuchar episodio
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl p-12 text-center"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                  Próximamente
                </h2>
                <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                  Estamos preparando contenido exclusivo en formato podcast. Pronto podrás disfrutar de episodios sobre lenguas bíblicas, cultura del mundo antiguo y mucho más.
                </p>
                <button
                  onClick={handleComingSoon}
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
                >
                  Notificarme
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Podcast;