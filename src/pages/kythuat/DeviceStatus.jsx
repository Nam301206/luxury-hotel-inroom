import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import devices from "../../data/kythuatData";

function DeviceStatus() {
  const navigate = useNavigate();

  return (
    <EmployeeLayout role="kythuat" title="Trạng thái thiết bị">
      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Giám sát thiết bị theo phòng</h3>
            <p>Chọn một phòng để xem chi tiết tình trạng và ghi chú lỗi.</p>
          </div>
          <button className="card-btn" onClick={() => navigate("/kythuat")}>
            Quay lại
          </button>
        </div>

        <div className="device-grid">
          {devices.map((device) => (
            <article className="device-card" key={device.id}>
              <span className={device.status === "Hoạt động" ? "status-badge success" : "status-badge error"}>
                {device.status}
              </span>
              <h3>Phòng {device.room}</h3>
              <p>
                <strong>Thiết bị:</strong> {device.device}
              </p>
              <p>
                <strong>Kiểm tra gần nhất:</strong> {device.lastCheck}
              </p>
              <button className="card-btn primary" onClick={() => navigate(`/room-detail/${device.id}`)}>
                Xem chi tiết
              </button>
            </article>
          ))}
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default DeviceStatus;
