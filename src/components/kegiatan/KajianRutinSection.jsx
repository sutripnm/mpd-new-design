import KajianRutinCard from "./KajianRutinCard";
import kajianDataDummy from "../../data/DataKajian";

function KajianRutinSection() {

  return (
    <div className="flex flex-col items-center justify-center">
      {kajianDataDummy.map((item) => (
        <div className="border-6 border-double border-[#74C29D] rounded-4xl mb-5 w-[320px] h-[250px]" >
          <KajianRutinCard 
            key={item.id}
            kajian={item}
            >
          </KajianRutinCard>
        </div>
      ))
      }
    </div>
  )
}

export default KajianRutinSection;