import { Link } from "react-router-dom"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"


const AdminPage = () => {
  return (
    <>
    <main className=" bg-slate-600">
      <Navbar />
      <div className="flex items-center justify-center flex-col h-svh overflow-x-hidden">
        <div className="w-4/5 lg:w-2/4  p-6 bg-white shadow-md rounded-md text-center">
          <h1 className="text-2xl font-bold mb-4">Gestión del Restaurante</h1>
          <div className="flex flex-col space-y-4 items-center">
            <Link to="/Gestion/Menu" className="w-3/5 bg-blue-500 text-white py-2 px-4 rounded-md text-center hover:bg-blue-600">
                Gestiones Menu
            </Link>
            <Link to="/Gestion/Mesa" className="w-3/5 bg-green-500 text-white py-2 px-4 rounded-md text-center hover:bg-green-600">
                Gestiones Mesa
            </Link>
            <Link to="/Chef" className="w-3/5 bg-purple-700 text-white py-2 px-4 rounded-md text-center hover:bg-purple-900">
                Gestiones Pedidos
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