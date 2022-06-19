import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper';
import TestimonialCard from './TestimonialCard';
import { useTranslation } from 'react-i18next';

const Carousel = function () {
  const { t } = useTranslation();

  const testimonials_sample_text_1 = t('testimonials_sample_text_1');
  const testimonials_sample_name_1 = t('testimonials_sample_name_1');

  return (
    <Swiper
      className='w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] shadow-xl rounded-xl'
      style={{
        '--swiper-navigation-color': '#000',
        '--swiper-pagination-color': '#000'
      }}
      speed={1500}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      parallax={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false
      }}
    >
      <div
        slot='container-start'
        className='absolute left-0 top-0 w-[130%] h-[100%]'
        style={{
          backgroundImage: 'url(/images/testimonials-picture.jpg)',
          WebkitBackgroundSize: 'cover',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-swiper-parallax='-23%'
      />
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-1.jpg'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl='https://www.vecteezy.com/free-vector/female-avatar'
          message='Paul is a very passionate and knowledgeable instructor that made the Basic Life Support Course fun and engaging. As a nursing student, I particularly enjoyed how he incorporated quick thinking scenario-based situations. This has allowed me to expand my critical thinking skills and feel more confident in my CPR skills. Overall, I highly recommend Paul as an instructor to anyone who is seeking to get certified in CPR and first-aid!'
          name='Jasmine Kim'
          title='Student'
          company='Centennial College'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-2.jpg'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl='https://www.vecteezy.com/free-vector/female-avatar'
          message={testimonials_sample_text_1}
          name={testimonials_sample_name_1}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
