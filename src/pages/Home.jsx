import React from 'react';
import PageMeta from '@/components/PageMeta';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Mic, Palette, ArrowRight, Quote } from 'lucide-react';
import JuanAntonioImg from '../assets/JuanAntonio.jpg';
import MilagrosImg from '../assets/Milagros.jpg';
import CatalinaImg from '../assets/Catalina.jpg';
import MDoloresImg from '../assets/MDolores.jpg';
import CabeceraWeb from '../assets/CabeceraWeb.jpg';
import InmaImage from '../assets/Inma.04.jpg';
import GemmaImg from '../assets/Gemma.jpg';
import MaikaImg from '../assets/Maika.jpg';
import IsabelImg from '../assets/Isabel.jpg';
import JoseAntonioImg from '../assets/jose-antonio.jpg';
import AnaImg from '../assets/ana.jpg';
import AraceliImg from '../assets/araceli.jpg';
import CarmenImg from '../assets/carmen.jpg';


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
      description: 'Recopilación de los podcasts bíblicos de Radio María',
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
      <PageMeta
        title="Inmaculada Rodríguez Torné - Lenguas Bíblicas"
        description="Adéntrate en el mundo de la Biblia a través de sus lenguas originales de la mano de Inmaculada Rodríguez Torné, Dra. en Filología Bíblica Trilingüe."
      />

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
              Formación académica en Lenguas Bíblicas (Hebreo y Griego Bíblicos), Literatura de la Biblia y Teología Bíblica
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
              Curso 2026-2027
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-6">
              Cursos de Hebreo y Griego Bíblicos
            </h2>
            <p className="text-xl text-stone-600 font-light mb-10">
              Siete niveles de hebreo y griego, en clases online en directo, con certificación de 6 ECTS del CTSA (Univ. Pontificia de Salamanca).
            </p>
            <Link
              to="/academia"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-900 text-white rounded-lg font-medium hover:bg-amber-800 transition-all hover:shadow-lg group"
            >
              Ver los cursos y horarios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
                        {/* Testimonios */}
                        <section className="py-20 bg-stone-50 rounded-3xl my-16">
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
                              {/* Carmen */}
                              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col md:col-span-2">
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                                  <div className="w-24 h-24 flex-shrink-0">
                                    <img 
                                      src={CarmenImg} 
                                      alt="Carmen" 
                                      className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                                    />
                                  </div>
                                  <div className="font-serif font-bold text-amber-900 text-xl">
                                    Carmen
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <Quote className="text-amber-900/20 mb-2" size={32} />
                                  <div className="text-stone-700 italic text-lg leading-relaxed">
                                    <p className="mb-4">"Empecé a estudiar hebreo tras escuchar a Inmaculada unas charlas sobre la Biblia en las que la explicaba desde el lenguaje original. En ese momento quise conocerlo. Esto no es fácil pero si apasionante, en unas clases cercanas y muy participativas.</p>
                                    <p className="mb-4">Con los compañeros formamos un grupo de diferentes procedencias y lugares pero con el mismo interés: conocer la Palabra de Dios como Él la dijo.</p>
                                    <p className="mb-4">Inmaculada, es una profesora clara, excelente comunicadora y muy buena conocedora de la Biblia. Además es comprensiva con nuestras realidades: estamos trabajando o al cargo de mayores o con otras ocupaciones.</p>
                                    <p>Estudiar hebreo y posteriormente griego, es un descubrimiento en mi vida y la apertura al conocimiento de Dios Padre e Hijo y el momento histórico en que se produjo la Revelación"</p>
                                  </div>
                                </div>
                              </div>

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
                                    "Médica ORL. Las clases me aportan un montón de cosas Y todas buenas: momentos de abstracción y concentración absoluta, reto personal diario, disciplina para estudiar todos los días un ratito, aprender cosas sobre una cultura diferente, ampliar conocimiento sobre la Biblia.... y haber conocido a un grupo de gente fantástica que lucha en cada clase con sus propias limitaciones de tiempo, edad, etc."
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
            
                              {/* José Antonio */}
                              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                                  <div className="w-24 h-24 flex-shrink-0">
                                    <img 
                                      src={JoseAntonioImg} 
                                      alt="José Antonio" 
                                      className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                                    />
                                  </div>
                                  <div className="font-serif font-bold text-amber-900 text-xl">
                                    José Antonio
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <Quote className="text-amber-900/20 mb-2" size={32} />
                                  <p className="text-stone-700 italic text-lg leading-relaxed">
                                    "Me he dedicado a la docencia y a la psicología, ahora estoy jubilado. Las clases de hebreo y griego bíblicos con Inma me aportan muchas cosas: disciplina, compañerismo, espiritualidad, satisfacción del progreso, humildad al descubrir el inmenso y gozoso camino que falta por andar, admiración por la belleza y la riqueza de las comunidades depositarias de estos textos sagrados y la frescura de entrar en contacto con la Palabra de Dios en sus idiomas y sensibilidades originarias."
                                  </p>
                                </div>
                              </div>
            
                              {/* Ana */}
                              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                                  <div className="w-24 h-24 flex-shrink-0">
                                    <img 
                                      src={AnaImg} 
                                      alt="Ana" 
                                      className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                                    />
                                  </div>
                                  <div className="font-serif font-bold text-amber-900 text-xl">
                                    Ana
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <Quote className="text-amber-900/20 mb-2" size={32} />
                                  <p className="text-stone-700 italic text-lg leading-relaxed">
                                    "Soy arquitecto técnico. Las clases de Hebreo son más que aprender un idioma. Inma explica el significado bíblico y genera ansia de conocimiento. Hay que estudiar, pero se puede compaginar con el trabajo. Para mí es apasionante."
                                  </p>
                                </div>
                              </div>
            
                              {/* Araceli */}
                              <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200 h-full flex flex-col">
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
                                  <div className="w-24 h-24 flex-shrink-0">
                                    <img 
                                      src={AraceliImg} 
                                      alt="Araceli" 
                                      className="w-full h-full object-cover rounded-full border-2 border-amber-900 shadow-md"
                                    />
                                  </div>
                                  <div className="font-serif font-bold text-amber-900 text-xl">
                                    Araceli
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <Quote className="text-amber-900/20 mb-2" size={32} />
                                  <p className="text-stone-700 italic text-lg leading-relaxed">
                                    "Estudié magisterio y trabajé como secretaria. Soy alumna de Hebreo Bíblico desde hace más de seis años. Disfruto con las clases y agradezco la paciencia y el entusiasmo de Inmaculada, la profesora, y los compañeros que me motivan a seguir profundizando y amando la Biblia."
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </section>
                                  </div>
                                </div>
                              </section>
                            </>
                          );
                        };
                        
                        export default Home;