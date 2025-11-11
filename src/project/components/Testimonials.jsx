import { useEffect, useState } from "react";
import { fetchTestimonials } from "../api/testimonials";

export default function Testimonials() {
  // items = lista med testimonials, setItems = funktion för att uppdatera listan
  const [items, setItems] = useState([]);

  // Körs en gång efter första render (tom beroendelista [])
  // Hämtar testimonials och lägger dem i state.
  useEffect(() => {
    fetchTestimonials().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <section className="testimonials">
      {/* Bakgrundsbild för sektionen */}
      <img className="Bg" src="/src/project/interface/assets/Testimonials_Bg.svg" alt="" />
      <div className="container">
        <div className="testimonials_area">

          {/* Sektionens rubriker och introtext */}
          <h4>Testimonials</h4>
          <h3>See What Our Client Have to Say</h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
            Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>

          <div className="testimonials_grid">
            {items.map(testimonials => {
              // Väljer stjärn-ikon beroende på rating
              const stars = Number(testimonials.rating) >= 5
                ? "/src/project/interface/ui/5_stars.svg" // Denna infaller om det är 5
                : "/src/project/interface/ui/4_stars.svg"; // Denna infaller om det inte är 5

              return (
                // Enskilt kort. key behövs för effektiv rendering i listor
                <div className="item">

                  {/* Rating */}
                  <img className="stars" src={stars} alt={`${testimonials.rating ?? 5} out of 5`} />

                  {/* Själva kommentaren */}
                  <p className="body-text">{testimonials.comment}</p>

                  {/* Avatar*/}
                  <div className="author">
                    <img
                      className="avatar"
                      src={testimonials.avatarUrl}
                    />

                    {/* Namn och roll */}
                    <div>
                      <h6>{testimonials.name}</h6>
                      <p className="role">{testimonials.companyName}</p>
                    </div>

                    <img className="quotes" src="/src/project/interface/ui/quotes.svg" alt="" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
