
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8 pt-24 ">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-8">Acerca de Nosotros</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed mb-4"> Proyecto de Sistemas Operativos en la Universidad Nacional de Costa Rica</p>
            <p className="text-lg text-gray-700 leading-relaxed">Somos un equipo de estudiantes de Ingeniería en Sistemas de Información de la
             Universidad Nacional de Costa Rica, apasionados por la innovación tecnológica y el 
             desarrollo de soluciones prácticas. Nuestra misión es aplicar los conocimientos adquiridos
              en el aula para abordar desafíos del mundo real y contribuir al avance de la sociedad.</p>
          </div>
          <div className="mt-8 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Proyecto: Sistema FIFO para Gestión de Pedidos en Restaurantes</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  En colaboración con nuestro mentor, el profesor Carlos Espinoza Chavarría, nos embarcamos en el desarrollo de un sistema operativo enfocado en la gestión eficiente de pedidos en restaurantes. Reconociendo la creciente demanda por soluciones que agilicen los procesos en la industria gastronómica, nuestro proyecto se centra en implementar un algoritmo FIFO (First In, First Out) para gestionar los pedidos conforme llegan al establecimiento.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  Este sistema operativo, diseñado específicamente para entornos restauranteros, automatiza el proceso de toma de pedidos, asignación de recursos y seguimiento del estado de cada solicitud. Desde la recepción del pedido hasta su preparación y entrega, nuestro sistema garantiza una gestión fluida y organizada, mejorando la experiencia tanto para el personal del restaurante como para los clientes.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  Nuestro enfoque se basa en la optimización de recursos, la simplicidad de uso y la adaptabilidad a las necesidades específicas de cada establecimiento. A través de este proyecto, aspiramos a impulsar la eficiencia operativa en la industria gastronómica, contribuyendo así al crecimiento económico y la satisfacción del cliente.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  En resumen, nuestro equipo está comprometido con la excelencia académica y la aplicación práctica de los conocimientos adquiridos. Con el desarrollo de este proyecto de sistemas operativos, buscamos no solo mejorar los procesos en restaurantes, sino también inspirar la innovación y el progreso en nuestra comunidad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Integrantes:</p>
              <p className="text-lg text-gray-700 leading-relaxed">● Génesis Gómez Ramírez</p>
              <p className="text-lg text-gray-700 leading-relaxed">● José Alberto Baltodano Hernández</p>
              <p className="text-lg text-gray-700 leading-relaxed">● José Pablo Suárez Gómez</p>
              <p className="text-lg text-gray-700 leading-relaxed">● Naila Torres Pérez</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
