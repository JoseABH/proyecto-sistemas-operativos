import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Spinner from "../components/Spinner"

const AdminPage = () => {
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">  <Spinner /></div>
  
    <Footer />
    </>
  )
}

export default AdminPage