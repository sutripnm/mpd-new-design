import mpdlogo2 from "../../assets/mpd-logo2.png"

function HeaderKegiatanPage() {
  return (
    <main>
      <section className="">
        <div className="bg-primary h-50 text-white flex flex-col lg:flex-row 
                        items-center justify-center gap-3
                        ">
          
          <div>
            <img 
              className="h-30 w-30"
              src={mpdlogo2} 
              alt="mpd logo" />
          </div>

          <div className="flex-col items-center text-xs lg:text-sm text-center lg:text-left">
            <h2 className="text-2xl font-bold">Agenda & Program</h2>
            <p>Ikuti Kajian dan agenda dari Masjid Pangeran Diponegoro</p>
          </div>

        </div>
      </section>
    </main>
  )
}

export default HeaderKegiatanPage;