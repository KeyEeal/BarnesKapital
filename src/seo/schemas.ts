/**
 * JSON-LD Structured Data schemas for Barnes Kapital.
 * Consolidated in one file to avoid duplicate declarations per route.
 */

const BASE_URL = "https://barneskapital.pages.dev/";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Barnes Kapital",
      url: `${BASE_URL}`,
      description:
        "Barnes Kapital is a self-funded, family-owned private equity firm investing its own capital alongside a select number of businesses, guided by Faith, Family, and Funds.",
      founders: [
        {
          "@type": "Person",
          name: "Konrad Barnes",
          jobTitle: "Co-Founder",
          worksFor: { "@id": `${BASE_URL}#organization` },
        },
        {
          "@type": "Person",
          name: "Bianca Barnes",
          jobTitle: "Co-Founder",
          worksFor: { "@id": `${BASE_URL}#organization` },
        },
      ],
    },
  ],
};

export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}about#aboutpage`,
      url: `${BASE_URL}about`,
      name: "Our Story | Barnes Kapital",
      description:
        "The founding story, mission, vision, values, and investment philosophy of Barnes Kapital—a self-funded, family-owned private equity firm.",
      isPartOf: {
        "@id": `${BASE_URL}#website`,
      },
      about: {
        "@id": `${BASE_URL}#organization`,
      },
    },
  ],
};

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}contact#contactpage`,
      url: `${BASE_URL}contact`,
      name: "Contact | Barnes Kapital",
      description:
        "Barnes Kapital welcomes thoughtful inquiries from aligned founders and partners. Correspondence is reviewed carefully and responded to with due consideration.",
      isPartOf: {
        "@id": `${BASE_URL}#website`,
      },
      about: {
        "@id": `${BASE_URL}#organization`,
      },
    },
  ],
};