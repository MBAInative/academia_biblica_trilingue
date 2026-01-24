import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

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
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Podcast;