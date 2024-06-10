import React from 'react';
import { Order } from '../types/Order';


interface OrderListProps {
    order: Order;
    onRemoveItem: (itemId: number) => void;
    onClearOrder: () => void;
    onConfirmOrder: () => void;
}

const OrderList: React.FC<OrderListProps> = ({ order, onRemoveItem, onClearOrder, onConfirmOrder }) => {
    return (
        <div className=" bg-gray-100 p-4 rounded-lg shadow-md min-h-60 max-h-64 ">
            <h2 className="text-base font-bold mb-4">Pedido Actual</h2>
            {order.items.length === 0 ? (
                <p className="text-gray-500">No hay elementos en el pedido.</p>
            ) : (
                <ul className="flex overflow-x-scroll ">
                    {order.items.map(item => (
                        <li key={item.id} className="flex flex-col justify-between items-center border-b p-4 m-1 bg-gray-300 rounded-md min-w-44 box-border">
                            <span>{item.name} x {item.quantity}</span>

                            <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700">Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
            {order.items.length > 0 && (
                <div className='pb-8'>
                    <button onClick={onClearOrder} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 m-4">Eliminar Pedido</button>
                    <button onClick={onConfirmOrder} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Confirmar Pedido</button>
                </div>
               
            )}
        </div>
    );
};

export default OrderList;
