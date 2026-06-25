import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/NavBar.module.css";
import logo from "@/images/logo/navbarLogo.svg";

function navLinkClass({ isActive }: { isActive: boolean }) {
  return `${styles.navLink}${isActive ? ` ${styles.active}` : ""}`;
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <nav aria-label="Main navigation" className={styles.myNavbar}>
      <div className={styles.containerFluid}>
        <div className={styles.brandWrap}>
          <NavLink
            to="/"
            className={styles.brandLink}
            aria-label="Barnes Kapital - return to homepage"
            onClick={handleNavClick}
          >
            <img
              src={logo}
              alt="Barnes Kapital logo"
              className={styles.logo}
              loading="eager"
              decoding="async"
              width="40"
              height="40"
            />
            <span className={styles.navbarBrand}>Barnes Kapital</span>
          </NavLink>
        </div>

        <button
          className={`${styles.navbarToggler}${isMenuOpen ? ` ${styles.isOpen}` : ""}`}
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        />

        <div
          className={`${styles.navbarCollapse}${isMenuOpen ? ` ${styles.show}` : ""}`}
          id="navbarSupportedContent"
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink
                to="/"
                end
                className={navLinkClass}
                onClick={handleNavClick}
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={handleNavClick}
              >
                <span>About</span>
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={handleNavClick}
              >
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
