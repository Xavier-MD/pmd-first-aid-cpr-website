/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import MobileTab from './MobileTab';

import { XIcon, MenuAlt2Icon } from '@heroicons/react/outline';
import { MenuIcon, HomeIcon, UsersIcon, ClipboardListIcon, CheckIcon, MailIcon } from '@heroicons/react/solid';

export default function Example({ open, setOpen, tabsInfo }) {
  return (
    <>
      <button
        type='button'
        className='inline-flex bg-blue-500 py-2 px-4 rounded text-lg text-blue-50 shadow-md shadow-blue-400 hover:text-slate-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-slate-300'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Close panel</span>
        <MenuIcon className='h-6 w-6' aria-hidden='true' />
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
              leave='ease-in-out duration-500'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='absolute inset-0 bg-blue-900 bg-opacity-50 transition-opacity' />
            </Transition.Child>
            <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='-translate-y-full'
                enterTo='translate-y-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-y-0'
                leaveTo='-translate-y-full'
              >
                <div className='pointer-events-auto w-screen h-fit'>
                  <div className='w-full flex flex-col overflow-y-scroll py-6 bg-gradient-to-b from-blue-300 to-slate-100 opacity-95 shadow-md shadow-slate-700'>
                    <div className='px-6'>
                      <div className='flex items-center justify-between'>
                        <MenuAlt2Icon
                          className='h-6 w-6 text-blue-500'
                          aria-hidden='true'
                        />
                        <div className='flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500'
                            onClick={() => setOpen(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='relative mt-6 flex-1 px-6'>
                      <div className='pt-2 pb-4 space-y-3'>
                        <MobileTab
                          tabInfo={tabsInfo.homepage}
                          tabIcon={<HomeIcon />}
                        />
                        <MobileTab
                          tabInfo={tabsInfo.aboutUs}
                          tabIcon={<UsersIcon />}
                        />
                        <MobileTab
                          tabInfo={tabsInfo.courses}
                          tabIcon={<ClipboardListIcon />}
                        />
                        <MobileTab
                          tabInfo={tabsInfo.testimonials}
                          tabIcon={<CheckIcon />}
                        />
                        <MobileTab
                          tabInfo={tabsInfo.contactUs}
                          tabIcon={<MailIcon />}
                        />
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
