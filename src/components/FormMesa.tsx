import React, { useState } from 'react';
import { Mesas } from '../types/Mesa';

const AddTablePage: React.FC = () => {
  const [table, setTable] = useState<Mesas>({
    id: 0,
    number: 0,
    status: 'libre',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTable({
      ...table,
      [name]: name === 'number' || name === 'id' ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mesa creada:', table);
    // Aquí podrías enviar los datos a un backend o manejarlos como necesites
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Añadir una Mesa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ID:</label>
          <input
            type="number"
            name="id"
            value={table.id}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Número de Mesa:</label>
          <input
            type="number"
            name="number"
            value={table.number}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Estado:</label>
          <select
            name="status"
            value={table.status}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="libre">Libre</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddTablePage;
