import FormBooking from "../components/booking-tempat/FormBooking";
import HeaderBooking from "../components/booking-tempat/HeaderBooking";
import OverviewPlace from "../components/booking-tempat/OverviewPlace";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function BookingTempat() {
  return (
    <main>
      <Navbar />
      <HeaderBooking />
      <OverviewPlace />
      <FormBooking />
      <Footer />
    </main>
  )
}

export default BookingTempat;