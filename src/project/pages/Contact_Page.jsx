import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";
import Get_in_Touch from "../components/Get_in_Touch";
import FAQ from "../components/FAQ";
import Find_Us_On from "../components/Find_Us_On";

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
      <Get_in_Touch />
      <Find_Us_On />
      <FAQ />
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
