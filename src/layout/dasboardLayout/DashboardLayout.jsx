// import Navbar from "components/navbar/Navbar";

// export default function DashboardLayout() {
//   return (
//     <section>
//       <Navbar />
//       <div className="drawer">
//         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content">
//           <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
//             Open drawer
//           </label>
//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 bg-base-100 text-base-content">
//             <li>
//               <a>Sidebar Item 1</a>
//             </li>
//             <li>
//               <a>Sidebar Item 2</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

import Navbar from "components/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdRealEstateAgent } from "react-icons/md";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border-2 border-e-[#E8E9EB]">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-56 text-base-content">
            <div className=" border-b-2 mt-4 mb-2">
              <div className="avatar ml-12">
                <div className="w-24 rounded-full ring ring-[#8879FB] ring-offset-base-100 ring-offset-2">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRdmz3LadjgP_7giopi8RU6TJQgE-9IZaYXSJYWHuFv3ty1vbrgMiiU6XqdhxXyFqJqU&usqp=CAU" />
                </div>
              </div>
              <h2 className="ml-12 mt-3 mb-3">User Name</h2>
            </div>
            <li>
              <Link to="/dashboard">
                <MdRealEstateAgent />
                Properties
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile">
                <BiSolidUserCircle />
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
