const CourseButton = function ({ course }) {
  return (
    <a
      href={course.href}
      className='uppercase inline-flex font-thick text-center items-center py-6 text-lg rounded-2xl text-slate-700 bg-slate-200 hover:bg-blue-200 hover:font-semibold border-4 border-blue-300 w-[90%] justify-center shadow-md shadow-blue-400 tracking-wide transition ease-in-out duration-100 hover:scale-110 hover:border-blue-400'
    >
      {course.name}
    </a>
  );
};

export default CourseButton;
