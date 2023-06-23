import Agents from "components/agents/Agents";
import Contact from "components/contact/Contact";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";

export default function Home() {
  return (
    <main>
      <Agents />
      <Contact />
      <DashboardLayout />
    </main>
  );
}
