import { useState } from 'react';

import HomeButton from './HomeButton';
import CoursesDropdown from './CoursesDropdown';
import Tab from './Tab';
import TabButton from './TabButton';
import TabIcon from './TabIcon';
import MobileDropdown from './MobileDropdown';
import LanguagesDropdown from './LanguagesDropdown';
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
      <div className='h-24 px-8 xl:px-20 bg-gradient-to-b from-blue-400 to-white border-b-[3px] border-blue-300 shadow-md'>
        {/* Mobile menu button */}
        <div className='absolute inset-y-0 left-0 pl-6 flex items-center lg:hidden'>
          <MobileDropdown open={open} setOpen={setOpen} />
        </div>
        {/* Desktop nav flexbox */}
        <div className='w-full h-full flex justify-center lg:justify-between'>
          <div className='hidden max-w-xl lg:flex flex-1 justify-around items-center'>
            <Tab tabInfo={tabsInfo.homepage} moveLeft='8' />
            <Tab tabInfo={tabsInfo.aboutUs} moveLeft='12' />
            {currentCourseTab}
            <Tab tabInfo={tabsInfo.testimonials} moveLeft='16' />
          </div>
          <div className='mt-2 -mb-10 flex justify-center'>
            <div className='mx-2 p-3 bg-gradient-to-b from-blue-300 to-white border-[3px] border-blue-300 rounded-full shadow-md shadow-slate-400'>
              <HomeButton />
            </div>
          </div>
          <div className='max-w-xl hidden lg:flex flex-1 justify-around items-center'>
            <LanguagesDropdown />
            <TabButton tabInfo={tabsInfo.contactUs} />
          </div>
        </div>
        {/* Mobile contact button */}
        <div className='absolute inset-y-0 right-0 pr-6 flex items-center lg:hidden'>
          <TabIcon tabInfo={tabsInfo.contactUs} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
