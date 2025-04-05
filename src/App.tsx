import NavBar from '@/components/NavBar/NavBar';
import BookingPage from '@/pages/BookingPage';
import ClientPage from '@/pages/ClientPage';
import HotelPage from '@/pages/HotelPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HotelPage />}></Route>
        <Route path="/client" element={<ClientPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
