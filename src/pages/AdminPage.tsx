import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Spinner from "../components/Spinner"

const AdminPage = () => {
  return (
    <>
    <main className=" bg-slate-600">
      <Navbar />
      <div className="flex items-center justify-center flex-col h-svh overflow-x-hidden">
        <div className="w-1/2  p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">Gestión del Restaurante</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/AddMenu" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600">
              Añadir al Menú
            </Link>
            <Link to="/AddMesa" className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600">
              Añadir una Mesa
            </Link>
            <Link to="/Chef" className="w-full bg-purple-700 text-white py-2 px-4 rounded-md text-center hover:bg-purple-900">
              Ver Pedidos
            </Link>
          </div>
        </div>
      </div>


      <Footer />
    </main>
      
    </>
  )
}

export default AdminPage