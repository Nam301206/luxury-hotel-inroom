import { useNavigate, useParams } from "react-router-dom";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import devices from "../../data/kythuatData";

function RoomDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const device = devices.find((item) => item.id === Number(id));

  if (!device) {
    return (
      <EmployeeLayout role="kythuat" title="Chi tiết phòng">
        <section className="panel">
          <h3>Không tìm thấy dữ liệu phòng</h3>
          <p>Vui lòng quay lại danh sách thiết bị để chọn lại.</p>
          <button className="card-btn primary" onClick={() => navigate("/devices")}>
            Quay lại danh sách
          </button>
        </section>
      </EmployeeLayout>
    );
  }

  return (
    <EmployeeLayout role="kythuat" title={`Chi tiết phòng ${device.room}`}>
      <section className="panel">
        <div className="panel-head">
          <div>
            <span className={device.status === "Hoạt động" ? "status-badge success" : "status-badge error"}>
              {device.severity}
            </span>
            <h3>Phòng {device.room}</h3>
            <p>Thông tin chi tiết thiết bị và tình trạng hiện tại.</p>
          </div>
          <button className="card-btn" onClick={() => navigate("/devices")}>
            Quay lại
          </button>
        </div>

        <div className="detail-grid">
          <article className="detail-item">
            <span>Thiết bị</span>
            <strong>{device.device}</strong>
          </article>
          <article className="detail-item">
            <span>Trạng thái</span>
            <strong>{device.status}</strong>
          </article>
          <article className="detail-item">
            <span>Kiểm tra gần nhất</span>
            <strong>{device.lastCheck}</strong>
          </article>
        </div>

        <div className="note-box">
          <span>Ghi chú kỹ thuật</span>
          <p>{device.note}</p>
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default RoomDetail;
