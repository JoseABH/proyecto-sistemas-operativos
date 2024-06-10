import React, { useState } from 'react';
import CardMenuItem from './CardMenuItem';
import { MenuItem, MenuCategory } from '../types/Menu';

interface MenuListProps {
  menuItems: { [key in MenuCategory]: MenuItem[] };
  onAddToOrder: (item: MenuItem & { quantity: number }) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menuItems, onAddToOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>(MenuCategory.MainCourses);

  return (
    <div className="bg-gray-800 p-4  shadow-md">
      <nav className="flex space-x-4 mb-4">
        <button
          onClick={() => setSelectedCategory(MenuCategory.MainCourses)}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === MenuCategory.MainCourses ? 'bg-gray-700 text-white' : 'bg-gray-500 text-gray-300'
          }`}
        >
          Platos Principales
        </button>
        <button
          onClick={() => setSelectedCategory(MenuCategory.Drinks)}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === MenuCategory.Drinks ? 'bg-gray-700 text-white' : 'bg-gray-500 text-gray-300'
          }`}
        >
          Bebidas
        </button>
        <button
          onClick={() => setSelectedCategory(MenuCategory.Desserts)}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === MenuCategory.Desserts ? 'bg-gray-700 text-white' : 'bg-gray-500 text-gray-300'
          }`}
        >
          Postres
        </button>
      </nav>
      <div>
        {selectedCategory === MenuCategory.MainCourses && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems[MenuCategory.MainCourses].map((item) => (
              <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
            ))}
          </div>
        )}
        {selectedCategory === MenuCategory.Drinks && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems[MenuCategory.Drinks].map((item) => (
              <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
            ))}
          </div>
        )}
        {selectedCategory === MenuCategory.Desserts && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menuItems[MenuCategory.Desserts].map((item) => (
              <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
