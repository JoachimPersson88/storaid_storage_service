import { useEffect, useState } from "react";
import { fetchFAQ } from "../api/faq";    // ändra sökväg om din fil heter annat
import Accordion from "./Accordion";       // single-row komponent (title/description)

export default function FAQ() {
  const [items, setItems] = useState([]);

  // Hämta FAQ-poster från API vid mount
  useEffect(() => {
    let mounted = true;
    fetchFAQ()
      .then((data) => {
        if (!mounted) return;
        setItems(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (!mounted) return;
        setItems([]);
      });
    return () => { mounted = false; };
  }, []);

  return (
    <section className="faq">
      <div className="container">
        <div className="header">
          <h4>FAQs</h4>
          <h3>Frequently Ask Questions</h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Behåller din struktur/namn: .faqs */}
          <div className="faqs">
            {items.map((it, i) => (
              <Accordion
                key={it.id ?? i}
                title={it.title}
                description={it.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
