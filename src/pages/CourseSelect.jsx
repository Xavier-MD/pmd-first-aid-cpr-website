import ButtonPane from '../components/Courses/ButtonPane';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

function CourseSelect({ course, setCourse }) {
  const { t } = useTranslation();

  const courses_header_1 = t('courses_header_1');
  const courses_header_2 = t('courses_header_2');
  const courses_title_1 = t('courses_title_1');
  const courses_subtitle_1 = t('courses_subtitle_1');
  const courses_subtitle_2 = t('courses_subtitle_2');

  const courses_text_1 = t('courses_text_1');
  const courses_text_2_item_1 = t('courses_text_2_item_1');
  const courses_text_2_item_2 = t('courses_text_2_item_2');
  const courses_text_2_item_3 = t('courses_text_2_item_3');
  const courses_text_2_item_4 = t('courses_text_2_item_4');

  const courses_redirect_left = t('courses_redirect_left');
  const courses_redirect_right = t('courses_redirect_right');

  return (
    <div className='flex flex-col grow mt-24 bg-gradient-to-t from-blue-200 to-white'>
      <div className='mx-auto pt-10 sm:pt-16 lg:pt-10 lg:pb-14 flex flex-col items-center grow'>
        <h1 className='mt-4 text-4xl tracking-tight text-center font-thick font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl mb-5'>
          <span className='block text-slate-800'>{courses_header_1}</span>
          <span className='block text-blue-500'>{courses_header_2}</span>
        </h1>
        <div className='lg:block mb-10 h-[1px] w-[125%] mt-2 lg:bg-gradient-to-r from-transparent via-blue-400 to-transparent'></div>
        <div className='p-4 xl:p-0 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='mx-auto max-w-lg px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-4 lg:text-left lg:flex lg:items-center rounded-xl lg:border-2 lg:border-blue-400 lg:shadow-xl lg:shadow-blue-400'>
            <div className='h-full flex flex-col items-left justify-center px-4'>
              <h1 className='block mt-4 text-4xl text-blue-500 font-thick font-semibold'>
                {courses_title_1}
              </h1>
              <p className='block mt-4 text-2xl text-blue-400'>
                {courses_subtitle_1}
              </p>
              <p className='mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                {courses_text_1}
              </p>
              <p className='block mt-4 text-2xl text-blue-400'>
                {courses_subtitle_2}
              </p>
              <ol className='mt-4 ml-10 space-y-2 text-slate-600 sm:text-xl lg:text-lg xl:text-xl'>
                <li className='list-item list-decimal'>
                  {courses_text_2_item_1}
                </li>
                <li className='list-item list-decimal'>
                  {courses_text_2_item_2}
                </li>
                <li className='list-item list-decimal'>
                  {courses_text_2_item_3}
                </li>
                <li className='list-item list-decimal'>
                  {courses_text_2_item_4}
                </li>
              </ol>
              <a
                href='/contact-us'
                className='mt-4 inline-flex items-center text-white bg-slate-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-slate-400 w-fit mb-14'
              >
                <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full'>
                  {courses_redirect_left}
                </span>
                <span className='ml-4 text-sm font-medium text-slate-700'>
                  {courses_redirect_right}
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
