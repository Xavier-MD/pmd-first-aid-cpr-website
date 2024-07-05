import classNames from 'classnames';

const DesktopTab = function({ tabInfo, moveLeft }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href
          ? 'pointer-events-none'
          : '',
        'group inline-flex flex-col font-header justify-center items-center focus:outline-none'
      )}
    >
      <h2
        className={classNames(
          window.location.pathname === tabInfo.href
            ? 'text-slate-900'
            : 'text-slate-500 hover:text-slate-700 transition ease-in-out group-hover:-translate-y-[0.05rem] group-hover:scale-[110%] duration-200',
          'text-[0.95rem] font-thick'
        )}
      >
        {tabInfo.name}
      </h2>
    </a>
  );
};

export default DesktopTab;
