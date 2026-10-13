import Navbar from "../Navbar";
import "../../styles/overview.css"

function OverviewPlace() {
  return (
    <main className="mt-10">
      <section className="flex max-w-7/10 mx-auto gap-3">
        <div className="image-overview grid gap-3">
          <div className="w-130 h-85 bg-amber-500 rounded-4xl">
            <img src="" alt="" />
          </div>
          <div className="flex gap-2">
            <div className="small-image-overview">
              <img src="" alt="" />
            </div>
            <div className="small-image-overview">
              <img src="" alt="" />
            </div>
            <div className="small-image-overview">
              <img src="" alt="" />
            </div>
          </div>


        </div>

        <div className="desc-overview">
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

          <button className="bg-[#179B5A] w-45 h-12 rounded-2xl mt-22 ">Booking Sekarang</button>
        </div>
      </section>
    </main>
  )
}

export default OverviewPlace;