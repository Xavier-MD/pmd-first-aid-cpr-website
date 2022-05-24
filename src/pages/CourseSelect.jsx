import ButtonPane from '../components/Courses/ButtonPane';
import { ChevronRightIcon } from '@heroicons/react/solid';

function CourseSelect({ course, setCourse }) {
  return (
    <div className='flex flex-col grow mt-24 bg-gradient-to-t from-blue-200 to-white'>
      <div className='mx-auto pt-10 sm:pt-16 lg:pt-10 lg:pb-14 flex flex-col items-center grow'>
        <h1 className='mt-4 text-4xl tracking-tight font-thick font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl mb-5'>
          <span className='block text-slate-800'>View All</span>
          <span className='block text-blue-500'>Courses</span>
        </h1>
        <div className='lg:block mb-10 h-[1px] w-[125%] mt-2 lg:bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
        <div className='p-4 xl:p-0 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='mx-auto max-w-lg px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-4 lg:text-left lg:flex lg:items-center rounded-xl lg:border-2 lg:border-blue-400 lg:shadow-xl lg:shadow-blue-400'>
            <div className='h-full flex flex-col items-left justify-center px-4'>
              <h1 className='block mt-4 text-4xl text-blue-500 font-thick font-semibold'>
                Course Structure
              </h1>
              <p className='block mt-4 text-2xl text-blue-400'>
                What is a blended learning first aid course?
              </p>
              <p className='mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                Blended learning is a combination of in-class, face-to-face
                instruction with online instruction. Typically, theory and
                information are conveyed to participants outside of the
                classroom through an online component. This allows for the
                in-class component to concentrate on skill development and the
                application of theory.
              </p>
              <p className='block mt-4 text-2xl text-blue-400'>
                Benefits of blended learning:
              </p>
              <ol className='mt-4 ml-10 space-y-2 text-slate-600 sm:text-xl lg:text-lg xl:text-xl'>
                <li className='list-item list-decimal'>
                  Better information retention and ease of review
                </li>
                <li className='list-item list-decimal'>
                  Enables students to learn at their own pace
                </li>
                <li className='list-item list-decimal'>
                  Helps to manage systemic inequalities
                </li>
                <li className='list-item list-decimal'>
                  Improves time efficiency Provides flexibility
                </li>
              </ol>
              <p className='mt-4 text-slate-600 sm:text-lg lg:text-md xl:text-lg'>
                Need Help to access your online learning modules contact our
                support team at 1-877-356-3226.
              </p>
              <a
                href='/contact-us'
                className='mt-4 inline-flex items-center text-white bg-slate-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-slate-400 w-fit mb-14'
              >
                <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full'>
                  Ready to Skip Ahead?
                </span>
                <span className='ml-4 text-sm font-medium text-slate-700'>
                  Contact us for booking
                </span>
                <ChevronRightIcon
                  className='ml-2 w-5 h-5 text-slate-700'
                  aria-hidden='true'
                />
              </a>
              <img
                className='rounded-lg mb-4'
                src='/images/group-cpr-picture.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='max-w-lg px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-4 rounded-xl lg:border-2 lg:border-blue-400 lg:shadow-xl lg:shadow-blue-400'>
            <ButtonPane />
          </div>
        </div>
        <div className='lg:block md:mb-0 h-[1px] w-[125%] mt-10 lg:bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
      </div>
    </div>
  );
}

export default CourseSelect;
