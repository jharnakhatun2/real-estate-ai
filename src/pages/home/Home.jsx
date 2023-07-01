import Contact from "components/Contact";
import Agents from "components/agents/Agents";
import Faq from "components/faq/Faq";
import Hero from "components/hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Agents />
      <Contact />
      <Faq />
    </main>
  );
}
