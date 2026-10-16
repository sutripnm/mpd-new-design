import logo from "../../assets/mpd-logo.png"

function ShalatCard() {
  return (
    <section>
      <div className="shalat-card flex flex-col xl:flex-row bg-secondary mt-5 mx-auto lg:w-[50%] sm:w-[60%] rounded-4xl items-center px-5 py-5">
        <div className="px-10 justify-items-center text-white px-5 py-5">
          <img 
            className="w-20 mx-auto"
            src={logo} alt="" />
          <p>Masjid Pangeran Diponegoro <br /></p>
          <p>Semarang, 12 Oktober 2026 <br /></p>
          <p>30 Rabīʿ al-thānī 1448 H</p>
        </div>

        <div className="flex flex-col xl:flex-row bg-primary gap-4 items-center mx-auto rounded-4xl text-white px-10 py-5">
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