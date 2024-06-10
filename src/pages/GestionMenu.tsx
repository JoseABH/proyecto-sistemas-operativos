import { useEffect, useState } from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    categoria: string; // Agregamos la categoría aquí para manejarla fácilmente
}

interface Menu {
    mainCourses: MenuItem[];
    drinks: MenuItem[];
    desserts: MenuItem[];
}

const MenuPage = () => {
    const [menu, setMenu] = useState<Menu>({ mainCourses: [], drinks: [], desserts: [] });
    const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
    const [newItem, setNewItem] = useState<MenuItem>({ id: 0, name: '', description: '', price: 0, categoria: 'mainCourses' });
    const [itemType, setItemType] = useState<string>('mainCourses');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Función para obtener el menú desde la API
    const fetchMenu = () => {
        fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu`)
            .then(response => response.json())
            .then(data => {
                // Agrupar los datos recibidos por categoría
                const groupedMenu: Menu = { mainCourses: [], drinks: [], desserts: [] };
                data.forEach((item: MenuItem) => {
                    if (item.categoria === 'mainCourses') {
                        groupedMenu.mainCourses.push(item);
                    } else if (item.categoria === 'drinks') {
                        groupedMenu.drinks.push(item);
                    } else if (item.categoria === 'desserts') {
                        groupedMenu.desserts.push(item);
                    }
                });
                setMenu(groupedMenu);
            })
            .catch(error => console.error('Error al obtener el menú:', error));
    };

    // Función para agregar un nuevo ítem al menú
    const handleAddItem = () => {
        const itemToAdd = { ...newItem, categoria: itemType };
        fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemToAdd),
        })
        .then(response => response.json())
        .then(data => {
            const updatedMenu = { ...menu };
            updatedMenu[itemType as keyof Menu].push(data);
            setMenu(updatedMenu);
            setNewItem({ id: 0, name: '', description: '', price: 0, categoria: 'mainCourses' });
            setIsModalOpen(false);
        })
        .catch(error => console.error('Error al agregar el ítem:', error));
    };

    // Función para actualizar un ítem del menú
    const handleUpdateItem = () => {
        if (!editingItem) return;

        fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu/${editingItem.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editingItem),
        })
        .then(response => response.json())
        .then(data => {
            const updatedMenu = { ...menu };
            const index = updatedMenu[itemType as keyof Menu].findIndex(item => item.id === data.id);
            if (index !== -1) {
                updatedMenu[itemType as keyof Menu][index] = data;
                setMenu(updatedMenu);
            }
            setEditingItem(null);
            setIsModalOpen(false);
        })
        .catch(error => console.error('Error al actualizar el ítem:', error));
    };

    // Función para eliminar un ítem del menú
    const handleDeleteItem = (id: number, type: keyof Menu) => {
        fetch(`https://${import.meta.env.VITE_API_URL}.mockapi.io/api/Menu/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            const updatedMenu = { ...menu };
            updatedMenu[type] = updatedMenu[type].filter(item => item.id !== id);
            setMenu(updatedMenu);
        })
        .catch(error => console.error('Error al eliminar el ítem:', error));
    };

    // Obtener el menú al cargar el componente
    useEffect(() => {
        fetchMenu();
    }, []);

    const openModal = (item?: MenuItem, type?: string) => {
        if (item && type) {
            setEditingItem(item);
            setItemType(type);
        } else {
            setNewItem({ id: 0, name: '', description: '', price: 0, categoria: 'mainCourses' });
            setEditingItem(null);
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    return (
        <>
            <Navbar />
            <div className="p-8 pt-20 h-screen overflow-y-auto bg-slate-600">
                <h1 className="text-2xl font-bold mb-4 text-white">Gestión del Menú</h1>
                <button
                    onClick={() => openModal()}
                    className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
                >
                    Agregar Ítem
                </button>

                {/* Aquí va la tabla del menú */}
                {Object.keys(menu).map(type => (
                   
                    <div key={type}>
                        <h2 className="text-xl font-bold mb-2 text-white">
                            {type === 'mainCourses' ? 'Plato Principal' : type === 'drinks' ? 'Bebidas' : type === 'desserts' ? 'Postres' : ''}
                        </h2>

                        <table className="w-full border-collapse text-center bg-white mb-4">
                            <thead>
                                <tr>
                                    <th className="border p-2">ID</th>
                                    <th className="border p-2">Nombre</th>
                                    <th className="border p-2">Descripción</th>
                                    <th className="border p-2">Precio</th>
                                    <th className="border p-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(menu[type as keyof Menu] || []).map(item => (
                                    <tr key={item.id}>
                                        <td className="border p-2">{item.id}</td>
                                        <td className="border p-2">{item.name}</td>
                                        <td className="border p-2">{item.description}</td>
                                        <td className="border p-2">{item.price}</td>
                                        <td className="border p-2">
                                            <button
                                                onClick={() => openModal(item, type)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded m-2"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDeleteItem(item.id, type as keyof Menu)}
                                                className="bg-red-500 text-white py-1 px-2 rounded m-2"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}

                {/* Modal de Agregar/Editar Ítem */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-lg w-1/3">
                            <h2 className="text-xl font-bold mb-4">
                                {editingItem ? 'Editar Ítem' : 'Agregar Ítem'}
                            </h2>
                            <div className="mb-4">
                                <label className="font-bold">Tipo de Ítem</label>
                                <select
                                    value={itemType}
                                    onChange={e => setItemType(e.target.value)}
                                    className="border p-2 w-full"
                                >
                                    <option value="mainCourses">Plato Principal</option>
                                    <option value="drinks">Bebida</option>
                                    <option value="desserts">Postre</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={editingItem ? editingItem.name : newItem.name}
                                    onChange={e => {
                                        const value = e.target.value;
                                        if (editingItem) {
                                            setEditingItem({ ...editingItem, name: value });
                                        } else {
                                            setNewItem({ ...newItem, name: value });
                                        }
                                    }}
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Descripción</label>
                                <input
                                    type="text"
                                    placeholder="Descripción"
                                    value={editingItem ? editingItem.description : newItem.description}
                                    onChange={e => {
                                        const value = e.target.value;
                                        if (editingItem) {
                                            setEditingItem({ ...editingItem, description: value });
                                        } else {
                                            setNewItem({ ...newItem, description: value });
                                        }
                                    }}
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Precio</label>
                                <input
                                    type="number"
                                    placeholder="Precio"
                                    value={editingItem ? editingItem.price : newItem.price}
                                    onChange={e => {
                                        const value = parseFloat(e.target.value);
                                        if (editingItem) {
                                            setEditingItem({ ...editingItem, price: value });
                                        } else {
                                            setNewItem({ ...newItem, price: value });
                                        }
                                    }}
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                                >
                                    Cancelar
                                </button>
                                <button
                                    onClick={editingItem ? handleUpdateItem : handleAddItem}
                                    className="bg-blue-500 text-white py-2 px-4 rounded"
                                >
                                    {editingItem ? 'Actualizar' : 'Agregar'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default MenuPage;
