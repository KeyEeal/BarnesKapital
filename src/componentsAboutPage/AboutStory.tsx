import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./css/AboutStory.module.css";
import MD from "@/images/about/K-Placeholder.png";
import GM from "@/images/about/B-Placeholder.png";
import RR from "@/images/arrow/Arrow-right.svg";
import LR from "@/images/arrow/Arrow-left.svg";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

/**
 * JSON-LD Structured Data
 * Covers AboutPage + Organization + two Person entities.
 * Google can surface the co-founder profiles in Knowledge Panels
 * and use the AboutPage schema to understand the route's purpose.
 */
const BASE_URL = "https://barneskapital.pages.dev/";

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about#aboutpage`,
      url: `${BASE_URL}/about`,
      name: "Our Story | Barnes Kapital",
      description:
        "The founding story, mission, vision, values, and investment philosophy of Barnes Kapital—a self-funded, family-owned private equity firm.",
      isPartOf: {
        "@id": `${BASE_URL}/#website`,
      },
      about: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
  ],
};

export const head = {
  title: "Our Story | Barnes Kapital – Family-Owned Private Equity",

  meta: [
    {
      name: "description",
      content:
        "Discover the story, mission, vision, and values behind Barnes Kapital—a self-funded, family-owned private equity firm built on faith, family, and patient stewardship of capital.",
    },
    { name: "robots", content: "index, follow" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${BASE_URL}/about` },
    {
      property: "og:title",
      content: "Our Story | Barnes Kapital – Family-Owned Private Equity",
    },
    {
      property: "og:description",
      content:
        "Discover the story, mission, vision, and values behind Barnes Kapital—a self-funded, family-owned private equity firm.",
    },
    {
      property: "og:image",
      content: `${BASE_URL}/og-image.jpg`,
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Our Story | Barnes Kapital – Family-Owned Private Equity",
    },
    {
      name: "twitter:description",
      content:
        "Discover the story, mission, vision, and values behind Barnes Kapital.",
    },
    {
      name: "twitter:image",
      content: `${BASE_URL}/og-image.jpg`,
    },
  ],

  link: [
    {
      rel: "canonical",
      href: `${BASE_URL}/about`,
    },
  ],

  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(aboutPageSchema),
    },
  ],
};

function AboutInfo() {
  return (
    <>
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
           * This is the single most impactful fix in this file — the original
           * had nine <h1> elements, which destroys heading hierarchy and
           * dilutes keyword signals for every section equally, leaving Google
           * with no clear topical priority on the page.
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
              {/*
               * Animated GIF is above the fold — loading="eager" prevents
               * the browser from deprioritising it as a lazy-load candidate.
               * It is a decorative scroll cue: alt="" + aria-hidden keeps it
               * out of the accessibility tree entirely.
               */}
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
          {/*
           * Both slides live inside a single .section div — this is how
           * fullPage.js manages horizontal navigation within one vertical
           * section. The structure is preserved exactly.
           *
           * Each profile is wrapped in <article> (self-contained biographical
           * unit). Co-founder names are <h2> — correct level for named
           * subsections within a page that already has its <h1>.
           *
           * The lateral navigation arrows ("for Wife" / "for Husband") carry
           * meaningful surrounding text, so the arrow images themselves are
           * marked aria-hidden. The visible text label retains its semantics.
           */}
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
