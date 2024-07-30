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
        <div className='w-full max-w-7xl z-50 mx-auto flex bg-transparent'>
          {/* Mobile Menu */}
          <div className='flex md:hidden justify-start'>
            <MobileDropdown open={open} setOpen={setOpen} />
          </div>
          {/* Desktop Tabs Left */}
          <div className='pt-[1rem] hidden md:flex flex-1 justify-end items-end space-x-[3rem]'>
            <DesktopTab tabInfo={tabsInfo.homepage} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.courses} moveLeft='0' />
          </div>
          {/* Logo */}
          <a
            href='/'
            className='pl-[2.5rem] pr-[2.5rem] pt-[0.5rem] transition ease-in-out hover:-translate-y-[0.05rem] hover:scale-[110%] duration-200'
          >
            <img className='w-auto h-[3.5rem]' src='/images/logo-large-text.png' alt='PMD Logo' />
          </a>
          {/* Desktop Tabs Right */}
          <div className='pt-[1rem] hidden md:flex flex-1 justify-start items-end space-x-[3rem]'>
            <DesktopTab tabInfo={tabsInfo.testimonials} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.contactUs} moveLeft='0' />
            <LanguagesDropdown />
          </div>
          {/* Language Toggle Dropdown */}
        </div>
      </Disclosure>
    </>
  );
};

export default NavigationBar;
