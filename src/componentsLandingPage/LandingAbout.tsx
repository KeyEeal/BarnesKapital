import { Helmet } from "react-helmet-async";
import styles from "./css/LandingAbout.module.css";
import { organizationSchema } from "@/seo/schemas";
import MD from "@/images/about/K-Placeholder.png";
import GM from "@/images/about/B-Placeholder.png";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

const BASE_URL = "https://barneskapital.pages.dev/";

function LandingAbout() {
  return (
    <>
      <Helmet>
        <title>
          About Us | Barnes Kapital – Family-Owned Private Equity Firm
        </title>
        <meta
          name="description"
          content="Barnes Kapital is a self-funded, family-owned private equity firm guided by Faith, Family, and Funds. We partner with owner-operators for long-term, stewardship-driven investment."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta
          property="og:title"
          content="About Barnes Kapital – Family-Owned Private Equity"
        />
        <meta
          property="og:description"
          content="Faith. Family. Funds. A self-funded private equity firm built for patient, principle-led investing."
        />
        <meta property="og:image" content={`${BASE_URL}og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Barnes Kapital – Family-Owned Private Equity"
        />
        <meta
          name="twitter:description"
          content="Faith. Family. Funds. A self-funded private equity firm built for patient, principle-led investing."
        />
        <meta name="twitter:image" content={`${BASE_URL}og-image.jpg`} />
      </Helmet>

      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* ── Page Shell ──────────────────────────────────────────────────── */}
      <main className={styles.pageWrapper}>
        <div className={styles.pageBackground} aria-hidden="true" />

        <div className={styles.fullpage}>
          {/* ── 1. Intro ─────────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="intro">
            <div className={styles.intro}>
              <h1>
                Faith. Family. Funds. Three principles guiding every decision we
                make.
              </h1>
              {/*
               * The animated arrow is a purely decorative scroll cue.
               * alt="" + aria-hidden removes it from the accessibility tree,
               * preventing screen readers from announcing it redundantly.
               * loading="eager" is intentional: it is above the fold.
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

          {/* ── 2. Who We Are ────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="who">
            <div className={styles.who}>
              <h2>Who, and what is Barnes Kapital?</h2>
              <p>
                Barnes Kapital is a small, self-funded, family-owned private
                equity firm. We invest our own capital alongside a limited
                number of businesses, working with people we know, trust, and
                respect. This firm was built deliberately—independent rather
                than institutional, rooted rather than rushed.
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

          {/* ── 3. Investment Focus ──────────────────────────────────────── */}
          <section className={styles.section} data-anchor="invest">
            <div className={styles.invest}>
              <h2>Investment Focus</h2>
              <p>
                We partner with owner-operators who care deeply about what they
                have built. We look for businesses that are understandable,
                durable, and grounded in real work—led with integrity, serving
                real customers, and built to last.
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

          {/* ── 4. Philosophy ────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="phil">
            <div className={styles.phil}>
              <h2>How We Think</h2>
              <p>
                We believe money is a byproduct of good stewardship, not the
                objective. Ownership carries dignity and responsibility.
                Long-term alignment matters more than short-term outcomes.
                Faith, family, and stewardship guide our decisions—quietly and
                without performance.
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

          {/* ── 5 & 6. Co-Founders (horizontal slides) ───────────────────── */}
          {/*
           * These sections intentionally remain <section> elements.
           * fullPage.js targets `.section` class, not the HTML tag,
           * so the selector still resolves correctly.
           *
           * Each profile uses <article> because it is a self-contained,
           * independently meaningful biographical unit.
           */}
          <section className={styles.section} data-anchor="cofounders">
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
                  <h2>Co-Founder</h2>
                  <h3>Konrad Barnes</h3>
                  <p>
                    As a founder of Barnes Kapital, Konrad is focused on
                    long-term partnerships and disciplined stewardship of
                    capital. His work is guided by patience, restraint, and a
                    commitment to building businesses worth owning for a long
                    time.
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

          <section className={styles.section} data-anchor="cofounders">
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
                  <h2>Co-Founder</h2>
                  <h3>Bianca Barnes</h3>
                  <p>
                    Bianca co-founded Barnes Kapital with a focus on alignment,
                    operational clarity, and long-term durability. She brings a
                    grounded perspective shaped by family, faith, and the belief
                    that good work compounds quietly over time.
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

          {/* ── 7. Portfolio Selection ───────────────────────────────────── */}
          <section className={styles.section} data-anchor="portfolio">
            <div className={styles.portfolio}>
              <h2>Portfolio Selection</h2>
              <p>
                We stay small by choice. Fewer relationships allow for deeper
                ones. Our work reflects a preference for patience over volume,
                and conviction over activity. We partner where alignment exists.
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

          {/* ── 8. Trust & Credibility ───────────────────────────────────── */}
          <section className={styles.section} data-anchor="trustCred">
            <div className={styles.trustCred}>
              <h2>Trust & Credibility Building</h2>
              <p>
                We invest as minority owners by design, typically around 30%.
                Operators retain meaningful ownership and control. We do not
                coerce, extract, or impose. Capital exists to support what is
                already working, not to replace it.
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

          {/* ── 9. Closing ───────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="closing">
            <div className={styles.closing}>
              <h2>Closing</h2>
              <p>
                We believe good work compounds quietly. Barnes Kapital exists to
                build patiently, act deliberately, and steward opportunity with
                conviction. Built to last, not to impress.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LandingAbout;
