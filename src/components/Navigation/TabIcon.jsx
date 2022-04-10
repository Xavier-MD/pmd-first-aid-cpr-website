import { MailIcon } from "@heroicons/react/outline";

const TabIcon = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='inline-flex bg-blue-500 py-2 px-4 rounded text-lg text-blue-50 shadow-md shadow-blue-400 hover:text-slate-300 hover:bg-blue-600 active:outline-none active:ring-2 active:ring-slate-300 active:bg-blue-700'
    >
      <MailIcon className='block h-6 w-6' aria-hidden='true' />
    </a>
  );
};

export default TabIcon;
