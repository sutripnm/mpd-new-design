import Navbar from "../Navbar";
import mpdlogo2 from "../../assets/mpd-logo2.png"

function HeaderBooking() {
  return (
    <main>
      <Navbar />

      <section className="">
        <div className="bg-[#179B5A] h-50 text-white flex items-center justify-center gap-3">
          
          <div>
            <img 
              className="h-30 w-30"
              src={mpdlogo2} 
              alt="mpd logo" />
          </div>

          <div className="flex-col">
            <h2 className="text-2xl font-bold">Pemesanan Ruang Utama / Aula lt.2 MPD</h2>
            <p>Buat history dengan tempat yang penuh berkah</p>
          </div>

        </div>
      </section>
    </main>
  )
}

export default HeaderBooking;