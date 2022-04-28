const courses = [
  {
    name: 'Standard First Aid',
    href: '/courses/standard-first-aid',
    imageSrc: '/images/standard-first-aid-picture.jpg',
    imageAlt: 'SFA Picture',
    description:
      'A comprehensive two-day course offering first aid and cardiopulmonary resuscitation (CPR) skills for those who need training due to work requirements or who want more knowledge to respond to emergencies at home...'
  },
  {
    name: 'Emergency First Aid',
    href: '/courses/emergency-first-aid',
    imageSrc: '/images/emergency-first-aid-picture.jpg',
    imageAlt: 'EFA Picture',
    description:
      'A basic one-day course offering lifesaving first aid and cardiopulmonary resuscitation (CPR) skills for the workplace or home...'
  },
  {
    name: 'CPR & AED',
    href: '/courses/cpr-aed',
    imageSrc: '/images/cpr-aed-picture.jpg',
    imageAlt: 'CPR AED Picture',
    description:
      'Courses on cardiopulmonary resuscitation (CPR) provide the skills needed to recognize and respond to cardiovascular emergencies and choking for adults, children, and babies depending on the level of CPR chosen...'
  },
  {
    name: 'Basic Life Support',
    href: '/courses/basic-life-support',
    imageSrc: '/images/bls-picture.jpg',
    imageAlt: 'BLS Picture',
    description:
      'Designed to build participant confidence in performing cardiopulmonary resuscitation (CPR) skills in a team environment for professionals with a duty to respond...'
  }
];

const Landing = function () {
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
            PMD First Aid & CPR
          </h1>
          <p className='mt-4 text-3xl text-white font-header font-light'>
            Bilingual — Accessible — Equitable
          </p>
          <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <a
                href='/courses'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-lg font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-xl md:px-10'
              >
                Browse courses
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href='/contact-us'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent font-header text-base font-medium rounded-md text-blue-500 bg-white hover:bg-blue-100 md:py-4 md:text-xl md:px-10'
              >
                Book now
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
            Popular Courses
          </h2>
          <p className='mt-4 text-base text-gray-500'>
            Our clients spoke and we listened. Here are their favourite courses
            of 2022.
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
                  Know what you're looking for?
                </h2>
                <p className='mt-3 text-xl text-white'>Book with us today!</p>
                <a
                  href='/contact-us'
                  className='mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto'
                >
                  Contact for booking
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
                Authorizations
              </span>
            </div>
          </div>
          <p className='max-w-xl mx-auto text-center mt-10 mb-14'>
            PMD First Aid & CPR is a proud and authorized First Aid/CPR training
            partner of the Canadian Red Cross. Through this partnership, PMD is
            fully recognized by the WSIB under the red cross.
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
                className='w-64'
                src='/images/wsib-picture.png'
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
