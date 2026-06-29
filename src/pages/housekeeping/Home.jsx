import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { getReviews } from "../../services/reviewService";

function Home() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getReviews()
      .then(setReviews)
      .catch(() => setError("Khong ket noi duoc backend. Hay chay npm run server."));
  }, []);

  const needFollowUp = reviews.filter((review) => review.status !== "Tot").length;

  return (
    <EmployeeLayout role="tapvu" title="Nhan vien Tap vu">
      <section className="summary-grid">
        <article className="metric-card">
          <span>Nhan xet moi</span>
          <strong>{reviews.length}</strong>
        </article>
        <article className="metric-card">
          <span>Diem trung binh</span>
          <strong>4.7/5</strong>
        </article>
        <article className="metric-card warning">
          <span>Can theo doi</span>
          <strong>{needFollowUp}</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Cong viec hom nay</h3>
            <p>Xem nhanh cac phan hoi lien quan den phong da don.</p>
          </div>
          <button className="card-btn primary" onClick={() => navigate("/review")}>
            Xem nhan xet
          </button>
        </div>

        {error && <p className="result-message">{error}</p>}

        <div className="task-list">
          <div className="task-item done">
            <strong>Kiem tra danh gia moi</strong>
            <p>Theo doi phan hoi khach hang sau khi tra phong.</p>
          </div>
          <div className="task-item">
            <strong>Bo sung vat dung phong 203</strong>
            <p>Khach phan anh bo sung khan hoi cham.</p>
          </div>
          <div className="task-item">
            <strong>Bao quan ly khi co su co</strong>
            <p>Cac phan hoi nghiem trong can duoc chuyen xu ly ngay.</p>
          </div>
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default Home;
