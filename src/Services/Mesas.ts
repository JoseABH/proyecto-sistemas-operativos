
import { Mesas } from '../types/Mesa';
import mesasData from './mesas.json';

// Simular un retraso de la API
export const getMesas = (): Promise<Mesas[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mesasData);
    }, 1000); // Simulamos un delay de 1 segundo
  });
};
