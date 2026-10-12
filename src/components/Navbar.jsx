
function Navbar() {
  return (
    <header>
      <nav>
        <div>

          {/*===============MENU===============*/}
          <div className="navbar-menu flex gap-3 font-normal items-center" >
            <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Beranda</span>
            )}
            </NavLink>
            <NavLink to="/jadwal-kajian">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Jadwal Kajian</span>
            )}
            </NavLink>
            <NavLink to="/kegiatan">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Kegiatan</span>
            )}
            </NavLink>
            <NavLink to="/infaq">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Infaq</span>
            )}
            </NavLink>
            <NavLink to="/tentang">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Tentang MPD</span>
            )}
            </NavLink>
          </div>

          {/*===============LOGIN===============*/}
          <div className="bg-[#179B5A] px-5 py-2 rounded-full">
            <NavLink to="/login">
              Masuk
            </NavLink>
          </div>

        </div>
      </nav>
    </header>
  )
}