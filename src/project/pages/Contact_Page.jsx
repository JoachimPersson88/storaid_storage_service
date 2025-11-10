import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";

export default function Contact_Page() {
  return (
    <>
    <section className="page">
      <div className="container">
        <h1>
         Contact Us 
        </h1>
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      
    </section>
    Get in Touch
    Find Us On
    FAQ
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
