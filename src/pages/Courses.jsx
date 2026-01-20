import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, Globe, Mail, Phone, Book, Heart, Utensils, Church, Languages, Sparkles } from 'lucide-react';

import ConfImg1 from '@/assets/conferencias/Imagen.1.jpeg';
import ConfImg2 from '@/assets/conferencias/Imagen.2.jpeg';
import ConfImg3 from '@/assets/conferencias/Imagen.3.jpeg';
import ConfImg4 from '@/assets/conferencias/Imagen.4.jpeg';
import ConfImg5 from '@/assets/conferencias/Imagen.5.jpeg';
import ConfImg6 from '@/assets/conferencias/Imagen.6.jpeg';

const Courses = () => {
  const trainingProposal = [
    {
      title: "A. Para conocer",
      icon: Book,
      color: "bg-blue-100 text-blue-900",
      items: [
        "Introducción general: Qué es y qué no es la Biblia",
        "Historia del pueblo bíblico y Geografía del país de la Biblia",
        "Últimos descubrimientos arqueológicos y Restauraciones en Tierra Santa",
        "Vida y costumbres del pueblo de la Biblia",
        "Judaísmo: desde Jesús a nuestros días",
        "La formación de la Biblia: redacción y transmisión",
        "Claves para aprender a leer un texto bíblico",
        "Los géneros literarios en la Biblia y Didáctica de los textos bíblicos",
        "El AT: una experiencia sorprendente (Visión panorámica, Creación, Patriarcas, Mujeres, Profetas, Sabiduría)",
        "El NT: Jesús y el Reino que llega (Jesús histórico, Judaísmo, Parábolas, Oración, Mujeres)",
        "San Pablo: su persona, sus cartas y su relación con las mujeres",
        "María, la mejor discípula"
      ]
    },
    {
      title: "B. Para profundizar",
      icon: Heart,
      color: "bg-rose-100 text-rose-900",
      items: [
        "Costumbres y tradiciones judías y sus textos",
        "Biblia y ecología",
        "La fe y la Biblia",
        "La entrañable misericordia de nuestro Dios",
        "Los Proverbios bíblicos y María en la tradición sapiencial",
        "La hospitalidad: una actitud bíblica",
        "Un Dios comunitario: La Trinidad en la Biblia",
        "La justicia: una virtud típicamente bíblica",
        "El peregrinaje en la Biblia",
        "El símbolo de la barca"
      ]
    },
    {
      title: "C. Para saborear",
      icon: Utensils,
      color: "bg-amber-100 text-amber-900",
      items: [
        "La Biblia en el arte y un paseo por el Museo del Prado",
        "Un Dios que es Padre y Madre",
        "El Nombre y los nombres de Dios",
        "Mujeres bíblicas: heroínas rescatadas del silencio",
        "\"Si me olvido de ti, Jerusalén...\": un viaje histórico-arqueológico por la Tierra de Jesús",
        "Taller de cocina bíblica para niños",
        "La Biblia en nuestra cultura (Cine, TV, Publicidad)"
      ]
    },
    {
      title: "D. Para orar",
      icon: Sparkles,
      color: "bg-purple-100 text-purple-900",
      items: [
        "La lectio divina: orar la Palabra, gustar la vida",
        "Retiros bíblicos para tiempos fuertes"
      ]
    },
    {
      title: "E. Para celebrar",
      icon: Church,
      color: "bg-emerald-100 text-emerald-900",
      items: [
        "La eucaristía y el séder de pesaj",
        "Entronización de la Palabra",
        "Pregón de Adviento"
      ]
    },
    {
      title: "F. Para aprender",
      icon: Languages,
      color: "bg-stone-100 text-stone-900",
      items: [
        "Hebreo bíblico",
        "Griego bíblico",
        "Latín de la Vulgata"
      ]
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
        <title>Cursos y Conferencias - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Cursos de hebreo y griego bíblico 2025-2026. Niveles inicial, intermedio y avanzado. Modalidad online con certificación universitaria." />
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
                className="mb-16"
              >
                <img src="https://horizons-cdn.hostinger.com/b142b1f4-d967-45d2-8f34-6dc408a42f87/92f33436df5d59f5a2c5659d7402a2cf.jpg" alt="Cursos de Hebreo y Griego Bíblicos 2025-2026" className="w-full rounded-2xl shadow-lg" />
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
                className="mb-16"
              >
                <img src="https://horizons-cdn.hostinger.com/b142b1f4-d967-45d2-8f34-6dc408a42f87/43760bc2e3641e0c9001297e169904a8.jpg" alt="Información adicional sobre los cursos" className="w-full rounded-2xl shadow-lg" />
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
                  <a href="mailto:academiabiblicatrilingue@gmail.com" className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <Mail className="text-amber-900" size={24} />
                    <span className="text-stone-700 text-sm">academiabiblicatrilingue@gmail.com</span>
                  </a>
                  <a href="tel:+34649454564" className="flex items-center justify-center space-x-3 bg-white rounded-xl p-4 hover:shadow-lg transition-shadow md:col-span-2">
                    <Phone className="text-amber-900" size={24} />
                    <span className="text-stone-700">+34 649454564</span>
                  </a>
                </div>
                <p className="text-center text-stone-600 mt-6 text-sm">
                  Personas sin/con conocimientos previos interesadas en el Hebreo y el Griego de la Biblia
                </p>
              </motion.div>

              {/* Nueva sección: Propuesta Formativa */}
              <section className="py-20 mt-10 border-t border-stone-200">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">
                    Propuesta Formativa
                  </h2>
                  <h3 className="text-2xl font-serif italic text-amber-800">
                    La Biblia: Un viaje apasionante a los orígenes de nuestra fe
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                  <div className="grid grid-cols-2 gap-4">
                    <img src={ConfImg1} alt="Conferencia 1" className="rounded-xl shadow-md w-full h-48 object-cover" />
                    <img src={ConfImg2} alt="Conferencia 2" className="rounded-xl shadow-md w-full h-48 object-cover" />
                    <img src={ConfImg3} alt="Conferencia 3" className="rounded-xl shadow-md w-full h-48 object-cover" />
                    <img src={ConfImg4} alt="Conferencia 4" className="rounded-xl shadow-md w-full h-48 object-cover" />
                  </div>
                  <div>
                    <img src={ConfImg5} alt="Conferencia 5" className="rounded-xl shadow-lg w-full h-auto mb-4" />
                    <img src={ConfImg6} alt="Conferencia 6" className="rounded-xl shadow-md w-full h-32 object-cover" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {trainingProposal.map((section, idx) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center mb-6">
                        <div className={`p-3 rounded-xl ${section.color} mr-4`}>
                          <section.icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-stone-800">{section.title}</h4>
                      </div>
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start text-stone-600 text-sm leading-relaxed">
                            <span className="text-amber-600 mr-2 font-bold">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Courses;