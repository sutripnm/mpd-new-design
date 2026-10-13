import Navbar from "../Navbar";

function HeaderBooking() {
  return (
    <main>
      <Navbar />

      <section className="">
        <div className="bg-[#179B5A] h-50 text-white flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Pemesanan Ruang Utama / Aula lt.2 MPD</h2>
          <p>Buat history dengan tempat yang penuh berkah</p>
        </div>
      </section>
    </main>
  )
}

export default HeaderBooking;