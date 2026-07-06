import classNames from 'classnames';

// Small verification chip with a green check. `glass` variant sits on the video
// hero; `light` variant sits on light backgrounds.
const variantClasses = {
  glass: 'bg-white/[0.13] border border-white/[0.22] text-white backdrop-blur-md',
  light: 'bg-white border border-brand-line text-brand-ink shadow-chip'
};

const TrustChip = function ({ variant = 'light', className, children }) {
  return (
    <span
      className={classNames(
        'inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.9rem] font-bold',
        variantClasses[variant],
        className
      )}
    >
      <svg width='18' height='18' viewBox='0 0 20 20' aria-hidden='true' className='shrink-0'>
        <circle cx='10' cy='10' r='10' fill='#23AB39' />
        <path d='M5.5 10.5l3 3 6-6.5' stroke='#fff' strokeWidth='2' fill='none' />
      </svg>
      {children}
    </span>
  );
};

export default TrustChip;
