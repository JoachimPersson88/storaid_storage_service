export default function Subscribe_Our_Newsletter() {

    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe-area">

                    <div>
                        <h3 className="headline">Subscribe Our Newsletter</h3>
                        <p className="body-text">
                            Subscribe to our newsletter to receive early discount offers, updates and info
                        </p>
                    </div>

                    <form className="subscribe_form">
                        <input
                            placeholder="Enter your email *"
                            className="subscribe_input body-text"
                        />
                        <button className="subscribe-btn">Submit</button>
                    </form>
                    
                </div>
            </div>
        </section>
    );
}
