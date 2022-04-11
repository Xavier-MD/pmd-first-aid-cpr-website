import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

const Tab = function ({ tabInfo, moveLeft }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href ? 'pointer-events-none' : '',
        'group mt-2 inline-flex flex-col font-header justify-center items-center focus:outline-none'
      )}
    >
      <div className='flex flex-row items-center'>
        <FontAwesomeIcon
          icon={faDiamond}
          className={classNames(
            window.location.pathname === tabInfo.href
              ? 'w-2 mr-[8px] text-slate-800 animate-pulse'
              : 'hidden'
          )}
          aria-hidden='true'
        />
        <h2
          className={classNames(
            window.location.pathname === tabInfo.href
              ? 'text-slate-900'
              : 'text-slate-600 hover:text-slate-900 transition ease-in-out group-hover:-translate-y-[2px] group-hover:scale-[125%] duration-500',
            'text-lg'
          )}
        >
          {tabInfo.name}
        </h2>
      </div>
      <div
        className={classNames(
          window.location.pathname === tabInfo.href
            ? ''
            : 'bg-slate-800 transition ease-in-out group-hover:opacity-100 group-hover:scale-x-[600%] duration-300',
          'w-1/4 opacity-0 h-[1px]'
        )}
      />
    </a>
  );
};

export default Tab;
