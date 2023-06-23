import Agents from "components/agents/Agents";
import Blog from "components/blog/Blog";
import Contact from "components/contact/Contact";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";

export default function Home() {
  return (
    <main>
      <Agents />
      <Blog />
      <Contact />
      <DashboardLayout />
    </main>
  );
}
