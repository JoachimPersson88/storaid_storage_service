import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Why_Choose_Us from "../components/Why_Choose_Us";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";
import About_Us from "../components/About_Us";

export default function About_Page() {
  return (
    <>
    <section className="page">
      <div className="container">
        <h1>
         About Us 
        </h1>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      
    </section>
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
