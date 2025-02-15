"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

interface ContactFormData {
  fullName: string;
  email: string;
  business: string;
  message: string;
}

const contactSchema = z.object({
  fullName: z.string().min(1, "El nombre completo es obligatorio."),
  email: z.string().email("Ingrese un email válido."),
  business: z.string().min(1, "El sector de tu negocio es obligatorio."),
  message: z.string().optional(),
});

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    business: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        fullName: fieldErrors.fullName ? fieldErrors.fullName[0] : undefined,
        email: fieldErrors.email ? fieldErrors.email[0] : undefined,
        business: fieldErrors.business ? fieldErrors.business[0] : undefined,
        message: fieldErrors.message ? fieldErrors.message[0] : undefined,
      });
      toast.error("Por favor, revisa los campos e inténtalo nuevamente.", {
        iconTheme: { primary: "#8B5CF6", secondary: "#ffffff" },
      });
      return;
    }
    setErrors({});

    const payload = {
      to: "ahrensog.es@gmail.com",
      subject: `Nuevo mensaje de ${formData.fullName}`,
      message: `Nombre: ${formData.fullName}\nEmail: ${
        formData.email
      }\nSector: ${formData.business}\nMensaje: ${
        formData.message || "No se proporcionó mensaje adicional."
      }`,
    };

    const loadingToastId = toast.loading("Solicitando auditoría gratuita...", {
      iconTheme: { primary: "#8B5CF6", secondary: "#ffffff" },
    });

    try {
      await axios.post("/api/sendgrid", payload);
      toast.dismiss(loadingToastId);
      toast.success(
        "Recibimos tu solicitud correctamente. ¡Nos pondremos en contacto contigo lo antes posible!",
        {
          iconTheme: { primary: "#10B981", secondary: "#ffffff" },
        }
      );
    } catch (error: any) {
      toast.dismiss(loadingToastId);
      toast.error(
        <div>
          Lo sentimos, hubo un inconveniente al enviar tu solicitud. Por favor,
          inténtalo de nuevo o{" "}
          <Link href="/contact" className="underline text-blue-600">
            contáctanos
          </Link>{" "}
          directamente.
        </div>,
        {
          iconTheme: { primary: "#F59E0B", secondary: "#ffffff" },
        }
      );
      console.error(
        "Error al enviar email:",
        error.response?.data || error.message
      );
    }
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
      <div className="max-w-6xl mx-auto">
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
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
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
            {errors.business && (
              <p className="text-red-500 text-sm mt-1">{errors.business}</p>
            )}
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
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
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
