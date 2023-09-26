import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className={`app dark `}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root
