import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useOrders from "../hooks/useOrders";
import useMenuItems from "../hooks/useMenuItems";
import OrderList from "../components/OrderList";
import MenuList from "../components/MenuList";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import toast from "react-hot-toast";
import { fetchOrderByMesaId, updateOrder, createOrder } from "../Services/Mesas";

const OrderPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedMesaId = id ? parseInt(id) : 0;
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
    setOrderItems(prevItems => [...prevItems, item]);
    addOrderItem(parsedMesaId, item);
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedOrder = {
      ...order,
      items: order.items.filter((item: { id: number }) => item.id !== itemId)
    };
    setOrder(updatedOrder);
    setOrderItems(prevItems => prevItems.filter(item => item.id !== itemId));
    removeOrderItem(parsedMesaId, itemId);
  };

  const handleClearOrder = () => {
    setOrder({ mesaId: parsedMesaId, items: [] });
    setOrderItems([]);
    clearOrder(parsedMesaId);
  };

  const handleConfirmOrder = async () => {
    try {
      const existingOrder = await fetchOrderByMesaId(parsedMesaId);
      const currentTime = new Date().toISOString();

      if (existingOrder) {
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
        
        await updateOrder(existingOrder.id, updatedOrder);
      } else {
        const newOrder = {
          mesaId: parsedMesaId,
          personas: 1,
          status: false,
          statusPedido: 2,
          createdAt: currentTime,
          pedido: orderItems.map(item => ({
            pedido: item.name,
            cant: item.quantity,
            precio: item.price
          }))
        };
        await createOrder(newOrder);
      }

      handleClearOrder();
      navigate('/waiter');
      toast.success('Pedido confirmado exitosamente.');
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
