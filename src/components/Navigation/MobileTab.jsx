import classNames from 'classnames';

const MobileTab = function ({ tabInfo, tabIcon }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'text-slate-500 shadow-inner shadow-slate-400 pointer-events-none'
          : 'shadow-md shadow-slate-400',
        'h-12 w-full flex justify-start items-center px-6 py-2 text-lg font-header border-2 rounded-md active:bg-slate-200 focus:text-slate-900'
      )}
    >
      <div className='flex'>
        <div
          className={classNames(
            tabInfo.href === window.location.pathname ? 'text-blue-400' : 'text-blue-500',
            'mr-4 flex'
          )}
          aria-hidden='true'
        >
          {tabIcon}
        </div>
        {tabInfo.name}
      </div>
    </a>
  );
};

export default MobileTab;
