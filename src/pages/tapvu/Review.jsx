import { useNavigate } from "react-router-dom";
import reviews from "../../data/tapvuData";

function Reviews() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>NHẬN XÉT CỦA TÔI</h2>

      <button onClick={() => navigate("/")}>Quay lại</button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Phòng</th>
            <th>Số sao</th>
            <th>Nhận xét</th>
            <th>Ngày</th>
          </tr>
        </thead>

        <tbody>
          {reviews.map((review) => (
            <tr key={review.id}>
              <td>{review.room}</td>
              <td>{review.star}</td>
              <td>{review.content}</td>
              <td>{review.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reviews;