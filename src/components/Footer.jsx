import "../styles/landing-page.css"

function Footer() {
  return (
    <footer>
      <div className="bg-[#179B5A] rounded-4xl h-50 mt-20 flex items-center justify-between px-5 text-white">
        <div className="">
          <h2 className="font-bold">Masjid Pangeran Diponegoro </h2>
            <p>SALURKAN INFAQ <br />
            Bank Syariah Indonesia <br />
            7211-00-12</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="social-footer">
            <p>IG</p>
          </div>
          <div className="social-footer">
            <p>Tiktok</p>
          </div>
          <div className="social-footer">
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;