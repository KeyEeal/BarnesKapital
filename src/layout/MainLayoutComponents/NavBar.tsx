import { NavLink } from "react-router-dom";
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
    <>
      <nav
        aria-label="Main navigation"
        className={`navbar navbar-expand-lg fixed-top navbar-dark ${styles.myNavbar}`}
      >
        <div
          className={`container-fluid nav-text justify-content-center ${styles.containerFluid}`}
        >
          <div className="d-flex align-items-center me-4">
            <NavLink
              to="/"
              className="d-flex align-items-center text-decoration-none"
              aria-label="Barnes Kapital — return to homepage"
              onClick={handleNavClick}
            >
              <img
                src={logo}
                alt="Barnes Kapital logo"
                className={`nav-logo ${styles.logo}`}
                loading="eager"
                decoding="async"
                width="40"
                height="40"
              />
              <span className={`navbar-brand mb-0 ${styles.navbarBrand}`}>
                Barnes Kapital
              </span>
            </NavLink>
          </div>
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
                <NavLink
                  to="/"
                  end
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
