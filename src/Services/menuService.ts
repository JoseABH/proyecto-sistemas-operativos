// // src/Services/menuService.ts
// import { MenuItem, MenuCategory } from '../types/Menu';

// const API_URL =  `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu `; // Ruta al archivo JSON

// interface MenuResponse {
//   mainCourses: MenuItem[];
//   drinks: MenuItem[];
//   desserts: MenuItem[];
// }

// export const getMenuItems = async (): Promise<{ [key in MenuCategory]: MenuItem[] }> => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch menu items');
//     }
//     const data: MenuResponse[] = await response.json();

//     // Verificamos que data tiene la estructura esperada
//     if (Array.isArray(data) && data.length > 0) {
//       const { mainCourses, drinks, desserts } = data[0];
//       return { mainCourses, drinks, desserts };
//     } else {
//       throw new Error('Unexpected JSON structure');
//     }
//   } catch (error) {
//     console.error('Error fetching menu items:', error);
//     return { mainCourses: [], drinks: [], desserts: [] };
//   }
// };




// // src/Services/menuService.ts
// import { MenuItem, MenuCategory } from '../types/Menu';

// const JSON_URL = 'https://66628fee62966e20ef0909b4.mockapi.io/api/menu/hola'; // Ruta al archivo JSON

// export const getMenuItems = async (): Promise<{ [key in MenuCategory]: MenuItem[] }> => {
//   try {
//     const response = await fetch(JSON_URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch menu items');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching menu items:', error);
//     return { mainCourses: [], drinks: [], desserts: [] };
//   }
// };


import { MenuItem, MenuCategory } from '../types/Menu';

const API_URL = `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu`; // Ruta al archivo JSON

interface MenuResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  categoria: MenuCategory;
}

export const getMenuItems = async (): Promise<{ [key in MenuCategory]: MenuItem[] }> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch menu items');
    }
    const data: MenuResponse[] = await response.json();

    // Verificamos que data tiene la estructura esperada
    if (Array.isArray(data) && data.length > 0) {
      const menuItems: { [key in MenuCategory]: MenuItem[] } = {
        mainCourses: [],
        drinks: [],
        desserts: []
      };

      data.forEach(item => {
        const category = item.categoria;
        if (category in menuItems) {
          menuItems[category].push(item);
        }
      });

      return menuItems;
    } else {
      throw new Error('Unexpected JSON structure');
    }
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return { mainCourses: [], drinks: [], desserts: [] };
  }
};
