import Hero from "../components/Hero";
import About_Us from "../components/About_Us";
import Brands from "../components/Brands";
import Our_Services from "../components/Our_Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About_Us />
      <Brands />
      <Our_Services />
      <Testimonials />
      <p>WHY CHOOSE US</p>
      <p>PRICING PLAN</p>
      <p>LOOKING FOR SECURE</p>
      <p>LATEST BLOG AND NEWS</p>
      <p>SUBSCRIBE OUR NEWSLETTER</p>
      <p>FOOTER</p>
    </main>
  );
}
