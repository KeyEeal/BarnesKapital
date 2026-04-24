import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  og?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

/**
 * Lightweight, dependency-free page metadata manager.
 * Uses useEffect to mutate document.head directly — no react-helmet needed.
 * Compatible with React 19 and strict npm ci environments.
 */
export function PageMeta({
  title,
  description,
  canonical,
  noindex = false,
  og,
  twitter,
}: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const metaTags: HTMLMetaElement[] = [];
    const linkTags: HTMLLinkElement[] = [];

    function setMeta(name: string, content: string, property = false) {
      const selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (property) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
        metaTags.push(el);
      }
      el.setAttribute("content", content);
    }

    if (description) setMeta("description", description);
    setMeta("robots", noindex ? "noindex, follow" : "index, follow");

    if (og) {
      if (og.type) setMeta("og:type", og.type, true);
      if (og.title) setMeta("og:title", og.title, true);
      if (og.description) setMeta("og:description", og.description, true);
      if (og.image) setMeta("og:image", og.image, true);
      if (og.url) setMeta("og:url", og.url, true);
    }

    if (twitter) {
      if (twitter.card) setMeta("twitter:card", twitter.card);
      if (twitter.title) setMeta("twitter:title", twitter.title);
      if (twitter.description)
        setMeta("twitter:description", twitter.description);
      if (twitter.image) setMeta("twitter:image", twitter.image);
    }

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
        linkTags.push(link);
      }
      link.setAttribute("href", canonical);
    }

    return () => {
      document.title = previousTitle;
      metaTags.forEach((el) => el.remove());
      linkTags.forEach((el) => el.remove());
    };
  }, [title, description, canonical, noindex, og, twitter]);

  return null;
}
