import { NavLink } from "react-router-dom";
import logo from "../assets/mpd-logo.png"
import "../styles/navbar.css"
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="border-b-1 border-gray-350 sticky top-0 bg-white z-50">
      <nav className="flex pt-2 gap-3 max-w-7/10 mx-auto">
        <div className="flex grow justify-between items-center mx-auto-">

          {/*===============MENU===============*/}
        <button 
          className="block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          >
          ☰
          
        </button>
          <div 
            className={`navbar-menu flex gap-7 flex flex-col absolute top-full left-0 w-full bg-white p-5 shadow-md
            ${isOpen ? "flex" : "hidden"} lg:flex lg:static lg:flex-row`}
            >
            <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Beranda</span>
            )}
            </NavLink>
            <NavLink to="/booking-tempat">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Booking Tempat</span>
            )}
            </NavLink>
            <NavLink to="/kegiatan">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Kegiatan</span>
            )}
            </NavLink>
            <NavLink to="/ziwaf">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>ZIWAF</span>
            )}
            </NavLink>
            <NavLink to="/tentang">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Tentang MPD</span>
            )}
            </NavLink>
          </div>

          {/*===============LOGIN===============*/}
          <div className="navbar-login">
            <NavLink to="/login">
              Masuk
            </NavLink>
          </div>

        </div>

        {/*===============LOGO===============*/}
        <div className="mr-2 font-medium">
          <NavLink to="/">
          <img 
            className="w-15"
            src={logo} 
            alt="Logo MPD" />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;