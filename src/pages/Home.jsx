import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Mic, Palette, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academia de Lenguas Bíblicas',
      description: 'Aprende hebreo y griego bíblico con metodología profesional',
      link: '/academia'
    },
    {
      icon: Users,
      title: 'Cursos y Conferencias',
      description: 'Programas formativos presenciales y online',
      link: '/cursos'
    },
    {
      icon: Mic,
      title: 'Podcast',
      description: 'Contenido especializado sobre Biblia y cultura',
      link: '/podcast'
    },
    {
      icon: Palette,
      title: 'Biblia y Arte',
      description: 'Explorando la intersección entre fe y expresión artística',
      link: '/biblia-arte'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Inmaculada Rodríguez Torné - Lenguas Bíblicas</title>
        <meta name="description" content="Adéntrate en el mundo de la Biblia a través de sus lenguas originales de la mano de Inmaculada Rodríguez Torné, Dra. en Filología Bíblica Trilingüe." />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                Adéntrate en el mundo de la Biblia a través de sus lenguas originales
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-stone-600 mb-8 font-light"
            >
              De la mano de Inmaculada Rodríguez Torné
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/academia"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg group"
              >
                Explorar la Academia
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/acerca-de-mi"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-900 border-2 border-amber-900 rounded-lg font-medium hover:bg-amber-50 transition-all"
              >
                Conocer más
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-4">
              Explora nuestros servicios
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Formación académica rigurosa en lenguas bíblicas y cultura del mundo antiguo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="group block">
                  <div className="bg-stone-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-stone-200">
                    <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                      <feature.icon className="text-amber-900" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-amber-900 font-medium group-hover:translate-x-2 transition-transform">
                      Ver más
                      <ArrowRight className="ml-2" size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-100 via-rose-100 to-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-800 mb-6">
                Comienza tu viaje en las lenguas bíblicas
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Descubre el mundo fascinante del hebreo y griego bíblico con una experta reconocida internacionalmente. Metodología adaptada a todos los niveles.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
              >
                Contactar
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;