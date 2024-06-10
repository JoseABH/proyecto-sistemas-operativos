
import { Mesas } from '../types/Mesa';
import mesasData from './mesas.json';

// Simular un retraso de la API
// export const getMesas = (): Promise<Mesas[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mesasData);
//     }, 500); // Simulamos un delay de 1 segundo
//   });
// };


const API_URL = `https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Pedido`;

export const getMesas = async (): Promise<Mesas[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de las mesas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos de las mesas:', error);
    throw error;
  }
};
