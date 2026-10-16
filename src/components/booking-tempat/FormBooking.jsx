import KalenderBooking from "./KalenderBooking";

function FormBooking() {
  return (
    <section className="flex flex-col items-center justify-center mt-25 gap-5">
      <div className="text-center">
        <h2 className="text-2xl font-medium">Form Booking</h2>
        <p>Silakan pilih tanggal di kalender dan lengkapi data diri Anda</p>
      </div>

        {/* ======================Left Card====================== */}
      <div className="flex flex-col xl:flex-row w-7/10 items-center justify-center gap-5">
        <div className="flex-1 min-h-[400px] min-w-[400px] calender-form rounded-2xl">
          <KalenderBooking />
        </div>

        {/* ======================Right Card====================== */}
        <form className="grid md:grid-cols-2 min-h-[400px] min-w-[400px] bg-secondary box-form rounded-2xl px-5 py-5 text-white">
          <h3 className="col-span-2 ml-5 mb-5 text-xl">Lengkapi Data Pemesan</h3>
          <div className="px-5 flex flex-col">
            <label htmlFor="Nama">Nama Lengkap</label>
            <input 
              className="w-[100%] rounded-sm bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="text" 
              id="Nama"
            />
          </div>
            <div className="px-5 flex flex-col gap-y-2">
            <label htmlFor="No.Wa">No. WhatsApp</label>
            <input 
              className="w-[100%] rounded-sm bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="tel" 
              id="No.Wa"
            />
          </div>
          <div className="px-5 flex flex-col col-span-2 ">
            <label htmlFor="Email">Alamat Email</label>
            <input 
              className="w-[100%] rounded-sm bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="email" 
              id="Email"
            />
          </div>
          <div className="px-5 flex flex-col col-span-2">
            <label htmlFor="Tanggal">Tanggal yang dipilih</label>
            <input 
              className="w-[100%] rounded-sm bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              type="" 
              id="Tanggal"
              placeholder="Silahkan pilih tanggal disamping"
            />
          </div>
          <div className="px-5 flex flex-col col-span-2">
            <label htmlFor="Catatan">Catatan Tambahan</label>
            <textarea 
              className="w-[100%] rounded-sm bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              htmlFor="Catatan"
              placeholder="Jenis acara, estimasi peserta, atau request khusus ..."
              id="Catatan"
              >

            </textarea>
          </div>
          <button className="bg-primary rounded-md col-span-2 py-2 mx-5 my-5">
            Ajukan Booking Sekarang
          </button>

        </form>
      </div>
    </section>
  )
}

export default FormBooking;