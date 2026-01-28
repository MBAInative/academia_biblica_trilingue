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
import LogoABT from '@/assets/LogoABT.jpg';

const Courses = () => {
  const trainingProposal = [
    {
      title: "A. Para conocer",
      icon: Book,
      image: ConfImg1,
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
      image: ConfImg2,
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
      image: ConfImg3,
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
      image: ConfImg4,
      color: "bg-purple-100 text-purple-900",
      items: [
        "La lectio divina: orar la Palabra, gustar la vida",
        "Retiros bíblicos para tiempos fuertes"
      ]
    },
    {
      title: "E. Para celebrar",
      icon: Church,
      image: ConfImg5,
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
      image: ConfImg6,
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Nueva sección: Propuesta Formativa */}
              <section className="mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <img src={LogoABT} alt="Logo ABT" className="h-16 mx-auto mb-6 object-contain" />
                  <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">
                    Propuesta Formativa
                  </h2>
                  <h3 className="text-2xl font-serif italic text-amber-800">
                    La Biblia: Un viaje apasionante a los orígenes de nuestra fe
                  </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {trainingProposal.map((section, idx) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                    >
                      {/* Imagen de cabecera */}
                      <div className="h-48 w-full overflow-hidden">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      
                      <div className="p-8">
                        <img src={LogoABT} alt="Logo ABT" className="h-12 mb-4 object-contain" />
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
                      </div>
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