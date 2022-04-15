/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailSuccess from '../Contact/EmailSuccess';
import EmailFailure from '../Contact/EmailFailure';
import { Dialog, Transition } from '@headlessui/react';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesUp,
  faAngleDown,
  faStar,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';

const ratings = [
  { name: 'rating-1', value: '1' },
  { name: 'rating-2', value: '2' },
  { name: 'rating-3', value: '3' },
  { name: 'rating-4', value: '4' },
  { name: 'rating-5', value: '5' }
];

const TestimonialForm = function ({ open, setOpen }) {
  const form = useRef();
  const [selectedRating, setSelectedRating] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TESTIMONIAL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          alert(<EmailSuccess />);
          console.log(result.text);
        },
        (error) => {
          alert(<EmailFailure />);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <button
        type='button'
        className='font-header font-light w-24 h-10 inline-flex justify-center items-center bg-blue-500 rounded text-xl text-blue-50 shadow-md shadow-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none active:ring-2 active:ring-slate-300'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Close panel</span>
        <FontAwesomeIcon icon={faAnglesUp} className='mr-[6px] h-4' />
        <h2>Create</h2>
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
            <div className='pointer-events-none fixed bottom-0 left-0 flex max-w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-y-full'
                enterTo='-translate-y-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='-translate-y-0'
                leaveTo='translate-y-full'
              >
                <div className='pointer-events-auto w-screen h-fit'>
                  <div className='w-full flex flex-col overflow-y-scroll py-6 bg-gradient-to-bl from-sky-50 to-blue-400 opacity-95 border-t-[3px] border-blue-500 shadow-md shadow-slate-700'>
                    <div className='px-6'>
                      <div className='flex items-center justify-between'>
                        <button
                          type='button'
                          className='h-16 flex items-center justify-between ml-[6px] -mt-[108px] px-4 py-4 border-2 bg-slate-200 shadow-lg shadow-blue-300 rounded-b-lg text-blue-500 active:text-blue-600 focus:outline-none'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </button>
                        <div className='flex items-center mt-6 mb-10'>
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            className='h-6 w-6 mr-4 text-blue-500'
                            aria-hidden='true'
                          />
                          <h2 className='text-slate-800 font-header text-3xl'>
                            New Testimonial
                          </h2>
                          <div className='w-6 ml-4'></div>
                        </div>
                        <div className='w-14' />
                      </div>
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='max-w-[1000px] mx-auto font-body grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                      >
                        <div>
                          <label
                            htmlFor='first-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            First name
                          </label>
                          <div className='mt-1'>
                            <input
                              required
                              type='text'
                              name='first-name'
                              id='first-name'
                              autoComplete='given-name'
                              className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor='last-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Last name
                          </label>
                          <div className='mt-1'>
                            <input
                              required
                              type='text'
                              name='last-name'
                              id='last-name'
                              autoComplete='family-name'
                              className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='company'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Company
                          </label>
                          <div className='mt-1'>
                            <input
                              required
                              type='text'
                              name='company'
                              id='company'
                              autoComplete='company'
                              className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-2 -mb-4'>
                          <RadioGroup
                            value={selectedRating}
                            onChange={setSelectedRating}
                          >
                            <RadioGroup.Label className='block text-sm font-medium text-gray-700'>
                              Rating
                            </RadioGroup.Label>
                            <div className='mt-4 flex items-center space-x-3'>
                              {ratings.map((rating) => (
                                <RadioGroup.Option
                                  key={rating.name}
                                  value={rating.value}
                                  className={({ active, checked }) =>
                                    classNames(
                                      rating.selectedRating,
                                      active && checked
                                        ? 'ring ring-offset-1'
                                        : '',
                                      !active && checked ? 'ring-2' : '',
                                      rating.value <= selectedRating
                                        ? 'text-yellow-300'
                                        : 'text-blue-200',
                                      '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                    )
                                  }
                                >
                                  <RadioGroup.Label as='p' className='sr-only'>
                                    {rating.name}
                                  </RadioGroup.Label>
                                  <FontAwesomeIcon
                                    icon={faStar}
                                    className='w-10 h-10'
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                        <div className='w-0 h-0'>
                          <input
                            type='text'
                            name='rating'
                            id='rating'
                            value={selectedRating}
                            className='w-0 h-0 p-0 border-0'
                          />
                        </div>
                        <div className='sm:col-span-2'>
                          <label
                            htmlFor='message'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Message
                          </label>
                          <div className='mt-1'>
                            <textarea
                              required
                              type='text'
                              id='message'
                              name='message'
                              rows={4}
                              className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md'
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className='sm:col-span-2'>
                          <button
                            type='submit'
                            className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md  text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                          >
                            Send
                          </button>
                        </div>
                      </form>
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
};

export default TestimonialForm;
