import { useEffect, useState } from "react";
import { fetchTestimonials } from "../api/testimonials";

export default function Testimonials() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchTestimonials().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <section className="testimonials">
      <img className="Bg" src="/src/project/interface/assets/Testimonials_Bg.svg" alt="" />
      <div className="container">
        <div className="testimonials_area">

          <h4>Testimonials</h4>
          <h3>See What Our Client Have to Say</h3>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida.
            Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>

          <div className="testimonials_grid">
            {items.map(testimonials => {
              const stars = Number(testimonials.rating) >= 5
                ? "/src/project/interface/ui/5_stars.svg"
                : "/src/project/interface/ui/4_stars.svg";

              return (
                <div className="item">

                  <img className="stars" src={stars} alt={`${testimonials.rating ?? 5} out of 5`} />

                  <p className="body-text">{testimonials.comment}</p>

                  <div className="author">
                    <img
                      className="avatar"
                      src={testimonials.avatarUrl}
                    />

                    <div>
                      <h6>{testimonials.name}</h6>
                      <p className="role body-text">{testimonials.companyName}</p>
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
