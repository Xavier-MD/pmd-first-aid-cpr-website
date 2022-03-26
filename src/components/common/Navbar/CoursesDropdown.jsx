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
    href: '/courses',
    icon: ExclamationCircleIcon
  },
  {
    name: 'Emergency First Aid',
    href: '/courses',
    icon: ExclamationIcon
  },
  {
    name: 'CPR & AED',
    href: '/courses',
    icon: HeartIcon
  },
  {
    name: 'Basic Life Support',
    href: '/courses',
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
                ? 'border-blue-400 text-gray-900'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              'group inline-flex font-header items-center border-b-2 text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 delay-25'
            )}
          >
            <span>Courses</span>
            <ChevronDownIcon
              className={classNames(
                window.location.pathname === '/courses'
                  ? 'text-gray-900'
                  : 'text-gray-500 group-hover:text-gray-700',
                'h-5 w-5 ml-1 -mr-1 transition ease-in-out duration-150'
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
            <Popover.Panel className='absolute z-10 left-1/2 lg:left-80 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 lg:max-w-xl'>
              <div className='rounded-lg shadow-lg overflow-hidden'>
                <div className='pl-5 sm:px-8 sm:pt-6 bg-white w-full'>
                  <div className='border-b pb-4'>
                    <p className='text-xl font-medium'>Popular Courses</p>
                  </div>
                </div>
                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150'
                    >
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className='p-5 bg-gray-50 sm:p-8'>
                  <a
                    href='/courses'
                    className='-m-3 p-3 flow-root rounded-md hover:bg-gray-100 transition ease-in-out duration-150'
                  >
                    <div className='flex items-center'>
                      <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                        <ViewGridIcon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <p className='c-all-courses ml-4 text-lg font-medium text-gray-900'>
                        All Courses
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
