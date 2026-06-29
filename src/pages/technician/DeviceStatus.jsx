import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { getDevices } from "../../services/deviceService";

function DeviceStatus() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getDevices()
      .then(setDevices)
      .catch(() => setError("Khong ket noi duoc backend. Hay chay npm run server."));
  }, []);

  return (
    <EmployeeLayout role="kythuat" title="Trang thai thiet bi">
      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Giam sat thiet bi theo phong</h3>
            <p>Chon mot phong de xem chi tiet tinh trang va ghi chu loi.</p>
          </div>
          <button className="card-btn" onClick={() => navigate("/kythuat")}>
            Quay lai
          </button>
        </div>

        {error && <p className="result-message">{error}</p>}

        <div className="device-grid">
          {devices.map((device) => (
            <article className="device-card" key={device.id}>
              <span className={device.status === "Hoat dong" ? "status-badge success" : "status-badge error"}>
                {device.status}
              </span>
              <h3>Phong {device.room}</h3>
              <p>
                <strong>Thiet bi:</strong> {device.device}
              </p>
              <p>
                <strong>Kiem tra gan nhat:</strong> {device.lastCheck}
              </p>
              <button className="card-btn primary" onClick={() => navigate(`/room-detail/${device.id}`)}>
                Xem chi tiet
              </button>
            </article>
          ))}
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default DeviceStatus;
