import ButtonPane from '../components/Courses/ButtonPane';
import CoursesPageDropdown from '../components/Courses/CoursesPageDropdown';

function Courses({ course, setCourse }) {
  return (
    // <div className='flex flex-col items-center pt-10'>
    //   <ButtonPane course={course} setCourse={setCourse} />
    // </div>
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl bg-white'>
      <div className='px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center'>
        <
        <div className='max-w-xl'>
          <h2 className='text-4xl font-header font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            All Courses
          </h2>
          <p className='mt-5 text-xl text-blue-500'>
            Start building for free, then add a site plan to go live. Account
            plans unlock additional features.
          </p>
        </div>
        <div className='mt-10 w-full max-w-xs lg:mt-0'>
          <label
            htmlFor='currency'
            className='block text-base font-medium text-blue-500'
          >
            Select Your Course
          </label>
          <div className='mt-1.5 relative'>
            <CoursesPageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
