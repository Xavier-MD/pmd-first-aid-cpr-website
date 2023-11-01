import classNames from 'classnames';

const Tab = function({ tabInfo, moveLeft }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href
          ? 'pointer-events-none border-b-2 border-blue-300'
          : 'border-blue-100',
        'group inline-flex flex-col font-header justify-center items-center focus:outline-none hover:border-b-2'
      )}
    >
      <h2
        className={classNames(
          window.location.pathname === tabInfo.href
            ? 'text-slate-900'
            : 'text-slate-500 hover:text-slate-700 transition ease-in-out group-hover:-translate-y-[2px] group-hover:scale-[125%] duration-500',
          'inline-flex items-center px-1 pt-1 text-[0.95rem] font-thick'
        )}
      >
        {tabInfo.name}
      </h2>
    </a>
  );
};

export default Tab;
