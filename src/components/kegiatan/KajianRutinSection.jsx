import KajianRutinCard from "./KajianRutinCard";
import kajianDataDummy from "../../data/DataKajian";

function KajianRutinSection() {

  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-[#ebf9f2] h-full">
      <h2 className="bg-[#179B5A] w-50 h-12 flex justify-center items-center rounded-xl text-white font-bold mt-5">Kajian Rutin Harian</h2>
      <div className="bg-[#bef2da] h-22 w-100 text-center rounded-sm">
        <p className="italic px-2 py-2">"Barang siapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
            — (HR. Muslim)</p>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {kajianDataDummy.map((item) => (
          <div
            key={item.id} 
            className="border-6 border-double border-[#74C29D] rounded-4xl mb-5 w-[280px] h-[250px]" >
        
            <KajianRutinCard 
              kajian={item}
              >
            </KajianRutinCard>
          </div>
        ))
        }
    </div>

    </section>

  )
}

export default KajianRutinSection;