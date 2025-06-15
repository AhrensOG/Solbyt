"use client";
import { BarChart2, CheckCircle, Database, Link2, Mail } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const tabs = [
  {
    key: "emails",
    label: "Emails Automáticos",
    icon: Mail,
    description:
      "Envía correos clave sin mover un dedo: seguimiento, recordatorios, reportes y más.",
    features: [
      "Secuencias de bienvenida para nuevos clientes",
      "Seguimiento automático de leads comerciales",
      "Recordatorios de citas y vencimientos",
      "Notificaciones de estado de pedidos",
      "Emails de recuperación de carritos abandonados",
      "Reportes automáticos para el equipo directivo",
    ],
    ahorro: "15-20 horas semanales en gestión manual de comunicaciones",
    button: "Automatizar mis emails",
    img: "/img_placeholder.webp",
    color: "pink",
  },
  {
    key: "datos",
    label: "Procesamiento de Datos",
    icon: Database,
    description: "Gestioná grandes volúmenes de datos sin errores ni demoras.",
    features: [
      "Importación y validación automática de archivos",
      "Sincronización entre bases de datos",
      "Limpieza y normalización de información",
      "Detección automática de duplicados",
      "Backup y archivado programado",
      "Migración de datos entre plataformas",
    ],
    ahorro: "25-30 horas semanales en procesamiento manual de datos",
    button: "Automatizar procesamiento",
    img: "/img_placeholder.webp",
    color: "purple",
  },
  {
    key: "reportes",
    label: "Reportes Automáticos",
    icon: BarChart2,
    description:
      "Obtené métricas clave actualizadas automáticamente, sin esperar al cierre del mes.",
    features: [
      "Reportes financieros y de ventas programados",
      "Dashboards ejecutivos actualizados en tiempo real",
      "Alertas automáticas por KPIs críticos",
      "Distribución automática por email o Slack",
      "Reportes de rendimiento de marketing",
      "Análisis de productividad del equipo",
    ],
    ahorro: "10-15 horas semanales en creación manual de reportes",
    button: "Automatizar reportes",
    img: "/img_placeholder.webp",
    color: "blue",
  },
  {
    key: "flujos",
    label: "Flujos entre Sistemas",
    icon: Link2,
    description:
      "Conectá tus sistemas para evitar tareas repetitivas y errores manuales.",
    features: [
      "Sincronización CRM con herramientas de marketing",
      "Integración contabilidad con plataformas de venta",
      "Flujos automáticos desde formularios web",
      "Conexión entre inventario y e-commerce",
      "Automatización de procesos de aprobación",
      "Integración con APIs de terceros",
    ],
    ahorro: "20-25 horas semanales en transferencia manual entre sistemas",
    button: "Conectar mis sistemas",
    img: "/img_placeholder.webp",
    color: "pink",
  },
];

const UseCases = () => {
  const [selected, setSelected] = useState("emails");
  const current = tabs.find((tab) => tab.key === selected);

  const getColor = (
    color: string,
    type: "text" | "bg" | "hover" | "light" | "lightBox" | "btn"
  ) => {
    const base = {
      pink: {
        text: "text-pink-500",
        bg: "bg-pink-50",
        hover: "hover:bg-pink-600",
        light: "bg-pink-500/10",
        lightBox: "bg-pink-500/5",
        btn: "bg-pink-500",
      },
      purple: {
        text: "text-purple-600",
        bg: "bg-purple-50",
        hover: "hover:bg-purple-700",
        light: "bg-purple-600/10",
        lightBox: "bg-purple-600/5",
        btn: "bg-purple-600",
      },
      blue: {
        text: "text-blue-500",
        bg: "bg-blue-50",
        hover: "hover:bg-blue-600",
        light: "bg-blue-500/10",
        lightBox: "bg-blue-500/5",
        btn: "bg-blue-500",
      },
    };
    return base[color as keyof typeof base][type];
  };

  const IconComp = current!.icon;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-solbyt-blue-500 to-solbyt-pink-500">
            Procesos que transformamos por ti
          </h2>
          <p className="text-lg text-gray-600">
            Desde comunicaciones automáticas hasta reportes complejos,
            automatizamos los procesos que más tiempo consumen en tu operación
            diaria.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelected(tab.key)}
              className={`py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border transition-colors ${
                selected === tab.key
                  ? "bg-solbyt-blue-500 text-white"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}>
              <tab.icon
                className={`h-6 w-6 transition-colors ${
                  selected === tab.key
                    ? "text-white"
                    : getColor(tab.color, "text")
                }`}
              />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div
                  className={`h-12 w-12 rounded-lg flex items-center justify-center mr-4 ${getColor(
                    current!.color,
                    "light"
                  )}`}>
                  <span
                    className={`text-2xl ${getColor(current!.color, "text")}`}>
                    <IconComp
                      className={`h-6 w-6 ${getColor(current!.color, "text")}`}
                    />
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{current!.label}</h3>
              </div>
              <p className="text-gray-600 mb-6">{current!.description}</p>
              <div className="space-y-4 mb-6">
                {current!.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 mt-1 rounded-full ${getColor(
                        current!.color,
                        "text"
                      )}`}>
                      <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 " />
                    </div>
                    <p className="text-gray-700">{feat}</p>
                  </div>
                ))}
              </div>
              <div
                className={`${getColor(
                  current!.color,
                  "lightBox"
                )} rounded-lg p-4 mb-6`}>
                <p className="text-sm text-gray-600">
                  <strong>Ahorro típico:</strong> {current!.ahorro}
                </p>
              </div>
              <button
                className={`text-white font-medium py-2 px-4 rounded-md transition ${getColor(
                  current!.color,
                  "btn"
                )} ${getColor(current!.color, "hover")}`}>
                {current!.button}
              </button>
            </div>
            <div
              className={`p-6 flex items-center justify-center ${getColor(
                current!.color,
                "bg"
              )}`}>
              <Image
                src={current!.img}
                alt={current!.label}
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
