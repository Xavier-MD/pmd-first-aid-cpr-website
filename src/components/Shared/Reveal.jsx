import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { fadeUp } from './motionVariants';

// Fades content up when it scrolls into view. Deliberately uses a
// scroll-position check instead of IntersectionObserver: IO can miss the
// crossing entirely on fast scroll jumps (End key, anchor links), leaving
// content permanently invisible.
const Reveal = function ({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || shown) {
      setShown(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;

    let ticking = false;
    const onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (el.getBoundingClientRect().top < window.innerHeight - 40) {
          setShown(true);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reducedMotion, shown]);

  return (
    <motion.div
      ref={ref}
      className={className}
      custom={delay}
      variants={fadeUp}
      initial={reducedMotion ? 'visible' : 'hidden'}
      animate={shown ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
