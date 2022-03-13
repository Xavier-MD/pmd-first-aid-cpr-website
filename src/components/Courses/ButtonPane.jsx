import CourseButton from './CourseButton';
import CourseInfo from './CourseInfo';

const courseNames = [
  'Standard First Aid',
  'Emergency First Aid',
  'CPR & AED',
  'Basic Life Support',
  'Marine Basic First Aid',
  'Standard First Aid (Child Care)',
  'Emergency First Aid (Child Care)',
  'Oxygen Therapy',
  'Airway Management',
  'Workshops'
];

const ButtonPane = function ({ course, setCourse }) {
  return (
    <div className='bg-white'>
      <div className='max-w-[1500px] mx-auto py-10 px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-base font-semibold uppercase text-gray-600 tracking-wider'>
          Trusted by health & wellness institutions across the GTA
        </p>
        <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-5 lg:mt-8'>
          {courseNames.map((courseName) => (
            <div
              key={courseName}
              className='col-span-1 flex justify-center py-8 px-8 bg-gray-50'
            >
              <CourseButton courseName={courseName} setCourse={setCourse} />
            </div>
          ))}
        </div>
        <CourseInfo course={course} />
      </div>
    </div>
  );
};

export default ButtonPane;
