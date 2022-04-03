const TestimonialCard = function() {
  return (
    <section>
      <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-20 lg:py-20'>
        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <img
              className='h-64 w-64 rounded-full xl:h-80 xl:w-80 border-8 border-white border-opacity-25 shadow-2xl shadow-slate-500'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.
                </p>
              </div>
              <footer className='mt-8'>
                <div className='flex'>
                  <div className='flex-shrink-0 lg:hidden'>
                    <img
                      className='h-12 w-12 rounded-full'
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </div>
                  <div className='ml-4 lg:ml-0'>
                    <div className='text-base font-medium text-gray-900'>
                      Judith Black
                    </div>
                    <div className='text-base font-medium text-blue-700'>
                      CEO, Tuple
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
}
export default TestimonialCard;

{
  /* <div className='flex items-center justify-center text-9xl h-64 w-64 rounded-full xl:h-80 xl:w-80 border-4 border-slate-900 border-opacity-50 shadow-2xl shadow-slate-500'>
  <div className='flex'>
    <p className='pl-10 text-9xl text-slate-900 text-opacity-90'>5</p>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-24 w-24 text-slate-900 opacity-90'
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
    </svg>
  </div>
</div>; */
}