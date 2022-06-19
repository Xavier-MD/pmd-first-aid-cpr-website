import { useTranslation } from 'react-i18next';

const Landing = function () {
  const { t } = useTranslation();

  const pmd_company_name = t('pmd_company_name');
  const pmd_company_slogan = t('pmd_company_slogan');

  const browse_courses_button = t('browse_courses_button');
  const book_course_button = t('book_course_button')

  const pop_courses_section_title = t('pop_courses_section_title');
  const pop_courses_section_text = t('pop_courses_section_text');
  const pop_course_1_title = t('pop_course_1_title');
  const pop_course_2_title = t('pop_course_2_title');
  const pop_course_3_title = t('pop_course_3_title');
  const pop_course_4_title = t('pop_course_4_title');
  const pop_course_1_text = t('pop_course_1_text');
  const pop_course_2_text = t('pop_course_2_text');
  const pop_course_3_text = t('pop_course_3_text');
  const pop_course_4_text = t('pop_course_4_text');

  const contact_redirect_section_title = t('contact_redirect_section_title');
  const contact_redirect_section_text = t('contact_redirect_section_text');
  const contact_redirect_section_button = t('contact_redirect_section_button');

  const authorizations_section_title = t('authorizations_section_title');
  const authorizations_section_text = t('authorizations_section_text');

  const courses = [
    {
      name: pop_course_1_title,
      href: '/courses/standard-first-aid',
      imageSrc: '/images/standard-first-aid-picture.jpg',
      imageAlt: 'SFA Picture',
      description: pop_course_1_text
    },
    {
      name: pop_course_2_title,
      href: '/courses/emergency-first-aid',
      imageSrc: '/images/emergency-first-aid-picture.jpg',
      imageAlt: 'EFA Picture',
      description: pop_course_2_text
    },
    {
      name: pop_course_3_title,
      href: '/courses/cpr-aed',
      imageSrc: '/images/cpr-aed-picture.jpg',
      imageAlt: 'CPR AED Picture',
      description: pop_course_3_text
    },
    {
      name: pop_course_4_title,
      href: '/courses/basic-life-support',
      imageSrc: '/images/bls-picture.jpg',
      imageAlt: 'BLS Picture',
      description: pop_course_4_text
    }
  ];

  return (
    <div className='bg-white'>
      {/* Hero section */}
      <div className='relative bg-gray-900 shadow-lg shadow-slate-500'>
        {/* Decorative image and overlay */}
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
          <img
            src='/images/group-training-picture.jpg'
            alt=''
            className='w-full h-full object-center object-cover blur-sm'
          />
        </div>
        <div
          aria-hidden='true'
          className='absolute inset-0 bg-blue-900 opacity-40'
        />

        <div className='relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0'>
          <img
            src='/images/logo-no-text.png'
            alt=''
            className='w-44 mb-24 h-auto object-center'
          />
          <h1 className='text-4xl font-thick font-bold tracking-tight text-white lg:text-6xl'>
            {pmd_company_name}
          </h1>
          <p className='mt-4 text-3xl text-white font-header font-light'>
            {pmd_company_slogan}
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <a
                href='/courses'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-xl md:px-10'
              >
                {browse_courses_button}
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href='/contact-us'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-100 md:py-4 md:text-xl md:px-10'
              >
                {book_course_button}
              </a>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Collection section */}
        <section
          aria-labelledby='collection-heading'
          className='bg-gradient-to-b from-blue-200 to-white mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8'
        >
          <h2
            id='collection-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            {pop_courses_section_title}
          </h2>
          <p className='mt-4 text-base text-gray-500'>
            {pop_courses_section_text}
          </p>

          <div className='mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-8'>
            {courses.map((collection) => (
              <a
                key={collection.name}
                href={collection.href}
                className='group block'
              >
                <div
                  aria-hidden='true'
                  className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6'
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <h3 className='mt-4 text-base font-semibold text-gray-900'>
                  {collection.name}
                </h3>
                <p className='mt-2 text-sm text-gray-500'>
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby='comfort-heading'
          className=' mx-auto pt-24 pb-10 px-4  sm:px-6 lg:px-8'
        >
          <div className='relative rounded-lg overflow-hidden'>
            <div className='absolute inset-0'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg'
                alt=''
                className='w-full h-full object-center object-cover'
              />
            </div>
            <div className='relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16'>
              <div className='relative max-w-3xl mx-auto flex flex-col items-center text-center'>
                <h2
                  id='comfort-heading'
                  className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl'
                >
                  {contact_redirect_section_title}
                </h2>
                <p className='mt-3 text-xl text-white'>
                  {contact_redirect_section_text}
                </p>
                <a
                  href='/contact-us'
                  className='mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
                >
                  {contact_redirect_section_button}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gradient-to-t from-blue-200 to-white w-full h-fit pt-10'>
          <div className='relative'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'
            >
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center'>
              <span className='px-3 bg-white font-light text-3xl font-header text-gray-700'>
                {authorizations_section_title}
              </span>
            </div>
          </div>
          <p className='max-w-xl mx-auto text-center mt-10 mb-14'>
            {authorizations_section_text}
          </p>
          <div className='max-w-7xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-3 lg:mt-8'>
            <div className='col-span-1 flex justify-center items-center py-8 px-8 border-r-[1px] border-slate-300'>
              <img
                className='w-32 h-fit'
                src='/images/logo-small-text.png'
                alt='PMD Logo'
              />
            </div>
            <div className='col-span-1 flex justify-center items-center py-8 px-8'>
              <img
                className='w-44 h-fit'
                src='/images/red-cross-picture.png'
                alt='Red Cross Logo'
              />
            </div>
            <div className='col-span-1 flex justify-center items-center py-8 px-8 border-l-[1px] border-slate-300'>
              <img
                className='w-44'
                src='/images/wsib-picture.svg'
                alt='WSIB Logo'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Landing;
