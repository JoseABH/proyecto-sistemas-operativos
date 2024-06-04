import React, { useState } from 'react';

interface OrderCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  onReady?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ id, name, description, price, onReady }) => {
  const [status, setStatus] = useState<"pendiente" | "preparando" | "listo">("pendiente");

  const handlePreparing = () => {
    setStatus("preparando");
  };

  const handleReady = () => {
    setStatus("listo");
    if (onReady) {
      onReady();
    }
  };

  return (
    <div className={`border border-gray-300 rounded-md p-4 shadow-md ${status === "preparando" ? "bg-yellow-100" : status === "listo" ? "bg-green-100" : ""}`}>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-700">{description}</p>
      <p className="text-gray-900 font-semibold">${price.toFixed(2)}</p>
      <div className="mt-4 flex justify-end">
        {status === "pendiente" && (
          <button onClick={handlePreparing} className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600">
            Preparar Pedido
          </button>
        )}
        {status === "preparando" && (
          <button onClick={handleReady} className="bg-yellow-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-yellow-600">
            Preparando
          </button>
        )}
        {status === "listo" && (
          <button disabled className="bg-green-500 text-white py-2 px-4 rounded-md cursor-not-allowed">
            Listo
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
