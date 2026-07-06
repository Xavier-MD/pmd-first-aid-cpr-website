import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useReducedMotion } from 'framer-motion';

// The signature device: a green ECG pulse divider. Draws itself the first time
// it scrolls into view (static under reduced motion). Uses the same
// scroll-position check as Reveal — see that component for why not
// IntersectionObserver. Keyframes live in styles/index.css.
const Lifeline = function ({ className }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    if (reducedMotion || drawn) {
      setDrawn(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;

    let ticking = false;
    const onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (el.getBoundingClientRect().top < window.innerHeight - 20) {
          setDrawn(true);
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
  }, [reducedMotion, drawn]);

  const pathStyle = reducedMotion
    ? undefined
    : {
        strokeDasharray: 1600,
        strokeDashoffset: 1600,
        animation: drawn ? 'lifeline-draw 2.2s ease-out 0.2s forwards' : 'none'
      };

  return (
    <svg
      ref={ref}
      viewBox='0 0 1180 56'
      preserveAspectRatio='none'
      aria-hidden='true'
      className={classNames('block h-14 w-full text-brand-green', className)}
    >
      <path
        d='M0 28 H430 l14 0 8-16 12 32 10-40 12 48 10-32 8 8 h14 H1180'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        style={pathStyle}
      />
    </svg>
  );
};

export default Lifeline;
