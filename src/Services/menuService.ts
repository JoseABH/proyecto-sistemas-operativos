// src/Services/menuService.ts
import { MenuItem, MenuCategory } from '../types/Menu';

const JSON_URL = '/src/Services/menu.json'; // Ruta al archivo JSON

export const getMenuItems = async (): Promise<{ [key in MenuCategory]: MenuItem[] }> => {
  try {
    const response = await fetch(JSON_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return { mainCourses: [], drinks: [], desserts: [] };
  }
};
