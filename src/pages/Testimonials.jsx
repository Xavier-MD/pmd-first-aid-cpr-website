import Carousel from '../components/Testimonials/Carousel';

const Testimonials = function () {
  return (
    <div className='flex flex-col items-center h-[100%]'>
      <Carousel />
      <div className='lg:block mb-4 h-[1px] w-[50%] mt-2 lg:bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
    </div>
  );
};

export default Testimonials;
