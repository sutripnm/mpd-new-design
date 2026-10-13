import "../../styles/overview.css"
import overviewData from "../../data/DataOverview";

function OverviewPlace() {

  return (
    <main className="mt-10">
      <section className="flex flex-col xl:flex-row max-w-7/10 mx-auto gap-5">
        <div className="image-overview max-w-[610px] gap-3 flex flex-col">

          <div className="overflow-hidden aspect-[16/9] w-full rounded-4xl ">
            <img
              className="w-full h-full object-cover" 
              src={overviewData[0].image} 
              alt="Foto MPD Ruang Utama" />
          </div>
          
          <div className="flex gap-5 w-full">
            <div className="small-image-overview">
              <img
                className="w-full h-full object-cover rounded-2xl" 
                src={overviewData[0].image} 
                alt="Foto Ruang Utama tampak depan" />
            </div>
            <div className="small-image-overview">
              <img
                className="w-full h-full object-cover rounded-2xl" 
                src={overviewData[1].image} 
                alt="Foto ruang utama tampak samping" />
            </div>
            <div className="small-image-overview">
              <img 
                className="w-full h-full object-cover rounded-2xl"
                src={overviewData[2].image} 
                alt="foto ruang utama tampak samping kanan" />
            </div>
          </div>


        </div>

        <div className="desc-overview flex-1 min-w-0">
          <h3 className="font-bold">Filter Tempat</h3>
          <h4 className="text-[#179B5A] text-2xl">Fasilitas</h4>
          <p className="text-justify">Dengan luas area lebih dari 500m², 
              ruangan ini mampu menampung hingga 800 tamu 
              undangan. Dilengkapi dengan sistem pencahayaan 
              yang hangat dan akustik ruangan yang telah 
              disempurnakan untuk kenyamanan acara Anda. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Modi tempore ea recusandae nesciunt, earum laudantium 
              dolorem ab reiciendis quaerat ipsa, eum perspiciatis possimus 
              odio unde laborum eos quos illum soluta?
          </p>

          <button className="bg-[#179B5A] w-45 h-12 rounded-2xl flex-col place-items-end ">Booking Sekarang</button>
        </div>
      </section>
    </main>
  )
}

export default OverviewPlace;