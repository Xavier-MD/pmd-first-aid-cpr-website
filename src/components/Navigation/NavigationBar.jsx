import { useState } from 'react';

import HomeButton from './HomeButton';
import CoursesDropdown from './CoursesDropdown';
import Tab from './Tab';
import TabButton from './TabButton';
import TabIcon from './TabIcon';
import MobileDropdown from './MobileDropdown';

const tabsInfo = {
  homepage: { name: 'Home', href: '/' },
  aboutUs: { name: 'About Us', href: '/about-us' },
  courses: { name: 'Courses', href: '/courses' },
  testimonials: { name: 'Testimonials', href: '/testimonials' },
  contactUs: { name: 'Contact Us', href: '/contact-us' }
};

const NavigationBar = function () {
  const [open, setOpen] = useState(false);
  let currentCourseTab = {};
  if (window.location.pathname === '/courses') {
    currentCourseTab = <Tab tabInfo={tabsInfo.courses} moveLeft='10' />;
  } else {
    currentCourseTab = <CoursesDropdown moveLeft='10' />;
  }

  return (
    <nav className='w-full h-auto fixed z-20'>
      <div className='h-[85px] px-8 xl:px-20 bg-gradient-to-b from-blue-400 via-blue-200 to-blue-50 border-b-[3px] border-blue-300'>
        {/* Mobile menu button */}
        <div className='absolute inset-y-0 left-0 pl-6 flex items-center lg:hidden'>
          <MobileDropdown open={open} setOpen={setOpen} tabsInfo={tabsInfo} />
        </div>
        {/* Desktop nav flexbox */}
        <div className='w-full h-full flex justify-center lg:justify-between'>
          <div className='hidden max-w-xl lg:flex flex-1 justify-around items-center'>
            <Tab tabInfo={tabsInfo.homepage} moveLeft='8' />
            <Tab tabInfo={tabsInfo.aboutUs} moveLeft='12' />
            {currentCourseTab}
            <Tab tabInfo={tabsInfo.testimonials} moveLeft='16' />
          </div>
          <div className='mt-2 -mb-[47px] flex justify-center'>
            <div className='mx-2 p-3 bg-gradient-to-b from-blue-300 to-white border-[3px] border-blue-300 rounded-full shadow-md shadow-slate-400'>
              <HomeButton />
            </div>
          </div>
          <div className=' max-w-xl hidden lg:flex flex-1 justify-center items-center'>
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
