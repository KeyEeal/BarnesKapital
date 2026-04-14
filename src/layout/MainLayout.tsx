import { Outlet } from "react-router-dom";
import "../Global.css";
import Footer from "./MainLayoutComponents/Footer";
import styles from "./css/MainLayout.module.css";
import NavBar from "./MainLayoutComponents/NavBar";

function MainLayout() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <NavBar />
        <main className={styles.mainBox}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
