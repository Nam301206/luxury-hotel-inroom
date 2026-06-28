import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>HỆ THỐNG NHÂN VIÊN TẠP VỤ</h1>

      <hr />

      <p>Xin chào nhân viên tạp vụ!</p>

      <button onClick={() => navigate("/reviews")}>
        Xem nhận xét của tôi
      </button>
    </div>
  );
}

export default Home;