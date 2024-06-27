import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { faBars, faBell, faX, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tab from './Tab';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import HomeButton from './HomeButton';
import TabButton from './TabButton';
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
    contactUs: { name: contact_us_tab, href: '/contact-us' }
  };

  const [open, setOpen] = useState(false);

  return (
    <Disclosure as='nav' className={classNames('/' === window.location.pathname ? 'bg-opacity-50' : 'bg-opacity-30', 'bg-blue-100 z-10 w-full fixed backdrop-blur-lg')}>
      <div className='flex justify-between mx-auto max-w-screen-xl px-[1.5rem]'>
        <div className='flex items-center md:hidden'>
          <MobileDropdown open={open} setOpen={setOpen} />
          <LanguagesDropdown />
        </div>
        <div className='flex justify-around'>
          <div className='hidden md:flex justify-center items-center'>
            <div className='p-[0.80vh] bg-transparent'>
              <HomeButton />
            </div>
          </div>
          <div className='hidden md:ml-6 md:flex md:space-x-8'>
            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            <Tab tabInfo={tabsInfo.homepage} moveLeft='0' />
            <Tab tabInfo={tabsInfo.aboutUs} moveLeft='0' />
            <Tab tabInfo={tabsInfo.courses} moveLeft='0' />
            <Tab tabInfo={tabsInfo.testimonials} moveLeft='0' />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='max-w-xl hidden lg:flex flex-1 justify-around items-center'>
            <LanguagesDropdown />
            <TabButton tabInfo={tabsInfo.contactUs} />
          </div>
        </div>
      </div>
      <div className='w-[75vw] h-[0.05rem] bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto' />
    </Disclosure>
  );
};

export default NavigationBarRemake;
