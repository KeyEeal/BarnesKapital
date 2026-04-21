/**
 * ContactBody.tsx  (ContactInfo component)
 *
 * SEO METADATA — Paste the block below into public/index.html <head>,
 * or inject per-route via react-helmet-async on the /contact route.
 *
 * ── index.html HEAD block ──────────────────────────────────────────────────
 * <title>Contact | Barnes Kapital – Family-Owned Private Equity</title>
 * <meta name="description"
 *       content="Get in touch with Barnes Kapital. We welcome thoughtful inquiries from aligned founders and partners. Correspondence is reviewed carefully and responded to with due consideration." />
 * <meta name="robots" content="index, follow" />
 * <link rel="canonical" href="https://barneskapital.pages.dev/contact" />
 *
 * <!-- Open Graph -->
 * <meta property="og:type"        content="website" />
 * <meta property="og:url"         content="https://barneskapital.pages.dev/contact" />
 * <meta property="og:title"       content="Contact Barnes Kapital – Family-Owned Private Equity" />
 * <meta property="og:description" content="We welcome thoughtful inquiries from aligned founders and partners." />
 * <meta property="og:image"       content="https://barneskapital.pages.dev/og-image.jpg" />
 *
 * <!-- Twitter Card -->
 * <meta name="twitter:card"        content="summary_large_image" />
 * <meta name="twitter:title"       content="Contact Barnes Kapital" />
 * <meta name="twitter:description" content="We welcome thoughtful inquiries from aligned founders and partners." />
 * <meta name="twitter:image"       content="https://barneskapital.pages.dev/og-image.jpg" />
 *
 * <!-- Viewport (confirm present in index.html) -->
 * <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 * ──────────────────────────────────────────────────────────────────────────
 */

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./css/ContactBody.module.css";
import DR from "@/images/arrow/Arrow-down.svg";
import DRG from "@/images/arrow/Arrow-down-gif.gif";

/**
 * JSON-LD Structured Data
 *
 * ContactPage schema signals to Google that this route is the canonical
 * contact destination for the organisation. Combined with the Organization
 * node (consistent with LandingAbout and AboutStory), it reinforces the
 * entity graph across the site and improves Knowledge Panel eligibility.
 *
 * NOTE: Consolidate the Organization node into a single site-level
 * injection (App.jsx or index.html) once all page schemas are in place,
 * to avoid duplicate entity declarations per route.
 */
const BASE_URL = "https://barneskapital.pages.dev/";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}/contact#contactpage`,
      url: `${BASE_URL}/contact`,
      name: "Contact | Barnes Kapital",
      description:
        "Barnes Kapital welcomes thoughtful inquiries from aligned founders and partners. Correspondence is reviewed carefully and responded to with due consideration.",
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
  title: "Contact | Barnes Kapital – Family-Owned Private Equity",

  meta: [
    {
      name: "description",
      content:
        "Get in touch with Barnes Kapital. We welcome thoughtful inquiries from aligned founders and partners. Correspondence is reviewed carefully and responded to with due consideration.",
    },
    { name: "robots", content: "index, follow" },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${BASE_URL}/contact` },
    {
      property: "og:title",
      content: "Contact Barnes Kapital – Family-Owned Private Equity",
    },
    {
      property: "og:description",
      content:
        "We welcome thoughtful inquiries from aligned founders and partners.",
    },
    {
      property: "og:image",
      content: `${BASE_URL}/og-image.jpg`,
    },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Contact Barnes Kapital",
    },
    {
      name: "twitter:description",
      content:
        "We welcome thoughtful inquiries from aligned founders and partners.",
    },
    {
      name: "twitter:image",
      content: `${BASE_URL}/og-image.jpg`,
    },
  ],

  link: [
    {
      rel: "canonical",
      href: `${BASE_URL}/contact`,
    },
  ],

  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(contactPageSchema),
    },
  ],
};

function ContactInfo() {
  return (
    <>
      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      {/* ── Page Shell ──────────────────────────────────────────────────── */}
      <main className={styles.pageWrapper}>
        <div className={styles.pageBackground} aria-hidden="true" />

        <div className={styles.fullpage}>
          {/* ── 1. Location ──────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="AddressInfo">
            <div className={styles.Add}>
              <h2>Location</h2>
              <p>
                Barnes Kapital operates privately and deliberately. We work
                closely with a small number of partners and do not maintain a
                public-facing office presence. Location details are shared
                directly when appropriate.
              </p>
              {/*
               * Animated GIF is above the fold — loading="eager" prevents
               * the browser from deprioritising it as a lazy-load candidate,
               * protecting LCP. Decorative scroll cue: alt="" + aria-hidden
               * removes it from the accessibility tree entirely.
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

          {/* ── 2. Contact — PRIMARY TOPIC, sole <h1> ────────────────────── */}
          <section className={styles.section} data-anchor="CommsInfo">
            <div className={styles.Comms}>
              <h1>Contact</h1>
              <p>
                Barnes Kapital engages selectively and with intention. We
                welcome thoughtful inquiries from aligned founders and partners.
                All correspondence is reviewed carefully and responded to with
                due consideration.
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

          {/* ── 3. Our Pace ──────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="OppHoursInfo">
            <div className={styles.OppHours}>
              <h2>Our Pace</h2>
              <p>
                We are not driven by immediacy or volume. Our work is shaped by
                patience and long-term orientation. Responses are thoughtful
                rather than rushed, and conversations unfold with care.
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

          {/* ── 4. Context ───────────────────────────────────────────────── */}
          <section className={styles.section} data-anchor="MapInfo">
            <div className={styles.Map}>
              <h2>Context</h2>
              <p>
                Barnes Kapital's work is not defined by geography, but by
                alignment. We partner where trust, shared values, and long-term
                commitment exist, regardless of physical location.
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

          {/* ── 5. Professional Presence ─────────────────────────────────── */}
          <section className={styles.section} data-anchor="SocialsInfo">
            <div className={styles.Socials}>
              <h2>Professional Presence</h2>
              <p>
                Barnes Kapital maintains a limited professional presence. When
                we communicate publicly, it is to share perspective rather than
                promotion, and to reflect on work rather than activity.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ContactInfo;
