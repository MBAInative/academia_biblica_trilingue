import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academy = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Metodología Rigurosa',
      description: 'Programas estructurados con enfoque académico y práctico para el aprendizaje de lenguas antiguas'
    },
    {
      icon: Users,
      title: 'Niveles Adaptados',
      description: 'Cursos desde nivel inicial hasta avanzado, adaptados a las necesidades de cada estudiante'
    },
    {
      icon: Award,
      title: 'Certificación ECTS',
      description: '6 ECTS del CTSA (Universidad Pontificia de Salamanca) con certificado acreditativo'
    },
    {
      icon: Globe,
      title: 'Modalidad Online',
      description: 'Acceso flexible a las clases desde cualquier lugar del mundo'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Academia de Lenguas Bíblicas - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Academia especializada en la enseñanza de hebreo y griego bíblico con certificación universitaria. Aprende las lenguas originales de la Biblia." />
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
                Academia de Lenguas Bíblicas
              </h1>
              <p className="text-xl text-stone-600 font-light leading-relaxed">
                Formación especializada en hebreo y griego bíblico con metodología universitaria y certificación oficial
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-serif font-bold text-stone-800">
                    Aprende las lenguas originales de la Biblia
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    La <strong>Academia Bíblica Trilingüe</strong> ofrece una formación integral en hebreo y griego bíblico, con programas diseñados para estudiantes de todos los niveles.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Impartidos por la <strong>Pfra. Inmaculada Rodríguez Torné</strong>, Teóloga y Dra. en Filología Bíblica Trilingüe, los cursos combinan rigor académico con una metodología práctica y accesible.
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Los cursos están dirigidos a personas con o sin conocimientos previos, interesadas en profundizar en el hebreo y griego de la Biblia.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img class="w-full h-[400px] object-cover rounded-2xl shadow-lg" alt="Ancient Hebrew and Greek biblical manuscripts" src="https://images.unsplash.com/photo-1612375412161-41d76d95f15c" />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-stone-50 rounded-xl p-6 border border-stone-200"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="text-amber-900" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl p-8 sm:p-12 text-center"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">
                  Certificación Universitaria
                </h2>
                <p className="text-lg text-stone-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                  Los cursos de la Academia otorgan <strong>6 ECTS del CTSA</strong> (Centro Teológico San Agustín - Universidad Pontificia de Salamanca), con certificado acreditativo oficial.
                </p>
                <div className="flex justify-center">
                  <img class="h-20 object-contain" alt="Universidad Pontificia de Salamanca logo" src="https://images.unsplash.com/photo-1589330694653-ded6df03f754" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                ¿Listo para comenzar?
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Descubre nuestros cursos disponibles y comienza tu viaje en las lenguas bíblicas
              </p>
              <Link
                to="/cursos"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg"
              >
                Ver Cursos Disponibles
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academy;