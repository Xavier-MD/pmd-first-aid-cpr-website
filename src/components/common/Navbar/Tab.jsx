import classNames from "classnames";
  
const Tab = function({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'border-blue-400 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
        'inline-flex font-header items-center border-b-2 text-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 delay-25'
      )}
    >
      {tabInfo.name}
    </a>
  );
};

export default Tab;
