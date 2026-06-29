import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { createBackup, getLatestBackup } from "../../services/backupService";

function Backup() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [lastBackup, setLastBackup] = useState("Chua sao luu");

  useEffect(() => {
    getLatestBackup()
      .then((data) => {
        if (data.lastBackup) {
          setLastBackup(new Date(data.lastBackup).toLocaleString("vi-VN"));
        }
      })
      .catch(() => setMessage("Khong ket noi duoc backend. Hay chay npm run server."));
  }, []);

  const handleBackup = async () => {
    setIsRunning(true);
    setMessage("Dang sao luu du lieu...");

    try {
      const result = await createBackup();
      setLastBackup(new Date(result.lastBackup).toLocaleString("vi-VN"));
      setMessage("Sao luu du lieu thanh cong.");
    } catch {
      setMessage("Backup that bai. Hay kiem tra backend.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <EmployeeLayout role="kythuat" title="Sao luu du lieu">
      <section className="panel backup-panel">
        <button className="card-btn back-btn" onClick={() => navigate("/kythuat")}>
          Quay lai
        </button>

        <span className="status-badge success">San sang</span>
        <h3>Sao luu du lieu he thong</h3>
        <p>Chuc nang danh cho nhan vien ky thuat khi can backup du lieu van hanh.</p>

        <div className="backup-info">
          <span>Lan sao luu gan nhat</span>
          <strong>{lastBackup}</strong>
        </div>

        <button className="card-btn primary" disabled={isRunning} onClick={handleBackup}>
          {isRunning ? "Dang xu ly..." : "Sao luu ngay"}
        </button>

        {message && <p className="result-message">{message}</p>}
      </section>
    </EmployeeLayout>
  );
}

export default Backup;
