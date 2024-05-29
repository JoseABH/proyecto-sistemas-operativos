// src/components/MenuList.tsx
import React from 'react';
import CardMenuItem from './CardMenuItem';
import { MenuItem, MenuCategory } from '../types/Menu';

interface MenuListProps {
  menuItems: { [key in MenuCategory]: MenuItem[] };
  onAddToOrder: (item: MenuItem & { quantity: number }) => void;
}

const MenuList: React.FC<MenuListProps> = ({ menuItems, onAddToOrder }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Platos Principales</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems[MenuCategory.MainCourses].map((item) => (
          <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4 mt-8 text-white">Bebidas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems[MenuCategory.Drinks].map((item) => (
          <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
        ))}
      </div>
      <h3 className="text-xl font-bold mb-4 mt-8 text-white">Postres</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems[MenuCategory.Desserts].map((item) => (
          <CardMenuItem key={item.id} item={item} onAddToOrder={onAddToOrder} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
