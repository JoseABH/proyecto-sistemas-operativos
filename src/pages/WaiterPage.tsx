import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"
import ListaCardMesa from "../components/ListaCardMesa";
import Spinner from "../components/ui/Spinner";
import useMesas from '../hooks/useMesas';


const WaiterPage = () => {
  const { mesas, loading } = useMesas();
  
  return (
    <>
      {
        loading ? (
          <>
            <main className="h-screen w-screen overflow-x-hidden ">
              <Navbar />
              <div className="flex flex-col items-center justify-center bg-slate-600 p-8 pt-20 ">
                <h1 className="text-4xl font-medium font-sans text-white mb-5">Mesa para ordenar</h1>
                <ListaCardMesa mesas={mesas} />
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
  )
}

export default WaiterPage



