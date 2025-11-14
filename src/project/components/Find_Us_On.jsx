export default function Find_Us_On() {
    return (
        <section className="find_us">
            <div className="container">

                <div className="find_us_area">

                    <img className="bg_img" src="/src/project/interface/assets/FUO_Img.svg" alt="" />

                    <div className="contact_area">
                        <h3>Find Us On:</h3>
                        <p className="body-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <div className="contact_list">
                            <div className="contact_grid">
                                <div className="icon">
                                    <img src="/src/project/interface/ui/Icon_CallC.svg" alt="" />
                                </div>
                                <div className="item">
                                    <h5>Call Center</h5>
                                    <p className="body-text-5">+46 8 123 122 44</p>
                                </div>
                            </div>

                            <div className="contact_grid">
                                <div className="icon">
                                    <img src="/src/project/interface/ui/Icon_EmailA.svg" alt="" />
                                </div>
                                <div className="item">
                                    <h5>Email Address</h5>
                                    <p className="body-text-5">contact@domain.com</p>
                                </div>
                            </div>

                            <div className="contact_grid">
                                <div className="icon">
                                    <img src="/src/project/interface/ui/Icon_Location.svg" alt="" />
                                </div>
                                <div className="item">
                                    <h5>Location</h5>
                                    <p className="body-text-5">Klarabergsviadukten 90, Stockholm</p>
                                </div>
                            </div>
                        </div>

                        <div className="social_area">
                            <h5>Our Social Media</h5>
                            <div className="rule" />

                            <div className="social_icons">
                                <a>
                                    <img src="/src/project/interface/ui/Facebook.svg" alt="" />
                                </a>
                                <a>
                                    <img src="/src/project/interface/ui/Humble.svg" alt="" />
                                </a>
                                <a>
                                    <img src="/src/project/interface/ui/Instagram.svg" alt="" />
                                </a>
                                <a>
                                    <img src="/src/project/interface/ui/Youtube.svg" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
