import { NavLink } from "react-router-dom";
import logo from "../assets/mpd-logo.png"
import "../styles/navbar.css"


function Navbar() {
  return (
    <header className="">
      <nav className="flex pt-2 gap-3 max-w-7/10 mx-auto border-b-1 border-gray-350">
        <div className="flex grow justify-between items-center mx-auto-">

          {/*===============MENU===============*/}
          <div className="navbar-menu flex gap-7" >
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