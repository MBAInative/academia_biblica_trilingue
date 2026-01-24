import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CookiesPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Academia Bíblica Trilingüe</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="pt-20">
        <section className="py-12 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-stone-200"
            >
              <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8">Política de Cookies</h1>
              
              <div className="prose prose-stone max-w-none text-stone-600">
                <p>
                  Esta web utiliza cookies propias y de terceros para ofrecerle una mejor experiencia y servicio. Al navegar o utilizar nuestros servicios el usuario acepta el uso que hacemos de las cookies.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">¿Qué es una cookie?</h3>
                <p>
                  Una cookie es un pequeño fichero de texto que los sitios web envían al navegador y que se almacenan en el terminal del usuario, el cual puede ser un ordenador personal, un teléfono móvil, una tableta, etc. Estos archivos permiten que el sitio web recuerde información sobre su visita, como el idioma y las opciones preferidas, lo que puede facilitar su próxima visita y hacer que el sitio le resulte más útil.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">Tipos de cookies utilizadas</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li>
                    <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
                  </li>
                  <li>
                    <strong>Cookies de análisis:</strong> Son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">Cómo administrar las cookies en el navegador</h3>
                <p>
                  El usuario tiene la opción de permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su terminal:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                  <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                  <li><strong>Microsoft Edge:</strong> Configuración &gt; Cookies y permisos del sitio.</li>
                  <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad.</li>
                  <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
                </ul>
                <p>
                  En caso de bloquear el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPolicy;