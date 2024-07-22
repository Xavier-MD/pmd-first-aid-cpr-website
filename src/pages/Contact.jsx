import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/Contact/ContactForm';

const Contact = function () {
  const { t } = useTranslation();

  const contact_us_title_1 = t('contact_us_title_1');
  const contact_us_title_2 = t('contact_us_title_2');
  const contact_us_text_1 = t('contact_us_text_1');

  const ctaSection = function () {
    return (
      <div className='lg:pt-[0.5rem] flex flex-col'>
        <h2 className='text-blue-500 text-xl font-font1'>{contact_us_title_2}</h2>
        <span className='mb-[0.1rem] ml-[0rem] lg:ml-[0.8rem] flex justify-center lg:justify-start items-center text-blue-500 font-font1'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-[0.8rem]' />
          paul@pmdcpr.com
        </span>
        <span className='mb-[2rem] ml-[0rem] lg:ml-[0.8rem] flex justify-center lg:justify-start items-center text-blue-500 font-font1'>
          <FontAwesomeIcon icon={faPhone} className='mr-[0.8rem]' />
          (416)-578-4367
        </span>
      </div>
    );
  };

  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* Left Side Content */}
        <div className='h-full mx-[2rem] flex flex-col justify-center items-center lg:items-start space-y-[1rem] text-center lg:text-left'>
          {/* Header Text */}
          <h2 className='text-4xl text-slate-600 font-thick font-bold'>{contact_us_title_1}</h2>
          <p className='max-w-lg pb-[2rem] lg:pb-[0.5rem] font-sans text-gray-500'>{contact_us_text_1}</p>
          {/* Divider */}
          <div className='w-full h-[0.2rem] hidden lg:block rounded-lg bg-gradient-to-r from-blue-400 to-50%' />
          <div className='hidden lg:flex'>{ctaSection()}</div>
        </div>
        {/* Right Side Content */}
        <div className='w-full h-full pl-[1rem] flex items-center'>
          <ContactForm />
        </div>
        <div className='mt-[4rem] mb-[-1rem] flex lg:hidden justify-center'>{ctaSection()}</div>
      </div>
    </>
  );
};

export default Contact;
