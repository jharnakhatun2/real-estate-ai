import DashboardFooter from "components/dashboard/dashboardFooter/dashboardFooter";
import Navbar from "components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Outlet />
          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}

