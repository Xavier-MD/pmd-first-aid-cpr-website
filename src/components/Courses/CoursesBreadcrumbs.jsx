import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

const CoursesBreadcrumbs = function() {
  const { t } = useTranslation();
  const course_info_tab_1 = t('course_info_tab_1');

  return (
    <nav className='flex mb-5 -mt-10' aria-label='Breadcrumb'>
      <ol className='flex items-end space-x-4'>
        <li>
          <div className='flex'>
            <ChevronLeftIcon
              className='flex-shrink-0 h-5 w-5 text-slate-400'
              aria-hidden='true'
            />
            <a
              href='/courses'
              className='text-sm font-medium text-slate-500 hover:text-slate-700 ml-1'
              aria-current={'page'}
            >
              {course_info_tab_1}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default CoursesBreadcrumbs;
