function Topbar({ title }) {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">HỆ THỐNG QUẢN LÝ KHÁCH SẠN</p>
        <h2>{title}</h2>
      </div>
      <div className="topbar-actions">
        <button className="action-btn">Thông báo</button>
        <button className="action-btn primary">Làm mới</button>
      </div>
    </header>
  );
}

export default Topbar;
