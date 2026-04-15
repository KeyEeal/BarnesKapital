import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import burgerMenu from "@/images/burgerMenu/burgerMenu.svg";
//import home from "./images/nav/home.svg";
//import contact from "./images/nav/contact-us.svg";
//import about from "./images/nav/about-us.svg";

import styles from "./css/NavBar.module.css";
import logo from "@/images/logo/navbarLogo.svg";

function NavBar() {
  const handleNavClick = () => {
    const collapseEl = document.getElementById("navbarSupportedContent");
    if (!collapseEl) return;

    const collapse = window.bootstrap.Collapse.getOrCreateInstance(collapseEl);
    collapse.hide();
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-dark ${styles.myNavbar}`}
    >
      <div
        className={`container-fluid nav-text justify-content-center ${styles.containerFluid}`}
      >
        {/* Logo + Title */}
        <div className="d-flex align-items-center me-4">
          <img src={logo} alt="Logo" className={`nav-logo ${styles.logo}`} />
          <h1 className={`navbar-brand mb-0 ${styles.navbarBrand}`}>
            Barnes Kapital
          </h1>
        </div>
        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleNavClick}>
                <h5>Home</h5>
                {/*
              <img
                  src={home}
                  alt="Logo"
                  className={`nav-logo ${styles.home}`}
                />
              */}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={handleNavClick}>
                <h5>About</h5>
                {/* 
                <img
                  src={about}
                  alt="Logo"
                  className={`nav-logo ${styles.about}`}
                />
              */}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>
                <h5>Contact</h5>
                {/*
                <img
                  src={contact}
                  alt="Logo"
                  className={`nav-logo ${styles.contact}`}
                />
              */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
