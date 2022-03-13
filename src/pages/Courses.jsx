import ButtonPane from '../components/Courses/ButtonPane';

function Courses({ course, setCourse }) {
  return (
    <div className='flex flex-col items-center pt-10'>
      <p className='font-bold text-[3em]'>Our Courses</p>
      <ButtonPane course={course} setCourse={setCourse} />
    </div>
  );
}

export default Courses;
