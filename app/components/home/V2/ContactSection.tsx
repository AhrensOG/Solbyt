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
import { useTranslations } from "next-intl";

const ContactSection: React.FC = () => {
  const translation = useTranslations("home_page.contact");
  const translation_cta = useTranslations("home_page.hero.secondary_text");

  const contactSchema = z.object({
    fullName: z.string().min(1, translation("form.error.full_name")),
    email: z.string().email(translation("form.error.email")),
    subject: z.string().min(1, translation("form.error.subject")),
    message: z.string().optional(),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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
      toast.error(translation("toast.error"), {
        iconTheme: { primary: "#8B5CF6", secondary: "#fff" },
      });
      return;
    }

    const { fullName, email, subject, message } = formData;

    const toastId = toast.loading(translation("toast.sending"));

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

      toast.success(translation("toast.success"), { id: toastId });
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(
        <div>
          {translation("toast.failure.title")}{" "}
          <Link href="/contacto" className="underline text-blue-600">
            {translation("toast.failure.contact_button")}
          </Link>
          .
        </div>
      );
    }
  };

  return (
    <section id={translation_cta("cta_id")} className="py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-pink-500 to-solbyt-blue-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            {translation("section_title")}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            {translation("section_subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {translation("heading")}
              </h3>
              <p className="text-gray-600 mb-6">{translation("paragraph")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-purple-600/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-solbyt-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    {translation("email.label")}
                  </h4>
                  <p className="text-gray-600">{translation("email.value")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-blue-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-solbyt-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    {translation("phone.label")}
                  </h4>
                  <p className="text-gray-600">{translation("phone.value")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-solbyt-pink-500/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-solbyt-pink-500" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-gray-800">
                    {translation("meeting.label")}
                  </h4>
                  <p className="text-gray-600">
                    {translation("meeting.value")}
                  </p>
                  <div className="mt-4">
                    <Link
                      href="https://calendly.com/solbyt-tech/30min"
                      target="_blank"
                      className="bg-solbyt-purple-600 text-center w-auto hover:bg-purple-700 text-white rounded-lg p-2 px-4 duration-300">
                      {translation("meeting.button")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-solbyt-pink-50 rounded-xl">
              <h4 className="font-bold text-lg mb-2 text-gray-800">
                {translation("why_us_title")}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-purple-600"></div>
                  <span>{translation("why_us_list.0")}</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-pink-500"></div>
                  <span>{translation("why_us_list.1")}</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-solbyt-blue-500"></div>
                  <span>{translation("why_us_list.2")}</span>
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
              {translation("form_title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-gray-700">
                    {translation("form.full_name.label")}
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={translation("form.full_name.placeholder")}
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
                    {translation("form.email.label")}
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={translation("form.email.placeholder")}
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
                  {translation("form.subject.label")}
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={translation("form.subject.placeholder")}
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
                  {translation("form.message.label")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={translation("form.message.placeholder")}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-solbyt-purple-600/20 focus:border-solbyt-purple-600"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 outline-none bg-solbyt-purple-600 hover:bg-solbyt-purple-600/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                <Send className="h-4 w-4" />
                {translation("form.button")}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                {translation("form.note")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
