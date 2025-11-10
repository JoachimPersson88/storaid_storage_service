import { NavLink, Link } from "react-router-dom";
//komponenter som är hämtade från reacts bibliotek

export default function Header() {
  return (
    <header>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar_area">
          
          {/* Kontakt */}
          <div className="contact body-text-4">
            <a className="contact_item">
              <img src="/src/project/interface/ui/Icon_Phone.svg" alt="" />
              +46 8 123 122 44
            </a>
            <a className="contact_item">
              <img src="/src/project/interface/ui/Icon_Mail.svg" alt="" />
              contact@domain.com
            </a>
          </div>
          
          {/* Sociala medier */}
          <div className="media">
            <a className="social" href="https://www.facebook.com/StorAid" aria-label="Facebook">
              <img src="/src/project/interface/ui/Facebook.svg" alt="" />
            </a>
            <a className="social" href="https://www.facebook.com/StorAid" aria-label="X">
              <img src="/src/project/interface/ui/Humble.svg" alt="" />
            </a>
            <a className="social" href="https://www.instagram.com/StorAid" aria-label="Instagram">
              <img src="/src/project/interface/ui/Instagram.svg" alt="" />
            </a>
            <a className="social" href="https://www.youtube.com/StorAid" aria-label="YouTube">
              <img src="/src/project/interface/ui/Youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Navbar */}
      <div className="navbar">
        <div className="nav_area">
          
          {/* Logo */}
          <Link to="/">
            <img src="/src/project/interface/assets/Logo.svg" alt="StorAid logo" />
          </Link>
          
          {/* Länkar till sidorna */}
          <nav className="navlinks body-text-3">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link is-active" : "link")}
              /*
              Denna funktion tar emot ett objekt som innehåller egenskapen isActive. 
              isActive är ett booleskt värde (true eller false) som avgör om länken är aktiv eller inte.
              */
              >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "link is-active" : "link")}
            >
              About Us
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "link is-active" : "link")}
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "link is-active" : "link")}
            >
              Contact Us
            </NavLink>
          </nav>
          
          {/* Bokning */}
          <Link to="/booking" className="btn-book body-text-2">Book Now</Link>

        </div>
      </div>
    </header>
  );
}
