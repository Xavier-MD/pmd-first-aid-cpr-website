const CourseButton = function({ courseName, setCourse }) {
  
  const handleClick = function() {
    setCourse(courseName);
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className='inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-slate-900 bg-slate-200 hover:bg-slate-300 w-[90%] justify-center'
    >
      {courseName}
    </button>
  );
};

export default CourseButton;
