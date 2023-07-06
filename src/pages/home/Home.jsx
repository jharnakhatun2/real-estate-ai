import Agents from "components/agents/Agents";
import Blog from "components/blog/Blog";
import Contact from "components/contact/Contact";
import Faq from "components/faq/Faq";
import Review from "components/review/Review";
import DashboardLayout from "layout/dasboardLayout/DashboardLayout";

export default function Home() {
  return (
    <main>
      <Agents />
      <Review />
      <Blog />
      <Contact />
      <Faq />
      <DashboardLayout />
    </main>
  );
}
