const TabButton = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75'
    >
      {tabInfo.name}
    </a>
  );
};

export default TabButton;
