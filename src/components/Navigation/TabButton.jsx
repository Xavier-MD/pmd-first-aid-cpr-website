import classNames from "classnames";

const TabButton = function({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className={classNames(
        window.location.pathname === tabInfo.href
          ? 'bg-blue-500 pointer-events-none'
          : 'bg-blue-400 hover:bg-blue-500',
        'inline-flex py-2 px-4 rounded font-header text-[0.95rem] font-thick active:bg-blue-600 transition ease-in-out hover:-translate-y-[1px] hover:scale-110 duration-200 text-slate-50 '
      )}
    >
      {tabInfo.name}
    </a>
  );
};

export default TabButton;
