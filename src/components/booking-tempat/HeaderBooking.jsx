import mpdlogo2 from "../../assets/mpd-logo2.png"

function HeaderBooking() {
  return (
    <main>
      <section className="">
        <div className="bg-primary h-full min-h-50 text-white flex flex-col lg:flex-row items-center justify-center gap-3">
          
          <div className="">
            <img 
              className="h-30 w-30"
              src={mpdlogo2} 
              alt="mpd logo" />
          </div>

          <div className="flex flex-col items-center text-xs lg:text-sm text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold">Pemesanan Ruang Utama / Aula lt.2 MPD</h2>
            <p>Buat history dengan tempat yang penuh berkah</p>
          </div>

        </div>
      </section>
    </main>
  )
}

export default HeaderBooking;