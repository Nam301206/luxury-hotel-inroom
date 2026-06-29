import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { getDevice } from "../../services/deviceService";

function RoomDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [device, setDevice] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getDevice(id)
      .then(setDevice)
      .catch(() => setError("Khong tim thay thiet bi hoac backend chua chay."));
  }, [id]);

  if (error) {
    return (
      <EmployeeLayout role="kythuat" title="Chi tiet phong">
        <section className="panel">
          <h3>Khong tim thay du lieu phong</h3>
          <p>{error}</p>
          <button className="card-btn primary" onClick={() => navigate("/devices")}>
            Quay lai danh sach
          </button>
        </section>
      </EmployeeLayout>
    );
  }

  if (!device) {
    return (
      <EmployeeLayout role="kythuat" title="Chi tiet phong">
        <section className="panel">
          <h3>Dang tai du lieu...</h3>
        </section>
      </EmployeeLayout>
    );
  }

  return (
    <EmployeeLayout role="kythuat" title={`Chi tiet phong ${device.room}`}>
      <section className="panel">
        <div className="panel-head">
          <div>
            <span className={device.status === "Hoat dong" ? "status-badge success" : "status-badge error"}>
              {device.severity}
            </span>
            <h3>Phong {device.room}</h3>
            <p>Thong tin chi tiet thiet bi va tinh trang hien tai.</p>
          </div>
          <button className="card-btn" onClick={() => navigate("/devices")}>
            Quay lai
          </button>
        </div>

        <div className="detail-grid">
          <article className="detail-item">
            <span>Thiet bi</span>
            <strong>{device.device}</strong>
          </article>
          <article className="detail-item">
            <span>Trang thai</span>
            <strong>{device.status}</strong>
          </article>
          <article className="detail-item">
            <span>Kiem tra gan nhat</span>
            <strong>{device.lastCheck}</strong>
          </article>
        </div>

        <div className="note-box">
          <span>Ghi chu ky thuat</span>
          <p>{device.note}</p>
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default RoomDetail;
