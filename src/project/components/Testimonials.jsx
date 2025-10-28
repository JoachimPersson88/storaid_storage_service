export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials_area">

                    <h4>Testimonials</h4>
                    <h3>See What Our Client Have to Say</h3>
                    <p className="body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
                        Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.
                        </p>

                    <div className="testimonials_grid">

                        <div className="item1">
                            <img className="stars" src="/src/project/interface/ui/4_stars.svg" alt="" />
                            <p className="body-text">
                                Lorem ipsum dolor sit amet, consectetur adipis 
                                cing elit. Ut libero lectus, porta nec turpis sit 
                                amet, lobortis fringilla ante.
                                </p>
                            <img className="avatar" src="/src/project/interface/ui/avatar.svg" alt="" />
                            <h6>Aiden Harvey</h6>
                            <p className="role">Customer</p>
                            <img className="quotes" src="/src/project/interface/ui/quotes.svg" alt="" />
                        </div>

                        <div className="item2">
                            <img className="stars" src="/src/project/interface/ui/5_stars.svg" alt="" />
                            <p className="body-text">
                                Lorem ipsum dolor sit amet, consectetur adipis 
                                cing elit. Ut libero lectus, porta nec turpis sit 
                                amet, lobortis fringilla ante.                                
                            </p>
                            <img className="avatar" src="/src/project/interface/ui/avatar.svg" alt="" />
                            <h6>Carrisa Jocelyn</h6>
                            <p className="role">Customer</p>
                            <img className="quotes" src="/src/project/interface/ui/quotes.svg" alt="" />
                        </div>

                        <div className="item3">
                            <img className="stars" src="/src/project/interface/ui/5_stars.svg" alt="" />
                            <p className="body-text">
                                Lorem ipsum dolor sit amet, consectetur adipis 
                                cing elit. Ut libero lectus, porta nec turpis sit 
                                amet, lobortis fringilla ante.                                
                            </p>
                            <img className="avatar" src="/src/project/interface/ui/avatar.svg" alt="" />
                            <h6>Celvin Gabriel</h6>
                            <p className="role">Customer</p>
                            <img className="quotes" src="/src/project/interface/ui/quotes.svg" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}