function KajianRutinCard({ kajian }) {

  return (
    <article className="relative flex flex-col items-center justify-center px-3 py-3 mb-5">

      <div className="rounded-full w-[80px] h-[80px] overflow-hidden">
        <img className="object-cover w-full h-full"
          src={kajian.gambar} 
          alt="Foto Ustadz" 
          />
      </div>
      <h3 className="text-lg font-bold">
        {kajian.judul}
      </h3>
      <h4 className="font-bold text-sm text-[#179B5A]  ">
        {kajian.ustadz}
      </h4>
      <div className="flex border-2 border-double border-[#74C29D] rounded-2xl items-center justify-center mt-2 px-2 py-2">
        <p className="bg-[#179B5A] rounded-xl w-15 h-9 flex items-center justify-center text-white font-bold">
          {kajian.hari}
        </p>
        <div className="px-2 py-2 rounded-r-2xl overflow-hidden">
          <p className="text-[14px]">
            {kajian.waktu}
          </p>
          <p className="text-[13px]">
            {kajian.tempat}
          </p>
        </div>

      </div>

  

    </article>
  )
}

export default KajianRutinCard;