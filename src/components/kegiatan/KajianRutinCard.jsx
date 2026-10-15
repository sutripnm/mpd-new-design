function KajianRutinCard({ kajian }) {

  return (
    <article className="flex flex-col items-center justify-center px-3 py-3 mb-5">
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
      <p className="text-[14px] mt-5">
        {kajian.hari}, {kajian.waktu}
      </p>
      <p className="text[13px]">
        {kajian.tempat}
      </p>
  

    </article>
  )
}

export default KajianRutinCard;