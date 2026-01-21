import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mjggaglb");

  if (state.succeeded) {
    return (
      <div className="pt-20 min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full mx-4 bg-white rounded-2xl p-8 shadow-xl text-center border border-stone-100"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-emerald-600" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">¡Mensaje enviado!</h2>
          <p className="text-stone-600 mb-8">
            Gracias por contactar con la Academia Bíblica Trilingüe. He recibido tu mensaje y te responderé a la mayor brevedad posible.
          </p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-amber-900 hover:bg-amber-800 text-white px-8"
          >
            Enviar otro mensaje
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contacto - Inmaculada Rodríguez Torné</title>
        <meta name="description" content="Ponte en contacto con Inmaculada Rodríguez Torné para consultas sobre cursos de lenguas bíblicas, conferencias o colaboraciones." />
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
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-stone-800 mb-6">
                Contacto
              </h1>
              <p className="text-xl text-stone-600 font-light">
                ¿Tienes alguna pregunta? Estoy aquí para ayudarte
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-serif font-bold text-stone-800 mb-6">
                    Información de contacto
                  </h2>
                  <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                    No dudes en contactarme para consultas sobre cursos, conferencias, colaboraciones o cualquier información relacionada con las lenguas bíblicas.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="text-amber-900" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800 mb-2">Email</h3>
                        <a href="mailto:infohebreo@yahoo.com" className="text-stone-600 hover:text-amber-900 transition-colors block">
                          infohebreo@yahoo.com
                        </a>
                        <a href="mailto:academiabiblicatrilingue@gmail.com" className="text-stone-600 hover:text-amber-900 transition-colors block text-sm">
                          academiabiblicatrilingue@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="text-amber-900" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800 mb-2">Teléfono / WhatsApp</h3>
                        <a href="tel:+34649454564" className="text-stone-600 hover:text-amber-900 transition-colors">
                          +34 649 454 564
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="text-amber-900" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stone-800 mb-2">Horario de atención</h3>
                        <p className="text-stone-600">Lunes a Viernes: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
                    <h2 className="text-2xl font-serif font-bold text-stone-800 mb-6">
                      Envía un mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                          Asunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="5"
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all resize-none"
                          required
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>

                      <Button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full bg-amber-900 hover:bg-amber-800 text-white py-6 text-base font-medium disabled:opacity-50"
                      >
                        <Send className="mr-2" size={20} />
                        {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                      </Button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;