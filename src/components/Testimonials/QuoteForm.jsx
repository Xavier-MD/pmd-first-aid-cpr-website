const QuoteForm = function () {
  return (
    <div className='bg-white shadowsm:rounded-lg border-solid'>
      <form action='#' method='POST'>
        <div className='grid grid-cols-6 gap-6'>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='first-name'
              className='block text-sm font-medium text-gray-700'
            >
              First name
            </label>
            <input
              type='text'
              name='first-name'
              id='first-name'
              autoComplete='given-name'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='last-name'
              className='block text-sm font-medium text-gray-700'
            >
              Last name
            </label>
            <input
              type='text'
              name='last-name'
              id='last-name'
              autoComplete='family-name'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            />
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700'
            >
              City
            </label>
            <select
              id='city'
              name='city'
              autoComplete='city-name'
              className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              <option>Toronto</option>
              <option>Mississauga</option>
              <option>Oakville</option>
            </select>
          </div>
          <div className='col-span-6 sm:col-span-3'>
            <label
              htmlFor='organization'
              className='block text-sm font-medium text-gray-700'
            >
              Organization
            </label>
            <input
              type='text'
              name='organization'
              id='organization'
              autoComplete='organization'
              className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
            />
          </div>
          <div className='col-span-6'>
            <label
              htmlFor='testimonial'
              className='block text-sm font-medium text-gray-700'
            >
              Testimonial
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
              defaultValue={''}
            />
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
