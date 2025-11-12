import { useState } from "react";
import { createBooking } from "../api/booking";

export default function Booking_Unit() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    selectedUnit: "",
    purpose: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const units = ["Small Unit", "Medium Unit", "Large Unit", "Executive Unit"];

  function onChange(id) {
    const { name, value } = id.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  function isValid() {
    if (!form.name.trim()) return false;
    if (!form.email.trim()) return false;
    if (!form.selectedUnit.trim()) return false;
    if (!form.purpose.trim()) return false;
    return true;
  }

  async function onSubmit(error) {
    error.preventDefault();
    setResult(null);

    if (!isValid()) {
      setResult({ text: "Fyll i alla fält innan du bokar." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await createBooking(form);
      setResult({
        type: res?.success ? "ok" : "error",
        text: res?.message || "Bokningen skickades.",
      });
      if (res?.success) {
        setForm({ name: "", email: "", selectedUnit: "", purpose: "" });
      }
    } catch (err) {
      setResult({ type: "error", text: err.message || "Något gick fel." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="booking_unit">
      <div className="container">
        <h4 >Booking Unit</h4>
        <div className="title_area">
          <h3>
            Book Your Storage Unit Now & Simplify Your Life!
          </h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
            Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>

        </div>
        <div className="booking_grid">

          <img src="/src/project/interface/assets/bg_img.svg" alt="" />

          <form className="booking_card" onSubmit={onSubmit} noValidate>
            <div className="row two">
              <label className="field">
                <span className="body-text required">Your Name</span>
                <input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>

              <label className="field body-text">
                <span className="body-text required">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  disabled={submitting}
                />
              </label>
            </div>

            <div className="row">
              <label className="field">
                <span className="body-text required">Choose Unit</span>
                <select
                  name="selectedUnit"
                  value={form.selectedUnit}
                  onChange={onChange}
                  disabled={submitting}
                >
                  <option value="" disabled>
                    Choose Unit
                  </option>
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="row">
              <label className="field">
                <span className="body-text required">Storage purpose</span>
                <textarea
                  name="purpose"
                  placeholder="Describe your storage purpose so that we can match your request"
                  rows={6}
                  value={form.purpose}
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
              {submitting ? "" : "Book Unit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
