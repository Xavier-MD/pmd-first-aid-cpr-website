const TabButton = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='inline-flex bg-blue-500 py-2 px-4 rounded text-lg font-header text-blue-50 shadow-md shadow-blue-400 hover:bg-blue-600 focus:bg-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 delay-25'
    >
      {tabInfo.name}
    </a>
  );
};

export default TabButton;
