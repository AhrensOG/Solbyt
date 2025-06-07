import React from "react";
import StaticNavBar from "../public/navbar/StaticNavBar";
import Footer from "../public/footer/Footer";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="bg-white">
      <StaticNavBar />
      <header className="mt-[80px] w-full bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-solbyt-gray-800  text-center mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Su privacidad es nuestra prioridad.
          </p>
        </div>
      </header>
      <section className="py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-10 divide-y divide-gray-200">
          <div className="pb-6">
            <p className="text-lg text-gray-700">
              Bienvenido a Solbyt. En esta Política de Privacidad, explicamos
              cómo recopilamos, usamos y protegemos la información personal que
              usted nos proporciona a través de nuestro formulario de contacto.
              Al utilizar nuestro sitio web, usted acepta las prácticas
              descritas en este documento.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Información que Recopilamos
            </h2>
            <p className="text-gray-700 text-lg">
              Nuestro sitio web no cuenta con sistemas de inicio de sesión ni
              áreas restringidas. Los únicos datos personales que recopilamos
              son aquellos que usted nos proporciona voluntariamente a través
              del formulario de contacto, tales como su nombre completo, correo
              electrónico, el sector o área en la que opera su negocio y,
              opcionalmente, un mensaje.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Uso de la Información
            </h2>
            <p className="text-gray-700 text-lg">
              Utilizamos la información recopilada únicamente para responder a
              sus consultas, mejorar nuestros servicios y mantener una
              comunicación efectiva con usted. No compartimos, vendemos ni
              divulgamos sus datos personales a terceros sin su consentimiento
              expreso.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Seguridad de los Datos
            </h2>
            <p className="text-gray-700 text-lg">
              Nos comprometemos a proteger la seguridad de sus datos personales
              mediante el uso de medidas técnicas y organizativas adecuadas.
              Aunque no podemos garantizar una seguridad absoluta, implementamos
              procedimientos y protocolos para minimizar los riesgos de pérdida,
              acceso no autorizado o divulgación de su información.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Conservación de Datos
            </h2>
            <p className="text-gray-700 text-lg">
              Conservamos sus datos personales durante el tiempo necesario para
              cumplir con los fines para los cuales fueron recogidos, o según lo
              exijan las leyes y regulaciones aplicables. Una vez que la
              información ya no sea necesaria, tomamos medidas razonables para
              eliminarla de manera segura.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Derechos del Usuario
            </h2>
            <p className="text-gray-700 text-lg">
              Usted tiene derecho a acceder, rectificar o eliminar sus datos
              personales, así como a oponerse a su tratamiento en determinadas
              circunstancias. Para ejercer estos derechos, por favor contáctenos
              a través de nuestro formulario de contacto o envíe un correo a:
              contacto@solbyt.com.
            </p>
          </div>
          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-solbyt-gray-800  mb-2">
              Cambios en la Política
            </h2>
            <p className="text-gray-700 text-lg">
              Nos reservamos el derecho de modificar esta Política de Privacidad
              en cualquier momento. Las modificaciones serán efectivas a partir
              de su publicación en el sitio web, por lo que le recomendamos
              revisar periódicamente este documento.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
