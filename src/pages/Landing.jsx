import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';

import { WordFlipAnimation } from '../components/Landing/WordFlipAnimation';
import StarRating from '../components/Landing/StarRating';
import NavigationBar from '../components/Navigation/NavigationBar';
import Footer from '../components/Navigation/Footer';
import Button from '../components/Shared/Button';
import Container from '../components/Shared/Container';
import CourseCard from '../components/Shared/CourseCard';
import Lifeline from '../components/Shared/Lifeline';
import Reveal from '../components/Shared/Reveal';
import SectionHeading from '../components/Shared/SectionHeading';
import TrustChip from '../components/Shared/TrustChip';
import { riseContainer, riseItem } from '../components/Shared/motionVariants';

const Landing = function () {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const videoRef = useRef(null);

  // React sets the `muted` property but not the HTML attribute, which Chrome's
  // autoplay policy checks at load — so nudge playback imperatively. If the
  // browser still refuses, the poster frame keeps the hero presentable.
  // Reduced-motion users get the still poster instead of a moving background.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    video.muted = true;
    const playAttempt = video.play();
    if (playAttempt && playAttempt.catch) playAttempt.catch(() => {});
  }, [reducedMotion]);

  const pmd_company_slogan_1 = t('pmd_company_slogan_1');
  const pmd_company_slogan_2 = t('pmd_company_slogan_2');
  const pmd_company_slogan_3 = t('pmd_company_slogan_3');
  const pmd_company_slogan_4 = t('pmd_company_slogan_4');
  const pmd_company_slogan_5 = t('pmd_company_slogan_5');
  const pmd_reviews_text = t('pmd_reviews_text');
  const browse_courses_button = t('browse_courses_button');
  const book_course_button = t('book_course_button');
  const pay_online_button = t('pay_online_button');
  const hero_eyebrow = t('hero_eyebrow');
  const view_course_button = t('view_course_button');
  const home_quote_text = t('home_quote_text');
  const home_quote_attribution = t('home_quote_attribution');
  const home_founder_eyebrow = t('home_founder_eyebrow');
  const home_founder_title = t('home_founder_title');
  const home_founder_text = t('home_founder_text');
  const home_founder_image_alt = t('home_founder_image_alt');
  const home_badge_redcross_alt = t('home_badge_redcross_alt');
  const home_badge_wsib_alt = t('home_badge_wsib_alt');
  const about_us_tab = t('about_us_tab');
  const pop_courses_section_title = t('pop_courses_section_title');
  const pop_courses_section_text = t('pop_courses_section_text');
  const contact_redirect_section_title = t('contact_redirect_section_title');
  const contact_redirect_section_text = t('contact_redirect_section_text');
  const contact_redirect_section_button = t('contact_redirect_section_button');
  const authorizations_section_title = t('authorizations_section_title');
  const authorizations_section_text = t('authorizations_section_text');

  const trustChips = [t('trust_chip_1'), t('trust_chip_2'), t('trust_chip_3')];

  const courses = [
    {
      name: t('pop_course_1_title'),
      href: '/courses/intermediate-standard-first-aid',
      imageSrc: '/assets/images/home/sfa-card.jpg',
      description: t('pop_course_1_text')
    },
    {
      name: t('pop_course_2_title'),
      href: '/courses/basic-emergency-first-aid',
      imageSrc: '/assets/images/home/efa-card.jpg',
      description: t('pop_course_2_text')
    },
    {
      name: t('pop_course_3_title'),
      href: '/courses/cpr-aed',
      imageSrc: '/assets/images/home/cpr-card.jpg',
      description: t('pop_course_3_text')
    },
    {
      name: t('pop_course_4_title'),
      href: '/courses/basic-life-support',
      imageSrc: '/assets/images/home/bls-card.jpg',
      description: t('pop_course_4_text')
    }
  ];

  return (
    <div className='w-full bg-white'>
      {/* Cinematic video hero */}
      <header className='relative flex min-h-[88vh] flex-col overflow-hidden bg-[#0A1626]'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster='/assets/images/home/hero-poster.jpg'
          className='absolute inset-0 h-full w-full object-cover'
          style={{ objectPosition: 'center 40%' }}
          aria-hidden='true'
        >
          <source src='/assets/videos/city-background.mp4' type='video/mp4' />
        </video>
        <div
          className='absolute inset-0 bg-gradient-to-b from-[rgba(9,19,33,0.72)] via-[rgba(9,19,33,0.55)] to-[rgba(9,19,33,0.62)]'
          aria-hidden='true'
        />
        {/* Dark translucent nav */}
        <div className='relative z-20 border-b border-white/[0.15] bg-[rgba(10,20,32,0.45)] backdrop-blur-md'>
          <NavigationBar isLandingPage={true} />
        </div>
        {/* Hero content — one orchestrated entrance */}
        <motion.div
          variants={riseContainer}
          initial={reducedMotion ? 'visible' : 'hidden'}
          animate='visible'
          className='relative z-10 mx-auto flex w-full max-w-[880px] flex-1 flex-col items-center justify-center px-6 pb-16 pt-12 text-center'
        >
          <motion.span
            variants={riseItem}
            className='text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#8FE39B]'
          >
            {hero_eyebrow}
          </motion.span>
          <motion.h1 variants={riseItem} className='mt-4 text-4xl leading-[1.15] text-white sm:text-5xl'>
            <span className='block'>{pmd_company_slogan_4}</span>
            <span className='relative block py-1 text-[#BFF0C7]'>
              {reducedMotion ? (
                pmd_company_slogan_1
              ) : (
                <span className='relative inline-flex justify-center'>
                  <WordFlipAnimation
                    words={[pmd_company_slogan_1, pmd_company_slogan_2, pmd_company_slogan_3]}
                    duration={2600}
                  />
                </span>
              )}
            </span>
            <span className='block'>{pmd_company_slogan_5}</span>
          </motion.h1>
          <motion.div variants={riseItem} className='mt-7 flex items-center justify-center gap-3 font-bold text-white'>
            <StarRating />
            <span>100+ {pmd_reviews_text}</span>
          </motion.div>
          <motion.div variants={riseItem} className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Button href='/contact' variant='primary'>
              {book_course_button}
            </Button>
            <Button href='https://buy.stripe.com/28EdR8gwAgqcc7b6SWa7C00' variant='white'>
              {pay_online_button}
            </Button>
            <a href='/courses' className='group font-bold text-[#CFE7FB] transition-colors hover:text-white'>
              {browse_courses_button}{' '}
              <span
                aria-hidden='true'
                className='inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0'
              >
                →
              </span>
            </a>
          </motion.div>
          <motion.div variants={riseItem} className='mt-10 flex flex-wrap justify-center gap-3'>
            {trustChips.map((chip) => (
              <TrustChip key={chip} variant='glass'>
                {chip}
              </TrustChip>
            ))}
          </motion.div>
        </motion.div>
      </header>

      {/* Lifeline — bridge from the dark hero into the light content */}
      <div className='bg-white pt-8'>
        <Container>
          <Lifeline />
        </Container>
      </div>

      {/* Popular courses */}
      <section className='border-b border-brand-sky-deep bg-gradient-to-b from-white to-brand-sky py-20'>
        <Container>
          <SectionHeading title={pop_courses_section_title}>{pop_courses_section_text}</SectionHeading>
          <div className='mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {courses.map((course, index) => (
              <Reveal key={course.href} className='h-full' delay={index * 0.06}>
                <CourseCard
                  href={course.href}
                  image={course.imageSrc}
                  imageAlt=''
                  title={course.name}
                  cta={view_course_button}
                >
                  {course.description}
                </CourseCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial */}
      <section className='bg-gradient-to-b from-brand-sky to-brand-sky-deep py-20'>
        <Container>
          <Reveal className='mx-auto max-w-[720px] text-center'>
            <figure>
              <div aria-hidden='true' className='font-header text-6xl leading-[0.5] text-brand-green'>
                “
              </div>
              <blockquote className='mt-7 font-header text-[1.35rem] leading-relaxed text-brand-ink'>
                {home_quote_text}
              </blockquote>
              <figcaption className='mt-4 font-bold'>{home_quote_attribution}</figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* Founder */}
      <section className='py-20'>
        <Container className='grid items-center gap-12 lg:grid-cols-[5fr_7fr]'>
          <Reveal>
            <div className='flex h-[380px] items-end justify-center overflow-hidden rounded-[20px] border border-brand-line bg-gradient-to-br from-brand-band to-brand-sky'>
              <img src='/assets/images/paul-transparent-picture.png' alt={home_founder_image_alt} className='max-h-[360px] w-auto' />
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow={home_founder_eyebrow} title={home_founder_title}>
              {home_founder_text}
            </SectionHeading>
            <Button href='/about-us' variant='soft' className='mt-7'>
              {about_us_tab}
            </Button>
          </div>
        </Container>
      </section>

      {/* Booking band */}
      <section className='pb-20'>
        <Container>
          <Reveal>
            <div className='animate-drift rounded-[22px] bg-gradient-to-r from-brand-green via-brand-green-deep to-brand-green bg-220% px-8 py-14 text-center motion-reduce:animate-none'>
              <h2 className='text-3xl text-white sm:text-[2.1rem]'>{contact_redirect_section_title}</h2>
              <p className='mt-1 text-lg font-bold text-white'>{contact_redirect_section_text}</p>
              <Button href='/contact' variant='white' className='mt-7'>
                {contact_redirect_section_button}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Authorizations */}
      <section className='pb-20'>
        <Container className='grid items-center gap-10 lg:grid-cols-[7fr_5fr]'>
          <SectionHeading title={authorizations_section_title}>{authorizations_section_text}</SectionHeading>
          <Reveal>
            <div className='flex flex-wrap items-center justify-center gap-7 rounded-[20px] border border-brand-line bg-white px-7 py-8'>
              <img src='/assets/images/red-cross-picture.png' alt={home_badge_redcross_alt} className='h-20 w-auto' />
              <img src='/assets/images/wsib_badge.png' alt={home_badge_wsib_alt} className='h-16 w-auto' />
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
