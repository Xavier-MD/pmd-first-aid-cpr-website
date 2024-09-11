import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import DesktopTab from './DesktopTab';

import { useTranslation } from 'react-i18next';
import LanguagesDropdown from './LanguagesDropdown';
import MobileDropdown from './MobileDropdown';

const NavigationBar = function () {
  const { t } = useTranslation();

  const home_tab = t('home_tab');
  const about_us_tab = t('about_us_tab');
  const courses_tab = t('courses_tab');
  const testimonials_tab = t('testimonials_tab');
  const contact_us_tab = t('contact_us_tab');

  const tabsInfo = {
    homepage: { name: home_tab, href: '/' },
    aboutUs: { name: about_us_tab, href: '/about-us' },
    courses: { name: courses_tab, href: '/courses' },
    testimonials: { name: testimonials_tab, href: '/testimonials' },
    contactUs: { name: contact_us_tab, href: '/contact' }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Disclosure as='nav'>
        <div className='w-full max-w-7xl z-50 mx-auto px-[3rem] grid grid-cols-3 md:grid-cols-7 lg:grid-cols-9 bg-transparent'>
          {/* Mobile Menu */}
          <div className='mt-[1.5rem] ml-[4vw] flex flex-1 md:hidden justify-start'>
            <MobileDropdown open={open} setOpen={setOpen} />
          </div>
          {/* PMD Logo */}
          <a href='/' className='flex justify-center items-center md:justify-start lg:col-span-2'>
            <img
              className='w-auto h-[4rem] md:h-[2.5rem] mt-[1rem] mr-[0.7rem]'
              src='/images/logo-no-text.png'
              alt='PMD Logo'
            />
            <div className='mt-[1.5rem] font-font4 font-medium tracking-tight bg-gradient-to-r from-green-400 via-slate-700 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient'>
              <p className='invisible lg:visible'>PMD First Aid & CPR</p>
            </div>
          </a>
          {/* Desktop Tabs */}
          <div className='mt-[1.5rem] hidden md:flex justify-center items-center space-x-[3rem] col-start-2 lg:col-start-3 col-span-5 text-nowrap'>
            <DesktopTab tabInfo={tabsInfo.homepage} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.courses} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.testimonials} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.contactUs} moveLeft='0' />
          </div>
          {/* Mobile Language Toggle Dropdown */}
          <div className='mt-[1.5rem] mr-[4vw] md:mr-[0rem] flex justify-end items-center md:col-start-7 lg:col-start-9'>
            <LanguagesDropdown />
          </div>
        </div>
      </Disclosure>
    </>
  );
};

export default NavigationBar;
