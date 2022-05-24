import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = function ({
  avatar,
  avatarSourceUrl,
  avatarSourceText,
  message,
  name,
  title,
  company,
  rating
}) {
  const identityFormatter = function (title, company) {
    if (title && company) {
      return `${title}, ${company}`;
    } else {
      return;
    }
  };

  const ratingTextFormatter = function (rating) {
    if (rating) {
      return `${rating}/5`;
    }
  };

  const ratingIconFormatter = function (rating) {
    if (rating) {
      return [...Array(rating)].map((e, i) => (
        <FontAwesomeIcon icon={faStar} className='w-10 h-10 text-yellow-300' />
      ));
    }
  };

  return (
    <section>
      <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-20 lg:py-20'>
        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:flex flex-col items-center lg:flex-shrink-0'>
            <img
              className='h-60 w-60 rounded-full xl:h-80 xl:w-80 border-8 border-white border-opacity-25 shadow-2xl shadow-slate-500'
              src={avatar}
              alt='Person avatar'
            />
            <p className='mt-4 text-2xl font-sans font-bold text-slate-800 sm:text-3xl sm:tracking-tight lg:text-4xl'>
              {ratingTextFormatter(rating)}
            </p>
            <div className='mt-2 flex space-x-2'>
              {ratingIconFormatter(rating)}
            </div>
            <a className='mt-4 text-xs' href={avatarSourceUrl}>
              {avatarSourceText}
            </a>
          </div>
          <div className='relative lg:ml-10'>
            <svg
              className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-white opacity-50'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 144 144'
              aria-hidden='true'
            >
              <path
                strokeWidth={2}
                d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
              />
            </svg>
            <blockquote className='relative p-4 rounded-xl bg-blue-100 bg-opacity-80 shadow-xl'>
              <div className='text-2xl leading-9 font-medium text-gray-900'>
                <p>{message}</p>
              </div>
              <footer className='mt-8'>
                <div className='flex'>
                  <div className='flex-shrink-0 lg:hidden'>
                    <img
                      className='h-12 w-12 rounded-full'
                      src={avatar}
                      alt='Person avatar'
                    />
                  </div>
                  <div className='ml-4 lg:ml-0'>
                    <div className='text-base font-medium text-gray-900'>
                      {name}
                    </div>
                    <div className='text-base font-medium text-blue-700'>
                      {identityFormatter(title, company)}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialCard;
