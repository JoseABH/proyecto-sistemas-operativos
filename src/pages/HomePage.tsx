import { Link } from "react-router-dom"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8 pt-20 ">
        <div className="container mx-auto pb-12">

          <div className="flex flex-col items-center space-y-6">

            <div className=" bg-white p-6 rounded-lg shadow-md"><h2 className="text-2xl font-bold mb-6">Proyecto: Sistema FIFO para Gestión de Pedidos en Restaurantes</h2>
              <div className="w-full flex justify-center mb-5">

              <img className=" w-52 h-52 rounded-md shadow-lg" src="/img/Logo.jpg" alt="Logo" />
              </div>
              


              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  En colaboración con nuestro mentor, el profesor Carlos Espinoza Chavarría, nos embarcamos en el desarrollo de un sistema operativo enfocado en la gestión eficiente de pedidos en restaurantes. Reconociendo la creciente demanda por soluciones que agilicen los procesos en la industria gastronómica, nuestro proyecto se centra en implementar un algoritmo FIFO (First In, First Out) para gestionar los pedidos conforme llegan al establecimiento.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  Este sistema operativo, diseñado específicamente para entornos de restaurantes, automatiza el proceso de toma de pedidos, asignación de recursos y seguimiento del estado de cada solicitud. Desde la recepción del pedido hasta su preparación y entrega, nuestro sistema garantiza una gestión fluida y organizada, mejorando la experiencia tanto para el personal del restaurante como para los clientes.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  Nuestro enfoque se basa en la optimización de recursos, la simplicidad de uso y la adaptabilidad a las necesidades específicas de cada establecimiento. A través de este proyecto, aspiramos a impulsar la eficiencia operativa en la industria gastronómica, contribuyendo así al crecimiento económico y la satisfacción del cliente.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">▶  En resumen, nuestro equipo está comprometido con la excelencia académica y la aplicación práctica de los conocimientos adquiridos. Con el desarrollo de este proyecto de sistemas operativos, buscamos no solo mejorar los procesos en restaurantes, sino también inspirar la innovación y el progreso en nuestra comunidad.</p>
            </div>



            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold mb-8">Acerca de Nosotros</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 w-full"> Proyecto de Sistemas Operativos en la Universidad Nacional de Costa Rica</p>
              <p className="text-lg text-gray-700 leading-relaxed ">Somos un equipo de estudiantes de Ingeniería en Sistemas de Información de la
                Universidad Nacional de Costa Rica, apasionados por la innovación tecnológica y el
                desarrollo de soluciones prácticas. Nuestra misión es aplicar los conocimientos adquiridos
                en el aula para abordar desafíos del mundo real y contribuir al avance de la sociedad.</p>
            </div>

            <div className="flex flex-col items-center w-full bg-white p-6 rounded-lg shadow-md ">

              <h2 className="text-2xl font-bold mb-4">Nuestro Equipo</h2>
              <div className="flex flex-wrap justify-center">

                <Link to={"https://github.com/AlexaGenar"}>
                  <div className="flex flex-col w-64 h-80 bg-gray-100 rounded-lg shadow-2xl p-5 m-4 hover:scale-105 duration-500">
                    <img className="mb-5" src="img/P2.png" alt="integrante" />
                    <p className=" text-gray-700 leading-relaxed font-bold">Génesis Gómez Ramírez</p>
                  </div>
                </Link>

                <Link to={"https://github.com/JoseABH"}>
                  <div className="flex flex-col w-64 h-80 bg-gray-100 rounded-lg shadow-2xl p-5 m-4 hover:scale-105 duration-500">

                    <img className="mb-5" src="img/P3.png" alt="integrante" />


                    <p className=" text-gray-700 leading-relaxed font-bold">José Alberto Baltodano Hernández</p>
                  </div>
                </Link>
                <Link to={"https://github.com/JosePabloSG"}>
                  <div className="flex flex-col w-64 h-80 bg-gray-100 rounded-lg shadow-2xl p-5 m-4 hover:scale-105 duration-500">
                    <img className="mb-5" src="img/P4.png" alt="integrante" />
                    <p className=" text-gray-700 leading-relaxed font-bold">José Pablo Suárez Gómez</p>
                  </div>
                </Link>
                <Link to={"https://github.com/"}>
                  <div className="flex flex-col w-64 h-80 bg-gray-100 rounded-lg shadow-2xl p-5 m-4 hover:scale-105 duration-500">
                    <img className="mb-5" src="img/P1.png" alt="integrante" />
                    <p className=" text-gray-700 leading-relaxed font-bold">Naila Torres Pérez</p>
                  </div>
                </Link>

              </div>



            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage