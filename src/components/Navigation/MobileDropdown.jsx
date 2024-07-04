/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MobileTab from './MobileTab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faAngleUp,
  faHouse,
  faPeopleGroup,
  faFolderClosed,
  faSquareCheck,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const MobileDropdown = function({ open, setOpen }) {

  const { t } = useTranslation();

  const home_tab = t('home_tab');
  const about_us_tab = t('about_us_tab');
  const courses_tab = t('courses_tab');
  const testimonials_tab = t('testimonials_tab');
  const contact_us_tab = t('contact_us_tab');

  const tabsInfo = [
    { name: home_tab, href: '/', icon: faHouse },
    { name: about_us_tab, href: '/about-us', icon: faPeopleGroup },
    { name: courses_tab, href: '/courses', icon: faFolderClosed },
    { name: testimonials_tab, href: '/testimonials', icon: faSquareCheck },
    { name: contact_us_tab, href: '/contact', icon: faEnvelope }
  ];

  return (
    <>
      <button
        type='button'
        className='inline-flex justify-center items-center rounded text-lg text-blue-400 active:text-blue-600 focus:outline-none'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Close panel</span>
        <FontAwesomeIcon icon={faBars} className='h-[1.8rem]' aria-hidden='true' />
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-scroll'
          onClose={setOpen}
        >
          <div className='absolute inset-0 overflow-hidden'>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-500'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='absolute inset-0 bg-blue-900 bg-opacity-50 transition-opacity' />
            </Transition.Child>
            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-400'
                enterFrom='-translate-y-full'
                enterTo='translate-y-0'
                leave='transform transition ease-in-out duration-500 sm:duration-400'
                leaveFrom='translate-y-0'
                leaveTo='-translate-y-full'
              >
                <div className='pointer-events-auto w-screen h-fit'>
                  <div className='w-full flex flex-col py-6 bg-gradient-to-bl from-sky-50 to-blue-300 opacity-95 shadow-md shadow-slate-700 backdrop-blur-sm'>
                    <div className='px-6'>
                      <div className='flex items-center justify-between'>
                        <button
                          type='button'
                          className='h-16 flex items-center justify-between ml-[6px] -mt-16 px-4 py-4 border-2 bg-slate-200 shadow-lg shadow-blue-300 rounded-b-lg text-blue-500 active:text-blue-600 focus:outline-none'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <FontAwesomeIcon
                            icon={faAngleUp}
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </button>
                        <img
                          className='w-14 h-auto'
                          src='/images/logo-no-text.png'
                          alt='PMD logo no text'
                        />
                        <div className='w-14' />
                      </div>
                    </div>
                    <div className='relative mt-6 flex-1 px-6'>
                      <div className='flex flex-col justify-center items-center pt-2 pb-4 space-y-3'>
                        {tabsInfo.map((tabInfo) => (
                          <MobileTab
                            key={tabInfo.name}
                            tabInfo={tabInfo}
                            tabIcon={
                              <FontAwesomeIcon
                                icon={tabInfo.icon}
                                className='w-5 h-auto'
                              />
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default MobileDropdown;