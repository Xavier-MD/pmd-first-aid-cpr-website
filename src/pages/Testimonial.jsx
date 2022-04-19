import { useState } from 'react';
import Carousel from '../components/Testimonials/Carousel';
import TestimonialForm from '../components/Testimonials/TestimonialForm';

const Testimonial = function () {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col grow mt-24 bg-gradient-to-t from-blue-200 to-white'>
      <div className='max-w-7xl mx-auto pt-16 pb-7 px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='font-thick font-semibold text-lg text-sky-600 tracking-wide uppercase'>
            Testimonials
          </h2>
          <p className='mt-1 text-4xl font-thick font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Tell us what you thought.
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl font-body text-slate-700'>
            Your feedback gives us the unique opportunity to further enhance our
            courses in their content and delivery. Here, you can see some of the
            feeback we have received from our clients.
          </p>
        </div>
      </div>
      <div className='w-full h-auto flex justify-center'>
        <div className='relative mb-10 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
      </div>
      <Carousel />
      <div className='mt-12 mb-10 text-center'>
        <h3 className='my-2 font-thick font-bold text-2xl text-slate-900'>
          Want to be featured on this page?
        </h3>
        <p className='mt-2 font- text-xl text-slate-700'>
          Send us a testimonial today!
        </p>
        <div className='m-4'>
          <TestimonialForm open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
