import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Why_Choose_Us from "../components/Why_Choose_Us";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";
import About_Us from "../components/About_Us";

export default function About_Page() {
  return (
    <>
      {/* Återanvända sektioner */}
      <About_Us />
      <Brands />
      <Testimonials />
      <Why_Choose_Us />
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
