import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../Layouts/EmployeeLayout";

function Backup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [lastBackup, setLastBackup] = useState("Chưa sao lưu");

  const handleBackup = () => {
    setIsRunning(true);
    setMessage("Đang sao lưu dữ liệu...");

    setTimeout(() => {
      const now = new Date().toLocaleString("vi-VN");
      setLastBackup(now);
      setMessage("Sao lưu dữ liệu thành công.");
      setIsRunning(false);
    }, 1200);
  };

  return (
    <EmployeeLayout role="kythuat" title="Sao lưu dữ liệu">
      <section className="panel backup-panel">
        <button className="card-btn back-btn" onClick={() => navigate("/kythuat")}>
          Quay lại
        </button>

        <span className="status-badge success">Sẵn sàng</span>
        <h3>Sao lưu dữ liệu hệ thống</h3>
        <p>Chức năng dành cho nhân viên kỹ thuật khi cần backup dữ liệu vận hành.</p>

        <div className="backup-info">
          <span>Lần sao lưu gần nhất</span>
          <strong>{lastBackup}</strong>
        </div>

        <button className="card-btn primary" disabled={isRunning} onClick={handleBackup}>
          {isRunning ? "Đang xử lý..." : "Sao lưu ngay"}
        </button>

        {message && <p className="result-message">{message}</p>}
      </section>
    </EmployeeLayout>
  );
}

export default Backup;
