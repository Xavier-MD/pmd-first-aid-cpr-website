import ButtonPane from '../components/Courses/ButtonPane';

function Courses({ course, setCourse }) {
  return (
    <div className='flex flex-col items-center pt-10'>
      <p className='text-slate-50 font-heading font-semibold text-[3em] border-4 border-slate-200 rounded-full px-5 bg-indigo-500'>Our Courses</p>
      <ButtonPane course={course} setCourse={setCourse} />
    </div>
  );
}

export default Courses;
