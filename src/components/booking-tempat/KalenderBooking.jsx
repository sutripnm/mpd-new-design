import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../../styles/calender.css'; // Mengimpor styling khusus kalender

function KalenderBooking() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <Calendar 
        value={new Date()}
        calendarType="iso8601"
      />
    </div>
  );
}

export default KalenderBooking;