// The approved motion language (Direction D, motion pass).
// One orchestrated hero entrance; quiet fade-ups everywhere else.

export const riseEase = [0.2, 0.7, 0.3, 1];

// Hero entrance: wrap children in a motion container using `riseContainer`,
// give each child `riseItem` — they stagger automatically.
export const riseContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } }
};

export const riseItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: riseEase } }
};

// Scroll reveal: used by the Shared/Reveal component. `visible` is a function
// of `custom` (the delay) — a variant's own transition overrides any
// component-level transition prop, so the delay must live inside the variant.
export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay } })
};
