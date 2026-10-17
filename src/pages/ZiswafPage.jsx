import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeaderZiswaf from "../components/ziswaf/HeaderZiswaf";
import TentangCardZiswaf from "../components/ziswaf/TentangCardZiswaf";
import ZiswafSection from "../components/ziswaf/ZiwafSection";

function ZiswafPage() {

  return (
    <section>
      <Navbar />
      <HeaderZiswaf />
      <TentangCardZiswaf />
      <ZiswafSection />

      <Footer />

    </section>
  )
}

export default ZiswafPage;