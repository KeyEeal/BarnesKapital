import { Outlet } from "react-router-dom";
import "../Global.css";
import Footer from "./MainLayoutComponents/Footer";
import styles from "./css/MainLayout.module.css";
import NavBar from "./MainLayoutComponents/NavBar";

function MainLayout() {
  return (
    <>
      {/* Skip navigation (must be first focusable element) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className={styles.pageWrapper}>
        <NavBar />

        <main id="main-content" className={styles.mainBox}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
