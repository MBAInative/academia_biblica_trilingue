import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

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
            <div className="text-center text-stone-600">
              <p>Próximamente...</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Interviews;