import { useState } from "react";
import { sendContact } from "../api/contact";


export default function Get_in_Touch() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    comment: "",
  });


  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  function onChange(id) {
    const { name, value } = id.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  function isValid() {
    if (!form.name.trim()) return false;
    if (!form.email.trim()) return false;
    if (!form.phoneNumber.trim()) return false;
    if (!form.subject.trim()) return false;
    if (!form.comment.trim()) return false;
    return true;
  }

  async function onSubmit(error) {
    error.preventDefault();
    setResult(null);

    if (!isValid()) {
      setResult({ text: "Fyll i alla fält innan du skickar." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await sendContact(form);
      setResult({
        type: res?.success ? "ok" : "error",
        text: res?.message || "formuläret skickades.",
      });
      if (res?.success) {
        setForm({ name: "", email: "", phoneNumber: "", subject: "", comment: "" });
      }
    } catch (err) {
      setResult({ type: "error", text: err.message || "Något gick fel." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="get_in_touch">
      <div className="container">
        <h4 >Get in Touch</h4>
        <div className="title_area">
          <h3>
            Get Personalized Assistance
            <br/>
            – Contact Us
          </h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>

        </div>
        <div className="contact_grid">

          <img src="/src/project/interface/assets/bg_img.svg" alt="" />

          <form className="form_card" onSubmit={onSubmit} noValidate>

            <div className="row">
              <label className="field">
                <span className="body-text required">Your Name</span>
                <input
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>
            </div>

            <div className="row two">
              <label className="field body-text">
                <span className="body-text required">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="@email.com"
                  value={form.email}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>

              <label className="field">
                <span className="body-text">Telephone</span>
                <input
                  name="telephone"
                  placeholder="Your number"
                  value={form.telephone}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>
            </div>


            <div className="row">
              <label className="field">
                <span className="body-text required">Subject</span>
                <input
                  name="Subject"
                  placeholder="How can we help you"
                  value={form.subject}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>
            </div>

            <div className="row">
              <label className="field">
                <span className="body-text required">Comments / Questions</span>
                <textarea
                  name="Comments"
                  placeholder="Your comment"
                  rows={6}
                  value={form.comment}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>
            </div>

            {result && (
              <p
                className={`note ${result.type === "ok" ? "is-ok" : "is-error"
                  } body-text-3`}
              >
                {result.text}
              </p>
            )}

            <button
              type="submit"
              className="btn-book body-text-2"
              disabled={submitting}
            >
              {submitting ? "" : "Send Comment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
