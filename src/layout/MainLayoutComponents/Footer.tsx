import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.f}>
      <div className={styles.footerContent}>
        <p>&copy; 2025 Barnes Kapital. All rights reserved.</p>
        <p>Private & Discreet | Long-Term Value</p>
        <p>This website was built with fullPage.js</p>
        <p></p>
        <p>
          Source code available under GPL-3.0 on GitHub:
          <a href="https://github.com/KeyEeal/BarnesKapital"> Here</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
