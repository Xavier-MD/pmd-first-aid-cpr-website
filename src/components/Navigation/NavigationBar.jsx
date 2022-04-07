import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import HomeButton from './HomeButton';
import CoursesDropdown from './CoursesDropdown';
import Tab from './Tab';
import TabButton from './TabButton';
import TabIcon from './TabIcon';
import MobileTab from './MobileTab';

const tabsInfo = {
  homepage: { name: 'Home', href: '/' },
  aboutUs: { name: 'About Us', href: '/about-us' },
  courses: { name: 'Courses', href: '/courses' },
  testimonials: { name: 'Testimonials', href: '/testimonials' },
  contactUs: { name: 'Contact Us', href: '/contact-us' }
};

const NavigationBar = function ({ currentTab, setCurrentTab, setCourse }) {
  return (
    <>
      <Disclosure
        as='nav'
        className='bg-gradient-to-b from-blue-400 via-blue-200 to-white'
      >
        {({ open }) => (
          <>
            <div className='mx-auto px-2 md:px-6 lg:px-8'>
              <div className='relative flex justify-between h-24'>
                <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center ml-4 mt-6 py-2 px-4 rounded-md text-blue-500 bg-blue-200 border-2 border-blue-400 border-opacity-50 focus:border-opacity-90 bg-opacity-25'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                  <div className='flex items-center mt-12'>
                    <HomeButton />
                  </div>
                  <div className='hidden md:flex w-full justify-between lg:px-[5%] xl:px-[10%] mt-[4.25rem]'>
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <Tab tabInfo={tabsInfo.homepage} />
                    <Tab tabInfo={tabsInfo.aboutUs} />
                    <CoursesDropdown />
                    <Tab tabInfo={tabsInfo.testimonials} />
                  </div>
                </div>
                <div className='hidden md:flex items-center ml-3 mt-[4.25rem]'>
                  <TabButton tabInfo={tabsInfo.contactUs} />
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center mr-4 mt-6 md:hidden'>
                  <TabIcon tabInfo={tabsInfo.contactUs} />
                </div>
              </div>
            </div>
            <Disclosure.Panel className='md:hidden'>
              <div className='pt-2 pb-4 space-y-1'>
                {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                <MobileTab tabInfo={tabsInfo.homepage} />
                <MobileTab tabInfo={tabsInfo.aboutUs} />
                <MobileTab tabInfo={tabsInfo.courses} />
                <MobileTab tabInfo={tabsInfo.testimonials} />
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className='flex justify-center'>
        <div className='block h-[2px] w-[100%] max-w-7xl mt-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
      </div>
    </>
  );
};

export default NavigationBar;
