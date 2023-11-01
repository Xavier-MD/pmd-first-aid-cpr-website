import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const LandingPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const [headerInView, headerEntry] = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const headerY = useMotionValue(0);
  const headerOpacity = useTransform(headerY, [0, headerHeight], [1, 0]);
  const setHeaderY = (y) => headerY.set(y);

  return (
    <div
      className='relative bg-cover bg-center'
      style={{ backgroundImage: `url('hero.jpg')` }}
    >
      <header
        ref={headerRef}
        className='fixed w-full bg-white z-50'
        style={{ top: 0, left: 0, right: 0 }}
        onLoad={() => setHeaderHeight(headerRef.current.offsetHeight)}
      >
        <motion.div
          className='container mx-auto py-4'
          style={{ height: '100%' }}
          initial={false}
          animate={{
            y: headerY,
            opacity: headerOpacity
          }}
        >
          <h1 className='text-3xl font-bold text-center text-black'>
            First Aid Training Co.
          </h1>
        </motion.div>
      </header>
      <main
        className='relative pt-32 pb-64'
        onScroll={(e) => {
          setHeaderY(-e.target.scrollTop);
        }}
      >
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center text-black mb-10'>
            Welcome to First Aid Training Co.
          </h2>
          <p className='text-gray-600 text-center mb-20'>
            Saving lives, one training at a time.
          </p>
        </div>
      </main>
      <footer className='bg-white text-center text-black py-4'>
        <p>&copy; 2023 First Aid Training Co.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
