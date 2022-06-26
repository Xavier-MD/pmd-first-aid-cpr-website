import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from '../components/Testimonials/Carousel';
import TestimonialForm from '../components/Testimonials/TestimonialForm';

const Testimonial = function() {
  const { t } = useTranslation();

  const testimonials_header_1 = t('testimonials_header_1');
  const testimonials_title_1 = t('testimonials_title_1');
  const testimonials_text_1 = t('testimonials_text_1');

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex flex-col grow mt-16 bg-gradient-to-t from-blue-200 to-white'>
        <div className='max-w-7xl mx-auto pt-14 pb-2 px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-4xl tracking-tight text-center font-thick font-extrabold mb-2 text-blue-500'>
              {testimonials_header_1}
            </h2>
            <div className='w-full h-auto flex justify-center mb-2'>
              <div className='relative h-[1px] w-2/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
            </div>
            <p className='text-3xl font-thick font-extrabold text-slate-900 sm:tracking-tight'>
              {testimonials_title_1}
            </p>
            <p className='max-w-xl mt-2 mx-auto text-md font-body text-slate-700'>
              {testimonials_text_1}
            </p>
          </div>
        </div>
        <div className='mb-10 text-center'>
          <div className='mt-2'>
            <TestimonialForm open={open} setOpen={setOpen} />
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Testimonial;
