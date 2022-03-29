const CourseButton = function ({ course }) {
  return (
    <a
      href={course.href}
      className='inline-flex items-center py-8 border border-transparent text-xl tracking-tighter font-medium rounded-md text-slate-700 bg-blue-200 hover:bg-blue-300 w-[90%] justify-center font-header shadow-lg shadow-blue-300'
    >
      {course.name}
    </a>
  );
};

export default CourseButton;
