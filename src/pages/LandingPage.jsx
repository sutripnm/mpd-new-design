import Footer from "../components/landing-page/Footer";
import RecentSlideCard from "../components/landing-page/RecentSlideCard";
import ServiceCard from "../components/landing-page/ServiceCard";
import ShalatCard from "../components/landing-page/ShalatCard";

function LandingPage() {
  return (
    <main>
      <div >
        <RecentSlideCard />
        <ShalatCard />
        <ServiceCard />
        <Footer />

      </div>

    </main>


  )
}

export default LandingPage;