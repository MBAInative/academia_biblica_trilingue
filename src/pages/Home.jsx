import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Mic, Palette, ArrowRight, Quote, Calendar, Clock, Globe, Mail, Book, Heart, Utensils, Church, Languages, Sparkles } from 'lucide-react';
import JuanAntonioImg from '../assets/JuanAntonio.png';
import MilagrosImg from '../assets/Milagros.png';
import CatalinaImg from '../assets/Catalina.png';
import MDoloresImg from '../assets/MDolores.png';
import PortadaImg from '../assets/Portada.jpg';
import CabeceraWeb from '../assets/CabeceraWeb.png';
import InmaImage from '../assets/Inma.04.png';
import GemmaImg from '../assets/Gemma.jpg';
import MaikaImg from '../assets/Maika.jpg';
import IsabelImg from '../assets/Isabel.png';
import LogoABT from '../assets/LogoABT.jpg';

import ConfImg1 from '@/assets/conferencias/Imagen.1.jpeg';
import ConfImg2 from '@/assets/conferencias/Imagen.2.jpeg';
import ConfImg3 from '@/assets/conferencias/Imagen.3.jpeg';
import ConfImg4 from '@/assets/conferencias/Imagen.4.jpeg';
import ConfImg5 from '@/assets/conferencias/Imagen.5.jpeg';
import ConfImg6 from '@/assets/conferencias/Imagen.6.jpeg';

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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12 w-full"
          >
            <img 
              src={CabeceraWeb} 
              alt="Cabecera Academia Bíblica Trilingüe" 
              className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/50"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={LogoABT} alt="Logo ABT" className="h-20 mx-auto mb-8 object-contain" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-800 mb-6 leading-tight">
                Adéntrate en el mundo de la Biblia a través de sus lenguas originales
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-stone-600 mb-8 font-light"
            >
              De la mano de Inmaculada Rodríguez Torné
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
                Inmaculada Rodríguez Torné
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12 w-full"
          >
            <img 
              src={InmaImage} 
              alt="Inmaculada Rodríguez Torné" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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

      {/* Testimonios */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-stone-800 mb-12 text-center"
          >
            Opiniones de nuestros alumnos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Juan Antonio */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={JuanAntonioImg} 
                    alt="Juan Antonio" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Juan Antonio
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Soy Ingeniero Industrial jubilado. Aprendo Griego por ser un idioma clásico predecesor del nuestro y que me puede permitir leer el Nuevo Testamento en la lengua en que fue escrito."
                </p>
              </div>
            </div>

            {/* Milagros */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={MilagrosImg} 
                    alt="Milagros" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Milagros
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "He sido bibliotecaria; ahora estoy jubilada, y vivo entre Teruel y Madrid. Como creyente desde hace relativamente poco tiempo, me he puesto a estudiar Biblia. Al enterarme de que el Nuevo Testamento se escribió originalmente en griego koiné, no he podido resistirme a acercarme a los Evangelios aprendiendo un poco la lengua original. Me encanta el griego y la posibilidad de estudiarlo online, desde cualquier sitio."
                </p>
              </div>
            </div>

            {/* Catalina */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={CatalinaImg} 
                    alt="Catalina" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Catalina
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Los estudios de Hebreo me ayudan a conectarme más con mis raíces cristianas; me enriquecen en la fe y en la relación personal con Adonai."
                </p>
              </div>
            </div>

            {/* M. Dolores */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={MDoloresImg} 
                    alt="M. Dolores" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  M. Dolores
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Soy religiosa, docente en Primaria. Es mi tercer año en Hebreo. Estoy muy agradecida y contenta con las clases de nuestra profesora Inmaculada. Me están ayudando a comprender y profundizar en las palabras de la Biblia, a conocer mejor y gozar con el mensaje que nos transmite."
                </p>
              </div>
            </div>

            {/* Gemma */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={GemmaImg} 
                    alt="Gemma" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Gemma
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Médica ORL. Las clases me aportan un montón de cosas Y todas buenas: momentos de abstracción y concentración absoluta , reto personal diario, disciplina para estudiar todos los días un ratito , aprender cosas sobre una cultura diferente, ampliar conocimiento sobre la Biblia.... y haber conocido a un grupo de gente fantástica que lucha en cada clase con sus propias limitaciones de tiempo, edad, etc."
                </p>
              </div>
            </div>

            {/* Maika */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={MaikaImg} 
                    alt="Maika" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Maika
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Con el tiempo espero llegar a leer los libros del AT en el mismo idioma en el que fueron escritos y rezados. Me gusta pensar que Jesús escuchaba esas mismas palabras. Soy técnico superior en imagen para el diagnóstico."
                </p>
              </div>
            </div>

            {/* Isabel */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                <div className="w-24 h-24 flex-shrink-0">
                  <img 
                    src={IsabelImg} 
                    alt="Isabel" 
                    className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                  />
                </div>
                <div className="font-serif font-bold text-amber-900 text-xl">
                  Isabel
                </div>
              </div>
              <div className="flex-1">
                <Quote className="text-amber-900/20 mb-2" size={32} />
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  "Estoy jubilada y he sido funcionaria del Estado. Las clases de Hebreo Bíblico me sirven para conocer a Jesús de Nazaret."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;