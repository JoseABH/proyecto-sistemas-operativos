// src/hooks/useMenuItems.ts
import { useState, useEffect } from 'react';
import { getMenuItems } from '../Services/menuService';
import { MenuItem, MenuCategory } from '../types/Menu';

const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<{ [key in MenuCategory]: MenuItem[] }>({
    mainCourses: [],
    drinks: [],
    desserts: []
  });

  useEffect(() => {
    const fetchMenuItemsData = async () => {
      try {
        const data = await getMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItemsData();
  }, []);

  return menuItems;
};

export default useMenuItems;
