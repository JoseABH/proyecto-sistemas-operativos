import React from 'react';
import MenuForm from '../components/FormMenu';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddMenu: React.FC = () => {
    return (
        <main className=' bg-slate-600'>
            <Navbar></Navbar>
            <div className="flex flex-col overflow-x-hidden justify-center items-center w-screen pb-8 px-6 pt-20 bg-slate-600 shadow-md rounded-md">
                <p className="text-gray-500 mb-2">Aquí puedes añadir nuevos platillos.</p>
                <MenuForm></MenuForm>
                
            </div>
            <Footer></Footer>
        </main>

    );
};

export default AddMenu;