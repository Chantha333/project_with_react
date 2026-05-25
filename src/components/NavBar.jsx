import { Link } from "react-router-dom";
import logo from "../images/logo5.webp";
import {Menu,X} from "lucide-react"
import { useState } from "react";
const link=[
    {
        label:"Home",
        path:"/",
    },
    {
        label:"Service",
        path:"service",
    },
    {
        label:"Accessories",
        path:"accessories",
    },
    {
        label:"About",
        path:"about",
    },
]
const NavBar = () => {
    const [isOpen,setIsOpen] =useState(false);
  return (
    <nav className="nav-bar">
        <img className="logo" src={logo} alt="project" />
        <button onClick={()=>setIsOpen(!isOpen)} className="nav-toggle">
            {isOpen ? <X/> : <Menu />}
        </button>
        <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
            {link.map(link=>(
                <li onClick={()=>setIsOpen(false)} key={link.label} className="nav-link">
                    <Link to={link.path}>{link.label}</Link>
                </li>
            ))}
        </ul>
        {isOpen && (
            <div className="nav-overlay" onClick={() => setIsOpen(false)} />
        )}

    </nav>
    
  )
}

export default NavBar