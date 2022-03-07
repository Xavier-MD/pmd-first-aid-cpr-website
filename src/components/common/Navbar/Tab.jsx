const Tab = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='text-base font-medium text-white hover:text-indigo-100'
    >
      {tabInfo.name}
    </a>
  );
};

export default Tab;
