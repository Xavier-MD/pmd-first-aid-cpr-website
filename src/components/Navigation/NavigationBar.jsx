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
        <div className='w-full max-w-7xl z-50 mx-auto px-[2rem] py-[1rem] flex justify-center items-center bg-transparent'>
          {/* Mobile Menu */}
          <div className='flex justify-start md:hidden'>
            <MobileDropdown open={open} setOpen={setOpen} />
          </div>
          {/* Logo + Desktop Tabs */}
          <div className='w-fit px-[1.5rem] py-[0.5rem] hidden md:flex justify-center space-x-[2vw] bg-transparent border-[0.09rem] border-blue-300 rounded-lg shadow-lg shadow-blue-100'>
            <a href={'/'} className='flex'>
              <div className='z-20 opacity-80'>
                <img className='w-auto h-[1.7rem] mr-[1.5vw]' src='/images/logo-no-text.png' alt='PMD Logo' />
              </div>
              <DesktopTab tabInfo={tabsInfo.homepage} moveLeft='0' />
            </a>
            <DesktopTab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.courses} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.testimonials} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.contactUs} moveLeft='0' />
          </div>
          {/* Language Toggle Dropdown */}
          <div className='absolute top-0 right-0'>
            <LanguagesDropdown />
          </div>
        </div>
      </Disclosure>
    </>
  );
};

export default NavigationBar;
