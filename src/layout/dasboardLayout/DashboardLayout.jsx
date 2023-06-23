import Navbar from "components/Navbar";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet/>
        </div>
        <div className="drawer-side border-2 border-e-[#E8E9EB]">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-40 text-base-content">
            <div className="ml-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-[#0056D6] ring-offset-base-100 ring-offset-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU" />
                </div>
              </div>
              <h2>User Name</h2>
            </div>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
