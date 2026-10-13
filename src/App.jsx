import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingTempat from "./pages/BookingTempat"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="booking-tempat" element={<BookingTempat />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

