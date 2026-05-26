import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Scroll } from "lucide-react"


const RouteLayout = () => {
  return (
    <div>
        <Scroll/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RouteLayout