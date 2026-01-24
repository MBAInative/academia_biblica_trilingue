import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal - Academia Bíblica Trilingüe</title>
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
              <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8">Aviso Legal</h1>
              
              <div className="prose prose-stone max-w-none text-stone-600">
                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">1. Datos Identificativos</h3>
                <p>
                  En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI), se reflejan a continuación los siguientes datos:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Titular del sitio web:</strong> Inmaculada Rodríguez Torné (en adelante, "La Titular").</li>
                  <li><strong>Domicilio:</strong> [INSERTAR DIRECCIÓN POSTAL]</li>
                  <li><strong>N.I.F.:</strong> [INSERTAR DNI/CIF]</li>
                  <li><strong>Correo electrónico de contacto:</strong> infohebreo@yahoo.com</li>
                  <li><strong>Teléfono:</strong> +34 649 454 564</li>
                </ul>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">2. Usuarios</h3>
                <p>
                  El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">3. Uso del Portal</h3>
                <p>
                  El sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a La Titular o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">4. Propiedad Intelectual e Industrial</h3>
                <p>
                  La Titular por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.).
                </p>
                <p className="font-bold mt-2">
                  Todos los derechos reservados. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de La Titular.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">5. Exclusión de Garantías y Responsabilidad</h3>
                <p>
                  La Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">6. Modificaciones</h3>
                <p>
                  La Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">7. Legislación Aplicable y Jurisdicción</h3>
                <p>
                  La relación entre La Titular y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad del domicilio del Titular, salvo que la ley disponga lo contrario.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LegalNotice;