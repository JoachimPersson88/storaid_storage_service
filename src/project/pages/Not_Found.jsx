import { Link } from "react-router-dom";
import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";

export default function Not_Found() {
  return (
    <>
    <section className="page">
      <div className="not_found_area">
        <p className="oops body-text-3">Oops!</p>

        <h1 className="not_found_title">Page Not Found</h1>

        <p className="body-text not_found_msg">
          Sorry, the page you are looking for does not exist. It may have been
          moved, removed altogether or is temporarily unavailable.
        </p>

        <Link to="/" className="btn-back-home body-text-2">
          Back To Home
        </Link>
      </div>
      
    </section>
      <Subscribe_Our_Newsletter />
      <Footer />
    </>
  );
}
