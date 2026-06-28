import { BrowserRouter, Routes, Route } from "react-router-dom";

// Tạp vụ
import Home from "./pages/tapvu/Home";
import Reviews from "./pages/tapvu/Review";

// Kỹ thuật
import TechnicianHome from "./pages/kythuat/Home";
import DeviceStatus from "./pages/kythuat/DeviceStatus";
import RoomDetail from "./pages/kythuat/RoomDetail";
import Backup from "./pages/kythuat/Backup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Tạp vụ */}
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Kỹ thuật */}
        <Route path="/kythuat" element={<TechnicianHome />} />
        <Route path="/devices" element={<DeviceStatus />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="/backup" element={<Backup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;