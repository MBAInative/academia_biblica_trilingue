import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Condiciones de Uso - Academia Bíblica Trilingüe</title>
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
              <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8">Condiciones de Uso</h1>
              
              <div className="prose prose-stone max-w-none text-stone-600">
                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">1. Introducción</h3>
                <p>
                  Las presentes condiciones generales de uso de la página web, regulan los términos y condiciones de acceso y uso de <strong>academiabiblicatrilingue.com</strong>, propiedad de Inmaculada Rodríguez Torné, que el usuario del Portal deberá de leer y aceptar para usar todos los servicios e información que se facilitan desde el portal.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">2. Compromisos del Usuario</h3>
                <p>
                  El usuario se compromete a hacer un uso diligente del sitio web y de los servicios accesibles desde el mismo, con total sujeción a la Ley, a las buenas costumbres y a las presentes Condiciones Generales.
                </p>
                <p className="mt-2">
                  Queda expresamente prohibido cualquier uso diferente a la finalidad de este Sitio Web.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">3. Propiedad Intelectual de los Materiales</h3>
                <p>
                  Todos los contenidos formativos, textos, imágenes (especialmente los dibujos artísticos), y materiales disponibles en la web están protegidos por derechos de autor.
                </p>
                <p className="font-bold mt-2">
                  Queda terminantemente prohibido el uso de los dibujos y materiales gráficos de la sección "Biblia y Arte" o de cualquier otra sección para fines comerciales, reproducción, distribución o modificación sin el consentimiento expreso y por escrito de la autora.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">4. Enlaces a Terceros</h3>
                <p>
                  Este sitio web puede contener enlaces a otros sitios web propios o de terceros. La Titular no ejerce ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">5. Ley Aplicable</h3>
                <p>
                  Las presentes condiciones se rigen por la legislación española. Para cualquier litigio que pudiera surgir relacionado con el sitio web o la actividad que en él se desarrolla serán competentes los Juzgados y Tribunales del domicilio del Titular.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsOfUse;