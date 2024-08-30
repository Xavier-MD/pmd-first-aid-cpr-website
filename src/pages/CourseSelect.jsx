import ButtonPane from '../components/Courses/ButtonPane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
    <div className='flex flex-col items-center'>
      <div className='mb-[2rem] flex justify-center items-center'>
        <div className='w-[10rem] h-[0.1rem] bg-gradient-to-r from-transparent to-blue-300' />
        <h2 className='px-[1rem] text-2xl text-slate-600 font-font4 font-light'>{courses_header_2}</h2>
        <div className='w-[10rem] h-[0.1rem] bg-gradient-to-l from-transparent to-blue-300' />
      </div>
      <div className='grid grid-cols-2 gap-8'>
        <div className='px-4 text-left flex flex-col items-start'>
          <h1 className='block mt-4 text-4xl text-blue-500 font-thick font-semibold'>{courses_title_1}</h1>
          <p className='block mt-4 text-2xl text-blue-400'>{courses_subtitle_1}</p>
          <p className='mt-3 text-base text-slate-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>{courses_text_1}</p>
          <p className='block mt-4 text-2xl text-blue-400'>{courses_subtitle_2}</p>
          <ol className='mt-4 ml-10 space-y-2 text-slate-600 sm:text-xl lg:text-lg xl:text-xl'>
            <li className='list-item list-decimal'>{courses_text_2_item_1}</li>
            <li className='list-item list-decimal'>{courses_text_2_item_2}</li>
            <li className='list-item list-decimal'>{courses_text_2_item_3}</li>
            <li className='list-item list-decimal'>{courses_text_2_item_4}</li>
          </ol>
          <a
            href='/contact-us'
            className='mt-4 inline-flex items-center text-white bg-slate-300 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:bg-slate-400 w-fit mb-14'
          >
            <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-blue-500 rounded-full'>
              {courses_redirect_left}
            </span>
            <span className='ml-4 text-sm font-medium text-slate-700'>{courses_redirect_right}</span>
            <FontAwesomeIcon icon={faChevronRight} className='ml-2 w-5 h-5 text-slate-700' aria-hidden='true' />
          </a>
        </div>
        <ButtonPane />
      </div>
    </div>
  );
}

export default CourseSelect;
