import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OrderListP from "../components/OrderListP"

const ChefPage = () => {
  return (
    <>
    <main className="bg-slate-600">
      <Navbar />
    <div className=" min-h-screen pt-20">
      <OrderListP></OrderListP>
    </div>
    <Footer />
    </main>
    
    </>
  )
}

export default ChefPage