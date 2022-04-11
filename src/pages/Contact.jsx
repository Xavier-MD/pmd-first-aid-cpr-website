import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailSuccess from '../components/Contact/EmailSuccess';
import EmailFailure from '../components/Contact/EmailFailure';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-regular-svg-icons';

const Contact = function () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
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
    <div className='bg-white mt-20'>
      <main>
        {/* Contact Section */}
        <div className='relative bg-gradient-to-t from-blue-300 to-white'>
          <div className='lg:absolute lg:inset-0'>
            <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <img
                className='-mt-20 sm:-mt-40 md:-mt-60 lg:-mt-0 h-full w-full object-cover lg:absolute lg:h-full'
                src='/images/contact-us-picture.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='lg:relative lg:w-1/2 py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:py-20'>
            <div className='w-full flex flex-col items-center p-8 2xl:px-20 drop-shadow-md'>
              <h2 className='text-3xl text-center font-header font-light sm:text-5xl'>
                <FontAwesomeIcon
                  icon={faComments}
                  className='mr-10 text-blue-500'
                />
                Contact Us
                <FontAwesomeIcon
                  icon={faComments}
                  className='ml-10 opacity-0'
                />
              </h2>
              <p className='mt-4 text-lg text-center font-body text-gray-500 sm:mt-5 sm:mb-10'>
                We’d love to hear from you! Send us a message using the form
                below and include any business inquiries or requests you may
                have.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='w-full font-body grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
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
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Subject
                  </label>
                  <div className='mt-1'>
                    <input
                      required
                      type='text'
                      name='subject'
                      id='subject'
                      autoComplete='subject'
                      className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <div className='mt-1'>
                    <input
                      required
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='py-3 px-4 block w-full  focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Phone Number
                    </label>
                    <span className='ml-2 block text-sm font-medium text-gray-700'>
                      (Optional)
                    </span>
                  </div>
                  <div className='mt-1 relative rounded-md '>
                    <div className='absolute inset-y-0 left-0 flex items-center'>
                      <label htmlFor='country' className='sr-only'>
                        Country
                      </label>
                      <select
                        id='country'
                        name='country'
                        className='h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-blue-500 focus:border-blue-500 rounded-md'
                      >
                        <option>CA</option>
                        <option>US</option>
                        <option>EU</option>
                      </select>
                    </div>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      autoComplete='tel'
                      className='py-3 px-4 block w-full pl-20 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md'
                      placeholder='+1 (555) 987-6543'
                    />
                  </div>
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

        {/* CTA Section */}
        <div className='bg-blue-500'>
          <div className='flex flex-col max-w-md mx-auto text-center py-16 px-4 sm:max-w-2xl sm:py-24 sm:px-6 lg:px-8 space-y-2'>
            <h2 className='text-blue-50 text-3xl font-header font-light sm:text-4xl mb-4'>
              Additional Contact Details
            </h2>
            <span className='text-blue-50 text-lg font-body font-light sm:text-xl'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-4' />
              pmd.firstaidcpr@gmail.com
            </span>
            <span className='text-blue-50 text-lg font-body font-light sm:text-xl'>
              <FontAwesomeIcon icon={faPhone} className='mr-4' />
              (416)-578-4367
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
