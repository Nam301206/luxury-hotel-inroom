import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function EmployeeLayout({ role, title, children }) {
  return (
    <div className="app-shell">

      <Sidebar role={role} />

      <main className="main-panel">

        <Topbar title={title} />

        {children}

      </main>

    </div>
  );
}

export default EmployeeLayout;