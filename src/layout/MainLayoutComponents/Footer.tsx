import styles from "./css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.f} aria-label="Site footer">
      <div className={styles.footerContent}>
        <p>&copy; 2025 Barnes Kapital. All rights reserved.</p>
        <p>Private &amp; Discreet | Long-Term Value</p>
        <p>
          Open source:{" "}
          <a
            href="https://github.com/KeyEeal/BarnesKapital"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Barnes
          Kapital source code on GitHub (opens in new tab)"
          >
            Barnes Kapital on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
