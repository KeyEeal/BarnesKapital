import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.f}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Barnes Kapital. All rights reserved.</p>
        <p>Private & Discreet | Long-Term Value</p>
        <p>Contact: info@barneskapital.com</p>
        <p>This website uses fullPage.js</p>
      </div>
    </footer>
  );
}

export default Footer;
