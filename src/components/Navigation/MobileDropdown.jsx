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

export default function Example({ open, setOpen, tabsInfo }) {

  return (
    <>
      <button
        type='button'
        className='w-14 h-10 inline-flex justify-center items-center bg-blue-500 rounded text-lg text-blue-50 shadow-md shadow-blue-400 active:bg-blue-600 focus:outline-none active:ring-2 active:ring-slate-300'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Close panel</span>
        <FontAwesomeIcon icon={faBars} className='w-6 h-6' aria-hidden='true' />
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
                  <div className='w-full flex flex-col overflow-y-scroll py-6 bg-gradient-to-bl from-sky-50 to-blue-300 opacity-95 shadow-md shadow-slate-700'>
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
                        <div className='w-6' />
                      </div>
                    </div>
                    <div className='relative mt-6 flex-1 px-6'>
                      <div className='flex flex-col justify-center items-center pt-2 pb-4 space-y-3'>
                        <MobileTab
                          tabInfo={tabsInfo.homepage}
                          tabIcon={
                            <FontAwesomeIcon
                              icon={faHouse}
                              className='w-5 h-auto'
                            />
                          }
                        />
                        <MobileTab
                          tabInfo={tabsInfo.aboutUs}
                          tabIcon={
                            <FontAwesomeIcon
                              icon={faPeopleGroup}
                              className='w-5 h-auto'
                            />
                          }
                        />
                        <MobileTab
                          tabInfo={tabsInfo.courses}
                          tabIcon={
                            <FontAwesomeIcon
                              icon={faFolderClosed}
                              className='w-5 h-auto'
                            />
                          }
                        />
                        <MobileTab
                          tabInfo={tabsInfo.testimonials}
                          tabIcon={
                            <FontAwesomeIcon
                              icon={faSquareCheck}
                              className='w-5 h-auto'
                            />
                          }
                        />
                        <MobileTab
                          tabInfo={tabsInfo.contactUs}
                          tabIcon={
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className='w-5 h-auto'
                            />
                          }
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
