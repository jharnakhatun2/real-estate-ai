import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function Dashboard() {
  return (
    <section className="container mx-auto">
      <Navbar />
      <Outlet />
      <Footer/>
    </section>
  )
}