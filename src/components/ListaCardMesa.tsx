// src/components/ListaCardMesa.tsx
import React from 'react';
import CardMesas from './CardMesa';
import { Mesas } from '../types/Mesa';

interface ListaCardMesaProps {
  mesas: Mesas[];
}

const ListaCardMesa: React.FC<ListaCardMesaProps> = ({ mesas }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {mesas.map(mesa => (
        <CardMesas key={mesa.id} {...mesa} />
      ))}
    </div>
  );
};

export default ListaCardMesa;
