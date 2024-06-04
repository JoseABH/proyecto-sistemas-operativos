import React, { useState } from 'react';
import { MenuItem, MenuCategory } from '../types/Menu';

const MenuForm: React.FC = () => {
  const [menuItem, setMenuItem] = useState<MenuItem>({
    id: 0,
    name: '',
    description: '',
    price: 0,
    image: '',
  });
  const [category, setCategory] = useState<MenuCategory>(MenuCategory.MainCourses);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'category') {
      setCategory(value as MenuCategory);
    } else {
      setMenuItem({
        ...menuItem,
        [name]: name === 'price' || name === 'id' ? parseFloat(value) : value,
      });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setMenuItem({
          ...menuItem,
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', menuItem, category);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Agregar Elemento del Menú</h2>
      <div className="mb-1">
        <label className="block text-gray-700">ID:</label>
        <input
          type="number"
          name="id"
          value={menuItem.id}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-1">
        <label className="block text-gray-700">Nombre:</label>
        <input
          type="text"
          name="name"
          value={menuItem.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-1">
        <label className="block text-gray-700">Descripción:</label>
        <textarea
          name="description"
          value={menuItem.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <div className="mb-1">
        <label className="block text-gray-700">Precio:</label>
        <input
          type="number"
          name="price"
          value={menuItem.price}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-1">
        <label className="block text-gray-700">Categoría:</label>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        >
          <option value={MenuCategory.MainCourses}>Platos Principales</option>
          <option value={MenuCategory.Drinks}>Bebidas</option>
          <option value={MenuCategory.Desserts}>Postres</option>
        </select>
      </div>
      <div className="mb-1">
        <label className="block text-gray-700">Imagen:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
        {imagePreview && (
          <img src={imagePreview as string} alt="Vista previa" className="mt-4 w-32 h-32 object-cover" />
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Guardar
      </button>
    </form>
  );
};

export default MenuForm;
