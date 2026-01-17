import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link
    const mailtoLink = `mailto:infohebreo@yahoo.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;

    toast({
      title: "📨 Abriendo cliente de correo",
      description: "Se abrirá tu aplicación de correo predeterminada para enviar el mensaje.",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                          Asunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-amber-900 focus:border-transparent transition-all resize-none"
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-amber-900 hover:bg-amber-800 text-white py-6 text-base font-medium"
                      >
                        <Send className="mr-2" size={20} />
                        Enviar mensaje
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