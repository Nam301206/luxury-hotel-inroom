import { Link, useLocation } from "react-router-dom";

function Sidebar({ role }) {
  const location = useLocation();

  const housekeepingMenu = [
    { name: "Trang chu", path: "/" },
    { name: "Nhan xet cua toi", path: "/review" },
  ];

  const technicianMenu = [
    { name: "Trang chu", path: "/kythuat" },
    { name: "Trang thai thiet bi", path: "/devices" },
    { name: "Sao luu du lieu", path: "/backup" },
  ];

  const menu = role === "tapvu" ? housekeepingMenu : technicianMenu;
  const roleName = role === "tapvu" ? "Nhan vien tap vu" : "Nhan vien ky thuat";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">LH</div>
        <div>
          <h1>Luxury Hotel</h1>
          <p>He thong nhan vien</p>
        </div>
      </div>

      <div className="role-card">
        <span>Vai tro hien tai</span>
        <strong>{roleName}</strong>
      </div>

      <nav className="sidebar-nav" aria-label="Dieu huong chuc nang">
        {menu.map((item) => (
          <Link key={item.path} to={item.path} className={location.pathname === item.path ? "nav-item active" : "nav-item"}>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
