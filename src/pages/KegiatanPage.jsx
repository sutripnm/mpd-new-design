import Footer from "../components/Footer";
import AgendaSection from "../components/kegiatan/AgendaSection";
import HeaderKegiatanPage from "../components/kegiatan/HeaderKegiatanPage";
import KajianRutinSection from "../components/kegiatan/KajianRutinSection";

function KegiatanPage() {
  return (
    <div>
      <header>
        <HeaderKegiatanPage />
      </header>
      <main className="flex flex-col lg:flex-row gap-3 max-w-7/10 mx-auto mt-5">
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