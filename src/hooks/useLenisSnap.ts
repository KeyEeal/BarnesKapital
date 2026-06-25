import { useEffect, type RefObject } from "react";
import Lenis from "lenis";
import Snap from "lenis/snap";
import "lenis/dist/lenis.css";

const snapEasing = (time: number) => 1 - Math.pow(1 - time, 3);

export function useLenisSnap(
  wrapperRef: RefObject<HTMLElement | null>,
  contentRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!wrapper || !content || prefersReducedMotion) return;

    const sections = Array.from(content.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement && child.tagName === "SECTION",
    );

    if (sections.length === 0) return;

    const lenis = new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      overscroll: false,
    });

    const snap = new Snap(lenis, {
      type: "mandatory",
      duration: 0.78,
      easing: snapEasing,
      debounce: 120,
    });

    snap.addElements(sections, { align: "start" });
    lenis.resize();
    snap.resize();

    return () => {
      snap.destroy();
      lenis.destroy();
    };
  }, [wrapperRef, contentRef]);
}
