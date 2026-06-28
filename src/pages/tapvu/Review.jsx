import EmployeeLayout from "../../Layouts/EmployeeLayout";
import tapvuReviews from "../../data/tapvuData";

function Review() {
  return (
    <EmployeeLayout role="tapvu" title="Nhận xét của tôi">
      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Danh sách nhận xét</h3>
            <p>Thông tin đánh giá từ khách hàng về các phòng đã phụ trách.</p>
          </div>
          <span className="status-badge success">{tapvuReviews.length} nhận xét</span>
        </div>

        <div className="review-list">
          {tapvuReviews.map((review) => (
            <article className="list-row" key={review.id}>
              <div className="list-row-header">
                <div>
                  <strong>Phòng {review.room}</strong>
                  <p>{review.customer}</p>
                </div>
                <span className={review.status === "Tốt" ? "status-badge success" : "status-badge warning"}>
                  {review.status}
                </span>
              </div>

              <div className="rating-line" aria-label={`${review.rating} trên 5 sao`}>
                {"★".repeat(review.rating)}
                <span>{"☆".repeat(5 - review.rating)}</span>
                <strong>{review.rating}/5</strong>
              </div>

              <p>{review.comment}</p>
              <small>Ngày đánh giá: {review.date}</small>
            </article>
          ))}
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default Review;
