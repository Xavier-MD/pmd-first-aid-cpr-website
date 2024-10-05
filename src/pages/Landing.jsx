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

  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set a timer to hide the logo after 3 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(false);
      // Set another timer to show the text after the logo fade-out completes
      setTimeout(() => {
        setShowText(true);
      }, 1000); // This matches the fade-out duration
    }, 3000); // Show logo for 3 seconds

    return () => clearTimeout(logoTimer);
  }, []);

  const ratingIconFormatter = function (rating) {
    if (rating) {
      return [...Array(rating)].map((e, i) => (
        <FontAwesomeIcon icon={faStar} className='w-[1.5rem] h-auto text-blue-500' />
      ));
    }
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <motion.div
            key='text1'
            className='text-3xl font-font2 font-light text-slate-700'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className=''>
              <p className='mr-[0.35rem]'>{pmd_company_slogan_4}</p>
              <WordFlipAnimation
                words={[pmd_company_slogan_1, pmd_company_slogan_2, pmd_company_slogan_3]}
                duration={2500}
              />
              <p className=''>{pmd_company_slogan_5}</p>
            </div>
          </motion.div>
          <div className='mt-[1rem] flex'>
            {ratingIconFormatter(5)} <p className='mt-[0.3rem] ml-[1rem]'>100+ Reviews</p>
          </div>

          <div className='mt-5 flex'>
            <div className='rounded-md shadow min-w-[15rem]'>
              <a
                href='/courses'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-xl md:px-10 shadow-md'
              >
                {browse_courses_button}
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 min-w-[15rem]'>
              <a
                href='/contact-us'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-100 md:py-4 md:text-xl md:px-10 shadow-md'
              >
                {book_course_button}
              </a>
            </div>
          </div>
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
        </div>
        <div>
          <LandingGrid />
        </div>
      </div>
    </>
  );
};
export default Landing;
