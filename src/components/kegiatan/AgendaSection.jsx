import AgendaCard from "./AgendaCard";
import agendaDataDummy from "../../data/DataAgenda";

function AgendaSection() {

  return (
    <section className="flex flex-col items-center justify-start gap-5 bg-bg-1 h-full">
      <h2 className="bg-primary w-50 h-12 flex justify-center items-center rounded-xl text-white font-bold mt-5">Agenda Mendatang</h2>
      <div className="bg-bg-section h-22 w-full max-w-100 text-center rounded-sm">
        <p className="italic px-2 py-2">"Barang siapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga."
            — (HR. Muslim)</p>
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        {agendaDataDummy.map((item) => (
          <div
            key={item.id} 
            className="border-6 border-double border-secondary rounded-4xl mb-5 " >
        
            <AgendaCard 
              agenda={item}
              >
            </AgendaCard>
          </div>
        ))
        }
    </div>

    </section>

  )
}

export default AgendaSection;