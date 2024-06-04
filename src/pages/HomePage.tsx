import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className=" flex justify-center items-center flex-col pt-20 text-4xl font-bold  bg-slate-600 text-white ">Home
    <img className="m-8 rounded-xl" width={550} height={550} src="/img/Logo.jpg" alt="Logo" /></div>
    
    <Footer />
    </>
  )
}

export default HomePage