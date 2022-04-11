import classNames from "classnames";

const TabButton = function({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href
          ? 'bg-blue-400 text-slate-50 shadow-blue-300 pointer-events-none'
          : 'bg-blue-500 text-slate-50 shadow-blue-400 hover:bg-blue-600',
        'inline-flex py-2 px-4 rounded font-header text-lg shadow-md active:bg-blue-700 transition ease-in-out hover:-translate-y-[1px] hover:scale-110 duration-200'
      )}
    >
      {tabInfo.name}
    </a>
  );
};

export default TabButton;
