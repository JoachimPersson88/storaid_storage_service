import Brands from "../components/Brands";
import Testimonials from "../components/Testimonials";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";
import Our_Services from "../components/Our_Services";
import Looking_For_Secure from "../components/Looking_For_Secure";

export default function Services_Page() {
  return (
    <>
    <section className="page">
      <div className="container">
        <h1>
         Services 
        </h1>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      
    </section>
      <Our_Services />
      <Testimonials />
      FAQ
      <Looking_For_Secure />
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
