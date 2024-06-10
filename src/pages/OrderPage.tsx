/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import useOrders from "../hooks/useOrders";
import { useState } from "react";
import useMenuItems from "../hooks/useMenuItems";
import OrderList from "../components/OrderList";
import MenuList from "../components/MenuList";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedMesaId = id ? parseInt(id) : 0; // Si mesaId es undefined, asigna 0
  const { addOrderItem, removeOrderItem, clearOrder } = useOrders();
  const [order, setOrder] = useState<{ mesaId: number; items: any[] }>({ mesaId: parsedMesaId, items: [] });
  const menuItems = useMenuItems();
  const [orderItems, setOrderItems] = useState<{ id: number; name: string; description: string; price: number; quantity: number }[]>([]);
  const navigate = useNavigate();

  const handleAddToOrder = (item: { id: number; name: string; description: string; price: number; quantity: number }) => {
    const updatedOrder = {
      ...order,
      items: [...order.items, item]
    };
    setOrder(updatedOrder);
    setOrderItems(prevItems => [...prevItems, item]); // Acumula los ítems en orderItems
    addOrderItem(parsedMesaId, item); // Utiliza parsedMesaId
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedOrder = {
      ...order,
      items: order.items.filter((item: { id: number }) => item.id !== itemId)
    };
    setOrder(updatedOrder);
    setOrderItems(prevItems => prevItems.filter(item => item.id !== itemId)); // Remueve el ítem de orderItems
    removeOrderItem(parsedMesaId, itemId); // Utiliza parsedMesaId
  };

  const handleClearOrder = () => {
    setOrder({ mesaId: parsedMesaId, items: [] });
    setOrderItems([]); // Limpia el estado orderItems
    clearOrder(parsedMesaId); // Utiliza parsedMesaId
  };

  const handleConfirmOrder = async () => {
    try {
      // Obtener el pedido existente desde la API
      const response = await fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido?mesaId=${parsedMesaId}`);
      const data = await response.json();
      const existingOrder = data[0];

      const currentTime = new Date().toISOString();

      if (existingOrder) {
        // Actualizar el pedido existente con los nuevos elementos y cambiar los estados
        const updatedOrder = {
          ...existingOrder,
          status: false,
          statusPedido: 2,
          createdAt: currentTime,
          pedido: [
            ...existingOrder.pedido,
            ...orderItems.map(item => ({
              pedido: item.name,
              cant: item.quantity,
              precio: item.price
            }))
          ]
        };

        // Realizar la solicitud PUT para actualizar el pedido en la API
        await fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido/${existingOrder.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedOrder),
        });
      } else {
        // Si no existe el pedido, crear uno nuevo
        const newOrder = {
          mesaId: parsedMesaId,
          personas: 1, // Ajusta el valor de personas según sea necesario
          status: false,
          statusPedido: 2,
          createdAt: currentTime,
          pedido: orderItems.map(item => ({
            pedido: item.name,
            cant: item.quantity,
            precio: item.price
          }))
        };

        await fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder),
        });
      }

      // Limpiar el estado orderItems después de confirmar el pedido
      handleClearOrder();
      navigate('/waiter');
    } catch (error) {
      console.error('Error al confirmar el pedido:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="flex flex-row justify-center p-8 pt-20 text-3xl font-bold text-gray-800 bg-gray-200 rounded-full">
        Detalles de la Mesa <p className="text-orange-600 ml-5">{id}</p>
      </h1>
      <OrderList
        order={order}
        onRemoveItem={handleRemoveItem}
        onClearOrder={handleClearOrder}
        onConfirmOrder={handleConfirmOrder}
      />
      <MenuList menuItems={menuItems} onAddToOrder={handleAddToOrder} />
      <Footer />
    </div>
  );
};

export default OrderPage;
