import { useState } from "react";
import wakafData from "../../data/wakafData"
import WakafCard from "./WakafCard"

function WakafSection() {

  const [openWakafCardId, setOpenWakafCardId] = useState(null);
  const handleToggle = (id) => {
    if (openWakafCardId === id) {
      setOpenWakafCardId(null)
    } else {
      setOpenWakafCardId(id)
    }
  }
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center py-5 w-4/5 bg-black/10">
        <h2 className="flex text-2xl font-bold">
          Wakaf Unggulan
        </h2>
        <div className="flex">
          {wakafData.map((item) => (
            <div
              key={item.id}>
              <WakafCard
                wakaf={item}
                openWakaf={openWakafCardId === item.id}
                handleToggle={handleToggle}
              >
              </WakafCard>

            </div>
          ))
          }

        </div>
      </section>
    </main>
  )
}

export default WakafSection;