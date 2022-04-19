const About = function () {
  return (
    <div className='flex flex-col grow bg-white mt-24 pb-20'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20'>
        
        <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none -mb-8'>
          <div className='flex flex-col'>
            <h3 className='font-header font-semibold tracking-tight text-gray-900 text-3xl w-fit'>
              Meet The Founder
            </h3>
            <div className='lg:block mb-8 md:mb-0 h-[1px] w-2/3 mt-2 bg-gradient-to-r from-blue-400'></div>
          </div>
        </div>
        <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
          <div className='relative lg:row-start-1 lg:col-start-2'>
            <svg
              className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-slate-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
              />
            </svg>
            <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
              <figure>
                <div className='aspect-none'>
                  <img
                    className=''
                    src='/images/paul-transparent-picture.png'
                    alt=''
                    width={1184}
                    height={1376}
                  />
                </div>
              </figure>
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='mt-4 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
              <div className='text-lg bg-blue-400 max-w-fit rounded-full flex justify-center px-3'>
                <p className='text-lg text-white font-header my-1'>
                  Paul Martin Demers – (HBPHE, CEP, FAI)
                </p>
              </div>
              <p className='text-slate-600'>
                As the founder of PMD First Aid & CPR Paul has been a Bilingual
                Certified Instructor since 1993 and Teaching Experience
                Supervisor with the Canadian Red Cross. A graduate of Laurentian
                University with an Honours Bachelor of Physical and Health
                Education and is a Certified Exercise Physiologist. Paul also
                has over 11 years of Adult Education knowledge which he uses to
                provide learners with strategies to increase skill retention and
                application.
              </p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                We Specialize In:
              </h3>
              <div className='h-[1px] w-2/3 bg-gradient-to-r from-blue-400 -mt-2'></div>
              <ul className='text-slate-600'>
                <li>High quality bilingual training – French and English</li>
                <li>Flexible scheduling and tailored to the learner</li>
                <li>Red Cross Certification valid for 3 years</li>
                <li>Emphasis on Diversity and inclusion</li>
                <li>Official Red Cross Training Partner</li>
                <li>Blended learning</li>
              </ul>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                Mission
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>
                Community driven and proud to offer First Aid and CPR courses in
                Canada’s official languages - French and English. We meet people
                at their level and excel in providing knowledge and confidence.
              </p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                Vision
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>
                Making First Aid and CPR accessible to all. To inspire learners
                to gain first-hand knowledge and confidence and to be able to
                help others with a compassionate lens.
              </p>
              <h3 className='font-semibold font-header tracking-tight text-gray-900 text-3xl'>
                Values
              </h3>
              <div className='h-[1px] w-1/2 bg-gradient-to-r from-blue-400 -mt-2 -mb-2'></div>
              <p className='text-slate-600'>
                As a key operating principle PMD First Aid and CPR provides a
                safe and welcoming space to learn. We are committed to
                diversity, equity and inclusion in all of our courses while
                building a psychologically safe learning environment.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
