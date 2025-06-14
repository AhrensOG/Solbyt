"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Calendar,
  CheckCircle,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";

const useCasesContent = {
  crm: {
    title: "CRM enfocado en ventas",
    description:
      "Sistema de gestión comercial que centraliza leads, automatiza seguimientos y optimiza el proceso de ventas con métricas en tiempo real.",
    features: [
      "Pipeline visual de oportunidades comerciales",
      "Automatización de seguimientos por email/WhatsApp",
      "Dashboard con métricas de conversión",
      "Integración con formularios web y redes sociales",
      "Reportes de rendimiento por vendedor",
      "Gestión de cotizaciones y propuestas",
    ],
    caseStudy:
      "Empresa de servicios aumentó 40% su tasa de conversión organizando mejor el seguimiento de leads.",
    color: "blue",
    icon: BarChart3,
  },
  turnos: {
    title: "App de reservas o turnos",
    description:
      "Plataforma de gestión de citas que permite a tus clientes reservar online mientras optimizas la ocupación de tu agenda y reduces cancelaciones.",
    features: [
      "Calendario inteligente con disponibilidad en tiempo real",
      "Reservas online 24/7 desde web o app móvil",
      "Recordatorios automáticos por SMS/email",
      "Gestión de servicios, precios y duraciones",
      "Panel administrativo para el equipo",
      "Reportes de ocupación y ingresos",
    ],
    caseStudy:
      "Clínica dental redujo 60% las cancelaciones y aumentó 25% la ocupación con recordatorios automáticos.",
    color: "purple",
    icon: Calendar,
  },
  panel: {
    title: "Panel de gestión",
    description:
      "Dashboard ejecutivo que centraliza información clave de diferentes áreas, facilitando la toma de decisiones con datos actualizados en tiempo real.",
    features: [
      "Métricas financieras y operativas en tiempo real",
      "Gráficos interactivos y reportes personalizables",
      "Alertas automáticas por objetivos o anomalías",
      "Integración con sistemas contables y de inventario",
      "Acceso por roles y permisos diferenciados",
      "Exportación de datos para análisis externos",
    ],
    caseStudy:
      "Empresa logística redujo 50% el tiempo de análisis de datos con dashboard automatizado.",
    color: "pink",
    icon: Settings,
  },
  internas: {
    title: "Herramientas internas",
    description:
      "Aplicaciones específicas para optimizar procesos internos únicos de tu empresa, desde gestión de recursos humanos hasta control de inventarios especializados.",
    features: [
      "Gestión de empleados y control de asistencia",
      "Sistemas de aprobaciones y flujos de trabajo",
      "Control de inventarios con códigos QR/barras",
      "Herramientas de comunicación interna",
      "Gestión documental y archivo digital",
      "Automatización de tareas repetitivas",
    ],
    caseStudy:
      "Empresa manufacturera automatizó control de inventario ahorrando 15 horas semanales de trabajo manual.",
    color: "blue",
    icon: Users,
  },
};

type TabKey = keyof typeof useCasesContent;

const UseCases = () => {
  const [selected, setSelected] = useState<TabKey>("crm");
  const content = useCasesContent[selected];
  const Icon = content.icon;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-purple-600 to-solbyt-pink-500">
            Soluciones que transforman operaciones
          </h2>
          <p className="text-lg text-gray-600">
            Desarrollamos aplicaciones específicas para cada tipo de necesidad
            empresarial, desde gestión comercial hasta automatización de
            procesos internos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {(Object.keys(useCasesContent) as TabKey[]).map((key) => {
            const useCase = useCasesContent[key];
            const IconComp = useCasesContent[key].icon;
            const isSelected = selected === key;

            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border transition-colors ${
                  isSelected
                    ? "bg-solbyt-blue-500 text-white"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}>
                <IconComp
                  className={`h-6 w-6 transition-colors ${
                    isSelected
                      ? "text-white"
                      : useCase.color === "blue"
                      ? "text-solbyt-blue-500"
                      : useCase.color === "purple"
                      ? "text-solbyt-purple-600"
                      : "text-solbyt-pink-500"
                  }`}
                />
                <span className="hidden sm:inline capitalize">{key}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div
                  className={`h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${
                    content.color === "blue"
                      ? "bg-solbyt-blue-500/10"
                      : content.color === "purple"
                      ? "bg-solbyt-purple-600/10"
                      : "bg-solbyt-pink-500/10"
                  }`}>
                  {
                    <Icon
                      className={`${
                        content.color === "blue"
                          ? "text-solbyt-blue-500"
                          : content.color === "purple"
                          ? "text-solbyt-purple-600"
                          : "text-solbyt-pink-500"
                      }`}
                    />
                  }
                </div>
                <h3 className="text-2xl font-bold">{content.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{content.description}</p>
              <div className="space-y-4 mb-6">
                {content.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle
                      className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                        content.color === "blue"
                          ? "text-solbyt-blue-500"
                          : content.color === "purple"
                          ? "text-solbyt-purple-600"
                          : "text-solbyt-pink-500"
                      }`}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div
                className={`rounded-lg p-4 mb-6 ${
                  content.color === "blue"
                    ? "bg-solbyt-blue-500/5"
                    : content.color === "purple"
                    ? "bg-solbyt-purple-600/5"
                    : "bg-solbyt-pink-500/5"
                }`}>
                <p className="text-sm text-gray-600">
                  <strong>Caso real:</strong> {content.caseStudy}
                </p>
              </div>
              <button
                className={`text-white font-medium py-2 px-4 rounded-md transition ${
                  content.color === "blue"
                    ? "bg-solbyt-blue-500 hover:bg-blue-600"
                    : content.color === "purple"
                    ? "bg-solbyt-purple-600 hover:bg-purple-700"
                    : "bg-solbyt-pink-500 hover:bg-pink-600"
                }`}>
                {`Solicitar más info`}
              </button>
            </div>

            <div
              className={`bg-gradient-to-br ${
                content.color === "blue"
                  ? "from-solbyt-blue-500/5 to-solbyt-purple-600/5"
                  : content.color === "purple"
                  ? "from-solbyt-purple-600/5 to-solbyt-pink-500/5"
                  : "from-solbyt-pink-500/5 to-solbyt-blue-500/5"
              } flex items-center justify-center p-6`}>
              <Image
                src="/img_placeholder.webp"
                alt={content.title}
                width={500}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
