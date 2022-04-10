import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';

const Tab = function({ tabInfo, moveLeft }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href ? 'cursor-default' : '',
        'group mt-2 inline-flex flex-col font-header justify-center items-center focus:outline-none'
      )}
    >
      <div className='flex flex-row items-center'>
        <FontAwesomeIcon
          icon={faDiamond}
          className={classNames(
            window.location.pathname === tabInfo.href ? '' : 'hidden',
            `w-2 mr-[8px] text-slate-800 animate-pulse transition ease-in-out group-hover:-translate-y-[1px] group-hover:-translate-x-[10px] group-hover:scale-[125%] duration-500`
          )}
          aria-hidden='true'
        />
        <h2
          className={classNames(
            window.location.pathname === tabInfo.href
              ? 'text-slate-900'
              : 'text-slate-600 hover:text-slate-900',
            'text-lg transition ease-in-out group-hover:-translate-y-[2px] group-hover:scale-[125%] duration-500'
          )}
        >
          {tabInfo.name}
        </h2>
      </div>
      <div className='w-1/4 opacity-0 h-[1px] bg-slate-800 transition ease-in-out group-hover:opacity-100 group-hover:scale-x-[600%] duration-300' />
    </a>
  );
};

export default Tab;
