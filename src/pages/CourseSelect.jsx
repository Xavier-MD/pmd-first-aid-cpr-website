import CoursesPageDropdown from '../components/Courses/CoursesPageDropdown';
import ButtonPane from '../components/Courses/ButtonPane';
import { ChevronRightIcon } from '@heroicons/react/solid';

function CourseSelect({ course, setCourse }) {
  return (
    <main>
      <div className='pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 flex flex-col items-center'>
        <div className='mx-auto max-w-7xl flex flex-col items-center'>
          <h1 className='mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl mb-5'>
            <span className='block text-slate-800'>View All</span>
            <span className='block text-blue-400'>Courses</span>
          </h1>
          <div className='lg:block mb-10 h-[1px] w-[125%] mt-2 lg:bg-gradient-to-r from-transparent via-blue-300 to-transparent'></div>
          <div className='p-4 xl:p-0 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-4 lg:text-left lg:flex lg:items-center rounded-xl lg:border-2 lg:border-blue-300 lg:shadow-xl lg:shadow-blue-300'>
              <div className='h-full flex flex-col items-left justify-center px-4'>
                <h1 className='block text-4xl text-blue-400 font-header font-semibold'>
                  Course Structure
                </h1>
                <p className='mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mb-8'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat.
                </p>
                <a
                  href='/contact-us'
                  className='inline-flex items-center text-white bg-slate-200 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200 w-fit mb-14'
                >
                  <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-400 rounded-full'>
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
                  className='rounded-md'
                  src='/images/group-cpr-picture.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-4 rounded-xl lg:border-2 lg:border-blue-300 lg:shadow-xl lg:shadow-blue-300'>
              <ButtonPane />
            </div>
          </div>
          <div className='lg:block md:mb-0 h-[1px] w-[125%] mt-10 lg:bg-gradient-to-r from-transparent via-blue-300 to-transparent'></div>
        </div>
      </div>
    </main>
  );
}

export default CourseSelect;
