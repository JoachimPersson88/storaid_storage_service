import { useState } from "react";
import { createSubscription } from "../api/subscribe";

export default function Subscribe_Our_Newsletter() {
    const [status, setStatus] = useState({
        type: "", 
        message: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ type: "", message: "" });

        const form = new FormData(e.currentTarget);
        const email = (form.get("email") || "").toString().trim();

        if (!email) {
            setStatus({ type: "error", message: "Please enter your email." });
            return;
        }

        try {
            const res = await createSubscription({ email });
            setStatus({
                type: "success",
                message: res?.message,
            });
        } catch (err) {
            setStatus({
                type: "error",
                message:
                    err?.message ||
                    "Something went wrong while subscribing. Please try again.",
            });
        }
    }

    return (
        <section className="subscribe">
            <div className="container">
                <div className="subscribe-area">
                    <div>
                        <h3 className="headline">Subscribe Our Newsletter</h3>
                        <p className="body-text">
                            Subscribe to our newsletter to receive early discount offers,
                            updates and info
                        </p>
                    </div>

                    <form className="subscribe_form" onSubmit={handleSubmit} noValidate>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email *"
                            className="subscribe_input body-text"
                            aria-label="Email"
                            required
                        />
                        <button className="subscribe-btn">
                            {"Submit"}
                        </button>

                        {status.message ? (
                            <p
                                className={`subscribe_status body-text ${status.type === "error" ? "is-error" : "is-success"
                                    }`}
                                role="status"
                                aria-live="polite"
                            >
                                {status.message}
                            </p>
                        ) : null}
                    </form>
                </div>
            </div>
        </section>
    );
}
