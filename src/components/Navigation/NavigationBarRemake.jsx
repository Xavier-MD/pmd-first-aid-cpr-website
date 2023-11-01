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
import CoursesDropdown from './CoursesDropdown';

const NavigationBarRemake = function() {
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
     <Disclosure as='nav' className='bg-white shadow'>
       {({ open }) => (
         <>
           <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
             <div className='flex h-16 justify-between'>
               <div className='flex'>
                 <div className='-ml-2 mr-2 flex items-center md:hidden'>
                   {/* Mobile menu button */}
                   <MobileDropdown open={open} setOpen={setOpen} />
                 </div>
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
           </div>

           <Disclosure.Panel className='md:hidden'>
             <div className='space-y-1 pt-2 pb-3'>
               {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
               <Disclosure.Button
                 as='a'
                 href='/'
                 className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6'
               >
                 Home
               </Disclosure.Button>
               <Disclosure.Button
                 as='a'
                 href='/about-us'
                 className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'
               >
                 About Us
               </Disclosure.Button>
               <Disclosure.Button
                 as='a'
                 href='/courses'
                 className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'
               >
                 Courses
               </Disclosure.Button>
               <Disclosure.Button
                 as='a'
                 href='/testimonials'
                 className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6'
               >
                 Testimonials
               </Disclosure.Button>
             </div>
             <div className='border-t border-gray-200 pt-4 pb-3'>
               <div className='flex items-center px-4 sm:px-6'>
                 <div className='flex-shrink-0'>
                   <img
                     className='h-10 w-10 rounded-full'
                     src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                     alt=''
                   />
                 </div>
                 <div className='ml-3'>
                   <div className='text-base font-medium text-gray-800'>
                     Tom Cook
                   </div>
                   <div className='text-sm font-medium text-gray-500'>
                     tom@example.com
                   </div>
                 </div>
                 <button
                   type='button'
                   className='ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                 >
                   <span className='sr-only'>View notifications</span>
                   <FontAwesomeIcon
                     icon={faBell}
                     className='h-6 w-6'
                     aria-hidden='true'
                   />
                 </button>
               </div>
             </div>
           </Disclosure.Panel>
         </>
       )}
     </Disclosure>
   );
 }

export default NavigationBarRemake;