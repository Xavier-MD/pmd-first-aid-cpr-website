import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Tab from './Tab';

import { useTranslation } from 'react-i18next';
import LanguagesDropdown from './LanguagesDropdown';
import MobileDropdown from './MobileDropdown';

const NavigationBarRemake = function () {
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
        <div className='w-full max-w-7xl z-10 mx-auto grid grid-cols-7 bg-transparent'>
          {/* Mobile Menu */}
          <div className='flex md:hidden col-span-3'>
            <MobileDropdown open={open} setOpen={setOpen} />
          </div>
          {/* Desktop Tabs Left */}
          <div className='pt-[0.8rem] hidden md:grid grid-cols-3 col-span-3'>
            <Tab tabInfo={tabsInfo.homepage} moveLeft='0' />
            <Tab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <Tab tabInfo={tabsInfo.courses} moveLeft='0' />
          </div>
          {/* Logo */}
          <div className='py-[0.5rem] z-20 flex justify-center items-end col-span-1'>
            <img className='w-auto h-[3.5rem]' src='/images/logo-large-text.png' alt='PMD Logo' />
          </div>
          {/* Desktop Tabs Right */}
          <div className='pt-[0.8rem] hidden md:grid grid-cols-3 col-span-3 '>
            <Tab tabInfo={tabsInfo.testimonials} moveLeft='0' />
            <Tab tabInfo={tabsInfo.contactUs} moveLeft='0' />
            <LanguagesDropdown />
          </div>
        </div>
      </Disclosure>
    </>
  );
};

export default NavigationBarRemake;
