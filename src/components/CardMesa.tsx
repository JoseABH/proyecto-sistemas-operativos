import React from 'react';
import { Mesas } from '../types/Mesa';
import { Link } from 'react-router-dom';



const CardMesas: React.FC<Mesas> = ({ mesaId, personas, status }) => {

    const statusClasses = status ? 'bg-green-500' : 'bg-red-500'

    return (

        <div  className="min-h-80 w-60 rounded overflow-hidden shadow-lg p-4 bg-white border border-gray-200 m-4 hover:scale-110 duration-500">
            <Link to={`/order/${mesaId}`} className=' w-full'>
                <div className={`w-full h-32 ${statusClasses} flex items-center justify-center text-white text-2xl`}>
                    {status ? 'libre' : 'ocupada'}
                </div>
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Mesa: {mesaId}</div>
                <p className="text-gray-700 text-base">Max/Personas: {personas}</p>
            </div>
        </div>
    );
};

export default CardMesas;
