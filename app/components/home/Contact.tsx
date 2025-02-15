"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  fullName: string;
  email: string;
  business: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
      id="contact"
      className="w-full py-16 px-4 sm:px-8 bg-gradient-to-b from-white via-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Texto de invitación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="min-h-24 sm:min-h-11 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 mb-8 text-center">
            ¿Listo para impulsar tu éxito digital?
          </h2>
          <p className="text-lg text-gray-600">
            Aprovecha la oportunidad de transformar tu negocio con soluciones a
            la vanguardia. Nuestro equipo de expertos está listo para ayudarte a
            innovar, crecer y superar tus desafíos. ¡Contáctanos y da el
            siguiente paso hacia el futuro!
          </p>
        </motion.div>
        {/* Formulario de contacto */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="shadow-xl rounded-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 font-semibold mb-2"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                placeholder="Ingresa tu email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="business"
              className="block text-gray-700 font-semibold mb-2"
            >
              Sector de tu negocio
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              placeholder="Ejemplo: e-commerce, salud, educación"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mensaje (Opcional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              placeholder="Cuéntanos cómo podemos ayudarte"
              rows={4}
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition uppercase"
            >
              ¡Solicita tu asesoría gratis!
            </motion.button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
