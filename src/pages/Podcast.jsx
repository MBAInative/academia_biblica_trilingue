import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import LogoABT from '../assets/LogoABT.jpg';

const Podcast = () => {
  const episodes = [
    {
      title: "0. Ecología Bíblica",
      link: "https://open.spotify.com/episode/5LIPU6GO8hgwqLxWcT2YfF?si=ltrowErgTpqKlsj2IabQ3A&nd=1",
      embed: "https://open.spotify.com/embed/episode/5LIPU6GO8hgwqLxWcT2YfF",
      description: ""
    },
    {
      title: "1. Fundamentos Bíblicos para una Ecología con Fe",
      link: "https://open.spotify.com/episode/0lokAjGuJNNds0iKLFKtPp",
      embed: "https://open.spotify.com/embed/episode/0lokAjGuJNNds0iKLFKtPp",
      description: `Iniciamos este podcast de Biblia y Ecología de la mano de la biblista Inmaculada Rodríguez Torné. En este primer episodio, sentamos las bases para comprender cómo las Sagradas Escrituras —Palabra de Dios en lenguaje humano—nos invitan hoy a cuidar nuestra "casa común".

Lo que descubrirás en este episodio:
• Claves de interpretación: ¿Por qué es fundamental situar la Biblia en su contexto histórico y literario para no malinterpretarla?
• Jesucristo y la Tierra: La relación de Jesús con su Galilea natal, una tierra fértil que configuró su carácter compasivo, y su lugar como cumbre de toda la revelación.
• El sentido del "mito": Cuando abrimos la Biblia, la primera página que nos encontramos no está ahí por casualidad. En este episodio iniciamos un viaje por el primer relato de la creación (Génesis 1, 1-2,3).
Entendemos los relatos de la creación no como ensayos científicos, sino como verdades de fe atemporales que nos hablan de un Dios que pone orden en el caos (tohu vavohu).
• La Creación como Templo: Una meditación profunda sobre el Relato Sacerdotal (Gn 1,1-2,4), donde cada elemento creado es declarado "bueno" por Dios y donde el universo entero se convierte en su morada.

Te invito a escuchar y rezar con el majestuoso poema de la creación, dejándote empapar por su lenguaje simbólico y su llamada a reconocer a un único Dios, fuente de vida y amor.
Seguiremos profundizando en las primeras páginas de la Biblia en el siguiente podcast.`
    },
    {
      title: "2. ¿Qué hace que el relato del Génesis sea único en la historia?",
      link: "https://open.spotify.com/episode/4d4nSzE5eGig0r08fPRS3T",
      embed: "https://open.spotify.com/embed/episode/4d4nSzE5eGig0r08fPRS3T",
      description: `En este 2º episodio de Biblia y Ecología seguimos adentrándonos en los primeros versículos de la creación (Gn 1,1-2,4).

Exploramos temas clave como:
• El monoteísmo radical: Cómo la Biblia se distancia de las luchas de dioses en las mitologías griega, babilónica y egipcia.
• Verdad de fe vs. ciencia: El significado del género "mítico" y la inerrancia de las Escrituras.
• Conceptos hebreos: Descubrimos el significado de términos como Elohim, el toju vavoju (caos) y el merismo "cielos y tierra".
• El Espíritu de Dios: La presencia de la Ruaj que aletea sobre la creación, desde el Génesis hasta el anuncio del ángel a María y el Bautismo de Jesús.

Acompáñanos a descubrir a un Dios ecuménico y universal que ordena el caos con la fuerza de su palabra.`
    },
    {
      title: "3. Palabra que ordena, crea y sostiene",
      link: "https://open.spotify.com/episode/7rHljfoN24jvsupqAtFDK4",
      embed: "https://open.spotify.com/embed/episode/7rHljfoN24jvsupqAtFDK4",
      description: `En este tercer episodio la biblista Inmaculada Rodríguez Torné nos invita a profundizar en el versículo 3 del Génesis. Descubrimos la fuerza de la palabra divina (dabar) y cómo el proyecto de Dios se despliega con armonía y solidez.

Temas destacados de este capítulo:
• Yehí Or (sea luz): Analizamos la contundencia del hebreo original, donde la palabra de Dios es performativa: lo que Él dice, se hace al instante. No es un Dios que lucha, sino un Dios que crea con la palabra.
• La estructura de la Creación: Desgranamos el orden progresivo de la semana bíblica, desde la matriz de la luz en el día primero hasta la plenitud del sábado, viendo la creación como un gran escenario litúrgico o templo habitado por Dios.
• El imaginario bíblico del universo: Hacemos un viaje visual a la cosmología de la época: la tierra como una mesa firme sobre pilares, el firmamento como una cúpula protectora y las "aguas de arriba" veladas por las nubes.
• Jesús, la Palabra hecha carne: Conectamos el Génesis con el Prólogo de Juan y el Himno a los Colosenses, reconociendo en Jesús a la Palabra eterna por quien todo fue creado y en quien todo tiene consistencia.

Una reflexión final: Aunque la ciencia ha avanzado, la verdad de fe permanece. La Biblia nos recuerda que Dios es el único Señor que sostiene la creación con su mirada constante, invitándonos a la admiración y al cuidado de su obra.`
    },
    {
      title: "4. “Y vio Dios que era bueno”",
      link: "https://open.spotify.com/episode/2f4cVirkGy1yC2TkMNAO3H",
      embed: "https://open.spotify.com/embed/episode/2f4cVirkGy1yC2TkMNAO3H",
      description: `En este cuarto podcast de Biblia y Ecología, seguimos profundizando en el primer relato de la creación (Gn 1,1–2,4), el llamado relato sacerdotal, redactado en el siglo VI a. C. Un texto que presenta a un Dios que crea con la fuerza de su palabra, sin violencia ni luchas, y que contempla su obra con amor.

Reflexionamos sobre el nombre Elohim, el Dios universal, no exclusivo, abierto a todos los pueblos y culturas. Un Dios que no pertenece a nadie en particular, porque toda la creación es suya y todos formamos parte de ella.

El Génesis repite siete veces: “Y vio Dios que era bueno”. Pero hay una pequeña variación en el hebreo que resulta crucial ¿sabes cuál es? Te invito a descubrirla. Esa mirada creadora no sólo da origen al mundo, sino que lo sostiene. Nos recuerda que la creación y todos y cada uno de nosotros, somos esencialmente buenos, incluso en medio de la fragilidad y de nuestros errores.

A partir de Gn 1,27, meditamos qué significa ser imagen de Dios: somos imagen de Elohim cuando nuestra palabra crea, cuida y ordena; y cuando aprendemos a mirar con asombro, respeto y compasión, como Dios mira su obra.

Una invitación a redescubrir la unidad en la diversidad, a custodiar la vida y a dejarnos transformar por la mirada que nos dice, hoy también: “Y vio Dios que era bueno.”`
    },
    {
      title: "5. Dios nos creó vegetarianos",
      link: "https://open.spotify.com/episode/1IOzQgGLhzdXePYTS4v1sf",
      embed: "https://open.spotify.com/embed/episode/1IOzQgGLhzdXePYTS4v1sf",
      description: `En este nuevo programa del podcast “Biblia y Ecología” seguimos profundizando en el primer relato de la creación (Gn 1,1–2,4), el relato sacerdotal del siglo VI a. C., donde Dios crea por medio de su palabra.

Nos detenemos en el versículo clave: “Y creó Dios al ser humano a su imagen” (Gn 1,27) y en el sentido de la palabra hebrea tselem, ¿costilla o costado? En el podcast lo explico.
Hablaré también del ser humano como imagen de Dios, su obra de arte en la creación.

Reflexionamos sobre lo que significa ser imagen de Elohim hoy: crear y ordenar en lugar de destruir, custodiar toda forma de vida, y aprender a descansar como Dios.
Analizamos también los verbos bíblicos cabash y radah, que no legitiman la explotación, sino la responsabilidad y el cuidado. ¿Quieres saber lo que significan?

Recordamos que la tierra no nos pertenece: es del Señor. El ser humano no es dueño, sino administrador y embajador del Creador.
¿Sabías que el primer mandato alimentario de Dios fue vegetariano? Te invito a descubrirlo. Nos adentraremos en el sueño original de Dios: una creación sin violencia, donde todos los vivientes comparten la vida en armonía sin derramamiento de sangre.

Una invitación a redescubrir nuestra vocación más profunda: ser imagen del Creador y custodios de la vida.`
    }
  ];

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
              <img src={LogoABT} alt="Logo ABT" className="h-16 mx-auto mb-6 object-contain" />
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
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="flex items-center space-x-4 mb-10 border-b border-green-200 pb-4">
                  <h2 className="text-3xl font-serif font-bold text-green-700">
                    Ecología Bíblica
                  </h2>
                </div>

                <div className="space-y-12">
                  {episodes.map((episode, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-stone-50 rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4">
                        {episode.title}
                      </h3>
                      
                      <div className="prose prose-stone max-w-none text-stone-600 mb-8 whitespace-pre-line leading-relaxed">
                        {episode.description}
                      </div>
                      
                      <div className="mb-6">
                        <iframe 
                          style={{borderRadius: "12px"}} 
                          src={`${episode.embed}?utm_source=generator`} 
                          width="100%" 
                          height="152" 
                          frameBorder="0" 
                          allowFullScreen="" 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                          loading="lazy"
                        ></iframe>
                      </div>

                      <a
                        href={episode.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all hover:shadow-lg"
                      >
                        <PlayCircle className="mr-2" size={20} />
                        Escuchar este episodio en Spotify
                      </a>
                    </motion.div>
                  ))}
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