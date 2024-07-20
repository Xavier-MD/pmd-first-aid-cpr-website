import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TestimonialForm from '../components/Testimonials/TestimonialForm';
import TestimonialGrid from '../components/Testimonials/TestimonialGrid';

const Testimonial = function() {
  /* Translation Text Variables */
  const { t } = useTranslation();
  const testimonials_header_1 = t('testimonials_header_1');
  const testimonials_title_1 = t('testimonials_title_1');

  /* Testimonial Form State Management */
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Testimonial Page */}
      <div className='flex-col items-center text-center'>
        {/* Header Text */}
        <div className='mb-[2rem] flex justify-center items-center'>
          <div className='w-[10rem] h-[0.1rem] bg-gradient-to-r from-transparent to-blue-300' />
          <h2 className='px-[1rem] text-2xl text-slate-600 font-font4 font-light'>{testimonials_header_1}</h2>
          <div className='w-[10rem] h-[0.1rem] bg-gradient-to-l from-transparent to-blue-300' />
        </div>
        {/* <p className='text-xl font-thick font-extrabold text-slate-900 tracking-tight'>{testimonials_title_1}</p> */}
        <TestimonialGrid />
        {/* <TestimonialForm open={open} setOpen={setOpen} /> */}
      </div>
    </>
  );
};

export default Testimonial;
