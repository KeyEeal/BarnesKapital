import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.f}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Barnes Kapital. All rights reserved.</p>
        <p>Private & Discreet | Long-Term Value</p>
        <p>
          Open Source code:{" "}
          <a href="https://github.com/KeyEeal/BarnesKapital">on GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
