import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = function ({ message, name, company, rating, isPaused }) {
  const identityFormatter = function (company) {
    if (company) {
      return `${company}`;
    } else {
      return;
    }
  };

  const ratingIconFormatter = function (rating) {
    if (rating) {
      return [...Array(rating)].map((e, i) => (
        <FontAwesomeIcon icon={faStar} className='w-[1rem] h-auto text-blue-500' />
      ));
    }
  };

  const quotationMarksImage = function(isPaused) {
    return (
      <AnimatePresence exitBeforeEnter>
        {isPaused ? (
          <motion.svg
            key='pause-icon'
            className='h-[3.5rem] fill-blue-500'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M20 5L20 19C20 20.6569 18.6569 22 17 22L16 22C14.3431 22 13 20.6569 13 19L13 5C13 3.34314 14.3431 2 16 2L17 2C18.6569 2 20 3.34315 20 5Z'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8 2C9.65685 2 11 3.34315 11 5L11 19C11 20.6569 9.65685 22 8 22L7 22C5.34315 22 4 20.6569 4 19L4 5C4 3.34314 5.34315 2 7 2L8 2Z'
            />
          </motion.svg>
        ) : (
          <motion.svg
            key='quotation-marks'
            className='h-[3.5rem] scale-x-[-1] fill-blue-500'
            version='1.1'
            id='_x32_'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
          >
            <g>
              <path
                d='M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487
                c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389
                c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z'
              />
              <path
                d='M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487
                c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389
                C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z'
              />
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className='h-fit max-w-4xl mx-auto flex flex-col items-center text-center text-balance'>
        {quotationMarksImage(isPaused)}
        <p className='mt-[1.5rem] mb-[1.7rem] font-font4 text-[1.05rem] text-gray-500'>"{message}"</p>
        <p className='font-font4 font-semibold text-[0.9rem]'>{name},</p>
        <p className='mt-[0.1rem] font-font4 font-light text-[0.9rem]'>{identityFormatter(company)}</p>
        <div className='mt-[0.5rem]'>{ratingIconFormatter(rating)}</div>
      </div>
    </>
  );
};
export default TestimonialCard;
