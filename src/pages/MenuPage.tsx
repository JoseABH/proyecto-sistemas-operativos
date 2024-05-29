import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ListaCardMesa from "../components/ListaCardMesa";
import Spinner from "../components/Spinner";
import useMesas from '../hooks/useMesas';
import MenuList from '../components/MenuList';
import useMenuItems from '../hooks/useMenuItems';

export default function MenuPage(){
    const { mesas, loading } = useMesas();
  const menuItems = useMenuItems();

  const handleAddToOrder = (item: { id: number; name: string; description: string; price: number; quantity: number }) => {
    // Aquí puedes implementar la lógica para agregar el elemento al pedido
    console.log("Agregado al pedido:", item);
  };

    return(
        <>
        {
          loading ? (
            <>
              <main className="h-screen w-screen overflow-x-hidden ">
                <Navbar />
                <div className="flex flex-col items-center justify-center bg-slate-600 p-8 pt-20 ">
                  <h1 className="text-4xl font-medium font-sans text-white mb-5">Menu</h1>
                  <MenuList menuItems={menuItems} onAddToOrder={handleAddToOrder} />
                </div>
                <Footer />
              </main>
            </>
          ) : (
            <div>
              <Navbar />
              <div className="flex flex-col items-center justify-center bg-slate-600 p-8 pt-20">
              <Spinner />
              </div>
              <Footer />
            </div>
          )
        }
      </>
    );
}