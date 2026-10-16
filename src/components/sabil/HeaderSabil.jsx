import mpd1 from "../../assets/mpd-1.jpg"

function HeaderSabil() {
  return (
    <main>
      <section className="">
        <div className="relative h-full min-h-100 text-white flex flex-col lg:flex-row items-center justify-center gap-3">
          
          <div className="">
            <img 
              className="absolute inset-0 w-full h-full object-cover"
              src={mpd1} 
              alt="mpd logo" />
              <div className="absolute inset-0 bg-black/50">

              </div>
          </div>

          <div className="flex flex-col items-center text-xs lg:text-sm text-center lg:text-left relative z-10 gap-3">
            <h2 className="text-xl lg:text-6xl font-bold">SABIL CENTER MPD</h2>
            <p className="italic text-lg">Sedekah, Amal, Berbagi, Infaq, & Layanan Zakat/Wakaf</p>
          </div>

        </div>
      </section>
    </main>
  )
}

export default HeaderSabil;