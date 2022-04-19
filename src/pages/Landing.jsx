import NavigationBar from '../components/Navigation/NavigationBar';
import Footer from '../components/Navigation/Footer';
import {
  ExclamationCircleIcon,
  ExclamationIcon,
  HeartIcon,
  SupportIcon
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Standard First Aid',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ExclamationCircleIcon
  },
  {
    name: 'Emergency First Aid',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ExclamationIcon
  },
  {
    name: 'CPR & AED',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: HeartIcon
  },
  {
    name: 'Basic Life Support',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SupportIcon
  }
];
const metrics = [
  {
    id: 1,
    stat: '10,000 +',
    emphasis: 'People',
    rest: 'have successfully received certifications through PMD.'
  },
  {
    id: 2,
    stat: '20',
    emphasis: 'Years',
    rest: 'of CPR training experience.'
  },
  {
    id: 3,
    stat: '98%',
    emphasis: 'Customer satisfaction',
    rest: 'rates with shining reviews visible on our testimonials page.'
  },
  {
    id: 4,
    stat: '2',
    emphasis: 'Languages',
    rest: 'for a fully bilingual and immersive training experience.'
  }
];

const Landing = function () {
  return (
    <>
      <div className='bg-white mt-44'>
        <main>
          {/* Hero section */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src='/images/group-cpr-picture.jpg'
                    alt='People taking a cpr course'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-200 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-16 lg:px-8 flex flex-col items-center'>
                  <img
                    className='h-40 w-32'
                    src='/images/logo-no-text.png'
                    alt=''
                  />
                  <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>
                      PMD First Aid & CPR
                    </span>
                    <span className='block text-blue-200 text-[50%] font-light mt-2'>
                      Bilingual & Equity Driven
                    </span>
                  </h1>
                  <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                    <a
                      href='/about-us'
                      className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Cloud */}
          <div className='bg-gray-100 w-screen'>
            <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
              <p className='text-center text-sm font-semibold uppercase text-gray-500 tracking-wide'>
                Trusted partner of the Canadian Red Cross
              </p>
              <div className='mt-16 flex justify-center'>
                <img
                  src='https://seeklogo.com/images/C/Canadian_Red_Cross-logo-A82C55883F-seeklogo.com.png'
                  alt='Red Cross'
                />
              </div>
            </div>
          </div>
          {/* Gradient Feature Section */}
          <div className='bg-gradient-to-r from-blue-600 to-blue-400'>
            <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8 flex flex-col items-center'>
              <h2 className='text-3xl font-extrabold text-white tracking-tight'>
                Popular Courses
              </h2>
              <p className='mt-4 max-w-3xl text-lg text-purple-200 text-center'>
                Browse our most highly recommended courses
              </p>
              <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <div>
                      <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                        <feature.icon
                          className='h-6 w-6 text-white'
                          aria-hidden='true'
                        />
                      </span>
                    </div>
                    <div className='mt-6'>
                      <h3 className='text-lg font-medium text-white'>
                        {feature.name}
                      </h3>
                      <p className='mt-2 text-base text-purple-200'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className='relative bg-gray-900'>
            <div className='h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full'>
              <div className='h-full w-full xl:grid xl:grid-cols-2'>
                <div className='h-full xl:relative xl:col-start-2'>
                  <img
                    className='h-full w-full object-cover opacity-25 xl:absolute xl:inset-0'
                    src='https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100'
                    alt='People working on laptops'
                  />
                  <div
                    aria-hidden='true'
                    className='absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r'
                  />
                </div>
              </div>
            </div>
            <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8'>
              <div className='relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24'>
                <p className='mt-3 text-3xl font-extrabold text-white'>
                  How we set you on the path to success
                </p>
                <p className='mt-5 text-lg text-gray-300'>
                  Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                  adipiscing quis in viverra tristique sem. Ornare feugiat
                  viverra eleifend fusce orci in quis amet. Sit in et vitae
                  tortor, massa. Dapibus laoreet amet lacus nibh integer quis.
                  Eu vulputate diam sit tellus quis at.
                </p>
                <div className='mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2'>
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className='block text-2xl font-bold text-white'>
                        {item.stat}
                      </span>
                      <span className='mt-1 block text-base text-gray-300'>
                        <span className='font-medium text-white'>
                          {item.emphasis}
                        </span>{' '}
                        {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Landing;
