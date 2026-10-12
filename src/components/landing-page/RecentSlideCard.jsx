import dummySlides from "../../data/DataSlide";
import { useState, useEffect } from "react";

function RecentSlideCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const activeSlide = dummySlides[currentIndex]
      useEffect(() => {
        const timer = setInterval(() => { 
          setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % dummySlides.length;
          });
        }, 5000)
          return () => clearInterval(timer);
      }, [])

  return (
    <section>
      <div className="slide-card w-4/5 mx-auto mt-5 rounded-4xl overflow-hidden aspect-[21/9]">
        <img
          className="slide-card-image w-full h-full object-cover" 
          src={activeSlide.image} 
          alt="Foto MPD" />
      </div>

    </section>
  )
}

export default RecentSlideCard;