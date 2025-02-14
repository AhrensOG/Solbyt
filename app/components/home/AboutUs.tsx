"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Code,
  Palette,
  BarChart,
  Lock,
  ShieldCheckIcon,
  Globe,
  TrendingUp,
  Target,
  BarChart2,
  MapPin,
  GitBranch,
  Server,
  Cpu,
  Database,
  Layers,
  Monitor,
  Layout,
  FileText,
  User,
  MessageSquare,
  PieChart,
  LineChart,
  Settings,
  Key,
  AlertTriangle,
  EyeOff,
  ChevronDownIcon,
} from "lucide-react";

interface ExpertiseAreas {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  secondaryIcons: React.ReactNode[];
}

const expertiseAreas: ExpertiseAreas[] = [
  {
    id: "estrategia",
    title: "Estrategia Digital Integral",
    description:
      "Desarrollamos estrategias digitales personalizadas que integran análisis de mercado, tendencias tecnológicas y comportamientos del consumidor para crear planes de acción efectivos. Nuestro enfoque holístico garantiza una implementación coherente en todos los canales, maximizando la exposición, el engagement y asegurando una ventaja competitiva sostenible en el dinámico entorno digital.",
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    secondaryIcons: [
      <Globe className="w-8 h-8 text-blue-500" />,
      <TrendingUp className="w-8 h-8 text-green-500" />,
      <Target className="w-8 h-8 text-red-500" />,
      <BarChart2 className="w-8 h-8 text-yellow-500" />,
      <MapPin className="w-8 h-8 text-pink-500" />,
    ],
  },
  {
    id: "desarrollo",
    title: "Desarrollo de Software Avanzado",
    description:
      "Nuestro equipo de desarrolladores especializados utiliza las tecnologías más punteras y metodologías ágiles para construir soluciones robustas y escalables. Desde aplicaciones móviles hasta sistemas empresariales, transformamos ideas complejas en productos innovadores que optimizan procesos, garantizan la seguridad y ofrecen un rendimiento excepcional en entornos exigentes.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    secondaryIcons: [
      <GitBranch className="w-8 h-8 text-green-500" />,
      <Server className="w-8 h-8 text-purple-500" />,
      <Cpu className="w-8 h-8 text-pink-500" />,
      <Database className="w-8 h-8 text-orange-500" />,
      <Layers className="w-8 h-8 text-red-500" />,
    ],
  },
  {
    id: "diseno",
    title: "Diseño UX/UI Centrado en el Usuario",
    description:
      "Fusionamos creatividad y análisis para diseñar interfaces intuitivas y atractivas que maximizan la experiencia del usuario. Basamos nuestros diseños en investigaciones exhaustivas y las mejores prácticas de usabilidad, asegurando interacciones fluidas, visualmente impactantes y que convierten visitantes en clientes leales.",
    icon: <Palette className="w-8 h-8 text-pink-600" />,
    secondaryIcons: [
      <Monitor className="w-8 h-8 text-purple-500" />,
      <Layout className="w-8 h-8 text-blue-500" />,
      <FileText className="w-8 h-8 text-green-500" />,
      <User className="w-8 h-8 text-orange-500" />,
      <MessageSquare className="w-8 h-8 text-red-500" />,
    ],
  },
  {
    id: "datos",
    title: "Análisis de Datos Predictivo",
    description:
      "Convertimos grandes volúmenes de datos en insights estratégicos y accionables. A través de modelos predictivos y análisis estadístico avanzado, identificamos tendencias y patrones que permiten anticipar comportamientos del mercado, facilitando decisiones informadas que optimizan procesos y potencian el crecimiento de tu negocio.",
    icon: <BarChart className="w-8 h-8 text-green-600" />,
    secondaryIcons: [
      <PieChart className="w-8 h-8 text-blue-500" />,
      <LineChart className="w-8 h-8 text-purple-500" />,
      <TrendingUp className="w-8 h-8 text-red-500" />,
      <Database className="w-8 h-8 text-yellow-500" />,
      <Settings className="w-8 h-8 text-pink-500" />,
    ],
  },
  {
    id: "seguridad",
    title: "Ciberseguridad de Vanguardia",
    description:
      "Implementamos soluciones integrales de ciberseguridad para proteger tus activos digitales contra amenazas cada vez más sofisticadas. Combinamos tecnologías de detección temprana, encriptación avanzada y monitoreo continuo para anticipar y mitigar riesgos, garantizando la integridad, confidencialidad y continuidad de tu negocio en un entorno digital en constante evolución.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-red-600" />,
    secondaryIcons: [
      <Lock className="w-8 h-8 text-blue-500" />,
      <Key className="w-8 h-8 text-green-500" />,
      <AlertTriangle className="w-8 h-8 text-yellow-500" />,
      <EyeOff className="w-8 h-8 text-purple-500" />,
      <Server className="w-8 h-8 text-pink-500" />,
    ],
  },
];

const AboutUs: React.FC = () => {
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const currentExpertise = expertiseAreas[expertiseIndex];

  const changeExpertise = (direction: number) => {
    setExpertiseIndex(
      (prev) =>
        (prev + direction + expertiseAreas.length) % expertiseAreas.length
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
      className="w-full bg-gradient-to-b from-white via-pink-50 to-white grid place-items-center p-4 sm:p-8"
    >
      <div className="max-w-7xl flex flex-col items-center justify-center w-full">
        <h2 className="min-h-24 sm:min-h-11 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 mb-8 text-center">
          Impulsando Tu Éxito Digital
        </h2>
        <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden mb-12">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-white">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Nuestra Misión: Tu Transformación Digital
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En el corazón de nuestra misión está el compromiso
                inquebrantable de impulsar tu negocio hacia nuevas alturas en la
                era digital. No somos simplemente proveedores de servicios;
                somos tus socios estratégicos en la innovación y el crecimiento.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Con un equipo de expertos líderes en la industria, combinamos
                conocimientos profundos, creatividad vanguardista y tecnología
                de punta para ofrecer soluciones que no solo satisfacen las
                necesidades actuales, sino que también anticipan los desafíos
                futuros.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nuestra dedicación a la excelencia, la innovación continua y los
                resultados medibles garantiza que cada proyecto que emprendemos
                no solo cumpla, sino que supere tus expectativas, estableciendo
                nuevos estándares en el panorama digital.
              </p>
            </div>
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center bg-white">
              <h4 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                Soluciones Integrales para Tu Éxito
              </h4>
              <div className="bg-gray-100 p-6 rounded-lg w-full mb-4 h-[402px] sm:h-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentExpertise.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h5 className="text-xl font-semibold text-purple-800 mb-3 flex items-center">
                      <span className="mr-3">{currentExpertise.icon}</span>
                      {currentExpertise.title}
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {currentExpertise.description}
                    </p>
                    <div className="w-full py-10 pb-4 flex justify-around items-center">
                      {currentExpertise.secondaryIcons.map((e) => e)}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex justify-center w-full mb-8">
                <button
                  onClick={() => changeExpertise(-1)}
                  className="p-3 hover:bg-purple-300 duration-300 text-white rounded-full transition flex items-center mr-4"
                  aria-label="Área de experiencia anterior"
                >
                  <ChevronLeft className="text-purple-600 size-10" />
                </button>
                <button
                  onClick={() => changeExpertise(1)}
                  className="p-3 hover:bg-pink-300 duration-300 text-white rounded-full transition flex items-center"
                  aria-label="Siguiente área de experiencia"
                >
                  <ChevronRight className="text-pink-600 size-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center grid place-items-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            ¿Listo para Revolucionar tu Presencia Digital?
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Descubre cómo nuestro equipo de expertos puede transformar tus
            desafíos en oportunidades y llevar tu visión digital a la realidad.
            Estamos aquí para impulsar tu éxito en cada paso del camino.
          </p>
          <motion.button
            className="flex items-center justify-around max-w-96 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-75 text-sm sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDownIcon className="size-4 sm:size-6 animate-pulse" /> Inicia Tu
            Transformación Digital{" "}
            <ChevronDownIcon className="size-4 sm:size-6 animate-pulse" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
