import { useTranslation } from 'react-i18next';
import CourseButton from './CourseButton';

const ButtonPane = function() {
  const { t } = useTranslation();

  const courses_title_2 = t('courses_title_2');
  const courses_SFA_name = t('courses_SFA_name');
  const courses_EFA_name = t('courses_EFA_name');
  const courses_CPR_name = t('courses_CPR_name');
  const courses_BLS_name = t('courses_BLS_name');
  const courses_SFACC_name = t('courses_SFACC_name');
  const courses_EFACC_name = t('courses_EFACC_name');
  const courses_MBFA_name = t('courses_MBFA_name');
  const courses_OT_name = t('courses_OT_name');
  const courses_AM_name = t('courses_AM_name');
  const courses_WS_name = t('courses_WS_name');
  
  const courses = [
    {
      name: courses_SFA_name,
      href: '/courses/standard-first-aid'
    },
    {
      name: courses_EFA_name,
      href: '/courses/emergency-first-aid'
    },
    {
      name: courses_CPR_name,
      href: '/courses/cpr-aed'
    },
    {
      name: courses_BLS_name,
      href: '/courses/basic-life-support'
    },
    {
      name: courses_SFACC_name,
      href: '/courses/standard-first-aid-child-care'
    },
    {
      name: courses_EFACC_name,
      href: '/courses/emergency-first-aid-child-care'
    },
    {
      name: courses_MBFA_name,
      href: '/courses/marine-basic-first-aid'
    },
    {
      name: courses_OT_name,
      href: '/courses/oxygen-therapy'
    },
    {
      name: courses_AM_name,
      href: '/courses/airway-management'
    },
    {
      name: courses_WS_name,
      href: '/courses/workshops'
    }
  ];

  return (
    <div className='mt-10'>
      <p className='text-center text-base font-semibold uppercase text-gray-600 tracking-wider mb-6'>
        {courses_title_2}
      </p>
      <div className='max-w-full mb-6'>
        <div className='grid grid-cols-2 gap-0'>
          {courses.map((course) => (
            <div
              key={course.name}
              className='col-span-1 flex justify-center py-3'
            >
              <CourseButton course={course} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonPane;
