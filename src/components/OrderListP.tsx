import React from 'react';
import TableOrderCard from './OrderCard';

const tableOrders = [
  {
    tableId: 5,
    orders: [
        { id: 3, name: "Pizza Margarita", description: "Pizza tradicional con salsa de tomate, mozzarella y albahaca fresca.", price: 10.99 },

        { id: 1, name: "Hamburguesa Clásica", description: "Deliciosa hamburguesa con carne, lechuga, tomate y queso.", price: 9.99 },
      { id: 4, name: "Coca-Cola", description: "Refresco carbonatado de cola.", price: 2.50 },
      { id: 5, name: "Limonada", description: "Refrescante limonada casera.", price: 3.00 }
    ]
  },
  {
    tableId: 2,
    orders: [
      { id: 2, name: "Ensalada César", description: "Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.", price: 7.99 },
      { id: 1, name: "Hamburguesa Clásica", description: "Deliciosa hamburguesa con carne, lechuga, tomate y queso.", price: 9.99 },

      { id: 7, name: "Pastel de Chocolate", description: "Delicioso pastel de chocolate con cobertura de crema.", price: 4.99 }
    ]
  },
  {
    tableId: 8,
    orders: [
      { id: 3, name: "Pizza Margarita", description: "Pizza tradicional con salsa de tomate, mozzarella y albahaca fresca.", price: 10.99 },
      { id: 5, name: "Limonada", description: "Refrescante limonada casera.", price: 3.00 }
    ]
  }
];

const TableOrderList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Pedidos por Mesa</h2>
      <div className="space-y-6">
        {tableOrders.map(table => (
          <div key={table.tableId}>
            <h3 className="text-xl font-semibold mb-2">Mesa {table.tableId}</h3>
            <div className="space-y-4">
              {table.orders.map(order => (
                <TableOrderCard key={order.id} {...order} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOrderList;
