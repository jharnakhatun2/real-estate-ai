// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const menuItems = (
//     <React.Fragment>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/all-properties">All Properties</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">Dashboard</Link>
//       </li>
//     </React.Fragment>
//   );

//   return (
//     <div className="navbar flex justify-between text-slate-600 text-2xl font-bold bg-100 hover:bg-base-100 ...">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <label tabIndex={0} className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </label>
//           <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//             {menuItems}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           Real estate
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal p-0">{menuItems}</ul>
//       </div>
//       <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </label>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <div>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </div>
  );
};

export default Header;
