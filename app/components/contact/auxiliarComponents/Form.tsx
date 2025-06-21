"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Building,
  Code,
  Zap,
  BarChart3,
  Users,
  Settings,
} from "lucide-react";
import { z } from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import {
  contact_confirmation_template_en,
  contact_notification_from_contact_page_template_en,
} from "@/app/lib/templates/contact_confirmation";
import { useTranslations } from "next-intl";

const Form: React.FC = () => {
  const translation = useTranslations("contact_page.contact_form");
  const services = [
    {
      value: "desarrollo-web",
      label: translation("services.desarrollo-web"),
      icon: Code,
    },
    {
      value: "aplicaciones-medida",
      label: translation("services.aplicaciones-medida"),
      icon: Settings,
    },
    {
      value: "automatizacion",
      label: translation("services.automatizacion"),
      icon: Zap,
    },
    {
      value: "analisis-sistemas",
      label: translation("services.analisis-sistemas"),
      icon: BarChart3,
    },
    {
      value: "asesoria-digital",
      label: translation("services.asesoria-digital"),
      icon: Users,
    },
    {
      value: "desarrollo-software",
      label: translation("services.desarrollo-software"),
      icon: Building,
    },
  ];

  const contactSchema = z.object({
    name: z.string().min(1, translation("fields.name.error")),
    email: z.string().email(translation("fields.email.error")),
    company: z.string().min(1, translation("fields.company.error")),
    phone: z.string().optional(),
    service: z.string().min(1, translation("fields.service.error")),
    message: z.string().min(1, translation("fields.message.error")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        company: fieldErrors.company?.[0],
        phone: fieldErrors.phone?.[0],
        service: fieldErrors.service?.[0],
        message: fieldErrors.message?.[0],
      });
      toast.error(translation("toast.error"), {
        iconTheme: { primary: "#8B5CF6", secondary: "#fff" },
      });
      return;
    }

    const { name, email, service, message } = formData;

    const toastId = toast.loading(translation("toast.loading"));

    try {
      await axios.post("/api/sendgrid", {
        to: email,
        bcc: "solbyt.tech@gmail.com",
        subject: "We've received your message at Solbyt!",
        html: contact_confirmation_template_en(name),
      });

      await axios.post("/api/sendgrid", {
        to: "solbyt.tech@gmail.com",
        subject: `New contact message: ${service}`,
        html: contact_notification_from_contact_page_template_en(
          name,
          email,
          service,
          message
        ),
      });

      toast.success(translation("toast.success"), { id: toastId });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error(translation("toast.failure"));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 via-solbyt-blue-500 to-solbyt-pink-500">
              {translation("title")}
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {translation("subtitle")}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              {/* Personal Info */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-solbyt-purple-600/10 flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-solbyt-purple-600" />
                  </div>
                  {translation("section_1_title")}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700">
                      {translation("fields.name.label")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={translation("fields.name.placeholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-solbyt-purple-600 focus:ring-1 focus:ring-solbyt-purple-600/20 transition duration-150"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700">
                      {translation("fields.email.label")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={translation("fields.email.placeholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-solbyt-purple-600 focus:ring-1 focus:ring-solbyt-purple-600/20 transition duration-150"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-gray-700">
                      {translation("fields.company.label")}
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={translation("fields.company.placeholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-solbyt-purple-600 focus:ring-1 focus:ring-solbyt-purple-600/20 transition duration-150"
                    />
                    {errors.company && (
                      <p className="text-sm text-red-500">{errors.company}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700">
                      {translation("fields.phone.label")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={translation("fields.phone.placeholder")}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-solbyt-purple-600 focus:ring-1 focus:ring-solbyt-purple-600/20 transition duration-150"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-solbyt-blue-500/10 flex items-center justify-center mr-3">
                    <Building className="w-4 h-4 text-solbyt-blue-500" />
                  </div>
                  {translation("section_2_title")}
                </h3>

                {/* Service Selection */}
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium text-gray-700">
                    {translation("fields.service.label")}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.value}
                        className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          formData.service === service.value
                            ? "border-solbyt-purple-600 bg-solbyt-purple-600/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}>
                        <input
                          type="radio"
                          name="service"
                          value={service.value}
                          checked={formData.service === service.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <service.icon
                          className={`w-5 h-5 mr-3 ${
                            formData.service === service.value
                              ? "text-solbyt-purple-600"
                              : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`text-sm font-medium ${
                            formData.service === service.value
                              ? "text-solbyt-purple-600"
                              : "text-gray-700"
                          }`}>
                          {service.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.service && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="space-y-2 flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700">
                    {translation("fields.message.label")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={translation("fields.message.placeholder")}
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm outline-none focus:border-solbyt-purple-600 focus:ring-1 focus:ring-solbyt-purple-600/20 transition duration-150"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {translation("fields.message.error")}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  {translation("footer.note")}
                </div>

                <button
                  type="submit"
                  className="flex items-center bg-gradient-to-r from-solbyt-purple-600 to-solbyt-pink-500 hover:from-solbyt-purple-700 hover:to-solbyt-pink-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Send className="mr-2 h-5 w-5" />
                  {translation("footer.submit_button")}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Form;
