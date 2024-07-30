import { useState } from 'react';

import HomeButton from './HomeButton_archived';
import CoursesDropdown from './CoursesDropdown_archived';
import Tab from '../Navigation/Tab';
import TabButton from './TabButton_archived';
import TabIcon from './TabIcon_archived';
import MobileDropdown from '../Navigation/MobileDropdown';
import LanguagesDropdown from '../Navigation/LanguagesDropdown';
import { useTranslation } from 'react-i18next';

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
    contactUs: { name: contact_us_tab, href: '/contact-us' }
  };

  const [open, setOpen] = useState(false);
  let currentCourseTab = {};
  if (window.location.pathname === '/courses') {
    currentCourseTab = <Tab tabInfo={tabsInfo.courses} moveLeft='10' />;
  } else {
    currentCourseTab = <CoursesDropdown moveLeft='10' />;
  }

  return (
    <nav className='w-full h-auto fixed z-20'>
      <div className='h-16 px-8 xl:px-20 bg-gradient-to-b from-blue-300 to-white'>
        {/* Mobile menu button */}
        <div className='absolute inset-y-0 left-0 pl-6 flex items-center lg:hidden'>
          <MobileDropdown open={open} setOpen={setOpen} />
        </div>
        {/* Desktop nav flexbox */}
        <div className='w-full h-full flex justify-center lg:justify-between'>
          <div className='flex justify-center'>
            <div className='p-[0.60vh] bg-transparent'>
              <HomeButton />
            </div>
          </div>
          <div className='hidden max-w-xl lg:flex flex-1 justify-around items-center'>
            <Tab tabInfo={tabsInfo.homepage} moveLeft='8' />
            <Tab tabInfo={tabsInfo.aboutUs} moveLeft='12' />
            {currentCourseTab}
            <Tab tabInfo={tabsInfo.testimonials} moveLeft='16' />
          </div>
          <div className='max-w-xl hidden lg:flex flex-1 justify-around items-center'>
            <LanguagesDropdown />
            <TabButton tabInfo={tabsInfo.contactUs} />
          </div>
        </div>
        {/* Mobile contact button */}
        <div className='absolute inset-y-0 right-0 pr-6 flex items-center lg:hidden'>
          <LanguagesDropdown />
          <TabIcon tabInfo={tabsInfo.contactUs} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// Screenshot 1
  <>
      {/* Navbar */}
      <Disclosure as='nav'>
        <div className='w-full max-w-7xl z-50 mx-auto flex bg-transparent'>
          {/* Mobile Menu */}
          <div className='mt-[1rem] ml-[5vw] flex flex-1 md:hidden justify-start'>
            <MobileDropdown open={open} setOpen={setOpen} />
          </div>
          {/* Desktop Tabs Left */}
          <div className='pt-[1rem] pr-[0.2rem] hidden md:flex flex-1 justify-end items-end space-x-[2rem] lg:space-x-[3.5rem]'>
            <DesktopTab tabInfo={tabsInfo.homepage} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.courses} moveLeft='0' />
          </div>
          {/* Logo */}
          <a
            href='/'
            className='px-[2rem] lg:px-[3.5rem] pt-[0.5rem] transition ease-in-out hover:-translate-y-[0.05rem] hover:scale-[110%] duration-200'
          >
            <img className='w-auto h-[3.5rem]' src='/images/logo-large-text.png' alt='PMD Logo' />
          </a>
          {/* Desktop Tabs Right */}
          <div className='pt-[1rem] pr-[0.2rem] hidden md:flex flex-1 justify-start items-end space-x-[2rem] lg:space-x-[3.5rem]'>
            <DesktopTab tabInfo={tabsInfo.testimonials} moveLeft='0' />
            <DesktopTab tabInfo={tabsInfo.contactUs} moveLeft='0' />
            <LanguagesDropdown />
          </div>
          {/* Mobile Language Toggle Dropdown */}
          <div className='mt-[1rem] mr-[5vw] flex flex-1 md:hidden justify-end'>
            <LanguagesDropdown />
          </div>
        </div>
      </Disclosure>
    </>
