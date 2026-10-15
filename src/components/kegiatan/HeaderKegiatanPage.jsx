import Navbar from "../Navbar";

function HeaderKegiatanPage() {
  return (
    <main>
      <Navbar />

      <section className="">
        <div className="bg-[#179B5A] h-50 text-white flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold">Agenda & Program</h2>
          <p>Ikuti Kajian dan agenda dari Masjid Pangeran Diponegoro</p>
        </div>
      </section>
    </main>
  )
}

export default HeaderKegiatanPage;