// src/components/CardMenuItem.tsx
import React, { useState } from 'react';
import { MenuItem } from '../types/Menu';

interface CardMenuItemProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem & { quantity: number }) => void;
}

const CardMenuItem: React.FC<CardMenuItemProps> = ({ item, onAddToOrder }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToOrder = () => {
    if (quantity > 0) {
      onAddToOrder({ ...item, quantity });
      setQuantity(0); // Reset quantity after adding to order
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-bold">{item.name}</h4>
      <p className="text-sm text-gray-500">{item.description}</p>
      <p className="font-bold">${item.price.toFixed(2)}</p>
      <div className="flex items-center mt-4">
        <button
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
          className="text-gray-500 px-2 py-1 rounded-full bg-gray-200"
        >
          -
        </button>
        <span className="mx-4">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="text-gray-500 px-2 py-1 rounded-full bg-gray-200"
        >
          +
        </button>
        <button onClick={handleAddToOrder} className="ml-auto bg-blue-500 text-white px-4 py-1 rounded-md">
          Agregar al Pedido
        </button>
      </div>
    </div>
  );
};

export default CardMenuItem;
