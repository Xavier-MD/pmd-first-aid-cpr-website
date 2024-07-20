import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = function ({ message, name, company, rating }) {
  const identityFormatter = function (company) {
    if (company) {
      return `${company}`;
    } else {
      return;
    }
  };

  const ratingIconFormatter = function (rating) {
    if (rating) {
      return [...Array(rating)].map((e, i) => (
        <FontAwesomeIcon icon={faStar} className='w-[1rem] h-auto text-blue-500' />
      ));
    }
  };

  return (
    <>
      <div className='h-auto max-w-full p-[1.5rem] bg-white bg-opacity-50 rounded-xl shadow-xl ring-1 ring-slate-900/5 text-left'>
        <p className='text-slate-600 text-sm font-font1'>{message}</p>
        <div className='flex-col text-sm text-slate-600'>
          <p className='font-semibold'>{name},</p>
          <p className=''>{identityFormatter(company)}</p>
          <div className=''>{ratingIconFormatter(rating)}</div>
        </div>
      </div>
    </>
  );
};
export default TestimonialCard;
