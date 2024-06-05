import React from 'react';
import { Order } from '../types/Order';


interface OrderListProps {
    order: Order;
    onRemoveItem: (itemId: number) => void;
    onClearOrder: () => void;
}

const OrderList: React.FC<OrderListProps> = ({ order, onRemoveItem, onClearOrder }) => {
    return (
        <div className="order-list bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Pedido Actual</h2>
            {order.items.length === 0 ? (
                <p className="text-gray-500">No hay elementos en el pedido.</p>
            ) : (
                <ul className="mb-4">
                    {order.items.map(item => (
                        <li key={item.id} className="flex justify-between items-center border-b py-2">
                            <span>{item.name} x {item.quantity}</span>

                            <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700">Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            {order.items.length > 0 && (
                <button onClick={onClearOrder} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Eliminar Pedido</button>
            )}
        </div>
    );
};

export default OrderList;