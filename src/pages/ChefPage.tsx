import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { useEffect, useState } from "react";

const ChefPage = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [lowestOrder, setLowestOrder] = useState<any | null>(null);

  // Función para obtener los pedidos desde la API
  const fetchOrders = () => {
    fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`)
      .then(response => response.json())
      .then(data => {
        setOrders(data);
        if (data.length > 0) {
          // Encontrar el pedido con el ID más bajo
          const lowest = data.reduce((prev: any, current: any) => {
            return prev.id < current.id ? prev : current;
          });
          setLowestOrder(lowest);
        }
      })
      .catch(error => {
        console.error('Error al obtener los pedidos:', error);
      });
  };

  // Función para eliminar un pedido por ID
  const handleDeleteOrder = (id: string) => {
    
      fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('Pedido eliminado exitosamente.');
          fetchOrders(); // Volver a obtener los pedidos después de eliminar
        } else {
          throw new Error('No se pudo eliminar el pedido.');
        }
      })
      .catch(error => {
        console.error('Error al eliminar el pedido:', error);
      });
    
    
  };

  // Obtener los pedidos al cargar el componente
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen  pt-5">
        <h1 className="text-2xl font-bold mb-4">Preparar Orden </h1>
        {lowestOrder ? (
          <div className="bg-gray-200 shadow-md rounded-lg p-4 mb-4 w-2/4 overflow-y-scroll overflow-x-hidden">
            <p className="text-lg font-semibold mb-2">Mesa: {lowestOrder.mesa}</p>
            <ul className="list-disc list-inside mb-4">
              {lowestOrder.pedido.map((item: any, index: number) => (
                <li key={index} className="text-gray-700">
                  {item.pedido} - Cantidad: {item.cant}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleDeleteOrder(lowestOrder.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            >
              Hecho
            </button>
          </div>
        ) : (
          <p className="text-gray-600">No hay pedidos disponibles.</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ChefPage;
