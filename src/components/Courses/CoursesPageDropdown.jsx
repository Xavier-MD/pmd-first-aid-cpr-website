import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CoursesPageDropdown = function () {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-md border border-slate-300 shadow-lg px-4 py-2 bg-white text-lg font-header font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-indigo-500'>
          Select Your Course
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-slate-100 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/standard-first-aid'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Standard First Aid
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/emergency-first-aid'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Emergency First Aid
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/cpr-aed'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  CPR & AED
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/basic-life-support'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Basic Life Support
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/marine-standard-first-aid'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Marine Standard First Aid
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/standard-first-aid-child-care'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Standard First Aid (Child Care)
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/emergency-first-aid-child-care'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Emergency First Aid (Child Care)
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/oxygen-therapy'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Oxygen Therapy
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/courses/airway-management'
                  className={classNames(
                    active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                    'block px-4 py-2 text-lg font-header'
                  )}
                >
                  Airway Management
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default CoursesPageDropdown;
