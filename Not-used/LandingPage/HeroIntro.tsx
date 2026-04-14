import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import styles from "./css/HeroIntro.module.css";

function HeroIntro() {
  // Scroll tracking
  const { scrollY } = useScroll();
  // Motion value for hero height
  const height = useMotionValue(0);
  // Map scrollY → height (63vh → 20vh over 0–800px)
  const heroHeight = useTransform(scrollY, [0, 800], [63, 20]); // numeric
  // Smooth spring for smooth scroll scrub effect
  const springHeight = useSpring(heroHeight, { stiffness: 150, damping: 25 });
  // Convert numeric vh value → CSS string for style
  const heightStyle = useMotionTemplate`${springHeight}vh`;
  // Initial drop-down effect on mount
  useEffect(() => {
    height.set(63); // starting height 63vh
  }, [height]);

  return (
    <motion.div
      className={styles.heroIntro}
      style={{
        height: heightStyle,
      }}
    >
      <h3 className={styles.intro1}>
        Faith
        <p className={styles.intro1P}>
          Barnes Kapital is a small, self-funded, family-owned private equity
          firm. We invest patiently, partner deliberately, and steward capital
          with conviction—built to last, not to impress.
        </p>
      </h3>
    </motion.div>
  );
}

export default HeroIntro;
