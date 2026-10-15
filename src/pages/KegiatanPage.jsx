import Footer from "../components/Footer";
import AgendaSection from "../components/kegiatan/AgendaSection";
import HeaderKegiatanPage from "../components/kegiatan/HeaderKegiatanPage";
import KajianRutinSection from "../components/kegiatan/KajianRutinSection";
import Navbar from "../components/Navbar";

function KegiatanPage() {
  return (
    <div className="">
      <Navbar />
      <header>
        <HeaderKegiatanPage />
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-9/10 mx-auto mt-5">
        <div className="flex-1 min-w-0">
          <KajianRutinSection />
        </div>
        <div className="flex-1 min-w-0">
          <AgendaSection />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default KegiatanPage;