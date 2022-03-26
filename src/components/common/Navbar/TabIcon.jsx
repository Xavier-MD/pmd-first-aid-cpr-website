import { ChatAlt2Icon } from "@heroicons/react/outline";

const TabIcon = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='inline-flex bg-blue-500 py-2 px-4 rounded text-lg font-header text-blue-50 shadow-md shadow-blue-400 hover:bg-blue-500 focus:bg-blue-600'
    >
      <ChatAlt2Icon className='block h-6 w-6' aria-hidden='true' />
    </a>
  );
};

export default TabIcon;
