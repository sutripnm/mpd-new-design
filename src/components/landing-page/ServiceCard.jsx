import "../../styles/landing-page.css"

function ServiceCard() {
  return (
    <section className="mt-5 grid gap-10 mt-15 text-center">

      <h2 className="font-normal text-2xl">Layanan Kami 
        <br />Segala akses digital kebutuhan jamaah MPD</h2>

      <div className="container-service-card flex items-center justify-center flex-wrap gap-3 ">
        <div className="service-card">
          <p>Sewa Tempat</p>
        </div>
        <div className="service-card">
          <p>ZIWAF</p>
        </div>
        <div className="service-card">
          <p>Jumat Berkah</p>
        </div>
        <div className="service-card">
          <p>Kegiatan</p>
        </div>
        <div className="service-card">
          <p>Hubungi Kami</p>
        </div>
      </div>

    </section>
  )
}

export default ServiceCard;