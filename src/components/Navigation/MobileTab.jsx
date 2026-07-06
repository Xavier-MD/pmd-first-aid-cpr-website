import classNames from 'classnames';

const MobileTab = function ({ tabInfo, tabIcon }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'text-brand-green-deep bg-brand-band pointer-events-none'
          : 'text-brand-ink shadow-sm active:bg-brand-sky',
        'h-12 w-full flex justify-start items-center px-6 py-2 text-lg font-body font-bold border border-brand-line rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green'
      )}
    >
      <div className='flex'>
        <div
          className={classNames(
            tabInfo.href === window.location.pathname ? 'text-brand-green' : 'text-brand-blue',
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
