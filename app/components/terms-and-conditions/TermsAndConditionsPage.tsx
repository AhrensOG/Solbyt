import React from "react";
import StaticNavBar from "../public/navbar/StaticNavBar";
import Footer from "../public/footer/Footer";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="bg-white">
      <StaticNavBar />
      <header className="mt-[80px] w-full bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-solbyt-gray-800  text-center mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Lea detenidamente estos términos antes de utilizar nuestro sitio.
          </p>
        </div>
      </header>
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-10 divide-y divide-gray-200">
          <div className="pb-6">
            <p className="text-lg text-gray-700">
              Bienvenido a Solbyt. Al acceder y utilizar nuestro sitio web,
              usted acepta cumplir con los presentes Términos y Condiciones. Si
              no está de acuerdo con ellos, por favor absténgase de utilizar
              este sitio.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Uso del Sitio Web
            </h2>
            <p className="text-gray-700 text-lg">
              Nuestro sitio web está diseñado para ofrecer información sobre
              nuestros servicios de transformación digital y soluciones
              tecnológicas. No contamos con funcionalidades de inicio de sesión
              ni áreas restringidas; el uso del sitio se limita a la
              visualización de información y al envío de consultas a través del
              formulario de contacto.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Recopilación y Uso de Datos
            </h2>
            <p className="text-gray-700 text-lg">
              Los únicos datos personales que recopilamos son aquellos que usted
              nos proporciona voluntariamente a través del formulario de
              contacto. Esta información se utiliza exclusivamente para
              responder a sus consultas y mejorar nuestros servicios. Nos
              comprometemos a tratar sus datos con confidencialidad y a no
              compartirlos con terceros sin su consentimiento expreso.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Propiedad Intelectual
            </h2>
            <p className="text-gray-700 text-lg">
              Todo el contenido presente en este sitio, incluidos textos,
              imágenes, logotipos y gráficos, es propiedad de Solbyt o de sus
              respectivos titulares y está protegido por las leyes de propiedad
              intelectual.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Limitación de Responsabilidad
            </h2>
            <p className="text-gray-700 text-lg">
              Solbyt no será responsable de daños directos, indirectos,
              incidentales o consecuentes derivados del uso o la imposibilidad
              de uso del sitio web. La información contenida en este sitio se
              proporciona &quot;tal cual&quot; y sin garantías de ningún tipo.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Modificaciones a los Términos
            </h2>
            <p className="text-gray-700 text-lg">
              Nos reservamos el derecho de modificar estos Términos y
              Condiciones en cualquier momento. Las modificaciones entrarán en
              vigor a partir de su publicación en el sitio web, por lo que
              recomendamos revisar estos términos de manera periódica.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Contacto
            </h2>
            <p className="text-gray-700 text-lg">
              Si tiene alguna pregunta o inquietud acerca de estos Términos y
              Condiciones, por favor contáctenos a través de nuestro formulario
              de contacto o envíe un correo a: contacto@solbyt.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default TermsAndConditionsPage;
