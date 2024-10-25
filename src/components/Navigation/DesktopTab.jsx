import classNames from 'classnames';

const DesktopTab = function ({ tabInfo, moveLeft }) {
  return (
    <a href={tabInfo.href} className='group inline-flex flex-col justify-center items-center focus:outline-none'>
      <h2
        className={classNames(
          window.location.pathname === tabInfo.href ? 'text-blue-600' : 'text-slate-600 group-hover:text-blue-500',
          'text-[0.90rem] font-lato transition ease-in-out group-hover:-translate-y-[0.05rem] group-hover:scale-[110%] duration-200'
        )}
      >
        {tabInfo.name}
      </h2>
      
    </a>
  );
};

export default DesktopTab;
