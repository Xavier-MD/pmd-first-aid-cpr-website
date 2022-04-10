import { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faDiamond,
  faHandHoldingMedical,
  faUserNurse,
  faHeartCircleBolt,
  faKitMedical,
  faFolderClosed
} from '@fortawesome/free-solid-svg-icons';

const popularCourses = [
  {
    name: 'Standard First Aid',
    href: '/courses/standard-first-aid',
    icon: faHandHoldingMedical
  },
  {
    name: 'Emergency First Aid',
    href: '/courses/emergency-first-aid',
    icon: faUserNurse
  },
  {
    name: 'CPR & AED',
    href: '/courses/cpr-aed',
    icon: faHeartCircleBolt
  },
  {
    name: 'Basic Life Support',
    href: '/courses/basic-life-support',
    icon: faKitMedical
  }
];

const callsToAction = [
  { name: 'Browse All Courses', href: '#', icon: faKitMedical },
  { name: 'Book Now', href: '#', icon: faKitMedical }
];

const CoursesDropdown = function ({ setCourse, moveLeft }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              window.location.pathname === '/courses' ? 'mt-2' : 'mt-6',
              'group inline-flex flex-col font-header justify-center items-center focus:outline-none'
            )}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
          >
            <a href='/courses' className='flex flex-col items-center'>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon
                  icon={faDiamond}
                  className={classNames(
                    window.location.pathname === '/courses'
                      ? 'animate-pulse'
                      : 'hidden',
                    `w-2 mr-[8px] text-slate-800 transition ease-in-out group-hover:-translate-y-[1px] group-hover:-translate-x-[10px] group-hover:scale-[125%] duration-500`
                  )}
                  aria-hidden='true'
                />
                <h2
                  className={classNames(
                    window.location.pathname === '/courses'
                      ? 'text-slate-900'
                      : '',
                    isShowing
                      ? 'text-slate-900 -translate-y-[2px] scale-[125%]'
                      : 'text-slate-600 hover:text-slate-900 group-hover:-translate-y-[2px] group-hover:scale-[125%]',
                    'text-lg transition ease-in-out duration-500'
                  )}
                >
                  <span>Courses</span>
                </h2>
              </div>
              <div
                className={classNames(
                  isShowing
                    ? 'opacity-100 scale-x-[600%]'
                    : 'group-hover:opacity-100 group-hover:scale-x-[600%]',
                  `w-1/4 opacity-0 h-[1px] bg-slate-800 transition ease-in-out duration-300`
                )}
              />
              <FontAwesomeIcon
                icon={faAngleDown}
                className={classNames(
                  window.location.pathname === '/courses' ? 'hidden' : '',
                  '',
                  isShowing ? 'opacity-0' : '',
                  `w-3 text-slate-500 transition ease-in-out group-hover:-translate-y-[1px] group-hover:scale-[125%] duration-300`
                )}
                aria-hidden='true'
              />
            </a>
          </Popover.Button>

          <Transition
            as={Fragment}
            show={isShowing}
            onMouseEnter={() => setIsShowing(true)}
            onMouseLeave={() => setIsShowing(false)}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              className={classNames(
                window.location.pathname === '/courses'
                  ? 'hidden'
                  : 'absolute z-10 left-1/2 transform -translate-x-1/2 px-2 w-screen max-w-md sm:px-0'
              )}
            >
              <div className='rounded-lg font-header shadow-lg shadow-blue-300 ring-1 ring-black ring-opacity-5 overflow-hidden mt-3'>
                <div className='relative grid gap-6 bg-gradient-to-bl from-sky-50 to-blue-300 px-5 py-6 sm:gap-8 sm:p-8'>
                  {popularCourses.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-slate-200 transition ease-in-out duration-150 bg-slate-50 shadow-md shadow-slate-500'
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className='flex-shrink-0 h-6 w-6 text-blue-500'
                        aria-hidden='true'
                      />
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          {item.name}
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='px-5 py-5 bg-gradient-to-bl from-blue-300 to-blue-500 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                  <div key={'Browse All Courses'} className='flow-root'>
                    <a
                      href={'/courses'}
                      className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-white hover:bg-blue-500 transition ease-in-out duration-150'
                    >
                      <FontAwesomeIcon
                        icon={faKitMedical}
                        className='flex-shrink-0 h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>{'Browse All Courses'}</span>
                    </a>
                  </div>
                  <div className='w-[1px] h-[24px] bg-blue-200' />
                  <div key={'Browse All Courses'} className='flow-root'>
                    <a
                      href={'/contact-us'}
                      className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-white hover:bg-blue-500 transition ease-in-out duration-150'
                    >
                      <FontAwesomeIcon
                        icon={faKitMedical}
                        className='flex-shrink-0 h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>{'Book Now'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CoursesDropdown;
