import toast from "react-hot-toast";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { useEffect, useState } from "react";

const ChefPage = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [lowestOrder, setLowestOrder] = useState<any | null>(null);
  const [allChecked, setAllChecked] = useState(false);
  const [undoIndex, setUndoIndex] = useState<number | null>(null);
  
 // Función para obtener los pedidos desde la API
  const fetchOrders = () => {
    fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`)
      .then(response => response.json())
      .then(data => {
        const filteredOrders = data.filter((order: any) => order.statusPedido === 2);
        const sortedOrders = filteredOrders.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        setOrders(sortedOrders);
        if (sortedOrders.length > 0) {
          const initialOrder = {
            ...sortedOrders[0],
            checkedItems: sortedOrders[0].pedido.map(() => 'pendiente')
          };
          setLowestOrder(initialOrder);
          setAllChecked(false);
        } else {
          setLowestOrder(null);
        }
      })
      .catch(error => {
        console.error('Error al obtener los pedidos:', error);
      });
  };

  const handleButtonClick = (index: number) => {
    if (!lowestOrder) return;
    const updatedOrder = { ...lowestOrder };
    const currentState = updatedOrder.checkedItems[index];

    if (currentState === 'listo') return;

    if (currentState === 'pendiente') {
      updatedOrder.checkedItems[index] = 'preparando';
    } else if (currentState === 'preparando') {
      updatedOrder.checkedItems[index] = 'listo';
    }

    setLowestOrder(updatedOrder);
    setAllChecked(updatedOrder.checkedItems.every(item => item === 'listo'));
    setUndoIndex(index);
    
  };

  const handleUndo = (index: number) => {
    if (!lowestOrder || index !== undoIndex) return;
    const updatedOrder = { ...lowestOrder };
    const currentState = updatedOrder.checkedItems[index];

    if (currentState === 'listo') {
      updatedOrder.checkedItems[index] = 'preparando';
    } else if (currentState === 'preparando') {
      updatedOrder.checkedItems[index] = 'pendiente';
    }

    setLowestOrder(updatedOrder);
    setAllChecked(updatedOrder.checkedItems.every(item => item === 'listo'));
    setUndoIndex(null);
  };

  const handleUpdateOrderStatus = (id: string) => {
    fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ statusPedido: 3 }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Pedido actualizado exitosamente.');
          toast.success('El pedido de la mesa ha sido preparado.');
          fetchOrders();
        } else {
          throw new Error('No se pudo actualizar el pedido.');
        }
      })
      .catch(error => {
        console.error('Error al actualizar el pedido:', error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen pt-20">
        <h1 className="text-2xl font-bold mb-4">Preparar Orden</h1>
        {lowestOrder ? (
          <div className="bg-gray-200 shadow-md rounded-lg p-4 mb-4 w-2/4 overflow-y-scroll overflow-x-hidden animate-open-close">
            <p className="text-lg font-semibold mb-2">Mesa: {lowestOrder.mesaId}</p>
            <ul className="list-none p-0 m-0 mb-4">
              {lowestOrder.pedido.map((item: any, index: number) => (
                <li key={index} className="text-gray-700 mb-2 flex items-center">
                  <div className={`p-1 mr-2 ${lowestOrder.checkedItems[index] === 'pendiente' ? 'bg-gray-300' :
                    lowestOrder.checkedItems[index] === 'preparando' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}>
                    <label className="flex items-center text-lg  ">
                      <button
                        onClick={() => handleButtonClick(index)}
                        className={`mr-2 px-2 py-1 rounded ${lowestOrder.checkedItems[index] === 'pendiente' ? 'bg-gray-300 text-gray-700' :
                          lowestOrder.checkedItems[index] === 'preparando' ? 'bg-yellow-500 text-white' :
                            'bg-green-500 text-white'
                          }`}
                      >
                        {lowestOrder.checkedItems[index] === 'pendiente' ? 'Preparar' :
                          lowestOrder.checkedItems[index] === 'preparando' ? 'Preparando' :
                            'Listo'}
                      </button>
                      ● {item.pedido} - Cantidad: {item.cant}
                      <button
                        className={`${undoIndex === index ? 'block' : 'hidden'} ml-4 bg-red-500 text-white py-1 px-2 rounded text-sm`}
                        onClick={() => handleUndo(index)}
                      >
                        Deshacer
                      </button>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                if (!allChecked) {
                  toast.error('El pedido aún no está completo. Por favor, completa todo el pedido antes de marcarlo como hecho.');
                } else {
                  handleUpdateOrderStatus(lowestOrder.id);
                }
              }}
              className={`bg-red-500 text-white py-2 px-4 rounded ${allChecked ? 'hover:bg-red-700' : 'cursor-not-allowed'
                } transition duration-300`}
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
};

export default ChefPage;
