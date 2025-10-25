export default function Header() {
  return (
    <header>
      <div className="bg">
        <div className="bg-area">
          <div className="bg-left body-text-4">
            <a className="bg-item">
              <img src="/src/project/interface/ui/Icon_Phone.svg" alt="" />
              +46 8 123 122 44
            </a>
            <a className="bg-item">
              <img src="/src/project/interface/ui/Icon_Mail.svg" alt="" />
              contact@domain.com
            </a>
          </div>

          <div className="bg-right">
            <a className="social" href="#" aria-label="Facebook">
              <img src="/src/project/interface/ui/Facebook.svg" alt="" />
            </a>
            <a className="social" href="#" aria-label="X">
              <img src="/src/project/interface/ui/Humble.svg" alt="" />
            </a>
            <a className="social" href="#" aria-label="Instagram">
              <img src="/src/project/interface/ui/Instagram.svg" alt="" />
            </a>
            <a className="social" href="#" aria-label="YouTube">
              <img src="/src/project/interface/ui/Youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="nav-area">
          <a href="/">
            <img src="/src/project/interface/assets/Logo.svg" alt="StorAid logo" />
          </a>

          <nav className="navlinks body-text-3" aria-label="Primary">
            <a className="link is-active" href="/">Home</a>
            <a className="link" href="/about">About Us</a>
            <a className="link" href="/services">Services</a>
            <a className="link" href="/contact">Contact Us</a>
          </nav>
          <button className="btn-book body-text-2" type="button">Book Now</button>
        </div>
      </div>
    </header>
  );
}
