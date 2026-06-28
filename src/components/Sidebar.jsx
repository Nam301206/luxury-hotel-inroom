import { Link, useLocation } from "react-router-dom";

function Sidebar({ role }) {
  const location = useLocation();

  const tapvuMenu = [
    { name: "Trang chủ", path: "/" },
    { name: "Nhận xét của tôi", path: "/review" },
  ];

  const kythuatMenu = [
    { name: "Trang chủ", path: "/kythuat" },
    { name: "Trạng thái thiết bị", path: "/devices" },
    { name: "Sao lưu dữ liệu", path: "/backup" },
  ];

  const menu = role === "tapvu" ? tapvuMenu : kythuatMenu;
  const roleName = role === "tapvu" ? "Nhân viên tạp vụ" : "Nhân viên kỹ thuật";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">LH</div>
        <div>
          <h1>Luxury Hotel</h1>
          <p>Hệ thống nhân viên</p>
        </div>
      </div>

      <div className="role-card">
        <span>Vai trò hiện tại</span>
        <strong>{roleName}</strong>
      </div>

      <nav className="sidebar-nav" aria-label="Điều hướng chức năng">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "nav-item active" : "nav-item"}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
