import React from 'react';
import CardMesas from './CardMesa';
import { Mesas } from '../types/Mesa';
import { Link } from 'react-router-dom';

interface ListaCardMesaProps {
  mesas: Mesas[];
}

const ListaCardMesa: React.FC<ListaCardMesaProps> = ({ mesas }) => {
  

  const handleMesaClick = (mesaId: number) => {
    <Link key={mesaId} to={`/Order`} ></Link>
  };

  return (
    <div className="flex flex-row flex-wrap justify-center ">
      {mesas.map(mesa => (
        <div key={mesa.id} onClick={() => handleMesaClick(Number(mesa.id))}>
          <CardMesas {...mesa} />
        </div>
      ))}
    </div>
  );
};

export default ListaCardMesa;
