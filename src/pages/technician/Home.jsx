import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { getDevices } from "../../services/deviceService";

function Home() {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState("");
  const errorDevices = devices.filter((device) => device.status === "Loi");
  const okDevices = devices.length - errorDevices.length;

  useEffect(() => {
    getDevices()
      .then(setDevices)
      .catch(() => setError("Khong ket noi duoc backend. Hay chay npm run server."));
  }, []);

  return (
    <EmployeeLayout role="kythuat" title="Nhan vien Ky thuat">
      <section className="summary-grid">
        <article className="metric-card">
          <span>Thiet bi on dinh</span>
          <strong>{okDevices}</strong>
        </article>
        <article className="metric-card danger">
          <span>Thiet bi co loi</span>
          <strong>{errorDevices.length}</strong>
        </article>
        <article className="metric-card">
          <span>Tong phong theo doi</span>
          <strong>{devices.length}</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Canh bao ha tang</h3>
            <p>Theo doi phong co su co va mo chi tiet khi can xu ly.</p>
          </div>
          <button className="card-btn primary" onClick={() => navigate("/devices")}>
            Xem thiet bi
          </button>
        </div>

        {error && <p className="result-message">{error}</p>}

        <div className="review-list">
          {errorDevices.map((device) => (
            <article className="list-row" key={device.id}>
              <div className="list-row-header">
                <strong>Phong {device.room}</strong>
                <span className="status-badge error">{device.severity}</span>
              </div>
              <p>
                {device.device}: {device.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default Home;
