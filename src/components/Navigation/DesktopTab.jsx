import classNames from 'classnames';

const DesktopTab = function ({ tabInfo, moveLeft }) {
  return (
    <a href={tabInfo.href} className='group inline-flex flex-col justify-center items-center focus:outline-none'>
      <h2
        className={classNames(
          window.location.pathname === tabInfo.href ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400',
          'text-[0.9rem] font-font4 font-medium transition ease-in-out group-hover:-translate-y-[0.05rem] group-hover:scale-[110%] duration-200'
        )}
      >
        {tabInfo.name}
      </h2>
      <div
        className={classNames(
          window.location.pathname === tabInfo.href
            ? 'bg-blue-400'
            : 'bg-blue-200 transition ease-in-out duration-700 opacity-0 group-hover:opacity-100',
          'w-[1rem] h-[0.09rem] rounded-lg'
        )}
      />
    </a>
  );
};

export default DesktopTab;
