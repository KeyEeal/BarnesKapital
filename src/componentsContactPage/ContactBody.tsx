import { useRef } from "react";
import { PageMeta } from "@/seo/PageMeta";
import styles from "./css/ContactBody.module.css";
import { contactPageSchema } from "@/seo/schemas";
import { useLenisSnap } from "@/hooks/useLenisSnap";
import DR from "@/images/arrow/Arrow-down.svg";

const BASE_URL = "https://barneskapital.pages.dev/";

function ContactInfo() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLenisSnap(scrollerRef, contentRef);

  return (
    <>
      <PageMeta
        title="Contact | Barnes Kapital – Family-Owned Private Equity"
        description="Get in touch with Barnes Kapital. We welcome thoughtful inquiries from aligned founders and partners. Correspondence is reviewed carefully and responded to with due consideration."
        canonical={`${BASE_URL}contact`}
        og={{
          type: "website",
          url: `${BASE_URL}contact`,
          title: "Contact Barnes Kapital – Family-Owned Private Equity",
          description:
            "We welcome thoughtful inquiries from aligned founders and partners.",
          image: `${BASE_URL}og-image.svg`,
        }}
        twitter={{
          card: "summary_large_image",
          title: "Contact Barnes Kapital",
          description:
            "We welcome thoughtful inquiries from aligned founders and partners.",
          image: `${BASE_URL}og-image.svg`,
        }}
      />

      {/* ── Structured Data ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      {/* ── Page Shell ──────────────────────────────────────────────────── */}
      <div className={styles.pageWrapper}>
        <div className={styles.pageBackground} aria-hidden="true" />

        <div className={styles.fullpage} ref={scrollerRef}>
          <div className={styles.snapContent} ref={contentRef}>
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
              <p className={styles.swipeText}>
                <img
                  className={styles.inlineArrowGif}
                  src={DR}
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
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
