import { useTranslation } from 'react-i18next';
import { WordFlipAnimation } from '../components/Landing/WordFlipAnimation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import tailwindGradientMaskImage from 'tailwind-gradient-mask-image';
import { LandingGrid } from '../components/Landing/LandingGrid';
import NavigationBar from '../components/Navigation/NavigationBar';
import Footer from '../components/Navigation/Footer';
import StarRating from '../components/Landing/StarRating';

const Landing = function () {
  const { t } = useTranslation();
  const pmd_company_name = t('pmd_company_name');
  const pmd_company_slogan_1 = t('pmd_company_slogan_1');
  const pmd_company_slogan_2 = t('pmd_company_slogan_2');
  const pmd_company_slogan_3 = t('pmd_company_slogan_3');
  const pmd_company_slogan_4 = t('pmd_company_slogan_4');
  const pmd_company_slogan_5 = t('pmd_company_slogan_5');
  const pmd_reviews_text = t('pmd_reviews_text');
  const browse_courses_button = t('browse_courses_button');
  const book_course_button = t('book_course_button');
  const pay_online_button = t('pay_online_button');
  const pop_courses_section_title = t('pop_courses_section_title');
  const pop_courses_section_text = t('pop_courses_section_text');
  const pop_course_1_title = t('pop_course_1_title');
  const pop_course_2_title = t('pop_course_2_title');
  const pop_course_3_title = t('pop_course_3_title');
  const pop_course_4_title = t('pop_course_4_title');
  const pop_course_1_text = t('pop_course_1_text');
  const pop_course_2_text = t('pop_course_2_text');
  const pop_course_3_text = t('pop_course_3_text');
  const pop_course_4_text = t('pop_course_4_text');
  const contact_redirect_section_title = t('contact_redirect_section_title');
  const contact_redirect_section_text = t('contact_redirect_section_text');
  const contact_redirect_section_button = t('contact_redirect_section_button');
  const authorizations_section_title = t('authorizations_section_title');
  const authorizations_section_text = t('authorizations_section_text');

  const courses = [
    {
      name: pop_course_1_title,
      href: '/courses/standard-first-aid',
      imageSrc: '/images/standard-first-aid-picture.jpg',
      imageAlt: 'SFA Picture',
      description: pop_course_1_text
    },
    {
      name: pop_course_2_title,
      href: '/courses/emergency-first-aid',
      imageSrc: '/images/emergency-first-aid-picture.jpg',
      imageAlt: 'EFA Picture',
      description: pop_course_2_text
    },
    {
      name: pop_course_3_title,
      href: '/courses/cpr-aed',
      imageSrc: '/images/cpr-aed-picture.jpg',
      imageAlt: 'CPR AED Picture',
      description: pop_course_3_text
    },
    {
      name: pop_course_4_title,
      href: '/courses/basic-life-support',
      imageSrc: '/images/bls-picture.jpg',
      imageAlt: 'BLS Picture',
      description: pop_course_4_text
    }
  ];

  return (
    <div className='w-screen h-screen'>
      {/* Video Background */}
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className='w-full h-full object-cover'
        style={{ objectPosition: 'center 40%' }}
      >
        <source src='/assets/videos/city-background.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {/* Video Vignette Overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent via-[45%] to-black'>
        {/* Landing Page Content */}
        <div className='w-full h-full flex flex-col'>
          {/* Navigation Top Bar */}
          <div className='w-full h-fit backdrop-blur-[1.4rem] shadow-md'>
            <div className='absolute inset-0 bg-black opacity-20 z-0' />
            <div className='relative z-10'>
              <NavigationBar isLandingPage={true} />
              <div className='w-full h-[0.05rem] bg-slate-600 opacity-50' />
            </div>
          </div>
          {/* Main Content */}
          <div className='w-full h-full flex flex-col justify-center items-center '>
            {/* <motion.div
              key='sloganText'
              className='text-2xl font-afacadFlux font-bold text-slate-900'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className='text-center space-y-[0.1rem]'>
                <p className='mr-[0.35rem]'>{pmd_company_slogan_4}</p>
                <WordFlipAnimation
                  words={[pmd_company_slogan_1, pmd_company_slogan_2, pmd_company_slogan_3]}
                  duration={2500}
                />
                <p className=''>{pmd_company_slogan_5}</p>
              </div>
            </motion.div> */}
            <img src='/assets/images/logo-text-bold.png' alt='PMD Logo' className='w-[17rem] pt-[3rem] pb-[0.8rem]' />
            <div className='flex pb-[1.5rem] gap-[1rem]'>
              <StarRating />
              <p className='mt-[0.1rem] mr-[0.15rem] text-[0.95rem] font-glacialIndifference text-[#535353] tracking-[0.05rem]'>
                100+ {pmd_reviews_text}
              </p>
            </div>
            <div className='mb-[5rem] grid grid-flow-row grid-cols-2 gap-[1rem]'>
              <motion.a
                href='/contact'
                style={{
                  '--gradient-from': '#60a5fa', // Initial gradient 'from' color (blue-300)
                  '--gradient-to': '#2563eb', // Initial gradient 'to' color (blue-500)
                  '--text-color': '#dbeafe' // Initial text color (white)
                }}
                whileHover={{
                  '--gradient-from': '#60a5fa', // Hover gradient 'from' color (blue-500)
                  '--gradient-to': '#1d4ed8', // Hover gradient 'to' color (blue-800)
                  '--text-color': '#ffffff' // Hover text color (light blue)
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='flex items-center justify-center px-8 py-3 rounded-md bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] text-[color:var(--text-color)] shadow-lg shadow-gray-500 font-glacialIndifference'
              >
                {book_course_button}
              </motion.a>
              <motion.a
                href='https://buy.stripe.com/28EdR8gwAgqcc7b6SWa7C00'
                style={{
                  '--gradient-from': '#eff6ff',
                  '--gradient-to': '#dbeafe', // Light blue
                  '--text-color': '#3b82f6' // Initial text color (white)
                }}
                whileHover={{
                  '--gradient-from': '#eff6ff',
                  '--gradient-to': '#bfdbfe',
                  '--text-color': '#2563eb' // Hover text color (light blue)// Darker blue
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut'
                }}
                className='flex items-center justify-center px-8 py-3 rounded-md bg-gradient-to-b from-[var(--gradient-from)] to-[var(--gradient-to)] text-[color:var(--text-color)] shadow-lg shadow-gray-400 font-glacialIndifference'
              >
                {pay_online_button}
              </motion.a>
            </div>
          </div>
          {/* Navigation Footer */}
          <div className='w-full h-fit'>
            <Footer />
          </div>
          {/*
          <div className='mt-[2rem] mr-[6rem] flex justify-center'>
            <div className='w-[40rem] grid grid-cols-2 gap-1 overflow-hidden rounded-2xl bg-blue-100 shadow-inner shadow-blue-300'>
              <div className='my-[1rem] ml-[1rem] mr-[0.5rem] flex justify-center items-center bg-white rounded-md shadow-md'>
                <img alt='Statamic' src='/images/red-cross-picture.png' className='w-[12rem]' />
              </div>
              <div className='py-[1rem] pl-[0.5rem] pr-[1rem] flex justify-center items-center'>
                <img alt='SavvyCal' src='/images/wsib_badge.png' className='rounded-md shadow-md' />
              </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};
export default Landing;
