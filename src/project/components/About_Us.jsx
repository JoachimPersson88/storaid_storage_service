export default function About_Us() {
  return (
    <section className="About_Us">
      <div className="container">
        <div className="about_area">

          <div className="about_bg">
            <img src="/src/project/interface/assets/bg_img.svg" alt="" />
            <div className="about_left">
              <div className="item">
                <h2>12+</h2>
                <p className="body-text">Years of Experience</p>
              </div>
              <div className="item">
                <h2>150K+</h2>
                <p className="body-text">Satisfied Clients</p>
              </div>
              <div className="item">
                <h2>35+</h2>
                <p className="body-text">Warehouse</p>
              </div>
            </div>
          </div>

          <div className="about_right">
            <h4>About Us</h4>
            <h3>
              Providing a Safe Space for Your Treasured Items
            </h3>
            <p className="body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui
              lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue.
              Phasellus eget elit gravida.
            </p>
            <div className="about_cards">
              <div className="about-card color_2">
                <h5>Vision</h5>
                <p className="body-text card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusam
                  itum doloremque laudantium.
                </p>
              </div>
              <div className="about-card color_2">
                <h5>Mission</h5>
                <p className="body-text card-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusam
                  itum doloremque laudantium.
                </p>
              </div>
            </div>
            <div className="about_grid">
              <button className="btn-discover">Discover More</button>
              <img src="/src/project/interface/ui/Icon.svg" alt="" />
              <div>
                <h5>More Information</h5>
                <h6>+46 8 123 122 44</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}