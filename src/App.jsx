import { BrowserRouter, Route, Routes } from "react-router-dom";

import TechnicianHome from "./pages/kythuat/Home";
import Backup from "./pages/kythuat/Backup";
import DeviceStatus from "./pages/kythuat/DeviceStatus";
import RoomDetail from "./pages/kythuat/RoomDetail";
import Home from "./pages/tapvu/Home";
import Reviews from "./pages/tapvu/Review";

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
