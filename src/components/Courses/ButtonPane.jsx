import CourseButton from './CourseButton';

const courses = [
  {
    name: 'Standard First Aid',
    href: '/courses/standard-first-aid'
  },
  {
    name: 'Emergency First Aid',
    href: '/courses/emergency-first-aid'
  },
  {
    name: 'CPR & AED',
    href: '/courses/cpr-aed'
  },
  {
    name: 'Basic Life Support',
    href: '/courses/basic-life-support'
  },
  {
    name: 'Standard First Aid Child Care',
    href: '/courses/standard-first-aid-child-care'
  },
  {
    name: 'Emergency First Aid Child Care',
    href: '/courses/emergency-first-aid-child-care'
  },
  {
    name: 'Marine Basic First Aid',
    href: '/courses/marine-basic-first-aid'
  },
  {
    name: 'Oxygen Therapy',
    href: '/courses/oxygen-therapy'
  },
  {
    name: 'Airway Management',
    href: '/courses/airway-management'
  },
  {
    name: 'Workshops',
    href: '/courses/workshops'
  }
];

const ButtonPane = function () {
  return (
    <div className='bg-white mt-11'>
      <p className='text-center text-base font-semibold uppercase text-gray-600 tracking-wider mb-6'>
        Choose Your Course
      </p>
      <div className='max-w-full mb-6'>
        <div className='grid grid-cols-2 gap-0.5'>
          {courses.map((course) => (
            <div
              key={course.name}
              className='col-span-1 flex justify-center py-4'
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
