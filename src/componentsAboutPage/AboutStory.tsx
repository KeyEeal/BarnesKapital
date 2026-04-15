import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./css/AboutStory.module.css";
import MD from "@/images/about/K-Placeholder.png";
import GM from "@/images/about/B-Placeholder.png";
import RR from "@/images/arrow/Arrow-right.svg";
import LR from "@/images/arrow/Arrow-left.svg";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

function AboutInfo() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageBackground} />
      <div className={styles.fullpage}>
        {/* Vertical Sections */}
        <div className={styles.section} data-anchor="StoryInfo">
          <div className={styles.story}>
            <h1>What is Our Story?</h1>
            <p>
              Barnes Kapital was founded by a husband and wife during a period
              of personal and professional uncertainty. After returning from the
              UK with their infant son, living in a family home, and stepping
              away from conventional career paths, they chose to build something
              rooted rather than rushed. The firm emerged not from momentum, but
              from conviction—a desire to work independently, align capital with
              values, and build something intended to last.
            </p>
            <p className={styles.swipeText}>
              <img
                className={styles.inlineArrowGif}
                src={DRG}
                alt="Down Arrow"
              />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="MissionInfo">
          <div className={styles.mission}>
            <h1>The Mission</h1>
            <p>
              Barnes Kapital exists to practice careful stewardship of capital
              in partnership with people and businesses worth supporting over
              the long term. We aim to invest with patience, clarity, and
              integrity, prioritizing durable outcomes over short-term results..
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="VisionInfo">
          <div className={styles.vision}>
            <h1>Our Vision</h1>
            <p>
              We seek to remain small, independent, and conviction-led. Barnes
              Kapital aims to be known for restraint rather than reach, for
              depth rather than scale, and for partnerships built on trust over
              time.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="ValuesInfo">
          <div className={styles.values}>
            <h1>Our Values</h1>
            <p>
              Faith, family, and stewardship guide our decisions. We value
              integrity in ownership, discipline in decision-making, and
              long-term alignment over short-term outcomes. These principles act
              as boundaries, shaping both how we operate and what we choose to
              pursue.{" "}
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="LeadersInfo">
          <div className="slide" data-slide-tooltip="Konrad Barnes">
            <div className={styles.MD}>
              <img className={styles.MDP} src={MD} alt="Konrad Barnes" />
            </div>
            <div className={styles.KP1}>
              <h1>Konrad Barnes</h1>
              <p>Husband</p>
              <p className={styles.swipeTextCoFounders}>
                <img
                  className={styles.inlineArrow}
                  src={RR}
                  alt="Right Arrow"
                />
                for Wife
              </p>
            </div>
          </div>
          <div className="slide" data-slide-tooltip="Bianca Barnes">
            <div className={styles.GM}>
              <img className={styles.GMP} src={GM} alt="Bianca Barnes" />
            </div>
            <div className={styles.KP2}>
              <h1>Bianca</h1>
              <p>Wife</p>
              <p className={styles.swipeTextCoFounders}>
                <img className={styles.inlineArrow} src={LR} alt="Left Arrow" />{" "}
                for Husband
              </p>
              <p className={styles.swipeText}>
                <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
              </p>
            </div>
          </div>
        </div>
        <div className={styles.section} data-anchor="InvestInfo">
          <div className={styles.invest}>
            <h1>Investment Philosophy</h1>
            <p>
              We invest in people first, businesses second. Our approach favors
              minority ownership by design, typically around 30%, allowing
              operators to retain meaningful ownership and control. Capital
              exists to support what is already working, not to replace it. We
              value durability, alignment, and patience over activity.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="PartnershipInfo">
          <div className={styles.port}>
            <h1>Our Approach to Partnership</h1>
            <p>
              We stay small by choice. Fewer relationships allow for deeper
              ones. Each partnership is entered with the intention to remain
              involved for the long term, working alongside operators to support
              steady, sustainable progress rather than rapid expansion.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="OwnershipInfo">
          <div className={styles.owner}>
            <h1>Ownership</h1>
            <p>
              Barnes Kapital is family-owned and self-funded. This structure
              allows for independence in thought and action, free from external
              pressure to pursue short-term outcomes or institutional
              objectives.
            </p>
            <p className={styles.swipeText}>
              <img className={styles.inlineArrow} src={DR} alt="Down Arrow" />
            </p>
          </div>
        </div>
        <div className={styles.section} data-anchor="TimeInfo">
          <div className={styles.time}>
            <h1>A Long-Term Orientation</h1>
            <p>
              Barnes Kapital measures progress over years, not quarters. We
              believe good work compounds quietly, and that the most meaningful
              outcomes emerge through consistency, patience, and time rather
              than predefined milestones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
