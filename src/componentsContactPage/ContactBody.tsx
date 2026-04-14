import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";
import styles from "./css/ContactBody.module.css";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

function ContactInfo() {
  useEffect(() => {
    // Initialize fullpage
    const fpInstance = new fullpage("#fullpage", {
      credits: {
        enabled: true,
        label: "Made with fullpage.js",
        position: "right",
      },
      autoScrolling: true,
      verticalCentered: true,
      scrollingSpeed: 700,

      navigation: true,
      navigationPosition: "left",
      navigationTooltips: [
        "Location",
        "Contact",
        "Our pace",
        "Context",
        "Professional Presence",
      ],
      showActiveTooltip: true,

      slidesNavigation: true,
      controlArrows: true,
      loopHorizontal: false,

      anchors: [
        "AddressInfo",
        "CommsInfo",
        "OppHoursInfo",
        "MapInfo",
        "SocialsInfo",
      ],
    });
    return () => {
      fpInstance.destroy("all");
    };
  }, []);
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageBackground} />
      <div id="fullpage">
        <div className="section" data-anchor="AddressInfo">
          <div className={styles.Add}>
            <h1>Location</h1>
            <p>
              Barnes Kapital operates privately and deliberately. We work
              closely with a small number of partners and do not maintain a
              public-facing office presence. Location details are shared
              directly when appropriate.
            </p>
            <p className={styles.swipeText}>
              Swipe down
              <img
                className={styles.inlineArrowGif}
                src={DRG}
                alt="Down Arrow"
              />
            </p>
          </div>
        </div>
        <div className="section" data-anchor="CommsInfo">
          <div className={styles.Comms}>
            <h1>Contact</h1>
            <p>
              Barnes Kapital engages selectively and with intention. We welcome
              thoughtful inquiries from aligned founders and partners. All
              correspondence is reviewed carefully and responded to with due
              consideration.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className="section" data-anchor="OppHoursInfo">
          <div className={styles.OppHours}>
            <h1>Our Pace</h1>
            <p>
              We are not driven by immediacy or volume. Our work is shaped by
              patience and long-term orientation. Responses are thoughtful
              rather than rushed, and conversations unfold with care.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className="section" data-anchor="MapInfo">
          <div className={styles.Map}>
            <h1>Context</h1>
            <p>
              Barnes Kapital’s work is not defined by geography, but by
              alignment. We partner where trust, shared values, and long-term
              commitment exist, regardless of physical location. privacy.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className="section" data-anchor="SocialsInfo">
          <div className={styles.Socials}>
            <h1>Professional Presence</h1>
            <p>
              Barnes Kapital maintains a limited professional presence. When we
              communicate publicly, it is to share perspective rather than
              promotion, and to reflect on work rather than activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
