import { PageMeta } from "@/seo/PageMeta";
import styles from "./css/AboutStory.module.css";
import { aboutPageSchema } from "@/seo/schemas";
import MD from "@/images/about/K-Placeholder.png";
import GM from "@/images/about/B-Placeholder.png";
import RR from "@/images/arrow/Arrow-right.svg";
import LR from "@/images/arrow/Arrow-left.svg";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

const BASE_URL = "https://barneskapital.pages.dev/";

function AboutInfo() {
  return (
    <>
      <PageMeta
        title="Our Story | Barnes Kapital – Family-Owned Private Equity"
        description="Discover the story, mission, vision, and values behind Barnes Kapital—a self-funded, family-owned private equity firm built on faith, family, and patient stewardship of capital."
        canonical={`${BASE_URL}about`}
        og={{
          type: "website",
          url: `${BASE_URL}about`,
          title: "Our Story | Barnes Kapital – Family-Owned Private Equity",
          description:
            "Discover the story, mission, vision, and values behind Barnes Kapital—a self-funded, family-owned private equity firm.",
          image: `${BASE_URL}og-image.jpg`,
        }}
        twitter={{
          card: "summary_large_image",
          title: "Our Story | Barnes Kapital – Family-Owned Private Equity",
          description:
            "Discover the story, mission, vision, and values behind Barnes Kapital.",
          image: `${BASE_URL}og-image.jpg`,
        }}
      />

      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />

      {/* ── Page Shell ──────────────────────────────────────────────────── */}
      <main className={styles.pageWrapper}>
        <div className={styles.pageBackground} aria-hidden="true" />

        <div className={styles.fullpage}>
          {/* ── 1. Founding Story ────────────────────────────────────────── */}
          {/*
           * This is the primary semantic entry point for the page.
           * ONE <h1> lives here; all remaining section titles become <h2>.
           */}
          <section className={styles.section} data-anchor="StoryInfo">
            <div className={styles.story}>
              <h1>What is Our Story?</h1>
              <p>
                Barnes Kapital was founded by a husband and wife during a period
                of personal and professional uncertainty. After returning from
                the UK with their infant son, living in a family home, and
                stepping away from conventional career paths, they chose to
                build something rooted rather than rushed. The firm emerged not
                from momentum, but from conviction—a desire to work
                independently, align capital with values, and build something
                intended to last.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrowGif}
                  src={DRG}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  width="40"
                  height="40"
                />
              </p>
            </div>
          </section>

          {/* ── 2. Mission ───────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="MissionInfo">
            <div className={styles.mission}>
              <h2>The Mission</h2>
              <p>
                Barnes Kapital exists to practice careful stewardship of capital
                in partnership with people and businesses worth supporting over
                the long term. We aim to invest with patience, clarity, and
                integrity, prioritizing durable outcomes over short-term
                results.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 3. Vision ────────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="VisionInfo">
            <div className={styles.vision}>
              <h2>Our Vision</h2>
              <p>
                We seek to remain small, independent, and conviction-led. Barnes
                Kapital aims to be known for restraint rather than reach, for
                depth rather than scale, and for partnerships built on trust
                over time.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 4. Values ────────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="ValuesInfo">
            <div className={styles.values}>
              <h2>Our Values</h2>
              <p>
                Faith, family, and stewardship guide our decisions. We value
                integrity in ownership, discipline in decision-making, and
                long-term alignment over short-term outcomes. These principles
                act as boundaries, shaping both how we operate and what we
                choose to pursue.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 5. Co-Founders (horizontal slides) ───────────────────────── */}
          <section className={styles.section} data-anchor="LeadersInfo">
            <div className="slide" data-slide-tooltip="Konrad Barnes">
              <article aria-label="Co-Founder: Konrad Barnes">
                <div className={styles.MD}>
                  <img
                    className={styles.MDP}
                    src={MD}
                    alt="Konrad Barnes, Co-Founder of Barnes Kapital"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="500"
                  />
                </div>
                <div className={styles.KP1}>
                  <h2>Konrad Barnes</h2>
                  <p>Husband</p>
                  <p className={styles.swipeTextCoFounders}>
                    <img
                      className={styles.inlineArrow}
                      src={RR}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      width="24"
                      height="24"
                    />{" "}
                    for Wife
                  </p>
                </div>
              </article>
            </div>

            <div className="slide" data-slide-tooltip="Bianca Barnes">
              <article aria-label="Co-Founder: Bianca Barnes">
                <div className={styles.GM}>
                  <img
                    className={styles.GMP}
                    src={GM}
                    alt="Bianca Barnes, Co-Founder of Barnes Kapital"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="500"
                  />
                </div>
                <div className={styles.KP2}>
                  <h2>Bianca</h2>
                  <p>Wife</p>
                  <p className={styles.swipeTextCoFounders}>
                    <img
                      className={styles.inlineArrow}
                      src={LR}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      width="24"
                      height="24"
                    />{" "}
                    for Husband
                  </p>
                  <p className={styles.swipeText}>
                    <img
                      className={styles.inlineArrow}
                      src={DR}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      width="24"
                      height="24"
                    />
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* ── 6. Investment Philosophy ─────────────────────────────────── */}
          <section className={styles.section} data-anchor="InvestInfo">
            <div className={styles.invest}>
              <h2>Investment Philosophy</h2>
              <p>
                We invest in people first, businesses second. Our approach
                favors minority ownership by design, typically around 30%,
                allowing operators to retain meaningful ownership and control.
                Capital exists to support what is already working, not to
                replace it. We value durability, alignment, and patience over
                activity.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 7. Partnership Approach ──────────────────────────────────── */}
          <section className={styles.section} data-anchor="PartnershipInfo">
            <div className={styles.port}>
              <h2>Our Approach to Partnership</h2>
              <p>
                We stay small by choice. Fewer relationships allow for deeper
                ones. Each partnership is entered with the intention to remain
                involved for the long term, working alongside operators to
                support steady, sustainable progress rather than rapid
                expansion.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 8. Ownership ─────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="OwnershipInfo">
            <div className={styles.owner}>
              <h2>Ownership</h2>
              <p>
                Barnes Kapital is family-owned and self-funded. This structure
                allows for independence in thought and action, free from
                external pressure to pursue short-term outcomes or institutional
                objectives.
              </p>
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrow}
                  src={DR}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width="24"
                  height="24"
                />
              </p>
            </div>
          </section>

          {/* ── 9. Long-Term Orientation ─────────────────────────────────── */}
          <section className={styles.section} data-anchor="TimeInfo">
            <div className={styles.time}>
              <h2>A Long-Term Orientation</h2>
              <p>
                Barnes Kapital measures progress over years, not quarters. We
                believe good work compounds quietly, and that the most
                meaningful outcomes emerge through consistency, patience, and
                time rather than predefined milestones.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AboutInfo;
