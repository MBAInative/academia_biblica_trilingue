import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
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
            <div className="max-w-5xl mx-auto">
              
              {/* Sección: Spotify */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <div className="flex items-center space-x-4 mb-10 border-b border-green-200 pb-4">
                  <h2 className="text-3xl font-serif font-bold text-green-700">
                    Spotify
                  </h2>
                </div>

                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                    La Biblia en sus lenguas originales
                  </h3>
                  
                  <div className="mb-8">
                    <iframe 
                      style={{borderRadius: "12px"}} 
                      src="https://open.spotify.com/embed/episode/0lokAjGuJNNds0iKLFKtPp?utm_source=generator" 
                      width="100%" 
                      height="152" 
                      frameBorder="0" 
                      allowFullScreen="" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                      loading="lazy"
                    ></iframe>
                  </div>

                  <a
                    href="https://open.spotify.com/episode/0lokAjGuJNNds0iKLFKtPp?si=4e2Cj2blRma_FMDCKm1UqA&nd=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all hover:shadow-lg"
                  >
                    <PlayCircle className="mr-2" size={20} />
                    Escuchar en Spotify
                  </a>
                </div>
              </motion.div>

              {/* Sección: Pinceladas Bíblicas */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <div className="flex items-center space-x-4 mb-10 border-b border-amber-200 pb-4">
                  <h2 className="text-3xl font-serif font-bold text-amber-900">
                    Pinceladas Bíblicas
                  </h2>
                </div>

                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
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

              {/* Sección: Biblia y Ecología */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="flex items-center space-x-4 mb-10 border-b border-emerald-200 pb-4">
                  <h2 className="text-3xl font-serif font-bold text-emerald-900">
                    Biblia y Ecología
                  </h2>
                </div>

                <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-900 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all hover:shadow-lg"
                  >
                    <PlayCircle className="mr-2" size={20} />
                    Escuchar episodio
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Podcast;