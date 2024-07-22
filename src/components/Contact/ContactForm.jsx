import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ContactForm = function () {
  /* Translation Text Variables */
  const { t } = useTranslation();
  const contact_us_input_1 = t('contact_us_input_1');
  const contact_us_input_2 = t('contact_us_input_2');
  const contact_us_input_3 = t('contact_us_input_3');
  const contact_us_input_4 = t('contact_us_input_4');
  const contact_us_input_5 = t('contact_us_input_5');
  const contact_us_input_6 = t('contact_us_input_6');
  const contact_us_button_1 = t('contact_us_button_1');

  /* emailJS Integration */
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  /* Input Field Formatter */
  const contactFormInput = function ({ label, id, type, autoComplete, input, placeholder, required }) {
    let inputField;
    const inputFieldAttributes =
      'w-full bg-sky-100 border-0 rounded-md text-sm text-slate-700 focus:ring-[0.1rem] focus:ring-blue-500 placeholder:text-slate-400 shadow-inner shadow-blue-200';
    switch (input) {
      case 'inputField':
        inputField = (
          <input
            required={required}
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            className={inputFieldAttributes}
          />
        );
        break;
      case 'textArea':
        inputField = <textarea required id={id} name={id} type={type} rows={3} className={inputFieldAttributes} />;
        break;
      default:
        inputField = <div />;
    }
    return (
      <>
        <label htmlFor={id} className=' ml-[0.1rem] text-[0.75rem] font-font4 text-slate-500'>
          {label}
        </label>
        {inputField}
      </>
    );
  };

  return (
    <>
      {/* Contact Form */}
      <div className='z-10 mx-[2rem] px-[2.5rem] pt-[2rem] pb-[1.5rem] rounded-lg bg-white lg:bg-transparent shadow-2xl lg:shadow-none'>
        <form ref={form} onSubmit={sendEmail} className='w-full grid grid-cols-10 gap-x-[1rem] gap-y-[0.5rem]'>
          {/* Contact Form Fields */}
          <div className='col-span-10 lg:col-span-5'>
            {contactFormInput({
              label: contact_us_input_1,
              id: 'first-name',
              type: 'text',
              autoComplete: 'given-name',
              placeholder: 'Jean-Luc',
              input: 'inputField',
              required: true
            })}
          </div>
          <div className='col-span-10 lg:col-span-5'>
            {contactFormInput({
              label: contact_us_input_2,
              id: 'last-name',
              type: 'text',
              autoComplete: 'family-name',
              placeholder: 'Maka',
              input: 'inputField',
              required: true
            })}
          </div>
          <div className='col-span-10 lg:col-span-5'>
            {contactFormInput({
              label: contact_us_input_4,
              id: 'email',
              type: 'email',
              autoComplete: 'email',
              placeholder: 'jm123@gmail.com',
              input: 'inputField',
              required: true
            })}
          </div>
          <div className='col-span-10 lg:col-span-5'>
            {contactFormInput({
              label: contact_us_input_5,
              id: 'phone',
              type: 'text',
              autoComplete: 'tel',
              placeholder: '555-987-6543',
              input: 'inputField',
              required: false
            })}
          </div>
          <div className='col-span-10'>
            {contactFormInput({
              label: contact_us_input_3,
              id: 'subject',
              type: 'text',
              autoComplete: 'subject',
              input: 'inputField',
              required: true
            })}
          </div>
          <div className='col-span-10'>
            {contactFormInput({
              label: contact_us_input_6,
              id: 'message',
              type: 'text',
              input: 'textArea',
              required: true
            })}
          </div>
          {/* Submit Button */}
          <button
            type='submit'
            className='w-fit py-[0.3rem] pl-[0.1rem] pr-[0.5rem] flex items-center bg-transparent text-base font-font4 font-semibold text-blue-500 hover:text-blue-400 focus:text-blue-600'
          >
            {contact_us_button_1} <FontAwesomeIcon icon={faArrowRight} className='ml-[0.5rem]' />
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
