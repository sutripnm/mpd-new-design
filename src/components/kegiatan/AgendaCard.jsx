function AgendaCard({ agenda }) {

  return (
    <article className="flex items-center justify-center px-3 py-3 mb-5 gap-5">

      <div className="rounded-2xl w-[250px] h-[180px] overflow-hidden">
        <img className="object-cover w-full h-full"
          src={agenda.gambar} 
          alt="Foto Ustadz" 
          />
      </div>

      <div>
        <h3 className="text-lg font-bold">
          {agenda.judul}
        </h3>
        <h4 className="font-bold text-sm text-[#179B5A]  ">
          Bersama Khotib : {agenda.khotib}
        </h4>
        <h4 className="font-bold text-sm text-[#179B5A]  ">
          Imam : {agenda.imam}
        </h4>
          <div className="flex border-2 border-double border-[#74C29D] rounded-2xl items-center justify-center mt-2 px-2 py-2">
            <p className="bg-[#179B5A] rounded-xl w-15 h-9 flex items-center justify-center text-white font-bold">
              {agenda.hari}
            </p>
            <div className="px-2 py-2 rounded-r-2xl overflow-hidden">
              <p className="text-[14px]">
                {agenda.waktu}
              </p>
              <p className="text-[13px]">
                {agenda.tempat}
              </p>
            </div>
        </div>
      </div>
    </article>
  )
}

export default AgendaCard;