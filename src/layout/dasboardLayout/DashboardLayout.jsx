import Navbar from "components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <section>
      <Navbar />
      <Outlet/>
    </section>
  )
}