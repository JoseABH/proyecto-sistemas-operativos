/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
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

  const handleConfirmOrder = () => {
    const nuevosObjetos = {
      "mesa": parsedMesaId,
      "pedido": orderItems.map(item => ({
        "pedido": item.name,
        "cant": item.quantity,
       
      }))
    };

    fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevosObjetos),
    })
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar la respuesta de la API
      console.log('Respuesta de la API:', data);
      // Limpia el estado orderItems después de confirmar el pedido
      setOrderItems([]);
    })
    .catch(error => {
      console.error('Error al agregar objetos:', error);
    });

    handleClearOrder();
  };

  return (
    <div>
       <Navbar />
      <h1>Detalles de la Mesa {id}</h1>
      <OrderList
          order={order}
          onRemoveItem={handleRemoveItem}
          onClearOrder={handleClearOrder}
          onConfirmOrder={handleConfirmOrder}
        />
  
      <MenuList menuItems={menuItems} onAddToOrder={handleAddToOrder} />
       {/* Botón para confirmar el pedido */}
      <Footer />
    </div>
  );
}

export default OrderPage;
