import ButtonPane from '../components/Courses/ButtonPane';

function Courses({ course, setCourse }) {
  return (
    <div className='flex flex-col items-center pt-10'>
      <ButtonPane course={course} setCourse={setCourse} />
    </div>
  );
}

export default Courses;
