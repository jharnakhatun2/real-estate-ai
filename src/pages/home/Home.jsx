import Clients from "components/clients/Clients";
import Features from "components/features/Features";
import Hero from "components/hero/Hero";
import Testimonial from "components/testimonial/Testimonial";
import UseGuide from "components/useGuide/UseGuide";
import WhyShoud from "components/whyshould/WhyShoud";
import useTitle from "hook/useTitle";

export default function Home() {
  useTitle("Home");
  return (
    <main>
      <Hero/>
      <WhyShoud/>
      <Features/>
      <UseGuide/>
     <Testimonial/>
     <Clients/>
    </main>
  );
}
