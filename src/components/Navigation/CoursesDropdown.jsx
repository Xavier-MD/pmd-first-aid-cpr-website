import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import {
  ExclamationCircleIcon,
  ExclamationIcon,
  HeartIcon,
  SupportIcon,
  ViewGridIcon
} from '@heroicons/react/outline';
import classNames from 'classnames';

const solutions = [
  {
    name: 'Standard First Aid',
    href: '/courses/standard-first-aid',
    icon: ExclamationCircleIcon
  },
  {
    name: 'Emergency First Aid',
    href: '/courses/emergency-first-aid',
    icon: ExclamationIcon
  },
  {
    name: 'CPR & AED',
    href: '/courses/cpr-aed',
    icon: HeartIcon
  },
  {
    name: 'Basic Life Support',
    href: '/courses/basic-life-support',
    icon: SupportIcon
  }
];

const CoursesDropdown = function ({ setCourse }) {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              window.location.pathname === '/courses'
                ? 'border-blue-400 hover:border-blue-500 text-gray-900 font-semibold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 pt-2 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 delay-25 focus:outline-none',
              'group inline-flex px-3 py-1 font-header items-center border-b-2 tracking-tighter text-xl'
            )}
          >
            <span>Courses</span>
            <ChevronDownIcon
              className={classNames(
                window.location.pathname === '/courses'
                  ? 'text-gray-900'
                  : 'text-gray-500 group-hover:text-gray-700',
                'h-5 w-5 ml-1 mt-[0.15rem] -mr-1 transition ease-in-out duration-150'
              )}
              aria-hidden='true'
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 w-screen max-w-md bg-gradient-to-b from-white to-blue-200 rounded-xl outline outline-1 outline-slate-300 shadow-lg'>
              <div className='rounded-lg shadow-lg overflow-hidden'>
                <div className='pl-5 sm:px-8 sm:pt-6 w-full'>
                  <div className='border-b pb-4 border-slate-300'>
                    <p className='text-slate-700 text-2xl font-semibold font-header text-center'>
                      Popular Courses
                    </p>
                  </div>
                </div>
                <div className='relative grid gap-8 p-8'>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex rounded-md shadow-md shadow-slate-400 hover:bg-slate-50 transition ease-in-out duration-150 outline outline-1 outline-slate-300'
                    >
                      <div className='flex flex-col items-center w-full'>
                        <div className='flex-shrink-0 flex items-center justify-center rounded-md bg-blue-400 text-slate-200 h-12 w-12 mb-2'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <p className='text-xl font-semibold text-gray-900 font-header'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='flex justify-center mx-5 mb-8 pt-8 border-t border-slate-300'>
                  <a
                    href='/courses'
                    className='w-full -m-3 p-3 flow-root rounded-md shadow-md shadow-slate-400 hover:bg-slate-50 transition ease-in-out duration-150 outline outline-1 outline-slate-300'
                  >
                    <div className='flex flex-col items-center'>
                      <div className='flex-shrink-0 flex items-center justify-center rounded-md bg-blue-400 text-slate-200 h-12 w-12 mb-2'>
                        <ViewGridIcon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <p className='text-xl font-semibold text-gray-900 font-header'>
                        View All Courses
                      </p>
                    </div>
                  </a>
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
