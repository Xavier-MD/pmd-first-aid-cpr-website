import classNames from 'classnames';

const MobileTab = function ({ tabInfo, tabIcon }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? ''
          : 'focus:bg-gradient-to-tr from-blue-300 to-slate-200 focus:text-slate-900',
        'h-12 w-full block pl-4 pr-4 py-2 text-lg font-header border-2 rounded-md shadow-md shadow-slate-400 tracking-tight'
      )}
    >
      <div className='flex'>
        <div className='h-6 w-6 mr-3 text-blue-500' aria-hidden='true'>
          {tabIcon}
        </div>
        {tabInfo.name}
      </div>
    </a>
  );
};

export default MobileTab;
