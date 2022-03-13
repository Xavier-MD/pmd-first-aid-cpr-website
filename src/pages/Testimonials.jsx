import NewQuotePanel from '../components/Testimonials/NewQuotePanel';
import QuoteCard from '../components/Testimonials/QuoteCard';

const Testimonials = function () {
  return (
    <div className='h-[68vh]'>
      <div className='text-center'>
        <h2 className='flex flex-col items-center text-3xl font-bold pt-10 text-[3em] text-gray-900 sm:text-4xl'>
          Testimonials
        </h2>
      </div>
      <div className='mt-20 pl-[9.5%] flex justify-center'>
        <NewQuotePanel />
      </div>
      <div id='indicators-carousel' className='relative' data-carousel='static'>
        <div className='overflow-hidden relative h-64 rounded-lg sm:h-64 lg:h-[600px]'>
          <div
            className='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0'
            data-carousel-item='active'
          >
            <QuoteCard />
          </div>

          <div
            className='duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full'
            data-carousel-item=''
          >
            <QuoteCard />
          </div>

          <div
            className='hidden duration-700 ease-in-out absolute inset-0 transition-all transform'
            data-carousel-item=''
          >
            <QuoteCard />
          </div>

          <div
            className='hidden duration-700 ease-in-out absolute inset-0 transition-all transform'
            data-carousel-item=''
          >
            <QuoteCard />
          </div>

          <div
            className='duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full'
            data-carousel-item=''
          >
            <QuoteCard />
          </div>
        </div>
        <div className='flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2'>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-slate-300 dark:bg-gray-800'
            aria-current='true'
            aria-label='Slide 1'
            data-carousel-slide-to='0'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-slate-300 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 2'
            data-carousel-slide-to='1'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-slate-300 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 3'
            data-carousel-slide-to='2'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-slate-300 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 4'
            data-carousel-slide-to='3'
          ></button>
          <button
            type='button'
            className='w-3 h-3 rounded-full bg-slate-300 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
            aria-current='false'
            aria-label='Slide 5'
            data-carousel-slide-to='4'
          ></button>
        </div>

        <button
          type='button'
          className='flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
          data-carousel-prev=''
        >
          <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 19l-7-7 7-7'
              ></path>
            </svg>
            <span className='hidden'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
          data-carousel-next=''
        >
          <span className='inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 5l7 7-7 7'
              ></path>
            </svg>
            <span className='hidden'>Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
