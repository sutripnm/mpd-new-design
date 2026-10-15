import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingTempat from "./pages/BookingTempat"
import LandingPage from "./pages/LandingPage"
import KegiatanPage from "./pages/KegiatanPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="booking-tempat" element={<BookingTempat />} />
        <Route path="kegiatan" element={<KegiatanPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

