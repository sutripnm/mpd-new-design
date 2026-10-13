import Footer from "../components/Footer";
import RecentSlideCard from "../components/landing-page/RecentSlideCard";
import ServiceCard from "../components/landing-page/ServiceCard";
import ShalatCard from "../components/landing-page/ShalatCard";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <main>
      <div >
        <Navbar />
        <RecentSlideCard />
        <ShalatCard />
        <ServiceCard />
        <Footer />

      </div>

    </main>


  )
}

export default LandingPage;