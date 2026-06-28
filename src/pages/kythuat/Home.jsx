import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import devices from "../../data/kythuatData";

function Home() {
  const navigate = useNavigate();
  const errorDevices = devices.filter((device) => device.status === "Lỗi");
  const okDevices = devices.length - errorDevices.length;

  return (
    <EmployeeLayout role="kythuat" title="Nhân viên Kỹ thuật">
      <section className="summary-grid">
        <article className="metric-card">
          <span>Thiết bị ổn định</span>
          <strong>{okDevices}</strong>
        </article>
        <article className="metric-card danger">
          <span>Thiết bị có lỗi</span>
          <strong>{errorDevices.length}</strong>
        </article>
        <article className="metric-card">
          <span>Tổng phòng theo dõi</span>
          <strong>{devices.length}</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Cảnh báo hạ tầng</h3>
            <p>Theo dõi phòng có sự cố và mở chi tiết khi cần xử lý.</p>
          </div>
          <button className="card-btn primary" onClick={() => navigate("/devices")}>
            Xem thiết bị
          </button>
        </div>

        <div className="review-list">
          {errorDevices.map((device) => (
            <article className="list-row" key={device.id}>
              <div className="list-row-header">
                <strong>Phòng {device.room}</strong>
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
