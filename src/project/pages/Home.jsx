import Hero from "../components/Hero";
import About_Us from "../components/About_Us";
import Brands from "../components/Brands";
import Our_Services from "../components/Our_Services";
import Testimonials from "../components/Testimonials";
import Why_Choose_Us from "../components/Why_Choose_Us";
import Pricing_Plan from "../components/Pricing_Plan";
import Looking_For_Secure from "../components/Looking_For_Secure";
import Latest_Blog_and_News from "../components/Latest_Blog_and_News";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About_Us/>
      <Brands/>
      <Our_Services/>
      <Testimonials/>
      <Why_Choose_Us/>
      <Pricing_Plan/>
      <Looking_For_Secure/>
      <Latest_Blog_and_News/>
      <Subscribe_Our_Newsletter/>
      <Footer/>
    </main>
  );
}

