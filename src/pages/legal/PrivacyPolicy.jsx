import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Academia Bíblica Trilingüe</title>
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
              <h1 className="text-3xl font-serif font-bold text-stone-800 mb-8">Política de Privacidad</h1>
              
              <div className="prose prose-stone max-w-none text-stone-600">
                <p>
                  En la Academia Bíblica Trilingüe nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos su información personal.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">1. Responsable del Tratamiento</h3>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><strong>Identidad:</strong> Inmaculada Rodríguez Torné</li>
                  <li><strong>Email:</strong> infohebreo@yahoo.com</li>
                </ul>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">2. Finalidad del Tratamiento</h3>
                <p>
                  Tratamos la información que nos facilitan las personas interesadas con el fin de:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                  <li>Gestionar el envío de la información que nos soliciten a través del formulario de contacto.</li>
                  <li>Facilitar a los interesados ofertas de productos y servicios de su interés (cursos, conferencias, etc.).</li>
                </ul>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">3. Legitimación</h3>
                <p>
                  La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> del interesado. Al rellenar el formulario de contacto y marcar la casilla de aceptación, usted acepta expresamente el tratamiento de sus datos según esta política.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">4. Destinatarios</h3>
                <p>
                  Los datos no se cederán a terceros salvo obligación legal. Sin embargo, para la gestión de correos electrónicos utilizamos proveedores de servicios:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                  <li>
                    <strong>Formspree:</strong> Plataforma utilizada para la gestión y envío de los formularios de contacto. Puede consultar su política de privacidad en su sitio web.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">5. Derechos</h3>
                <p>
                  Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-6 mt-2">
                  <li>Acceder a sus datos personales.</li>
                  <li>Solicitar la rectificación de los datos inexactos.</li>
                  <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                  <li>Oponerse al tratamiento.</li>
                  <li>Solicitar la limitación del tratamiento.</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puede enviar un correo electrónico a <strong>infohebreo@yahoo.com</strong>.
                </p>

                <h3 className="text-xl font-bold text-stone-800 mt-6 mb-4">6. Seguridad de los Datos</h3>
                <p>
                  Hemos adoptado las medidas de índole técnica y organizativa necesarias para garantizar la seguridad de sus datos de carácter personal y evitar su alteración, pérdida y tratamiento y/o acceso no autorizado.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;