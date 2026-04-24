import { PageMeta } from "@/seo/PageMeta";
import { Link } from "react-router-dom";
import styles from "./css/NotFound.module.css";

function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found | Barnes Kapital" noindex />
      <div className={styles.container}>
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className={styles.link}>
          Return to Homepage
        </Link>
      </div>
    </>
  );
}

export default NotFound;
