import { ChevronLeftIcon } from '@heroicons/react/solid';

const CoursesBreadcrumbs = function () {
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
              All Courses
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default CoursesBreadcrumbs;
