import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../Layouts/EmployeeLayout";
import tapvuReviews from "../../data/tapvuData";

function Home() {
  const navigate = useNavigate();
  const needFollowUp = tapvuReviews.filter((review) => review.status !== "Tốt").length;

  return (
    <EmployeeLayout role="tapvu" title="Nhân viên Tạp vụ">
      <section className="summary-grid">
        <article className="metric-card">
          <span>Nhận xét mới</span>
          <strong>{tapvuReviews.length}</strong>
        </article>
        <article className="metric-card">
          <span>Điểm trung bình</span>
          <strong>4.7/5</strong>
        </article>
        <article className="metric-card warning">
          <span>Cần theo dõi</span>
          <strong>{needFollowUp}</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <h3>Công việc hôm nay</h3>
            <p>Xem nhanh các phản hồi liên quan đến phòng đã dọn.</p>
          </div>
          <button className="card-btn primary" onClick={() => navigate("/review")}>
            Xem nhận xét
          </button>
        </div>

        <div className="task-list">
          <div className="task-item done">
            <strong>Kiểm tra đánh giá mới</strong>
            <p>Theo dõi phản hồi khách hàng sau khi trả phòng.</p>
          </div>
          <div className="task-item">
            <strong>Bổ sung vật dụng phòng 203</strong>
            <p>Khách phản ánh bổ sung khăn hơi chậm.</p>
          </div>
          <div className="task-item">
            <strong>Báo quản lý khi có sự cố</strong>
            <p>Các phản hồi nghiêm trọng cần được chuyển xử lý ngay.</p>
          </div>
        </div>
      </section>
    </EmployeeLayout>
  );
}

export default Home;
