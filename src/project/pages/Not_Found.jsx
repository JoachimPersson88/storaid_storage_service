import { Link } from "react-router-dom";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";

export default function Not_Found() {
  return (
    <>
    <section className="not_found">
      <div className="not_found_area">

        <h5>Oops!</h5>

        <h1>Page Not Found</h1>

        <p className="body-text">
          Sorry, the page you are looking for does not exist. It may have been
          moved, removed altogether or is temporarily unavailable.
        </p>

        <Link to="/" className="btn-home">Back To Home</Link>

      </div>
    </section>
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
