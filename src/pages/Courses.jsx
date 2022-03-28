import ButtonPane from '../components/Courses/ButtonPane';

function Courses({ course, setCourse }) {
  return (
    <div className='flex flex-col items-center pt-10'>
      <p className='text-slate-700 font-header font-bold text-[3em] border-b-2 border-slate-200 px-5'>Courses</p>
      <ButtonPane course={course} setCourse={setCourse} />
    </div>
  );
}

export default Courses;
