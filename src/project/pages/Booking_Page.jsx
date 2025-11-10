import Subscribe_Our_Newsletter from "../components/Subscribe_Our_Newsletter";
import Footer from "../components/Footer";
import Why_Choose_Us from "../components/Why_Choose_Us";
import Looking_For_Secure from "../components/Looking_For_Secure";

export default function Booking_Page() {
    return (
        <>
            <section className="page">
                <div className="container">
                    <h1>
                        Booking
                    </h1>
                    <p className="body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </section>
            Booking Unit
            <Why_Choose_Us />
            <Looking_For_Secure />
            FAQ
            <Subscribe_Our_Newsletter />
            <Footer />
        </>
    );
}
