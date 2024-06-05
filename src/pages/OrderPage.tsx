/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom"
import useOrders from "../hooks/useOrders";
import { useState } from "react";
import useMenuItems from "../hooks/useMenuItems";
import OrderList from "../components/OrderList";
import MenuList from "../components/MenuList";

const OrderPage = () => {
  const { id } = useParams<{ id: string }>()
  const parsedMesaId = id  ? parseInt(id ) : 0; // Si mesaId es undefined, asigna 0
  const { addOrderItem, removeOrderItem, clearOrder } = useOrders();
  const [order, setOrder] = useState<{ mesaId: number; items: any[] }>({ mesaId: parsedMesaId, items: [] });
  const menuItems = useMenuItems();


  const handleAddToOrder = (item: { id: number; name: string; description: string; price: number; quantity: number }) => {
      const updatedOrder = {
          ...order,
          items: [...order.items, item]
      };
      setOrder(updatedOrder);
      addOrderItem(parsedMesaId, item); // Utiliza parsedMesaId
      const nuevosObjetos = 
      {
        "pedido": item.name,
        "cant": item.quantity,
        "idmesa": id
      }
    
    
    fetch(`https://${ import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar otros encabezados si es necesario
      },
      body: JSON.stringify(nuevosObjetos),
    })
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar la respuesta de la API
      console.log('Respuesta de la API:', data);
    })
    .catch(error => {
      console.error('Error al agregar objetos:', error);
    });




  };

  const handleRemoveItem = (itemId: number) => {
      const updatedOrder = {
          ...order,
          items: order.items.filter((item: { id: number }) => item.id !== itemId)
      };
      setOrder(updatedOrder);
      removeOrderItem(parsedMesaId, itemId); // Utiliza parsedMesaId
  };

  const handleClearOrder = () => {
      setOrder({ mesaId: parsedMesaId, items: [] });
      clearOrder(parsedMesaId); // Utiliza parsedMesaId
  };

  return (
    <div>
    <h1>Detalles de la Mesa {id}</h1>
    <OrderList order={order} onRemoveItem={handleRemoveItem} onClearOrder={handleClearOrder} />   
    <MenuList menuItems={menuItems} onAddToOrder={handleAddToOrder}/>
  </div>

  )
}

export default OrderPage



