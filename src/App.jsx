import { BrowserRouter, Route, Routes } from "react-router-dom";

import TechnicianHome from "./pages/technician/Home";
import Backup from "./pages/technician/Backup";
import DeviceStatus from "./pages/technician/DeviceStatus";
import RoomDetail from "./pages/technician/RoomDetail";
import Home from "./pages/housekeeping/Home";
import Reviews from "./pages/housekeeping/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/kythuat" element={<TechnicianHome />} />
        <Route path="/devices" element={<DeviceStatus />} />
        <Route path="/room-detail/:id" element={<RoomDetail />} />
        <Route path="/backup" element={<Backup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
