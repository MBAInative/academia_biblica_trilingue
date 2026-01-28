import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe, Calendar, Clock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoABT from '../assets/LogoABT.jpg';
import RolloImage from '../assets/Rollo.jpg';

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

  const hebrewCourses = [
    { level: 'HEBREO I', day: 'Jueves', time: '18h-19.30h' },
    { level: 'HEBREO II', day: 'Miércoles', time: '18.30h-20h' },
    { level: 'HEBREO III', day: 'Miércoles', time: '17h-18.30h' },
    { level: 'HEBREO RABINOS', day: 'Martes', time: '18h-19.30h' }
  ];

  const greekCourses = [
    { level: 'GRIEGO I', day: 'Jueves', time: '16.30h-18h' },
    { level: 'GRIEGO II', day: 'Martes', time: '19.30h-21h' },
    { level: 'GRIEGO III', day: 'Martes', time: '16.30h-18h' }
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
              <img src={LogoABT} alt="Logo ABT" className="h-16 mx-auto mb-6 object-contain" />
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
                  <img class="w-full h-[400px] object-cover rounded-2xl shadow-lg" alt="Ancient Hebrew and Greek biblical manuscripts" src={RolloImage} />
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

        {/* Cursos de Hebreo y Griego Bíblicos (Importado de Courses.jsx) */}
        <section className="py-20 bg-gradient-to-br from-amber-50 via-rose-50 to-stone-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block bg-rose-200 text-rose-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                2025-2026
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-6">
                Cursos de Hebreo y Griego Bíblicos
              </h1>
              <p className="text-xl text-stone-600 font-light">
                Programas estructurados para todos los niveles con horarios flexibles
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 max-w-2xl mx-auto"
              >
                <img src="https://horizons-cdn.hostinger.com/b142b1f4-d967-45d2-8f34-6dc408a42f87/43760bc2e3641e0c9001297e169904a8.jpg" alt="Información adicional sobre los cursos" className="w-full rounded-2xl shadow-lg" />
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200">
                    <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">
                      Cursos de Hebreo
                    </h2>
                    <div className="space-y-4">
                      {hebrewCourses.map((course, index) => (
                        <motion.div
                          key={course.level}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-xl font-bold text-stone-800 mb-3">
                            {course.level}
                          </h3>
                          <div className="flex items-center text-stone-600 mb-2">
                            <Calendar className="mr-2" size={18} />
                            <span className="font-medium">{course.day}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="mr-2" size={18} />
                            <span>Hora CET: {course.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 border-2 border-rose-200">
                    <h2 className="text-3xl font-serif font-bold text-rose-900 mb-6">
                      Cursos de Griego
                    </h2>
                    <div className="space-y-4">
                      {greekCourses.map((course, index) => (
                        <motion.div
                          key={course.level}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h3 className="text-xl font-bold text-stone-800 mb-3">
                            {course.level}
                          </h3>
                          <div className="flex items-center text-stone-600 mb-2">
                            <Calendar className="mr-2" size={18} />
                            <span className="font-medium">{course.day}</span>
                          </div>
                          <div className="flex items-center text-stone-600">
                            <Clock className="mr-2" size={18} />
                            <span>Hora CET: {course.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 max-w-2xl mx-auto"
              >
                <img src="https://horizons-cdn.hostinger.com/b142b1f4-d967-45d2-8f34-6dc408a42f87/92f33436df5d59f5a2c5659d7402a2cf.jpg" alt="Cursos de Hebreo y Griego Bíblicos 2025-2026" className="w-full rounded-2xl shadow-lg" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
              >
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center">
                  <Globe className="mx-auto text-amber-900 mb-4" size={40} />
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">Modalidad Online</h3>
                  <p className="text-stone-600 text-sm">Clases virtuales en directo</p>
                </div>
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center">
                  <Calendar className="mx-auto text-amber-900 mb-4" size={40} />
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">Certificación</h3>
                  <p className="text-stone-600 text-sm">6 ECTS del CTSA (Univ. Pontif. Salamanca)</p>
                </div>
                <div className="bg-stone-50 rounded-xl p-6 border border-stone-200 text-center">
                  <Clock className="mx-auto text-amber-900 mb-4" size={40} />
                  <h3 className="text-lg font-semibold text-stone-800 mb-2">Niveles</h3>
                  <p className="text-stone-600 text-sm">Inicial, intermedio y avanzado</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl p-8 sm:p-12"
              >
                <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6 text-center">
                  Información y contacto
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  <a href="mailto:infohebreo@yahoo.com" className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <Mail className="text-amber-900" size={24} />
                    <span className="text-stone-700">infohebreo@yahoo.com</span>
                  </a>
                  <a 
                    href="https://wa.me/34649454564"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow md:col-span-2"
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
                    <span className="text-stone-700">+34 649454564</span>
                  </a>
                </div>
                <p className="text-center text-stone-600 mt-6 text-sm">
                  Personas sin/con conocimientos previos interesadas en el Hebreo y el Griego de la Biblia
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Academy;