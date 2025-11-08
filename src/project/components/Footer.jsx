export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">

                <p className="copyright body-text">
                    © {year} StorAid, All rights reserved.
                </p>

                <div className="legal">
                    <a className="body-text" href="#">
                        <img src="src/project/interface/ui/Footer_Icon.svg" alt="" />
                        Terms & Conditions
                    </a>
                    <a className="body-text" href="#">
                        <img src="src/project/interface/ui/Footer_Icon.svg" alt="" />
                        Privacy Policy
                    </a>
                </div>

            </div>
        </footer>
    );
}
