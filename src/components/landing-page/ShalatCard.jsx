import logo from "../../assets/mpd-logo.png"

function ShalatCard() {
  return (
    <section>
      <div className="shalat-card flex bg-[#74C29D] mt-5 mx-auto max-w-5/10 rounded-4xl h-50 items-center">
        <div className="px-10 justify-items-center text-white">
          <img 
            className="w-20 mx-auto"
            src={logo} alt="" />
          <p>Masjid Pangeran Diponegoro <br /></p>
          <p>Semarang, 12 Oktober 2026 <br /></p>
          <p>30 Rabīʿ al-thānī 1448 H</p>
        </div>

        <div className="flex bg-[#179B5A] gap-4 items-center mx-auto rounded-4xl h-30 text-white px-10">
          <p className="border-r-1 pr-3">Subuh <br /><span>04.32</span></p>
          <p className="border-r-1 pr-3">Dhuhur <br /><span>04.32</span></p>
          <p className="border-r-1 pr-3">Azhar <br /><span>04.32</span></p>
          <p className="border-r-1 pr-3">Maghrib <br /><span>04.32</span></p>
          <p className="">Isya <br /><span>04.32</span></p>
        </div>

      </div>
    </section>
  )
}

export default ShalatCard;