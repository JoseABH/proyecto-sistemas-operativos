import React from 'react';
import MesaForm from '../components/FormMesa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AddMesa: React.FC = () => {
  return (
    <main className='bg-slate-600'>
        <Navbar></Navbar>
        <div className="max-w-xl mx-auto p-6 pt-20 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Añadir una Mesa</h2>
      <p className="text-gray-700">Aquí puedes añadir una nueva mesa.</p>
      <MesaForm></MesaForm>
    </div>
    <Footer></Footer>
    </main>
    
  );
};

export default AddMesa;


