import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Radio, Globe } from 'lucide-react';
import InmaImage from '../assets/Inma.04.png';
import Inma02 from '../assets/Inma.02.png';
import Inma03 from '../assets/Inma.03.jpg';
import Inma05 from '../assets/Inma.05.png';
import MuroImage from '../assets/Muro.png';
import LosaImage from '../assets/Losa.png';
import RolloImage from '../assets/Rollo.jpg';

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Formación Académica',
      description: 'Dra. en Filología Bíblica Trilingüe y Teóloga con amplia trayectoria académica'
    },
    {
      icon: BookOpen,
      title: 'Docencia Universitaria',
      description: 'Profesora universitaria especializada en lenguas bíblicas y Antiguo Testamento'
    },
    {
      icon: Globe,
      title: 'Revista Tierra Santa',
      description: 'Colaboradora de prestigio en temas de cultura bíblica y Tierra Santa'
    },
    {
      icon: Radio,
      title: 'Radio María',
      description: 'Comunicadora en medios especializados en contenido religioso y cultural'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Acerca de mí - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Conoce a Inmaculada Rodríguez Torné, Dra. en Filología Bíblica Trilingüe, Teóloga, profesora universitaria y experta en lenguas bíblicas." />
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
                Acerca de mí
              </h1>
              <p className="text-xl text-stone-600 font-light">
                Dedicada al estudio y enseñanza de las lenguas bíblicas originales
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-serif font-bold text-stone-800">
                    Inmaculada Rodríguez Torné
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Soy Inmaculada Rodríguez Torné, y quizás a alguno le suene mi nombre o mi voz porque colaboro en Radio María. Soy biblista, licenciada en Filología Clásica, doctora en Filología Bíblica Trilingüe y teóloga.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="py-4"
                >
                  <img 
                    className="w-full h-auto rounded-2xl shadow-xl" 
                    alt="Inmaculada Rodríguez Torné, Dra. en Filología Bíblica Trilingüe" 
                    src={InmaImage} 
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-stone-600 leading-relaxed">
                    Soy profesora universitaria y enseño Hebreo y Griego Bíblicos, Literatura de la Biblia y Teología Bíblica. He estudiado en Cambridge, Roma y Jerusalén. Durante seis años he dirigido la revista Tierra Santa.
                  </p>
                  
                  <div className="py-4">
                    <img src={MuroImage} alt="Muro" className="w-full h-auto rounded-xl shadow-md" />
                  </div>

                  <p className="text-lg text-stone-600 leading-relaxed">
                    Como <strong>profesora universitaria</strong>, he dedicado años a la formación de estudiantes en el estudio riguroso del Antiguo y Nuevo Testamento, combinando el análisis filológico con el contexto histórico y cultural.
                  </p>
                  
                  <p className="text-lg text-stone-600 leading-relaxed mt-6">
                    Y lo más importante: soy una apasionada de la Palabra de Dios. Desde muy jovencita me sentí llamada por Él a transmitir su Palabra y hacerla amable y entendible.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-stone-50 rounded-xl p-8 border border-stone-200"
                  >
                    <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                      <achievement.icon className="text-amber-900" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-amber-100 via-rose-100 to-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                  Mi misión
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  Mi objetivo es hacer accesible el estudio de las lenguas bíblicas a todas las personas interesadas, independientemente de su nivel académico previo. Creo firmemente que el conocimiento del hebreo y griego bíblico enriquece enormemente la comprensión de la fe y la cultura occidental.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                  A través de la Academia de Lenguas Bíblicas, ofrezco una formación rigurosa pero accesible, combinando el estudio académico con la aplicación práctica y espiritual de estos conocimientos.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;