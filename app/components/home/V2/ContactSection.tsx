"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, Phone, Send } from "lucide-react";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  contact_confirmation_template_en,
  contact_notification_template_en,
} from "@/app/lib/templates/contact_confirmation";

const contactSchema = z.object({
  fullName: z.string().min(1, "El nombre es obligatorio."),
  email: z.string().email("Email inválido."),
  subject: z.string().min(1, "El asunto es obligatorio."),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    subject: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        subject: fieldErrors.subject?.[0],
        message: fieldErrors.message?.[0],
      });
      toast.error("Por favor completa los campos obligatorios.", {
        iconTheme: { primary: "#8B5CF6", secondary: "#fff" },
      });
      return;
    }

    const { fullName, email, subject, message } = formData;

    const toastId = toast.loading("Enviando confirmación...");

    try {
      await axios.post("/api/sendgrid", {
        to: email,
        bcc: "solbyt.tech@gmail.com",
        subject: "¡Hemos recibido tu mensaje en Solbyt!",
        html: contact_confirmation_template_en(fullName),
      });

      await axios.post("/api/sendgrid", {
        to: "solbyt.tech@gmail.com",
        subject: `Nuevo mensaje de contacto: ${subject}`,
        html: contact_notification_template_en(
          fullName,
          email,
          subject,
          message || ""
        ),
      });

      toast.dismiss(toastId);
      toast.success("Gracias por tu mensaje. Te contactaremos pronto.");
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(
        <div>
          Hubo un error. Por favor intenta nuevamente o{" "}
          <Link href="/contacto" className="underline text-blue-600">
            contáctanos aquí
          </Link>
          .
        </div>
      );
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            Contáctanos
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            Estamos listos para convertir tus ideas en soluciones digitales
            efectivas
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info (sin cambios) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                ¿Cómo podemos ayudarte?
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos aquí para responder a tus preguntas y discutir cómo
                nuestras soluciones digitales pueden impulsar tu negocio.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-purple-600/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-solbyt-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">info@solbyt.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-blue-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-solbyt-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Teléfono</h4>
                  <p className="text-gray-600">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-pink-500/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-solbyt-pink-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Agenda una reunión
                  </h4>
                  <p className="text-gray-600">
                    Consulta gratuita de 30 minutos
                  </p>
                  <button className="mt-2 bg-solbyt-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 px-4 duration-300">
                    Agendar ahora
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-solbyt-pink-50 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-purple-600"></div>
                  <span>Mejor relación calidad-precio</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-pink-500"></div>
                  <span>Desarrollo rápido y eficiente</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-blue-500"></div>
                  <span>Soluciones personalizadas a tus necesidades</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-solbyt-purple-600/20 focus:border-solbyt-purple-600"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-solbyt-purple-600/20 focus:border-solbyt-purple-600"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-solbyt-purple-600/20 focus:border-solbyt-purple-600"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más sobre tu proyecto..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-solbyt-purple-600/20 focus:border-solbyt-purple-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 outline-none bg-solbyt-purple-600 hover:bg-solbyt-purple-600/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                <Send className="h-4 w-4" />
                Enviar mensaje
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Nos pondremos en contacto contigo en menos de 24 horas.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
