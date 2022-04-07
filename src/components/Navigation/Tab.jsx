import classNames from "classnames";
  
const Tab = function({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'border-blue-400 text-gray-900 font-semibold cursor-default'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 delay-25',
        'px-4 inline-flex font-header items-center border-b-[2px] tracking-tighter text-xl'
      )}
    >
      {tabInfo.name}
    </a>
  );
};

export default Tab;
