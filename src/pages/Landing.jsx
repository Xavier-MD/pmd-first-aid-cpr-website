import { useTranslation } from 'react-i18next';
import { WordFlipAnimation } from '../components/Landing/WordFlipAnimation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import tailwindGradientMaskImage from 'tailwind-gradient-mask-image';
import { LandingGrid } from '../components/Landing/LandingGrid';

const Landing = function () {
  const { t } = useTranslation();
  const pmd_company_name = t('pmd_company_name');
  const pmd_company_slogan_1 = t('pmd_company_slogan_1');
  const pmd_company_slogan_2 = t('pmd_company_slogan_2');
  const pmd_company_slogan_3 = t('pmd_company_slogan_3');
  const pmd_company_slogan_4 = t('pmd_company_slogan_4');
  const pmd_company_slogan_5 = t('pmd_company_slogan_5');
  const browse_courses_button = t('browse_courses_button');
  const book_course_button = t('book_course_button');
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

  const ratingIconFormatter = function (rating) {
    if (rating) {
      return [...Array(rating)].map((e, i) => (
        <FontAwesomeIcon icon={faStar} className='w-[1.5rem] h-auto text-blue-500' />
      ));
    }
  };

  return (
    <div className='w-screen h-screen overflow-hidden'>
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
      {/* Video Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-blue-200 from-0% via-transparent via-10% to-transparent to-100% pointer-events-none opacity-90' />
      <div className='absolute inset-0 bg-gradient-to-t from-blue-200 from-0% via-transparent via-10% to-transparent to-100% pointer-events-none opacity-90' />
      <div className='absolute inset-0 ////backdrop-blur-[0.1rem]'>

      </div>
    </div>
  );
};
export default Landing;
