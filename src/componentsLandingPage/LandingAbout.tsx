import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/LandingAbout.module.css";
import MD from "@/images/about/K-Placeholder.png";
import GM from "@/images/about/B-Placeholder.png";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

function LandingAbout() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageBackground} />

      <div className={styles.fullpage}>
        <div className={styles.section} data-anchor="intro">
          <div className={styles.intro}>
            <h1>
              Faith. Family. Funds. Three principles guiding every decision we
              make.
            </h1>
            <p className={styles.swipeText}>
              <img
                className={styles.inlineArrowGif}
                src={DRG}
                alt="Down Arrow"
              />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="who">
          <div className={styles.who}>
            <h2>Who, and what is Barnes Kapital?</h2>
            <p>
              Barnes Kapital is a small, self-funded, family-owned private
              equity firm. We invest our own capital alongside a limited number
              of businesses, working with people we know, trust, and respect.
              This firm was built deliberately—independent rather than
              institutional, rooted rather than rushed.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>

        <div className={styles.section} data-anchor="invest">
          <div className={styles.invest}>
            <h2>Investment Focus</h2>
            <p>
              We partner with owner-operators who care deeply about what they
              have built. We look for businesses that are understandable,
              durable, and grounded in real work—led with integrity, serving
              real customers, and built to last.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>

        <div className={styles.section} data-anchor="phil">
          <div className={styles.phil}>
            <h2>How We Think</h2>
            <p>
              We believe money is a byproduct of good stewardship, not the
              objective. Ownership carries dignity and responsibility. Long-term
              alignment matters more than short-term outcomes. Faith, family,
              and stewardship guide our decisions—quietly and without
              performance.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>

        {/* Horizontal Slides Section */}
        <div className={styles.section} data-anchor="cofounders">
          <div className="slide" data-slide-tooltip="Konrad Barnes">
            <div className={styles.MD}>
              <img className={styles.MDP} src={MD} alt="Konrad Barnes" />
            </div>
            <div className={styles.KP1}>
              <h2>Co-Founder</h2>
              <h3>Konrad Barnes</h3>
              <p>
                As a founder of Barnes Kapital, Konrad is focused on long-term
                partnerships and disciplined stewardship of capital. His work is
                guided by patience, restraint, and a commitment to building
                businesses worth owning for a long time.
              </p>
              <p className={styles.swipeText}>
                <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section} data-anchor="cofounders">
          <div className="slide" data-slide-tooltip="Bianca Barnes">
            <div className={styles.GM}>
              <img className={styles.GMP} src={GM} alt="Bianca Barnes" />
            </div>
            <div className={styles.KP2}>
              <h2>Co-Founder</h2>
              <h3>Bianca Barnes</h3>
              <p>
                Bianca co-founded Barnes Kapital with a focus on alignment,
                operational clarity, and long-term durability. She brings a
                grounded perspective shaped by family, faith, and the belief
                that good work compounds quietly over time.
              </p>
              <p className={styles.swipeText}>
                <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
              </p>
            </div>
          </div>
        </div>

        {/* Remaining Vertical Sections */}
        <div className={styles.section} data-anchor="portfolio">
          <div className={styles.portfolio}>
            <h2>Portfolio Selection</h2>
            <p>
              We stay small by choice. Fewer relationships allow for deeper
              ones. Our work reflects a preference for patience over volume, and
              conviction over activity. We partner where alignment exists.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>

        <div className={styles.section} data-anchor="trustCred">
          <div className={styles.trustCred}>
            <h2>Trust & Credibility Building</h2>
            <p>
              We invest as minority owners by design, typically around 30%.
              Operators retain meaningful ownership and control. We do not
              coerce, extract, or impose. Capital exists to support what is
              already working, not to replace it.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>

        <div className={styles.section} data-anchor="closing">
          <div className={styles.closing}>
            <h2>Closing</h2>
            <p>
              We believe good work compounds quietly. Barnes Kapital exists to
              build patiently, act deliberately, and steward opportunity with
              conviction. Built to last, not to impress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingAbout;
