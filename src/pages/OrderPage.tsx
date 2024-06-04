import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";

import OrderList from '../components/OrderList';
import MenuList from '../components/MenuList';
import useOrders from '../hooks/useOrders';
import useMenuItems from '../hooks/useMenuItems';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useMesas from '../hooks/useMesas';
const OrderPage: React.FC = () => {
    const { mesaId } = useParams<{ mesaId: string }>();
    const parsedMesaId = mesaId ? parseInt(mesaId) : 0; // Si mesaId es undefined, asigna 0
    const { addOrderItem, removeOrderItem, clearOrder } = useOrders();
    const [order, setOrder] = useState<{ mesaId: number; items: any[] }>({ mesaId: parsedMesaId, items: [] });
    const menuItems = useMenuItems();



   
        const { MesaId } = useParams<{
          MesaId: string;
         
        }>();




    const handleAddToOrder = (item: { id: number; name: string; description: string; price: number; quantity: number }) => {
        const updatedOrder = {
            ...order,
            items: [...order.items, item]
        };
        setOrder(updatedOrder);
        addOrderItem(parsedMesaId, item); // Utiliza parsedMesaId
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
    const { Mesas } = useMesas();
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center bg-slate-600 p-8 pt-20 "><h1>Pedido para Mesa {MesaId}</h1>
            <OrderList order={order} onRemoveItem={handleRemoveItem} onClearOrder={handleClearOrder} />
            {/* Pasa handleAddItem como onAddItem a MenuList */}
            <MenuList menuItems={menuItems} onAddToOrder={handleAddToOrder}/>


            </div>
            
            <Footer></Footer>
        </div>
    );



    
};

export default OrderPage;
