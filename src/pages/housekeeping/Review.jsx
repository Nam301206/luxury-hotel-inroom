import { useEffect, useState } from "react";
import EmployeeLayout from "../../layouts/EmployeeLayout";
import { getReviews } from "../../services/reviewService";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getReviews()
      .then(setReviews)
      .catch(() => setError("Khong ket noi duoc backend. Hay chay npm run server."));
  }, []);

  return (
    <EmployeeLayout role="tapvu" title="Nhan xet cua toi">
      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Danh sach nhan xet</h3>
            <p>Thong tin danh gia tu khach hang ve cac phong da phu trach.</p>
          </div>
          <span className="status-badge success">{reviews.length} nhan xet</span>
        </div>

        {error && <p className="result-message">{error}</p>}

        <div className="review-list">
          {reviews.map((review) => (
            <article className="list-row" key={review.id}>
              <div className="list-row-header">
                <div>
                  <strong>Phong {review.room}</strong>
                  <p>{review.customer}</p>
                </div>
                <span className={review.status === "Tot" ? "status-badge success" : "status-badge warning"}>
                  {review.status}
                </span>
              </div>

              <div className="rating-line" aria-label={`${review.rating} tren 5 sao`}>
                {"*".repeat(review.rating)}
                <span>{"-".repeat(5 - review.rating)}</span>
                <strong>{review.rating}/5</strong>
              </div>

              <p>{review.comment}</p>
              <small>Ngay danh gia: {review.date}</small>
            </article>
          ))}
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default Review;
