import React from 'react';
import { motion } from 'framer-motion';

const starPath =
  'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6l130.7 68.7c23.4 12.3 50.9-7.6 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8C301.5-5.9 274.5-5.9 259.3 17.8z';

function StarIcon({ gradientId, fromColor, toColor, hoverFromColor, hoverToColor }) {
  return (
    <motion.svg
      viewBox='0 0 576 512'
      className='w-[1.2rem] h-auto'
      xmlns='http://www.w3.org/2000/svg'
      initial={{
        '--from-color': fromColor,
        '--to-color': toColor
      }}
      whileHover={{
        '--from-color': hoverFromColor,
        '--to-color': hoverToColor
      }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      style={{}}
    >
      <defs>
        <linearGradient id={gradientId} x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0%' stopColor='var(--from-color)' />
          <stop offset='100%' stopColor='var(--to-color)' />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d={starPath} />
    </motion.svg>
  );
}

function StarRating() {
  const fromColor = '#93c5fd'; // Blue-300
  const toColor = '#3b82f6'; // Blue-500
  const hoverFromColor = '#93c5fd'; // Blue-500
  const hoverToColor = '#1d4ed8'; // Blue-800

  return (
    <div className='flex space-x-[0.1rem]'>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          gradientId={`gradient-${index}`}
          fromColor={fromColor}
          toColor={toColor}
          hoverFromColor={hoverFromColor}
          hoverToColor={hoverToColor}
        />
      ))}
    </div>
  );
}

export default StarRating;
