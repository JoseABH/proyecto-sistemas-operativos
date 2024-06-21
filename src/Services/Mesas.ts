


// Simular un retraso de la API
// export const getMesas = (): Promise<Mesas[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mesasData);
//     }, 500); // Simulamos un delay de 1 segundo
//   });
// };
import { Mesas } from '../types/Mesa';
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

export const fetchOrderByMesaId = async (mesaId: number): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}?mesaId=${mesaId}`);
    if (!response.ok) {
      throw new Error('Error al obtener el pedido de la mesa');
    }
    const data = await response.json();
    return data[0]; // Suponiendo que la API devuelve una lista y necesitamos el primer elemento
  } catch (error) {
    console.error('Error al obtener el pedido de la mesa:', error);
    throw error;
  }
};

export const updateOrder = async (orderId: number, updatedOrder: any): Promise<void> => {
  try {
    await fetch(`${API_URL}/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOrder),
    });
  } catch (error) {
    console.error('Error al actualizar el pedido:', error);
    throw error;
  }
};

export const createOrder = async (newOrder: any): Promise<void> => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    });
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    throw error;
  }
};
