import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper';
import TestimonialCard from './TestimonialCard';

const Carousel = function () {
  return (
    <Swiper
      className='w-[90%] max-w-[75rem] h-[100%]  shadow-2xl rounded-xl '
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#000'
      }}
      speed={1000}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      parallax={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false
      }}
    >
      <div
        slot='container-start'
        className='absolute left-0 top-0 w-[130%] h-[100%]'
        style={{
          'background-image': 'url(/images/testimonials-picture.jpg)',
          '-webkit-background-size': 'cover',
          'background-size': 'cover',
          'background-position': 'center'
        }}
        data-swiper-parallax='-23%'
      ></div>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
