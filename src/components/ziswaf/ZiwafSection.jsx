import ZiswafCard from "./ZiswafCard";
import dataZiswaf from "../../data/dataZiswaf";
import { useState } from "react";

function ZiswafSection() {
  const [openCardId, setOpenCardId] = useState(null);
  const onToggle = (id) => {
    if (openCardId === id) {
      setOpenCardId(null)
    } else {
      setOpenCardId(id)
    }

  }

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center my-5 gap-6 py-5 w-4/5">
        <h2 className="flex text-2xl font-bold text-text-soft">
          Apa Itu ZISWAF ?
        </h2>
        <div className="flex flex-col gap-5">
          {dataZiswaf.map((item) => (
            <div className="flex flex-col items-center gap-5">              
                <ZiswafCard 
                  key={item.id}
                  ziswaf={item}
                  isOpen={openCardId === item.id}
                  onToggle={onToggle}
                  >
                </ZiswafCard>
            </div>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default ZiswafSection;