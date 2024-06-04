import { useState } from 'react';
import { OrderItem } from '../types/Order';

interface Order {
    mesaId: number;
    items: OrderItem[];
}

const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const addOrderItem = (mesaId: number, item: OrderItem) => {
        setOrders(prevOrders => {
            const updatedOrders = prevOrders.map(order => {
                if (order.mesaId === mesaId) {
                    return { ...order, items: [...order.items, item] };
                }
                return order;
            });
            return updatedOrders;
        });
    };

    const removeOrderItem = (mesaId: number, itemId: number) => {
        setOrders(prevOrders => {
            const updatedOrders = prevOrders.map(order => {
                if (order.mesaId === mesaId) {
                    return { ...order, items: order.items.filter(item => item.id !== itemId) };
                }
                return order;
            });
            return updatedOrders;
        });
    };

    const clearOrder = (mesaId: number) => {
        setOrders(prevOrders => prevOrders.filter(order => order.mesaId !== mesaId));
    };

    return { orders, addOrderItem, removeOrderItem, clearOrder };
};

export default useOrders;
