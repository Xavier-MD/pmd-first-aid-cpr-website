import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation, Autoplay } from 'swiper';
import TestimonialCard from './TestimonialCard';
import { useTranslation } from 'react-i18next';

const Carousel = function () {
  const { t } = useTranslation();

  const avatarSourceUrl = 'https://www.vecteezy.com/free-vector/female-avatar';

  return (
    <Swiper
      className='w-[90%] md:w-[80%] xl:w-[70%]  shadow-xl rounded-xl'
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
        delay: 15000,
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
          avatar='/images/female-avatar-8.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message="Je suis tellement reconnaissante d'avoir eu l'opportunité de suivre cette formation. J'ai eu l'occasion d'appliquer ces enseignements ce matin avec ma fille qui a eu une coupure profonde à sa lèvre inférieure. Elle saignait beaucoup et j'ai d'abord refroidi la blessure avec de l'eau du robinet avant d'appliquer un pansement. Si je n'avais pas suivie cette formation, je n'aurais pas su comment il fallait procéder. Je vous dis encore merci."
          name='Adèle Nadège Mbelle Nkelle'
          title='Membre du Personnel'
          company='Centre Francophone du Grand Toronto'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/male-avatar-5.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message="Paul est un instructeur genial, il sait comment garder l'audience en alerte malgre la condensation du cours. L'apprentissage a ete tres agreable et tres enrichissant, malheureusement, il faut attendre 3 ans pour un autre cours 😀. merci!!"
          name='Laurence Makanda'
          title='Membre du Personnel'
          company='Centre Francophone du Grand Toronto'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-1.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message='Ce fut un plaisir de faire le cours avec Paul. Il sait de quoi il parle il a sa façon de te faire intégrer dans le cours et dans le groupe. Bravo Paul et merci encore au plaisir de te voir la prochaine fois continue le beau travail que tu fais . Thé right person at the right place.'
          name='Marie Lacaze'
          title='Membre du Personnel'
          company='Petit Bateau'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-5.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message='Paul is a very passionate and knowledgeable instructor that made the Basic Life Support Course fun and engaging. As a nursing student, I particularly enjoyed how he incorporated quick thinking scenario-based situations. This has allowed me to expand my critical thinking skills and feel more confident in my CPR skills. Overall, I highly recommend Paul as an instructor to anyone who is seeking to get certified in CPR and first-aid!'
          name='Jasmine Kim'
          title='Student'
          company='Centennial College'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-4.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message='Un grand Merciii A Paul pour la journée de formation sa joie de vivre et son professionnalisme on fait de cette journée de formation était un pur bonheur!! Merci pour tout!'
          name='Vicky Gs'
          title='Membre du Personnel'
          company='LPCR'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-2.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message='Vraiment, Mr Paul vous méritez plus je vous remercie sincèrement pour la formation qui a lieu le 22 octobre, vous êtes un bon formateur avec ce travail exceptionnel que vous continuer à nous donner et Dieu vous garde encore plus longtemps.'
          name='Solange Musangilayi ilunga'
          title='Membre du Personnel'
          company='LPCR'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-10.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message='Paul est un excellent dans son domaine. Très professionnel et comique. Une meilleure façon d’apprentissage.'
          name='Fatoumata Barry'
          title='Membre du Personnel'
          company='LPCR'
          rating={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialCard
          avatar='/images/female-avatar-3.png'
          avatarSourceText='Avatar Vectors by Vecteezy'
          avatarSourceUrl={avatarSourceUrl}
          message="Merci pour de formation, c'était une agréable journée d'apprentissage. Bravo."
          name='Kaoutar Elansari'
          title='Membre du Personnel'
          company='Collége Boréal'
          rating={5}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
