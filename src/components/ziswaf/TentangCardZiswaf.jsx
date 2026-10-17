import mpdlogo2 from '../../assets/mpd-logo2.png'

function TentangCardZiswaf() {

  return (
    <main className=''>
      <section className='flex flex-col lg:flex-row items-center bg-primary w-4/5 rounded-b-3xl mx-auto'>
        <div className="w-full lg:w-2/5 flex items-center justify-center">
          <img 
            className='object-cover h-full w-full max-w-80' 
            src={mpdlogo2} alt="" />
        </div>
        
        <div className='w-full lg:w-3/5 text-white grid gap-3 max-w-170 px-5 py-5'>
          <h3 className='text-3xl font-extrabold'>
            Tentang ZISWAF Center MPD
          </h3>
          <h2 className='bg-black/50 pl-2 py-2'>
            Kelola Harta dengan Berkah di Masjid Pangeran Diponegoro
          </h2>
          <p className='text-justify'>
              Masjid Pangeran Diponegoro (MPD) tidak hanya berdiri sebagai rumah ibadah 
              dan pusat peradaban, tetapi juga hadir sebagai pusat pemberdayaan ekonomi 
              dan kebaikan umat.
              
          <p className='text-justify mt-5'>
              Melalui Ziswaf Center MPD (Pusat Layanan Zakat, Infaq, 
              Sedekah, dan Wakaf), kami berkomitmen untuk mengelola setiap sen amanah 
              dana Anda secara transparan, akuntabel, dan tepat sasaran demi 
              menghadirkan manfaat nyata bagi jamaah serta masyarakat luas.
          </p>
          </p>
        </div>
      </section>

    </main>
  )
}

export default TentangCardZiswaf;