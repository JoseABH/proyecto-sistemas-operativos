import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ListaCardMesa from "../components/ListaCardMesa";
import Spinner from "../components/Spinner";
import useMesas from '../hooks/useMesas';
const WaiterPage = () => {
  const { mesas, loading } = useMesas();
  if (loading) {
    return <div className="flex w-screen h-screen justify-center items-center">
      <Spinner> </Spinner>
    </div>;
  }
  return (
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
  )
}

export default WaiterPage



