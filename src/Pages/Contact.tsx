import styles from "./css/Contact.module.css";
import ContactInfo from "../componentsContactPage/ContactBody";

function Contact() {
  return (
    <div className={styles.divBody}>
      <ContactInfo />
    </div>
  );
}
export default Contact;
