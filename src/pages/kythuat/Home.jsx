import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>HỆ THỐNG NHÂN VIÊN KỸ THUẬT</h1>

      <hr />

      <button onClick={() => navigate("/devices")}>
        Xem trạng thái thiết bị
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/room-detail")}>
        Xem chi tiết phòng
      </button>

      <br />
      <br />

      <button onClick={() => navigate("/backup")}>
        Backup dữ liệu
      </button>
    </div>
  );
}

export default Home;