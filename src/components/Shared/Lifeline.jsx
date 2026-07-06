import classNames from 'classnames';
import { useReducedMotion } from 'framer-motion';

// The signature device: a green ECG pulse divider. Draws itself once when
// mounted (skipped under reduced motion). Keyframes live in styles/index.css.
const Lifeline = function ({ className }) {
  const reducedMotion = useReducedMotion();
  return (
    <svg
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
        style={
          reducedMotion
            ? undefined
            : { strokeDasharray: 1600, strokeDashoffset: 1600, animation: 'lifeline-draw 2.2s ease-out 0.3s forwards' }
        }
      />
    </svg>
  );
};

export default Lifeline;
